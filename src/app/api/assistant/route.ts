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
        '2. If the context doesn\'t contain the answer, answer based on general professional knowledge about APG or redirect to info@ardanaperkasagroup.id.',
        '3. Be professional, warm, and concise. Use occasional emojis.',
        '4. Scope: Focus on APG holding, subsidiaries (BPR, DWP, Proteksi Plus, etc.), and corporate information.',
        '5. Max 3-4 sentences.'
      ].join('\n')
    : [
        `Kamu adalah ${assistantName} — asisten digital resmi dari Ardana Perkasa Group (APG).`,
        'KONTEKS DARI WEBSITE:',
        context,
        '',
        'INSTRUKSI:',
        '1. Jawab dengan akurat berdasarkan konteks di atas.',
        '2. Jika konteks tidak cukup, jawab berdasarkan pengetahuan umum profesional tentang APG atau arahkan ke info@ardanaperkasagroup.id.',
        '3. Bersikap profesional, ramah, dan ringkas. Gunakan emoji secukupnya.',
        '4. Scope: Fokus pada APG holding, anak perusahaan (BPR, DWP, Proteksi Plus, dsb), dan informasi korporat.',
        '5. Maksimal 3-4 kalimat.'
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
      const reply = data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text ?? '').join('').trim();
      
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
          : (language === 'en' ? "I'm having trouble connecting to my brain, but APG is a national holding company." : "Maaf, koneksi saya terganggu, tapi APG adalah holding company nasional.")
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
        : (language === 'en' ? "I'm having trouble connecting to my brain, but APG is a national holding company." : "Maaf, koneksi saya terganggu, tapi APG adalah holding company nasional.")
    });
  }
}
