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
      Ardana Perkasa Group (APG) adalah holding company (perusahaan induk) berskala nasional di Indonesia yang berkomitmen untuk mendorong stabilitas dan pertumbuhan ekonomi melalui solusi bisnis yang inovatif, terpercaya, dan bermanfaat bagi pemegang saham dan pemangku kepentingan.
      APG membangun ekosistem bisnis lintas sektor dengan standar tata kelola enterprise yang kuat, eksekusi disiplin, dan strategi berkelanjutan. 
      Fokus utama APG adalah mengembangkan ekosistem bisnis di sektor pendukung Lembaga Keuangan, Asuransi, Konsultasi, dan Olahraga.
      Kantor pusat APG berlokasi di Office Tower Fontana, The Mansion Bougenville, Jakarta Utara.
    `,
    keywords: ['siapa apg', 'apa itu apg', 'profil perusahaan', 'holding company', 'indonesia', 'tentang kami']
  },
  {
    id: 'apg-vision-mission',
    category: 'values',
    title: 'Visi dan Misi APG',
    content: `
      Visi: Menjadi salah satu perusahaan holding terbesar di Indonesia yang mendukung stabilitas dan pertumbuhan ekonomi melalui layanan usaha yang inovatif, terpercaya, dan bermanfaat untuk shareholder maupun stakeholder.
      Misi:
      1. Membangun keunggulan kompetitif: Mengembangkan portofolio yang fokus pada solusi dengan teknologi terkini dan layanan unggul.
      2. Mendukung stabilitas keuangan: Berkontribusi pada ekosistem ekonomi yang stabil dengan menyediakan produk penjaminan yang kredibel, transparan, dan sesuai regulasi.
      3. Meningkatkan kepercayaan pelanggan: Menciptakan nilai tambah dengan menyediakan layanan yang akurat, cepat, dan berorientasi pada solusi.
      4. Mendukung pertumbuhan anak perusahaan: Memberikan dukungan strategis, finansial, dan manajemen kepada anak perusahaan untuk mencapai pertumbuhan berkelanjutan.
      5. Mengutamakan etika dan kepatuhan: Menjalankan bisnis dengan prinsip Good Corporate Governance (GCG).
    `,
    keywords: ['visi', 'misi', 'tujuan', 'target', 'gcg', 'etika', 'kepatuhan']
  },
  {
    id: 'apg-subsidiaries-detailed',
    category: 'subsidiaries',
    title: 'Daftar Lengkap Anak Perusahaan APG',
    content: `
      Ardana Perkasa Group menaungi 8 anak perusahaan strategis:
      1. PT. Buana Perkasa Rajanegara (BPR Bonding): Sektor Keuangan, menyediakan layanan Bank Garansi dan Surety Bond dengan standar tata kelola disiplin.
      2. Caraka Mulia: Pialang dan Konsultan Asuransi yang fokus pada solusi proteksi dan manajemen risiko.
      3. PT. Dwi Kusuma Perkasa (DWP Insurance): Fokus pada solusi penjaminan dan perlindungan risiko untuk institusi dan bisnis.
      4. SIP BRO: Menghadirkan sistem informasi penjaminan terintegrasi untuk akurasi dan monitoring layanan.
      5. PT. Khalifah Jamin Perkasa (Qjamin): Penjaminan berbasis digital untuk transparansi dan percepatan layanan end-to-end.
      6. Prada Badminton Club: Wadah pembinaan atlet dan pengembangan ekosistem olahraga dengan standar profesional.
      7. LPS Insurance Consultant: Memperkuat pengelolaan risiko melalui konsultasi, standardisasi kontrol, dan pendampingan kepatuhan.
      8. PT. Perkasa Lintas Nasional (PLN Consultant): Menyediakan layanan konsultasi dan pendampingan operasional untuk eksekusi portofolio.
    `,
    keywords: ['anak perusahaan', 'unit bisnis', 'bpr bonding', 'caraka mulia', 'dwp insurance', 'sipbro', 'qjamin', 'prada badminton', 'lps insurance', 'pln consultant']
  },
  {
    id: 'apg-business-sectors',
    category: 'general',
    title: 'Sektor Bisnis APG',
    content: `
      Ekosistem bisnis APG mencakup 5 domain utama:
      - Keuangan (Finance): Layanan finansial terpadu khususnya di bidang penjaminan.
      - Asuransi (Insurance): Proteksi aset, pialang asuransi, dan manajemen risiko.
      - Konsultasi (Consulting): Strategi bisnis adaptif, konsultasi operasional, dan pendampingan GCG.
      - Olahraga (Sports): Pembinaan atlet melalui Prada Badminton Club dan pengembangan industri olahraga.
      - Solusi (Solutions): Perangkat operasional digital dan sistem informasi pendukung bisnis.
    `,
    keywords: ['bidang bisnis', 'sektor', 'apa saja bisnisnya', 'finance', 'sports', 'asuransi', 'konsultasi', 'solusi']
  },
  {
    id: 'apg-contact-info',
    category: 'contact',
    title: 'Informasi Kontak & Lokasi APG',
    content: `
      Alamat: Office Tower Fontana, The Mansion Bougenville, Lt. 51 unit BF-51A1 & BF-51A2, Jl. Trembesi Blok D Pademangan Timur, Kec. Pademangan, Jakarta Utara.
      Telepon: 0812 8888 5132
      Email: info@apg.co.id
      Jam Operasional: Senin – Jumat, 08.00 - 17.00 WIB.
      Website: apg.co.id
    `,
    keywords: ['alamat', 'lokasi', 'kantor', 'nomor telepon', 'email', 'hubungi', 'jakarta utara', 'jam buka']
  },
  {
    id: 'apg-career-info',
    category: 'career',
    title: 'Karir di Ardana Perkasa Group',
    content: `
      APG selalu mencari talenta terbaik untuk berkembang bersama dalam ekosistem bisnis yang dinamis. 
      Alasan berkarir di APG:
      - Profesional & Berkembang: Lingkungan kerja dinamis yang mendukung pertumbuhan kompetensi.
      - Lintas Industri: Kesempatan eksplorasi karir di berbagai sektor bisnis holding.
      - Stabilitas Holding: Keamanan karir dalam ekosistem bisnis yang kokoh.
      - Inovasi & Kolaborasi: Budaya kerja modern yang menghargai ide kreatif.
      Pelamar dapat melihat lowongan aktif di halaman Karir website kami.
    `,
    keywords: ['kerja', 'lowongan', 'karir', 'job', 'melamar', 'hrd', 'rekrutmen']
  },
  {
    id: 'apg-leadership-management',
    category: 'structure',
    title: 'Manajemen & Kepemimpinan',
    content: `
      APG dipimpin oleh profesional berpengalaman:
      - Komisaris Utama: Ibu Affa Rosdiana
      - Komisaris: Ibu Enimar Yasni
      - Direktur Utama: Bapak Muhammad Firdaus
      - Direktur: Bapak Toman Clay Manurung
      - Kepala Divisi Keuangan: Ibu Yeliza Eka Darma
      - Supervisor IT Programmer: Bapak Muhammad Azam Nur Alwi
      Struktur ini memastikan tata kelola perusahaan yang transparan dan akuntabel di seluruh unit bisnis.
    `,
    keywords: ['manajemen', 'direktur', 'komisaris', 'pimpinan', 'siapa direktur utama', 'affa rosdiana', 'muhammad firdaus']
  },
  {
    id: 'apg-strategic-pillars',
    category: 'values',
    title: 'Pilar Strategis & Nilai APG',
    content: `
      4 Pilar Strategis APG:
      1. Strategic Vision: Fokus jangka panjang pada sinergi lintas sektor.
      2. Governance Excellence: Standar kepatuhan tertinggi dan manajemen risiko untuk menjaga kepercayaan.
      3. Sustainable Growth: Ekspansi terukur berpusat pada penciptaan nilai dan ketahanan ekonomi.
      4. Ecosystem Partnership: Aliansi strategis yang memperkuat rantai pasok dan kapasitas eksekusi nasional.
    `,
    keywords: ['mengapa apg', 'keunggulan', 'pilar', 'value', 'kelebihan', 'standar enterprise', 'strategi']
  }
];
