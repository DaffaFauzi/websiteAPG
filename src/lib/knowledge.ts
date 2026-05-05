/**
 * Ardana Perkasa Group (APG) Knowledge Base
 * This file contains the structured textual data used for RAG (Retrieval-Augmented Generation).
 */

export type KnowledgeItem = {
  id: string;
  category: 'general' | 'subsidiaries' | 'structure' | 'career' | 'contact' | 'values';
  title: string;
  content: string;
  keywords: string[];
};

export const knowledge: KnowledgeItem[] = [
  {
    id: 'apg-overview',
    category: 'general',
    title: 'Profil Ardana Perkasa Group (APG)',
    content: `
      Ardana Perkasa Group (APG) adalah holding company (perusahaan induk) berskala nasional di Indonesia. 
      APG membangun ekosistem bisnis lintas sektor dengan standar tata kelola enterprise yang kuat, eksekusi disiplin, dan strategi berkelanjutan. 
      Fokus utama APG adalah mengembangkan ekosistem bisnis di sektor pendukung Lembaga Keuangan, Asuransi, Konsultasi, dan Olahraga.
    `,
    keywords: ['siapa apg', 'apa itu apg', 'profil perusahaan', 'holding company', 'indonesia']
  },
  {
    id: 'apg-vision-mission',
    category: 'values',
    title: 'Visi dan Misi APG',
    content: `
      Visi: Menjadi salah satu perusahaan holding terbesar di Indonesia yang mendukung stabilitas dan pertumbuhan ekonomi melalui layanan usaha yang inovatif, terpercaya, dan bermanfaat untuk shareholder maupun stakeholder.
      Misi:
      1. Membangun keunggulan kompetitif melalui teknologi terkini.
      2. Mendukung stabilitas keuangan dengan produk penjaminan kredibel.
      3. Meningkatkan kepercayaan pelanggan dengan layanan solutif.
      4. Mendukung pertumbuhan anak perusahaan secara berkelanjutan.
      5. Mengutamakan etika dan tata kelola perusahaan yang baik (GCG).
    `,
    keywords: ['visi', 'misi', 'tujuan', 'target', 'gcg']
  },
  {
    id: 'apg-subsidiaries-list',
    category: 'subsidiaries',
    title: 'Daftar Anak Perusahaan APG',
    content: `
      APG menaungi beberapa anak perusahaan strategis:
      1. PT. Buana Perkasa Rajanegara (BPR Bonding): Sektor Keuangan & Penjaminan.
      2. PT. Dwi Kusuma Perkasa (DWP Insurance): Sektor Olahraga & Aktivasi Brand.
      3. PT. Proteksi Perkasa Solutions (Proteksi Plus): Layanan Proteksi & Asuransi.
      4. PT. Pataka Prima Perkasa Consultant: Konsultasi Olahraga & Komunitas.
      5. PT. Perkasa Lintas Nasional Consultant (PLN Consultant): Solusi Korporat & Konsultasi.
      6. PT. Caraka Mulia: Broker Asuransi & Manajemen Risiko.
      7. PT. Qjamin: Penjaminan & Assurance.
      8. PT. Sipbro: Sistem Pendukung Operasional.
      9. PT. Prada Business Consulting: Konsultasi Bisnis & Finansial.
      10. PT. Lembaga Penjaminan Simpanan (LPS) - Konteks Governance.
    `,
    keywords: ['anak perusahaan', 'unit bisnis', 'perusahaan di bawah apg', 'bpr', 'dwp', 'proteksi plus', 'caraka']
  },
  {
    id: 'apg-business-sectors',
    category: 'general',
    title: 'Sektor Bisnis APG',
    content: `
      Ekosistem bisnis APG terbagi menjadi 5 sektor utama:
      - Keuangan (Finance): Layanan finansial terpadu.
      - Asuransi (Insurance): Proteksi aset dan manajemen risiko.
      - Konsultasi (Consulting): Strategi bisnis adaptif dan korporat.
      - Olahraga (Sports): Aktivasi event dan ekosistem olahraga dinamis.
      - Solusi (Solutions): Perangkat operasional dan sistem pendukung cerdas.
    `,
    keywords: ['bidang bisnis', 'sektor', 'apa saja bisnisnya', 'finance', 'sports', 'asuransi']
  },
  {
    id: 'apg-contact-info',
    category: 'contact',
    title: 'Informasi Kontak & Lokasi APG',
    content: `
      Alamat Kantor Pusat: The Mansion Bougenville, Office Tower Fontana, Unit BF 32 B1 & B2, Jl. Trembesi Blok D Pademangan Timur, Kec. Pademangan, Jakarta Utara.
      Telepon: 021 3893 0088
      Email: info@ardanaperkasagroup.id
      Jam Operasional: Senin - Jumat, 09.00 - 17.00 WIB.
    `,
    keywords: ['alamat', 'lokasi', 'kantor', 'nomor telepon', 'email', 'hubungi', 'jakarta utara']
  },
  {
    id: 'apg-career-info',
    category: 'career',
    title: 'Informasi Karir di APG',
    content: `
      Ardana Perkasa Group (APG) menawarkan peluang karir di berbagai industri lintas sektor. 
      Budaya kerja di APG adalah kolaboratif dan inovatif. 
      Lowongan kerja dapat dilihat di halaman Karir website resmi. 
      Kandidat yang berminat dapat melamar secara online atau menghubungi tim HR melalui kontak yang tersedia.
    `,
    keywords: ['kerja', 'lowongan', 'karir', 'job', 'melamar', 'hrd']
  },
  {
    id: 'apg-leadership',
    category: 'structure',
    title: 'Struktur Organisasi & Kepemimpinan',
    content: `
      APG dipimpin oleh jajaran profesional berpengalaman yang berfokus pada tata kelola (governance), strategi, dan eksekusi. 
      Struktur organisasi terdiri dari Dewan Komisaris, Dewan Direksi, dan para Kepala Divisi yang mengorkestrasi sinergi di seluruh anak perusahaan.
    `,
    keywords: ['bos', 'direktur', 'pimpinan', 'komisaris', 'manajemen', 'siapa pemimpin']
  },
  {
    id: 'apg-strategic-pillars',
    category: 'values',
    title: 'Mengapa Memilih Ardana Perkasa Group (Value Pillars)',
    content: `
      APG beroperasi dengan standar tata kelola enterprise melalui 4 pilar strategis:
      1. Strategic Vision: Fokus jangka panjang pada sinergi lintas sektor untuk keunggulan pasar.
      2. Governance Excellence: Standar kepatuhan tertinggi dan manajemen risiko.
      3. Sustainable Growth: Ekspansi terukur yang berpusat pada penciptaan nilai dan ketahanan ekonomi.
      4. Ecosystem Partnership: Aliansi strategis yang memperkuat kapasitas eksekusi nasional.
    `,
    keywords: ['mengapa apg', 'keunggulan', 'pilar', 'value', 'kelebihan', 'standar enterprise']
  }
];
