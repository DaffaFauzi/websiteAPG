// Force Refresh - Ardana Assistant API
import { NextResponse } from "next/server";
import { knowledge, KnowledgeItem } from '@/lib/knowledge';

type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type RequestBody = {
  messages?: ChatMessage[];
  message?: string; // Flexible for simple string input
  language?: 'id' | 'en';
};

const getEnv = (key: string) => process.env[key];

const normalizeProvider = (value: string | undefined) => {
  const v = (value ?? '').trim().toLowerCase();
  if (v === 'gemini') return 'gemini';
  return 'openai';
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[\u2019’]/g, "'")
    .replace(/[^a-z0-9\s@.+-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const tokenize = (value: string) => normalizeText(value).split(' ').filter(Boolean);

const levenshtein = (a: string, b: string) => {
  if (a === b) return 0;
  if (!a) return b.length;
  if (!b) return a.length;
  const dp = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) dp[j] = j;
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + cost
      );
      prev = tmp;
    }
  }
  return dp[b.length];
};

const buildOutOfScopeReply = (language: 'id' | 'en') =>
  language === 'en'
    ? "Sorry — I’m focused on helping with information about Ardana Perkasa Group (APG), our services, and our business units. Please ask something related to APG so I can help more precisely."
    : "Maaf — saya difokuskan untuk membantu memberikan informasi seputar APG Group, layanan perusahaan, dan unit bisnis kami. Silakan ajukan pertanyaan terkait APG agar saya dapat membantu dengan lebih tepat.";

const isInScopeQuery = (query: string) => {
  const q = normalizeText(query);
  if (!q) return false;
  const keywords = [
    'apg',
    'ardana',
    'ardana perkasa',
    'holding',
    'group',
    'subsidiaries',
    'anak',
    'perusahaan',
    'bpr',
    'dwp',
    'qjamin',
    'sipbro',
    'caraka',
    'prada',
    'lps',
    'pln',
    'struktur',
    'organisasi',
    'komisaris',
    'direksi',
    'direktur',
    'visi',
    'misi',
    'karir',
    'career',
    'kontak',
    'contact',
    'alamat',
    'email',
    'whatsapp',
    'produk',
    'layanan',
    'services',
    'annual',
    'report',
    'laporan',
    'tata',
    'kelola',
    'governance',
  ];

  for (const kw of keywords) {
    if (q.includes(kw)) return true;
  }

  const tokens = tokenize(query);
  const kwTokens = keywords.flatMap((k) => k.split(' ')).filter(Boolean);
  for (const tok of tokens) {
    if (tok.length < 4) continue;
    for (const kw of kwTokens) {
      if (kw.length < 4) continue;
      if (levenshtein(tok, kw) <= 1) return true;
    }
  }
  return false;
};

/**
 * Simple keyword-based search for RAG context
 */
function searchRelevantKnowledge(query: string): KnowledgeItem[] {
  const q = query.toLowerCase();
  return knowledge
    .map(item => {
      let score = 0;
      // Exact match in title
      if (item.title.toLowerCase().includes(q)) score += 10;
      // Match in keywords
      item.keywords.forEach(kw => {
        if (q.includes(kw.toLowerCase())) score += 5;
      });
      // Content match
      if (item.content.toLowerCase().includes(q)) score += 2;
      return { item, score };
    })
    .filter(res => res.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(res => res.item);
}

/**
 * GET Handler to prevent 405 errors and provide status check
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Ardana Assistant API is running and ready for RAG operations.",
    timestamp: new Date().toISOString()
  });
}

/**
 * POST Handler for AI Chat
 */
export async function POST(req: Request) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  // Support both 'messages' array and single 'message' string
  let userMessages: ChatMessage[] = [];
  if (Array.isArray(body.messages)) {
    userMessages = body.messages;
  } else if (typeof body.message === 'string' && body.message.trim()) {
    userMessages = [{ role: 'user', content: body.message.trim() }];
  }

  if (userMessages.length === 0) {
    return NextResponse.json({ error: 'No messages provided.' }, { status: 400 });
  }

  const language = body.language === 'en' ? 'en' : 'id';
  const assistantName = getEnv('AI_ASSISTANT_NAME') ?? 'Ardana Assistant 🤖';
  const apiKey = getEnv('AI_API_KEY') ?? getEnv('OPENAI_API_KEY');
  const provider = normalizeProvider(getEnv('AI_PROVIDER'));
  const model = getEnv('AI_MODEL') || (provider === 'gemini' ? 'gemini-1.5-flash' : 'gpt-4o-mini');

  // === AI DEBUG LOGS ===
  console.log("=== ARDANA AI ASSISTANT DEBUG ===");
  console.log("STATUS: Validating Environment Configuration...");
  console.log("API KEY EXISTS:", !!apiKey);
  console.log("PROVIDER:", provider);
  console.log("MODEL:", model);
  console.log("ASSISTANT NAME:", assistantName);
  console.log("LANGUAGE:", language);
  console.log("===================================");

  // --- HARD ERROR IF NO API KEY (No Silent Fallback) ---
  if (!apiKey || apiKey === "your_api_key_here") {
    console.error("[Assistant API] ERROR: AI_API_KEY is missing or using placeholder.");
    return NextResponse.json(
      { 
        error: "AI_API_KEY tidak ditemukan. Pastikan file .env.local sudah dibuat, key sudah diisi, dan server sudah direstart (npm run dev)." 
      }, 
      { status: 500 }
    );
  }

  // --- RAG LOGIC ---
  const lastMessage = userMessages[userMessages.length - 1]?.content ?? '';
  const relevantDocs = searchRelevantKnowledge(lastMessage);
  
  console.log(`[Assistant API] RAG Context found: ${relevantDocs.length} docs for query: "${lastMessage}"`);

  if (relevantDocs.length === 0 && !isInScopeQuery(lastMessage)) {
    return NextResponse.json({
      reply: buildOutOfScopeReply(language),
      debug: { hasApiKey: !!apiKey, provider, model, ragDocs: 0, guarded: true }
    });
  }

  const context = relevantDocs.length > 0 
    ? relevantDocs.map(d => `[Source: ${d.title}]\n${d.content}`).join('\n\n')
    : "No specific local context found. Use general knowledge about Ardana Perkasa Group (APG) as a national holding company in Indonesia.";

  const systemPrompt = language === 'en'
    ? [
        `You are ${assistantName} — the official digital assistant for Ardana Perkasa Group (APG).`,
        'CONTEXT FROM WEBSITE:',
        context,
        '',
        'INSTRUCTIONS:',
        '1. Answer accurately based on the context provided above.',
        '2. If the context doesn\'t contain the answer, ask a short clarifying question or direct the user to info@apg.co.id.',
        '3. Keep the tone professional, friendly, and concise. Avoid being overly robotic.',
        '4. Scope: APG holding, subsidiaries, corporate information, services, and official contact.',
        '5. Max 4 short sentences.'
      ].join('\n')
    : [
        `Kamu adalah ${assistantName} — asisten digital resmi dari Ardana Perkasa Group (APG).`,
        'KONTEKS DARI WEBSITE:',
        context,
        '',
        'INSTRUKSI:',
        '1. Jawab dengan akurat berdasarkan konteks di atas.',
        '2. Jika konteks tidak cukup, ajukan 1 pertanyaan klarifikasi singkat atau arahkan ke info@apg.co.id.',
        '3. Gunakan gaya bahasa profesional, ramah, dan ringkas. Jangan terlalu robotik.',
        '4. Scope: APG holding, anak perusahaan, informasi korporat, layanan, dan kontak resmi.',
        '5. Maksimal 4 kalimat singkat.'
      ].join('\n');

  // --- PROVIDER: GEMINI ---
  if (provider === 'gemini') {
    const contents = userMessages
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-10) // Safety limit
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
        maxOutputTokens: 500,
      },
    };

    try {
      const upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!upstream.ok) {
        const errorText = await upstream.text();
        console.error(`[Assistant API] Gemini Error (${upstream.status}):`, errorText);
        throw new Error(`Gemini Provider Error: ${upstream.status}`);
      }

      const data = await upstream.json();
      const parts = data?.candidates?.[0]?.content?.parts;
      const reply =
        Array.isArray(parts)
          ? parts
              .map((p: { text?: unknown }) => (typeof p?.text === 'string' ? p.text : ''))
              .join('')
              .trim()
          : '';
      
      if (reply) return NextResponse.json({ 
        reply,
        debug: { hasApiKey: !!apiKey, provider, model }
      });
      throw new Error("Empty reply from Gemini");

    } catch (err) {
      console.error("[Assistant API] Gemini Fetch Exception:", err);
      return NextResponse.json({ 
        reply: relevantDocs.length > 0 
          ? relevantDocs.map(d => d.content).join("\n\n")
          : buildOutOfScopeReply(language)
      });
    }
  }

  // --- PROVIDER: OPENAI (DEFAULT) ---
  const apiBase = (getEnv('AI_API_BASE') ?? 'https://api.openai.com/v1').replace(/\/$/, '');
  const payload = {
    model,
    messages: [{ role: 'system', content: systemPrompt }, ...userMessages].slice(-15),
    temperature: 0.7,
    max_tokens: 500,
  };

  try {
    const upstream = await fetch(`${apiBase}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      console.error(`[Assistant API] OpenAI Error (${upstream.status}):`, errorText);
      throw new Error(`OpenAI Provider Error: ${upstream.status}`);
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (reply) return NextResponse.json({ 
      reply,
      debug: { hasApiKey: !!apiKey, provider, model }
    });
    throw new Error("Empty reply from OpenAI");

  } catch (err) {
    console.error("[Assistant API] OpenAI Fetch Exception:", err);
    return NextResponse.json({ 
      reply: relevantDocs.length > 0 
        ? relevantDocs.map(d => d.content).join("\n\n")
        : buildOutOfScopeReply(language)
    });
  }
}
