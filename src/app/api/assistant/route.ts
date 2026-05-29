import { NextResponse } from 'next/server';
import { knowledge } from '@/lib/knowledge';

// Simple scope guard to keep the demo focused on APG
// but now more flexible for greetings and common conversational phrases
const isInScopeQuery = (query: string): boolean => {
  const q = query.toLowerCase();
  
  // 1. Allow greetings and basic courtesy
  const greetings = ['hallo', 'halo', 'hi', 'hey', 'hello', 'pagi', 'siang', 'sore', 'malam', 'terima kasih', 'thanks', 'tanya', 'bantu'];
  if (greetings.some(g => q.includes(g))) return true;

  // 2. Keywords check for APG context
  const keywords = [
    'apg', 'ardana', 'perkasa', 'group', 'perusahaan', 'holding', 
    'bisnis', 'sektor', 'anak', 'subsidiari', 'kantor', 'alamat',
    'visi', 'misi', 'kerja', 'karir', 'job', 'direktur', 'pimpinan',
    'manajemen', 'struktur', 'siapa', 'apa', 'bagaimana', 'lokasi',
    'kontak', 'telepon', 'email', 'produk', 'layanan', 'bpr', 'caraka',
    'dwp', 'qjamin', 'sipbro', 'prada', 'lps', 'pln', 'konsultan',
    'asuransi', 'penjaminan', 'olahraga', 'keuangan'
  ];
  
  return keywords.some(k => q.includes(k));
};

const searchRelevantKnowledge = (query: string) => {
  const q = query.toLowerCase();
  return knowledge.filter(item => 
    item.keywords.some(k => q.includes(k)) || 
    item.content.toLowerCase().includes(q)
  );
};

const buildSystemPrompt = (relevantInfo: string) => `
You are Ardana Assistant, a helpful and professional AI representative of Ardana Perkasa Group (APG). 
Your goal is to provide accurate information about APG, its subsidiaries, and its business operations based on the provided context.

Context Information:
${relevantInfo}

Instructions:
1. Be polite, professional, and welcoming.
2. If the user greets you (e.g., "hallo", "hi"), respond warmly and offer to help with information about APG.
3. Use the Context Information to answer questions. 
4. If the question is about APG but the specific answer is not in the context, say you don't have that specific detail but offer related information or suggest contacting the office.
5. If the question is completely unrelated to APG (e.g., general knowledge, other companies), politely explain that you are specialized in APG and offer to help with APG-related queries.
6. Keep answers concise but informative.
7. Use Indonesian (Bahasa Indonesia) as the primary language, but respond in English if the user asks in English.
8. Do not make up information that is not in the context.
`;

const buildOutOfScopeReply = () => {
  return "Maaf, sebagai Ardana Assistant, saya saat ini hanya dibekali informasi spesifik mengenai Ardana Perkasa Group (APG). Saya dapat membantu Anda dengan informasi berikut:\n\n" +
    "• **Profil & Sektor Bisnis**: Mengenai siapa APG dan bidang usahanya.\n" +
    "• **Anak Perusahaan**: Detail mengenai 8 unit bisnis di bawah APG.\n" +
    "• **Visi & Misi**: Nilai-nilai dan tujuan strategis kami.\n" +
    "• **Struktur & Manajemen**: Siapa saja jajaran pimpinan kami.\n" +
    "• **Karir & Kontak**: Informasi lowongan kerja dan cara menghubungi kami.\n\n" +
    "Apakah ada salah satu topik di atas yang ingin Anda tanyakan?";
};

const buildGreetingReply = (query: string) => {
  const q = query.toLowerCase();
  if (q.includes('pagi')) return "Selamat pagi! Saya Ardana Assistant. Ada yang bisa saya bantu mengenai informasi Ardana Perkasa Group (APG)?";
  if (q.includes('siang')) return "Selamat siang! Saya Ardana Assistant. Ada yang bisa saya bantu mengenai informasi Ardana Perkasa Group (APG)?";
  if (q.includes('sore')) return "Selamat sore! Saya Ardana Assistant. Ada yang bisa saya bantu mengenai informasi Ardana Perkasa Group (APG)?";
  if (q.includes('malam')) return "Selamat malam! Saya Ardana Assistant. Ada yang bisa saya bantu mengenai informasi Ardana Perkasa Group (APG)?";
  return "Halo! Saya Ardana Assistant, siap membantu Anda memberikan informasi seputar Ardana Perkasa Group (APG). Apa yang ingin Anda ketahui?";
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1].content;

    // 1. Check for basic greetings first for instant friendly response
    const greetingsOnly = ['hallo', 'halo', 'hi', 'hey', 'hello'];
    if (greetingsOnly.includes(lastUserMessage.toLowerCase().trim())) {
      return NextResponse.json({
        role: 'assistant',
        reply: buildGreetingReply(lastUserMessage)
      });
    }

    // 2. Scope check
    if (!isInScopeQuery(lastUserMessage)) {
      return NextResponse.json({
        role: 'assistant',
        reply: buildOutOfScopeReply()
      });
    }

    // 3. Search Knowledge
    const relevantKnowledge = searchRelevantKnowledge(lastUserMessage);
    const contextString = relevantKnowledge.length > 0 
      ? relevantKnowledge.map(k => `[${k.title}]: ${k.content}`).join('\n\n')
      : "Informasi umum tentang APG sebagai holding company lintas sektor (Keuangan, Asuransi, Konsultasi, Olahraga).";

    // 4. In a real production app, you would call OpenAI/Gemini/Anthropic here.
    // Since this is a standalone demo project, we'll simulate the AI logic
    // by using the relevant knowledge to build a structured response.
    
    let simulatedResponse = "";
    if (relevantKnowledge.length > 0) {
      // Use the most relevant piece of knowledge to build a response
      const primary = relevantKnowledge[0];
      simulatedResponse = primary.content.trim();
      
      // If there are multiple relevant pieces, add a bit more context
      if (relevantKnowledge.length > 1) {
        simulatedResponse += "\n\nSelain itu, saya juga menemukan informasi mengenai " + relevantKnowledge[1].title + ". Apakah Anda ingin tahu lebih lanjut?";
      }
    } else {
      // Fallback for greetings that passed the initial check but aren't specific questions
      simulatedResponse = buildGreetingReply(lastUserMessage);
    }

    // Add a polite closing/offer if it's a specific answer
    if (relevantKnowledge.length > 0 && !simulatedResponse.includes('Apakah Anda ingin tahu')) {
      simulatedResponse += "\n\nApakah ada hal lain yang ingin Anda tanyakan mengenai APG?";
    }

    return NextResponse.json({
      role: 'assistant',
      reply: simulatedResponse
    });

  } catch (error) {
    console.error('Assistant API Error:', error);
    return NextResponse.json(
      { error: 'Gagal memproses permintaan chat.' },
      { status: 500 }
    );
  }
}
