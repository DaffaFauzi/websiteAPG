import { NextResponse } from 'next/server';

type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type RequestBody = {
  messages: ChatMessage[];
  language?: 'id' | 'en';
};

const getEnv = (key: string) => process.env[key];

const normalizeProvider = (value: string | undefined) => {
  const v = (value ?? '').trim().toLowerCase();
  if (v === 'gemini') return 'gemini';
  return 'openai';
};

const buildFallbackReply = (args: {
  language: 'id' | 'en';
  assistantName: string;
  messages: ChatMessage[];
  reason: 'no_key' | 'provider_error' | 'empty';
}) => {
  const lastUser = [...args.messages].reverse().find((m) => m.role === 'user')?.content?.trim() ?? '';
  const text = lastUser.toLowerCase();

  if (args.language === 'en') {
    if (!lastUser) {
      return `Hi! I’m ${args.assistantName}. What would you like to talk about today? 🙂`;
    }

    if (/(^|\s)(hi|hello|hey|hai)\b/.test(text)) {
      return `Hi! I’m ${args.assistantName}. How can I help you today? 🙂`;
    }

    if (/(help|can you help|could you help|assist)/.test(text)) {
      return `Absolutely — tell me what you’re trying to do, and what you’ve tried so far. 🙂`;
    }

    if (args.reason === 'no_key') {
      return `I can still chat, but the full AI service isn’t configured on this server yet. Please set AI_API_KEY to enable full answers. Meanwhile, what topic should we start with (APG, writing, learning, or brainstorming)? 🙂`;
    }

    return `Sorry — I couldn’t reach the AI service just now. Please try again. If you tell me your goal and context, I can still help with a quick plan or draft. 🙂`;
  }

  if (!lastUser) {
    return `Hai! Aku ${args.assistantName}. Mau ngobrolin apa hari ini? 🙂`;
  }

  if (/(^|\s)(hai|halo|hello|hi)\b/.test(text)) {
    return `Halo! Aku ${args.assistantName}. Ada yang bisa aku bantu? 🙂`;
  }

  if (/(bisa bantu|tolong|help|bantuan)/.test(text)) {
    return `Bisa banget 🙂 Ceritain kamu lagi butuh bantuan apa, dan sejauh ini sudah coba apa?`;
  }

  if (args.reason === 'no_key') {
    return `Aku bisa ngobrol, tapi layanan AI penuh belum dikonfigurasi di server ini. Pasang AI_API_KEY dulu biar jawaban lengkap bisa jalan. Sambil itu, kamu mau bahas topik apa dulu (APG, nulis, belajar, atau brainstorming)? 🙂`;
  }

  return `Maaf — aku lagi nggak bisa akses layanan AI sekarang. Coba kirim lagi ya. Kalau kamu jelasin tujuan dan konteksnya, aku bisa bantu bikin langkah-langkah atau draft cepat. 🙂`;
};

export async function POST(req: Request) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const userMessages = Array.isArray(body.messages) ? body.messages : [];
  const language = body.language === 'en' ? 'en' : 'id';
  const assistantName = getEnv('AI_ASSISTANT_NAME') ?? 'Ardana Assistant 🤖';
  const apiKey = getEnv('AI_API_KEY') ?? getEnv('OPENAI_API_KEY');
  const provider = normalizeProvider(getEnv('AI_PROVIDER'));

  if (!apiKey) {
    return NextResponse.json({
      reply: buildFallbackReply({ language, assistantName, messages: userMessages, reason: 'no_key' }),
    });
  }

  const systemPrompt =
    language === 'en'
      ? [
          `You are ${assistantName} — a friendly, helpful AI chat assistant.`,
          'You can answer questions about anything (not just this website), including general knowledge, brainstorming, writing, and learning.',
          'Be concise but warm. Use occasional emojis. Ask a short follow-up question when helpful.',
          'If you are unsure or information may be outdated, say so and provide safe guidance.',
        ].join('\n')
      : [
          `Kamu adalah ${assistantName} — asisten AI yang ramah dan membantu.`,
          'Kamu boleh menjawab pertanyaan apa pun (bukan hanya tentang website ini), termasuk pengetahuan umum, brainstorming, menulis, dan belajar.',
          'Jawab singkat tapi hangat. Pakai emoticon secukupnya. Kalau perlu, tanyakan 1 pertanyaan lanjutan yang singkat.',
          'Kalau kamu tidak yakin atau informasinya bisa berubah, bilang apa adanya dan berikan arahan yang aman.',
        ].join('\n');

  if (provider === 'gemini') {
    const model = getEnv('AI_MODEL') ?? 'gemini-1.5-flash';
    const contents = userMessages
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-30)
      .map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

    const payload = {
      systemInstruction: {
        role: 'system',
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
      },
    };

    let upstream: Response;
    try {
      upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );
    } catch {
      return NextResponse.json({
        reply: buildFallbackReply({
          language,
          assistantName,
          messages: userMessages,
          reason: 'provider_error',
        }),
      });
    }

    if (!upstream.ok) {
      return NextResponse.json({
        reply: buildFallbackReply({
          language,
          assistantName,
          messages: userMessages,
          reason: 'provider_error',
        }),
      });
    }

    const data = (await upstream.json().catch(() => null)) as
      | { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
      | null;

    const reply = data?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('').trim();
    if (!reply) {
      return NextResponse.json({
        reply: buildFallbackReply({ language, assistantName, messages: userMessages, reason: 'empty' }),
      });
    }

    return NextResponse.json({ reply });
  }

  const apiBase = (getEnv('AI_API_BASE') ?? 'https://api.openai.com/v1').replace(/\/$/, '');
  const model = getEnv('AI_MODEL') ?? 'gpt-4o-mini';

  const payload = {
    model,
    messages: [{ role: 'system', content: systemPrompt }, ...userMessages].slice(-30),
    temperature: 0.7,
  };

  let upstream: Response;
  try {
    upstream = await fetch(`${apiBase}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json({
      reply: buildFallbackReply({
        language,
        assistantName,
        messages: userMessages,
        reason: 'provider_error',
      }),
    });
  }

  if (!upstream.ok) {
    return NextResponse.json({
      reply: buildFallbackReply({
        language,
        assistantName,
        messages: userMessages,
        reason: 'provider_error',
      }),
    });
  }

  const data = (await upstream.json().catch(() => null)) as
    | { choices?: Array<{ message?: { content?: string } }> }
    | null;

  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    return NextResponse.json({
      reply: buildFallbackReply({ language, assistantName, messages: userMessages, reason: 'empty' }),
    });
  }

  return NextResponse.json({ reply });
}
