'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  id: {
    'brand.name': 'Ardana Perkasa Group',
    'brand.short': 'APG',
    'brand.logoAlt': 'Logo APG',

    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.structure': 'Struktur Organisasi',
    'nav.subsidiaries': 'Anak Perusahaan',
    'nav.contact': 'Kontak',
    'nav.menu.open': 'Buka menu utama',
    'nav.language': 'Bahasa',
    
    // Hero
    'hero.headline': 'Membangun Ekosistem Lintas Sektor dengan Standar Enterprise',
    'hero.subheadline': 'APG adalah holding company yang mengembangkan ekosistem bisnis lintas sektor dengan tata kelola enterprise.',
    'hero.cta.discover': 'Jelajahi Anak Perusahaan',
    'hero.cta.ecosystem': 'Pelajari Ekosistem',
    'hero.about.badge': 'Tentang APG Holding',
    'hero.about.p1':
      'APG merupakan perusahaan holding yang menaungi beberapa anak perusahaan yang bergerak di sektor pendukung Lembaga Keuangan di antaranya PT. Buana Perkasa Rajanegara (BPR Bonding), PT. Dwi Kusuma Perkasa (DWP Insurance), PT. Perkasa Lintas Nasional Consultant (PLN Consultant), PT. Pataka Prima Perkasa Consultant (Pataka Consultant), dan PT. Proteksi Perkasa Solutions (Proteksi Plus).',
    'hero.about.p2':
      'APG juga menaungi anak perusahaan yang bergerak di sektor olahraga, memperluas jangkauannya dalam mendukung berbagai industri yang berkontribusi pada perkembangan ekonomi dan sosial.',
    'hero.vision.title': 'Visi',
    'hero.vision.desc': 'Menjadi mitra terpercaya dan terdepan dalam mendukung ekosistem lembaga keuangan dan pengembangan industri olahraga.',
    'hero.mission.title': 'Misi',
    'hero.mission.desc': 'Menyediakan solusi komprehensif, andal, dan inovatif yang mendorong pertumbuhan ekonomi serta sosial.',
    'hero.cta.learnMore': 'Pelajari lebih lanjut tentang perusahaan kami',
    'hero.mock.tag': 'Workspace',
    'hero.mock.accounts.label': 'Akun',
    'hero.mock.accounts.value': 'Pertumbuhan stabil',
    'hero.mock.reports.label': 'Laporan',
    'hero.mock.reports.value': 'Data aman',
    'hero.mock.years.label': 'Pengalaman',
    'hero.mock.years.value': 'Kepemimpinan industri',

    // Intro
    'intro.badge': 'Mendukung Ekosistem Lembaga Keuangan & Olahraga',
    'intro.title.part1': 'Menggerakkan Pertumbuhan',
    'intro.title.highlight': 'Lintas Industri',
    'intro.title.part2': 'dengan Inovasi Strategis & Kemitraan Kuat.',
    'intro.desc': 'Ardana Perkasa Group (APG) adalah perusahaan holding yang menaungi anak perusahaan di sektor pendukung Lembaga Keuangan dan Olahraga.',
    'intro.cta.primary': 'Jelajahi Bisnis Kami',
    'intro.cta.secondary': 'Lihat Laporan Tahunan',
    'intro.card.1.title': 'Jangkauan Luas',
    'intro.card.1.desc': 'Menghubungkan banyak mitra dan jaringan bisnis lintas sektor.',
    'intro.card.2.title': 'Keamanan Terpercaya',
    'intro.card.2.desc': 'Standar enterprise untuk data dan proses yang andal.',
    'intro.card.3.title': 'Pertumbuhan Berkelanjutan',
    'intro.card.3.desc': 'Ekspansi ekosistem yang konsisten dari tahun ke tahun.',
    'intro.card.4.title': 'Infrastruktur',
    'intro.card.4.desc': 'Membangun fondasi operasional untuk eksekusi modern.',

    'trust.inline': 'Dipercaya oleh 200+ mitra lintas industri',

    'hero.card.projects.label': 'Proyek',
    'hero.card.projects.value': '500+',
    'hero.card.partners.label': 'Mitra',
    'hero.card.partners.value': '200+',
    'hero.card.industries.label': 'Industri',
    'hero.card.industries.value': '10',

    // Overview
    'overview.tag': 'Ringkasan Perusahaan',
    'overview.title': 'Memimpin Eksekusi Lintas Sektor dengan Tata Kelola Enterprise',
    'overview.desc': 'Kami membangun ekosistem holding yang terstruktur—menghubungkan modal, kapabilitas, dan kemitraan untuk menciptakan pertumbuhan berkelanjutan.',
    'overview.value.1.title': 'Siapa Kami',
    'overview.value.1.desc': 'Holding company multi-sektor dengan fokus pada tata kelola, sinergi, dan nilai jangka panjang.',
    'overview.value.2.title': 'Apa yang Kami Lakukan',
    'overview.value.2.desc': 'Mengembangkan portofolio di finance, insurance, consulting, sports, dan solutions dengan eksekusi disiplin.',
    'overview.value.3.title': 'Visi Kami',
    'overview.value.3.desc': 'Menjadi mitra strategis tepercaya yang mendorong pertumbuhan lintas industri melalui inovasi dan kepatuhan.',
    'overview.value.4.title': 'Kemitraan',
    'overview.value.4.desc': 'Membangun kolaborasi jangka panjang yang memperkuat ekosistem bisnis dan ketahanan portofolio.',
    'overview.highlight.1.value': '25+',
    'overview.highlight.1.label': 'Tahun Pengalaman',
    'overview.highlight.2.value': '15+',
    'overview.highlight.2.label': 'Anak Perusahaan',
    'overview.highlight.3.value': '200+',
    'overview.highlight.3.label': 'Mitra',
    'overview.highlight.4.value': '10',
    'overview.highlight.4.label': 'Industri',
    'overview.cta.primary': 'Jelajahi Bisnis Kami',
    'overview.cta.secondary': 'Lihat Profil Perusahaan',

    // Career
    'career.nav': 'Karir',
    'career.hero.tag': 'Karir di APG',
    'career.hero.title': 'Bangun Karir Anda di Berbagai Industri',
    'career.hero.subtitle': 'Bergabunglah dengan Ardana Perkasa Group dan tumbuh dalam ekosistem lintas sektor yang dinamis.',
    'career.hero.cta.open': 'Lihat Lowongan',
    'career.hero.cta.companies': 'Lihat Perusahaan',
    'career.search.placeholder': 'Cari posisi...',
    'career.filter.company': 'Perusahaan',
    'career.filter.location': 'Lokasi',
    'career.filter.category': 'Kategori',
    'career.filter.all': 'Semua',
    'career.job.apply': 'Lamar Sekarang',
    'career.job.detail': 'Detail Pekerjaan',
    'career.why.title': 'Mengapa Bergabung dengan Kami',
    'career.why.subtitle': 'Kami menawarkan lebih dari sekadar pekerjaan—kami menawarkan jalur pertumbuhan.',
    'career.life.title': 'Kehidupan di APG Holding',
    'career.life.subtitle': 'Budaya kolaboratif dan inovatif kami adalah kunci kesuksesan bersama.',
    'career.cta.title': 'Mulai Perjalanan Anda Bersama Kami',
    'career.cta.subtitle': 'Temukan peluang yang tepat untuk masa depan Anda.',
    'career.cta.apply': 'Lamar Sekarang',
    'career.cta.contact': 'Hubungi HR',
    'career.empty': 'Tidak ada lowongan yang ditemukan.',

    // Metrics
    'metrics.subsidiaries': 'Anak Perusahaan',
    'metrics.partners': 'Mitra',
    'metrics.projects': 'Proyek',
    'metrics.sectors': 'Sektor',
    'metrics.tag': 'STATISTIK',
    'metrics.title': 'Skala yang Terukur. Eksekusi yang Terbukti.',
    'metrics.desc': 'Indikator utama yang mencerminkan pertumbuhan, jangkauan, dan kekuatan ekosistem bisnis APG.',
    'metrics.caption': 'Indikator skala enterprise',

    // About Preview
    'about.preview.tag': 'Tentang Kami',
    'about.preview.title': 'Holding Company dengan Visi Lintas Sektor',
    'about.preview.desc': 'Ardana Perkasa Group (APG) hadir sebagai entitas holding strategis yang berfokus pada pengembangan ekosistem bisnis berkelanjutan.',
    'about.preview.cta': 'Pelajari Tentang Kami',
    'about.preview.imageAlt': 'Ardana Perkasa Group - Enterprise Holding',

    // Business Focus
    'focus.tag': 'EKOSISTEM BISNIS',
    'focus.title.part1': 'Sinergi Lintas Sektor untuk',
    'focus.title.part2': 'Masa Depan',
    'focus.1.title': 'Tata Kelola',
    'focus.1.desc': 'Kerangka GCG untuk keputusan yang transparan dan terukur.',
    'focus.2.title': 'Kepatuhan',
    'focus.2.desc': 'Proses yang selaras regulasi untuk meminimalkan risiko dan menjaga kepercayaan.',
    'focus.3.title': 'Inovasi',
    'focus.3.desc': 'Solusi modern untuk mempercepat pertumbuhan dan meningkatkan daya saing.',
    'focus.4.title': 'Kemitraan',
    'focus.4.desc': 'Kolaborasi jangka panjang yang memperluas dampak lintas industri.',
    'focus.5.title': 'Eksekusi',
    'focus.5.desc': 'Implementasi disiplin dengan standar enterprise di seluruh portofolio.',

    // Ecosystem
    'ecosystem.tag': 'Ekosistem Bisnis',
    'ecosystem.title.part1': 'Portofolio Terintegrasi untuk ',
    'ecosystem.title.part2': 'Pertumbuhan Berkelanjutan',
    'ecosystem.finance': 'Keuangan',
    'ecosystem.insurance': 'Asuransi',
    'ecosystem.consulting': 'Konsultasi',
    'ecosystem.sports': 'Olahraga',
    'ecosystem.solutions': 'Solusi',
    'ecosystem.finance.tag': 'Layanan finansial terpadu.',
    'ecosystem.insurance.tag': 'Proteksi aset & risiko.',
    'ecosystem.consulting.tag': 'Strategi bisnis adaptif.',
    'ecosystem.sports.tag': 'Ekosistem olahraga dinamis.',
    'ecosystem.solutions.tag': 'Solusi operasional cerdas.',

    // Subsidiaries
    'subsidiaries.title': 'Anak Perusahaan Unggulan',
    'subsidiaries.desc': 'Membangun sinergi lintas sektor melalui anak perusahaan pilihan yang menjadi pemimpin di bidangnya.',
    'subsidiaries.cta': 'Jelajahi Semua Anak Perusahaan',
    'subsidiaries.card.cta': 'Lihat Detail',
    'subsidiaries.card.label': 'Anak Perusahaan',

    // Why Choose Us
    'why.tag': 'MENGAPA KAMI',
    'why.title': 'Kepercayaan Dibangun dari Detail',
    'why.desc': 'Kami mengeksekusi strategi dengan disiplin, tata kelola yang kuat, dan kolaborasi lintas sektor.',
    'why.1.title': 'Ekosistem Kuat',
    'why.1.desc': 'Sinergi portofolio yang memperkuat daya saing dan mempercepat eksekusi.',
    'why.2.title': 'Tata Kelola Tepercaya',
    'why.2.desc': 'Kepatuhan dan transparansi sebagai fondasi pengambilan keputusan.',
    'why.3.title': 'Pertumbuhan Berkelanjutan',
    'why.3.desc': 'Fokus pada pertumbuhan jangka panjang yang terukur dan tahan banting.',
    'why.4.title': 'Kemitraan Strategis',
    'why.4.desc': 'Kolaborasi untuk memperluas jangkauan dan menciptakan nilai bersama.',

    // Leadership
    'leadership.tag': 'KEPEMIMPINAN',
    'leadership.title': 'Dipimpin oleh Profesional Berpengalaman',
    'leadership.desc': 'Jajaran manajemen berfokus pada tata kelola, strategi, dan eksekusi yang berorientasi hasil.',
    'leadership.1.name': 'Leadership Name',
    'leadership.1.role': 'President Commissioner',
    'leadership.2.name': 'Leadership Name',
    'leadership.2.role': 'Chief Executive Officer',
    'leadership.3.name': 'Leadership Name',
    'leadership.3.role': 'Chief Strategy Officer',
    'leadership.4.name': 'Leadership Name',
    'leadership.4.role': 'Chief Operations Officer',

    // Insights
    'insights.tag': 'WAWASAN',
    'insights.title': 'Berita & Wawasan',
    'insights.desc': 'Perspektif, pembaruan, dan cerita ekosistem untuk menjaga website tetap hidup dan relevan.',
    'insights.cta': 'Lihat Semua',
    'insights.readMore': 'Baca Selengkapnya',
    'insights.1.tag': 'Corporate',
    'insights.1.title': 'Meningkatkan Daya Saing melalui Sinergi Portofolio',
    'insights.1.excerpt': 'Bagaimana strategi holding menyelaraskan kapabilitas lintas sektor untuk menciptakan pertumbuhan yang berkelanjutan.',
    'insights.2.tag': 'Governance',
    'insights.2.title': 'Tata Kelola sebagai Keunggulan Kompetitif',
    'insights.2.excerpt': 'Mengapa standar enterprise dan kepatuhan memperkuat kepercayaan mitra dan pemangku kepentingan.',
    'insights.3.tag': 'Ecosystem',
    'insights.3.title': 'Membangun Ekosistem Bisnis yang Modern & Adaptif',
    'insights.3.excerpt': 'Pendekatan APG dalam mengembangkan ekosistem yang tangguh di tengah perubahan pasar.',

    // CTA
    'cta.tag': 'KOLABORASI',
    'cta.title': 'Mari Bangun Masa Depan Bersama',
    'cta.desc': 'Mulai percakapan untuk kolaborasi, kemitraan, atau peluang strategis lintas sektor.',
    'cta.primary': 'Hubungi Kami',
    'cta.secondary': 'Jadi Mitra',

    // Trust
    'trust.partners': 'Dipercaya oleh Mitra Terkemuka',
    'trust.partnerAlt': 'Mitra',
    'trust.cta.title': 'Mari Bangun Sinergi Bersama',
    'trust.cta.button': 'Hubungi Kami',
    'trust.testimonial.1.quote': 'APG adalah mitra strategis yang membawa standar eksekusi enterprise ke level yang baru.',
    'trust.testimonial.1.author': 'Mitra Strategis',
    'trust.testimonial.2.quote': 'Tata kelola yang kuat dan sinergi lintas sektor membuat APG menjadi holding yang visioner.',
    'trust.testimonial.2.author': 'Direktur Anak Perusahaan',

    // Gallery
    'gallery.tag': 'AKTIVITAS KORPORASI',
    'gallery.title': 'Aktivitas di APG Holding',
    'gallery.cta': 'Lihat Galeri Lengkap',
    'gallery.images.meeting': 'Pertemuan Korporasi',
    'gallery.images.collaboration': 'Kolaborasi Kantor',
    'gallery.images.success': 'Kesuksesan Tim',

    // Illustration
    'illustration.tag': 'ILUSTRASI INTERAKTIF',
    'illustration.title': 'Buat tampilan homepage lebih hidup dengan animasi UI halus.',
    'illustration.desc': 'Elemen kecil di sekitar ilustrasi bergerak lembut untuk memberi kesan modern tanpa mengganggu fokus pengguna.',
    'illustration.badge.ui': 'UI',
    'illustration.badge.done': 'Selesai',
    'illustration.badge.checklist': 'Checklist',

    // Scroll Cinema
    'cinema.brand': 'Ardana Perkasa Group',
    'cinema.title': 'Membangun Masa Depan Melalui Inovasi dan Kolaborasi',
    'cinema.desc': 'Kami menghadirkan solusi terintegrasi untuk mendukung pertumbuhan bisnis yang berkelanjutan.',

    // Not Found
    'notFound.tag': 'TIDAK DITEMUKAN',
    'notFound.desc': 'Halaman yang Anda cari tidak ditemukan.',
    'notFound.cta': 'Kembali ke Beranda',

    // Testimoni
    'testimoni.tag': 'TESTIMONI',
    'testimoni.title': 'Apa Kata Mereka Tentang Kami',
    'testimoni.desc': 'Kami bangga dengan hubungan yang telah kami bangun dengan mitra dan anak perusahaan kami. Berikut adalah beberapa testimoni dari mereka.',
    'testimoni.placeholder.quote': '“Bagian ini akan menampilkan testimoni lengkap dari mitra dan anak perusahaan kami.”',
    'testimoni.placeholder.author': '— Tim Ardana Perkasa Group',

    // Subsidiary Detail
    'subsidiary.detail.tag': 'PROFIL ANAK PERUSAHAAN',
    'subsidiary.detail.back': 'Kembali ke Anak Perusahaan',
    'subsidiary.detail.highlights': 'Sorotan',
    'subsidiary.detail.alignment.title': 'Keselarasan',
    'subsidiary.detail.alignment.desc': 'Seluruh anak perusahaan berada dalam kerangka governance dan portfolio management APG untuk memastikan konsistensi standar, pengelolaan risiko, dan eksekusi berbasis KPI.',
    'subsidiary.detail.alignment.1': 'Model operasi governance-first',
    'subsidiary.detail.alignment.2': 'Transparansi pelaporan dan kontrol',
    'subsidiary.detail.alignment.3': 'Sinergi lintas sektor dan kapabilitas',
    'subsidiary.detail.alignment.4': 'Eksekusi disiplin untuk pertumbuhan',

    'subsidiary.bpr.sector': 'Keuangan',
    'subsidiary.bpr.desc': 'Layanan finansial yang fokus pada kedekatan layanan dan disiplin tata kelola.',
    'subsidiary.bpr.highlight.1': 'Kedekatan layanan',
    'subsidiary.bpr.highlight.2': 'Disiplin risiko',
    'subsidiary.bpr.highlight.3': 'Keselarasan portofolio',

    'subsidiary.dwp.sector': 'Olahraga',
    'subsidiary.dwp.desc': 'Aktivasi brand, event, dan kolaborasi untuk penguatan ekosistem olahraga.',
    'subsidiary.dwp.highlight.1': 'Aktivasi event',
    'subsidiary.dwp.highlight.2': 'Kemitraan brand',
    'subsidiary.dwp.highlight.3': 'Keterlibatan komunitas',

    'subsidiary.sipbro.sector': 'Solusi',
    'subsidiary.sipbro.desc': 'Solusi operasional dan sistem pendukung untuk meningkatkan efisiensi layanan.',
    'subsidiary.sipbro.highlight.1': 'Perangkat operasional',
    'subsidiary.sipbro.highlight.2': 'Enablement layanan',
    'subsidiary.sipbro.highlight.3': 'Disiplin performa',

    'subsidiary.pln.sector': 'Solusi',
    'subsidiary.pln.desc': 'Enablement solusi lintas fungsi untuk mendukung pertumbuhan portofolio enterprise.',
    'subsidiary.pln.highlight.1': 'Enablement lintas fungsi',
    'subsidiary.pln.highlight.2': 'Delivery terstandar',
    'subsidiary.pln.highlight.3': 'Eksekusi enterprise',

    'subsidiary.qjamin.sector': 'Risk & Assurance',
    'subsidiary.qjamin.desc': 'Assurance dan dukungan governance untuk menjaga kualitas eksekusi portofolio.',
    'subsidiary.qjamin.highlight.1': 'Assurance & kontrol',
    'subsidiary.qjamin.highlight.2': 'Keselarasan governance',
    'subsidiary.qjamin.highlight.3': 'Monitoring kualitas',

    'subsidiary.proteksi.sector': 'Asuransi',
    'subsidiary.proteksi.desc': 'Layanan proteksi yang memperkuat ketahanan finansial dan operasional ekosistem.',
    'subsidiary.proteksi.highlight.1': 'Kerangka proteksi',
    'subsidiary.proteksi.highlight.2': 'Layanan berorientasi pelanggan',
    'subsidiary.proteksi.highlight.3': 'Operasional siap kepatuhan',

    'subsidiary.pataka.sector': 'Olahraga',
    'subsidiary.pataka.desc': 'Inisiatif pengembangan komunitas dan ekosistem olahraga yang berkelanjutan.',
    'subsidiary.pataka.highlight.1': 'Aktivasi komunitas',
    'subsidiary.pataka.highlight.2': 'Model kemitraan',
    'subsidiary.pataka.highlight.3': 'Pertumbuhan brand & ekosistem',

    'subsidiary.prada-bc.sector': 'Keuangan',
    'subsidiary.prada-bc.desc': 'Layanan keuangan dan dukungan eksekusi portofolio dengan standar enterprise.',
    'subsidiary.prada-bc.highlight.1': 'Dukungan eksekusi portofolio',
    'subsidiary.prada-bc.highlight.2': 'Delivery berbasis KPI',
    'subsidiary.prada-bc.highlight.3': 'Keselarasan governance enterprise',

    'subsidiary.lps.sector': 'Tata Kelola',
    'subsidiary.lps.desc': 'Kapabilitas tata kelola dan standardisasi kontrol untuk konsistensi operasional.',
    'subsidiary.lps.highlight.1': 'Kebijakan & kontrol',
    'subsidiary.lps.highlight.2': 'Disiplin pelaporan',
    'subsidiary.lps.highlight.3': 'Visibilitas risiko',

    'subsidiary.caraka-mulia.sector': 'Asuransi',
    'subsidiary.caraka-mulia.desc': 'Solusi proteksi dan manajemen risiko untuk ketahanan ekosistem.',
    'subsidiary.caraka-mulia.highlight.1': 'Kerangka proteksi risiko',
    'subsidiary.caraka-mulia.highlight.2': 'Operasional siap kepatuhan',
    'subsidiary.caraka-mulia.highlight.3': 'Assurance pemangku kepentingan',

    // Tentang Page
    'tentang.hero.badge': 'Siapa Kami',
    'tentang.hero.title': 'Ardana Perkasa Group',
    'tentang.hero.p1': 'Ardana Perkasa Group (APG) adalah salah satu perusahaan holding terkemuka di Indonesia, yang berkomitmen untuk mendorong stabilitas dan pertumbuhan ekonomi melalui solusi bisnis yang inovatif, terpercaya, dan bermanfaat bagi pemegang saham dan pemangku kepentingan.',
    'tentang.hero.p2': 'Selain berfokus pada sektor pendukung lembaga keuangan, APG juga memperluas jangkauan bisnisnya ke sektor olahraga, berkontribusi pada perkembangan industri olahraga di Indonesia, dan menciptakan nilai tambah bagi masyarakat dan perekonomian.',
    
    'tentang.visi.badge': 'Tentang Kami',
    'tentang.visi.title': 'Visi APG',
    'tentang.visi.desc': 'Menjadi salah satu perusahaan holding terbesar di Indonesia yang mendukung stabilitas dan pertumbuhan ekonomi melalui layanan usaha yang inovatif, terpercaya, dan bermanfaat untuk shareholder maupun stakeholder.',
    
    'tentang.misi.badge': 'Tentang Kami',
    'tentang.misi.title': 'Misi APG',
    'tentang.misi.1.title': 'Membangun Keunggulan Kompetitif',
    'tentang.misi.1.desc': 'Mengembangkan portofolio yang fokus pada solusi dengan teknologi terkini dan layanan yang unggul untuk memenuhi kebutuhan shareholder maupun stakeholder.',
    'tentang.misi.2.title': 'Mendukung Stabilitas Keuangan',
    'tentang.misi.2.desc': 'Berkontribusi pada ekosistem ekonomi yang stabil dengan menyediakan produk penjaminan yang kredibel, transparan, dan sesuai regulasi.',
    'tentang.misi.3.title': 'Meningkatkan Kepercayaan Pelanggan',
    'tentang.misi.3.desc': 'Menciptakan nilai tambah bagi pelanggan dengan menyediakan layanan yang akurat, cepat, dan berorientasi pada solusi.',
    'tentang.misi.4.title': 'Mendukung Pertumbuhan Bisnis Anak Perusahaan',
    'tentang.misi.4.desc': 'Memberikan dukungan strategis, finansial, dan manajemen kepada anak perusahaan untuk mencapai pertumbuhan yang berkelanjutan.',
    'tentang.misi.5.title': 'Mengutamakan Etika dan Kepatuhan',
    'tentang.misi.5.desc': 'Menjalankan bisnis dengan prinsip-prinsip tata kelola perusahaan yang baik (GCG) serta mematuhi peraturan yang berlaku.',

    'tentang.gallery.badge': 'Tentang Kami',
    'tentang.gallery.title': 'Gallery',

    'tentang.contact.title': 'Untuk Informasi lebih lanjut hubungi kami di :',
    'tentang.contact.address.label': 'Alamat',
    'tentang.contact.address.value': 'The Mansion Bougenville, Office Tower Fontana, Unit BF 32 B1 & B2, Jl. Trembesi Blok D Pademangan Timur, Kec. Pademangan, Jakarta Utara',
    'tentang.contact.email.label': 'Email',
    'tentang.contact.email.value': 'info@ardanaperkasagroup.id',
    'tentang.contact.phone.label': 'Telphone',
    'tentang.contact.phone.value': '021 3893 0088',

    // Struktur Page
    'struktur.title': 'Struktur Organisasi',
    'struktur.tag': 'Kepemimpinan',
    'struktur.desc': 'Dipimpin oleh jajaran profesional berpengalaman untuk mengorkestrasi sinergi lintas sektor.',
    'struktur.komisaris': 'Dewan Komisaris',
    'struktur.direksi': 'Dewan Direksi',
    'struktur.cta.title': 'Ingin Bergabung dalam Ekosistem Kami?',
    'struktur.cta.desc': 'Kami selalu terbuka untuk kolaborasi strategis dan talenta profesional.',
    'struktur.cta.view': 'LIHAT PROFIL LENGKAP',

    // Common
    'common.contact_us': 'Hubungi Kami',
    'common.learn_more': 'Pelajari Lebih Lanjut',
    'footer.tagline': 'Enterprise holding company berfokus pada tata kelola, sinergi, dan pertumbuhan portofolio.',
    'footer.location.label': 'Lokasi',
    'footer.location.value': 'Jakarta Utara',
    'footer.phone.label': 'Telepon',
    'footer.phone.value': '021 3893 0088',
    'footer.email.label': 'Email',
    'footer.email.value': 'info@ardanaperkasagroup.id',
    'footer.hours.label': 'Jam Operasional',
    'footer.hours.value': 'Senin–Jumat, 09.00–17.00 WIB',
    'footer.nav.title': 'Navigasi',
    'footer.social.title': 'Media Sosial',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.instagram': 'Instagram',
    'footer.social.x': 'X',
    'footer.legal.privacy': 'Kebijakan Privasi',
    'footer.legal.terms': 'Ketentuan',
    'footer.legal.security': 'Keamanan',
    'footer.copyright': '© {year} {brand}. Hak cipta dilindungi.',

    // Contact Page
    'contact.tag': 'KONTAK',
    'contact.title': 'Hubungi Kami',
    'contact.desc': 'Untuk kolaborasi, kemitraan, atau kebutuhan corporate solutions, tim APG siap berdiskusi.',
    'contact.map.title': 'Peta lokasi Ardana Perkasa Group - Jakarta Utara',
    'contact.card.address.title': 'Alamat',
    'contact.card.address.value': 'The Mansion Bougenville, Office Tower Fontana, Jakarta Utara',
    'contact.card.email.title': 'Email',
    'contact.card.email.value': 'info@ardanaperkasagroup.id',
    'contact.card.phone.title': 'Telepon',
    'contact.card.phone.value': '021 3893 0088',
    'contact.card.hours.title': 'Jam Operasional',
    'contact.card.hours.value': 'Senin–Jumat, 09.00–17.00 WIB',
    'contact.form.title': 'Kirim Pesan',
    'contact.form.desc': 'Tinggalkan pesan, tim kami akan segera menghubungi Anda kembali.',
    'contact.form.name': 'Nama',
    'contact.form.name.placeholder': 'Nama lengkap',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'Alamat email',
    'contact.form.message': 'Pesan',
    'contact.form.message.placeholder': 'Tuliskan pesan Anda...',
    'contact.form.submit': 'Kirim Pesan',

    // AI Assistant
    'ai.button': 'Tanya AI',
    'ai.send': 'Kirim',
    'ai.name': 'Ardana Assistant',
    'ai.subtitle': 'Tanya apa saja • Jawaban ramah',
    'ai.aria.close': 'Tutup asisten',
    'ai.aria.open': 'Buka asisten',
    'ai.typing': 'Mengetik…',
    'ai.placeholder': 'Tulis pesan…',
    'ai.error': 'Maaf — aku belum bisa jawab sekarang. Coba lagi ya.',
    'ai.greeting': 'Halo! Aku siap bantu. Mau tanya apa?',
    'ai.suggestion.1': 'Ringkas APG dalam 3 kalimat',
    'ai.suggestion.2': 'Bikinin ide tagline',
    'ai.suggestion.3': 'Bantu tulis email profesional',
  },
  en: {
    'brand.name': 'Ardana Perkasa Group',
    'brand.short': 'APG',
    'brand.logoAlt': 'APG Logo',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.structure': 'Organization Structure',
    'nav.subsidiaries': 'Subsidiaries',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open main menu',
    'nav.language': 'Language',

    // Hero
    'hero.headline': 'Building Cross-Sector Ecosystem with Enterprise Standards',
    'hero.subheadline': 'APG is a holding company that develops cross-sector business ecosystems with enterprise governance.',
    'hero.cta.discover': 'Discover Subsidiaries',
    'hero.cta.ecosystem': 'Explore Ecosystem',
    'hero.about.badge': 'About APG Holding',
    'hero.about.p1':
      'APG is a holding company overseeing subsidiaries that support financial institutions, including PT. Buana Perkasa Rajanegara (BPR Bonding), PT. Dwi Kusuma Perkasa (DWP Insurance), PT. Perkasa Lintas Nasional Consultant (PLN Consultant), PT. Pataka Prima Perkasa Consultant (Pataka Consultant), and PT. Proteksi Perkasa Solutions (Proteksi Plus).',
    'hero.about.p2':
      'APG also expands into the sports sector, widening its reach to support industries that contribute to economic and social development.',
    'hero.vision.title': 'Vision',
    'hero.vision.desc': 'To become a trusted and leading partner in supporting the financial institution ecosystem and the development of the sports industry.',
    'hero.mission.title': 'Mission',
    'hero.mission.desc': 'To deliver comprehensive, reliable, and innovative solutions that drive economic and social growth.',
    'hero.cta.learnMore': 'Learn more about our company',
    'hero.mock.tag': 'Workspace',
    'hero.mock.accounts.label': 'Accounts',
    'hero.mock.accounts.value': 'Stable growth',
    'hero.mock.reports.label': 'Reports',
    'hero.mock.reports.value': 'Secure data',
    'hero.mock.years.label': 'Years Experience',
    'hero.mock.years.value': 'Industry leadership',

    // Intro
    'intro.badge': 'Supporting Finance & Sports Ecosystems',
    'intro.title.part1': 'Driving Growth',
    'intro.title.highlight': 'Across Industries',
    'intro.title.part2': 'Through Strategic Innovation & Strong Partnerships.',
    'intro.desc': 'Ardana Perkasa Group (APG) is a holding company with subsidiaries supporting financial institutions and sports.',
    'intro.cta.primary': 'Explore Our Businesses',
    'intro.cta.secondary': 'View Annual Report',
    'intro.card.1.title': 'Global Reach',
    'intro.card.1.desc': 'Connecting partners and business networks across sectors.',
    'intro.card.2.title': 'Trusted Security',
    'intro.card.2.desc': 'Enterprise standards for reliable data and processes.',
    'intro.card.3.title': 'Sustainable Growth',
    'intro.card.3.desc': 'Consistent year-over-year ecosystem expansion.',
    'intro.card.4.title': 'Infrastructure',
    'intro.card.4.desc': 'Building an operational backbone for modern execution.',

    'trust.inline': 'Trusted by 200+ partners across industries',

    'hero.card.projects.label': 'Projects',
    'hero.card.projects.value': '500+',
    'hero.card.partners.label': 'Partners',
    'hero.card.partners.value': '200+',
    'hero.card.industries.label': 'Industries',
    'hero.card.industries.value': '10',

    // Overview
    'overview.tag': 'Company Overview',
    'overview.title': 'Enterprise Governance. Cross-Sector Execution.',
    'overview.desc': 'We build a structured holding ecosystem—connecting capital, capability, and partnerships to deliver sustainable growth.',
    'overview.value.1.title': 'Who We Are',
    'overview.value.1.desc': 'A multi-sector holding group focused on governance, synergy, and long-term value.',
    'overview.value.2.title': 'What We Do',
    'overview.value.2.desc': 'Developing portfolios across finance, insurance, consulting, sports, and solutions with disciplined execution.',
    'overview.value.3.title': 'Our Vision',
    'overview.value.3.desc': 'To be a trusted strategic partner driving cross-industry growth through innovation and compliance.',
    'overview.value.4.title': 'Partnerships',
    'overview.value.4.desc': 'Building long-term collaborations that strengthen ecosystems and portfolio resilience.',
    'overview.highlight.1.value': '25+',
    'overview.highlight.1.label': 'Years Experience',
    'overview.highlight.2.value': '15+',
    'overview.highlight.2.label': 'Subsidiaries',
    'overview.highlight.3.value': '200+',
    'overview.highlight.3.label': 'Partners',
    'overview.highlight.4.value': '10',
    'overview.highlight.4.label': 'Industries',
    'overview.cta.primary': 'Explore Our Businesses',
    'overview.cta.secondary': 'View Company Profile',

    // Career
    'career.nav': 'Career',
    'career.hero.tag': 'Careers at APG',
    'career.hero.title': 'Build Your Career Across Industries',
    'career.hero.subtitle': 'Join Ardana Perkasa Group and grow within a dynamic cross-sector ecosystem.',
    'career.hero.cta.open': 'View Openings',
    'career.hero.cta.companies': 'View Companies',
    'career.search.placeholder': 'Search position...',
    'career.filter.company': 'Company',
    'career.filter.location': 'Location',
    'career.filter.category': 'Category',
    'career.filter.all': 'All',
    'career.job.apply': 'Apply Now',
    'career.job.detail': 'Job Detail',
    'career.why.title': 'Why Join Us',
    'career.why.subtitle': 'We offer more than just a job—we offer a growth path.',
    'career.life.title': 'Life at APG Holding',
    'career.life.subtitle': 'Our collaborative and innovative culture is the key to shared success.',
    'career.cta.title': 'Start Your Journey With Us',
    'career.cta.subtitle': 'Find the right opportunity for your future.',
    'career.cta.apply': 'Apply Now',
    'career.cta.contact': 'Contact HR',
    'career.empty': 'No job openings found.',

    // Metrics
    'metrics.subsidiaries': 'Subsidiaries',
    'metrics.partners': 'Partners',
    'metrics.projects': 'Projects',
    'metrics.sectors': 'Sectors',
    'metrics.tag': 'STATISTICS',
    'metrics.title': 'Measured Scale. Proven Execution.',
    'metrics.desc': 'Key indicators that reflect APG’s growth, reach, and ecosystem strength.',
    'metrics.caption': 'Enterprise-scale indicators',

    // About Preview
    'about.preview.tag': 'About Us',
    'about.preview.title': 'Holding Company with Cross-Sector Vision',
    'about.preview.desc': 'Ardana Perkasa Group (APG) is a strategic holding entity focused on developing a sustainable business ecosystem.',
    'about.preview.cta': 'Learn More About Us',
    'about.preview.imageAlt': 'Ardana Perkasa Group - Enterprise Holding',

    // Business Focus
    'focus.tag': 'BUSINESS ECOSYSTEM',
    'focus.title.part1': 'Cross-Sector Synergy for a',
    'focus.title.part2': 'Future',
    'focus.1.title': 'Governance',
    'focus.1.desc': 'A GCG framework for transparent, measurable decision-making.',
    'focus.2.title': 'Compliance',
    'focus.2.desc': 'Regulation-aligned processes that reduce risk and sustain trust.',
    'focus.3.title': 'Innovation',
    'focus.3.desc': 'Modern solutions that accelerate growth and improve competitiveness.',
    'focus.4.title': 'Partnerships',
    'focus.4.desc': 'Long-term collaboration that expands cross-industry impact.',
    'focus.5.title': 'Execution',
    'focus.5.desc': 'Disciplined implementation with enterprise standards across the portfolio.',

    // Ecosystem
    'ecosystem.tag': 'Business Ecosystem',
    'ecosystem.title.part1': 'An Integrated Portfolio for ',
    'ecosystem.title.part2': 'Sustainable Growth',
    'ecosystem.finance': 'Finance',
    'ecosystem.insurance': 'Insurance',
    'ecosystem.consulting': 'Consulting',
    'ecosystem.sports': 'Sports',
    'ecosystem.solutions': 'Solutions',
    'ecosystem.finance.tag': 'Integrated financial services.',
    'ecosystem.insurance.tag': 'Asset & risk protection.',
    'ecosystem.consulting.tag': 'Adaptive business strategy.',
    'ecosystem.sports.tag': 'Dynamic sports ecosystem.',
    'ecosystem.solutions.tag': 'Smart operational solutions.',

    // Subsidiaries
    'subsidiaries.title': 'Featured Subsidiaries',
    'subsidiaries.desc': 'Building cross-sector synergy through selected subsidiaries that are leaders in their fields.',
    'subsidiaries.cta': 'Explore All Subsidiaries',
    'subsidiaries.card.cta': 'View Details',
    'subsidiaries.card.label': 'Subsidiary',

    // Why Choose Us
    'why.tag': 'WHY CHOOSE US',
    'why.title': 'Trust Built from the Details',
    'why.desc': 'We execute strategy with discipline, strong governance, and cross-sector collaboration.',
    'why.1.title': 'Strong Ecosystem',
    'why.1.desc': 'Portfolio synergy that strengthens competitiveness and accelerates execution.',
    'why.2.title': 'Trusted Governance',
    'why.2.desc': 'Compliance and transparency as the foundation of decision-making.',
    'why.3.title': 'Sustainable Growth',
    'why.3.desc': 'Focused on long-term, measurable, and resilient growth.',
    'why.4.title': 'Strategic Partnerships',
    'why.4.desc': 'Collaboration that expands reach and creates shared value.',

    // Leadership
    'leadership.tag': 'LEADERSHIP',
    'leadership.title': 'Led by Experienced Professionals',
    'leadership.desc': 'A management team focused on governance, strategy, and outcome-driven execution.',
    'leadership.1.name': 'Leadership Name',
    'leadership.1.role': 'President Commissioner',
    'leadership.2.name': 'Leadership Name',
    'leadership.2.role': 'Chief Executive Officer',
    'leadership.3.name': 'Leadership Name',
    'leadership.3.role': 'Chief Strategy Officer',
    'leadership.4.name': 'Leadership Name',
    'leadership.4.role': 'Chief Operations Officer',

    // Insights
    'insights.tag': 'INSIGHTS',
    'insights.title': 'News & Insights',
    'insights.desc': 'Perspectives, updates, and ecosystem stories to keep the site active and relevant.',
    'insights.cta': 'View All',
    'insights.readMore': 'Read More',
    'insights.1.tag': 'Corporate',
    'insights.1.title': 'Strengthening Competitiveness through Portfolio Synergy',
    'insights.1.excerpt': 'How a holding strategy aligns cross-sector capabilities to deliver sustainable growth.',
    'insights.2.tag': 'Governance',
    'insights.2.title': 'Governance as a Competitive Advantage',
    'insights.2.excerpt': 'Why enterprise standards and compliance strengthen trust with partners and stakeholders.',
    'insights.3.tag': 'Ecosystem',
    'insights.3.title': 'Building a Modern & Adaptive Business Ecosystem',
    'insights.3.excerpt': 'APG’s approach to developing a resilient ecosystem amid changing markets.',

    // CTA
    'cta.tag': 'COLLABORATION',
    'cta.title': 'Let’s Build the Future Together',
    'cta.desc': 'Start a conversation for collaboration, partnerships, or cross-sector strategic opportunities.',
    'cta.primary': 'Contact Us',
    'cta.secondary': 'Partner With Us',

    // Trust
    'trust.partners': 'Trusted by Leading Partners',
    'trust.partnerAlt': 'Partner',
    'trust.cta.title': 'Let\'s Build Synergy Together',
    'trust.cta.button': 'Contact Us',
    'trust.testimonial.1.quote': 'APG is a strategic partner that elevates enterprise execution standards to the next level.',
    'trust.testimonial.1.author': 'Strategic Partner',
    'trust.testimonial.2.quote': 'Strong governance and cross-sector synergy make APG a visionary holding group.',
    'trust.testimonial.2.author': 'Subsidiary Director',

    // Gallery
    'gallery.tag': 'CORPORATE ACTIVITIES',
    'gallery.title': 'Life at APG Holding',
    'gallery.cta': 'View Full Gallery',
    'gallery.images.meeting': 'Corporate Meeting',
    'gallery.images.collaboration': 'Office Collaboration',
    'gallery.images.success': 'Team Success',

    // Illustration
    'illustration.tag': 'INTERACTIVE ILLUSTRATION',
    'illustration.title': 'Make the homepage feel alive with smooth UI animations.',
    'illustration.desc': 'Small elements around the illustration move subtly to feel modern without distracting the user.',
    'illustration.badge.ui': 'UI',
    'illustration.badge.done': 'Done',
    'illustration.badge.checklist': 'Checklist',

    // Scroll Cinema
    'cinema.brand': 'Ardana Perkasa Group',
    'cinema.title': 'Driving Sustainable Growth Through Innovation',
    'cinema.desc': 'We deliver integrated solutions to drive sustainable business growth.',

    // Not Found
    'notFound.tag': 'NOT FOUND',
    'notFound.desc': 'The page you are looking for could not be found.',
    'notFound.cta': 'Back to Home',

    // Testimonials
    'testimoni.tag': 'TESTIMONIALS',
    'testimoni.title': 'What People Say About Us',
    'testimoni.desc': 'We’re proud of the relationships we’ve built with our partners and subsidiaries. Here are some testimonials from them.',
    'testimoni.placeholder.quote': '“This section will showcase full testimonials from our partners and subsidiaries.”',
    'testimoni.placeholder.author': '— Ardana Perkasa Group Team',

    // Subsidiary Detail
    'subsidiary.detail.tag': 'SUBSIDIARY PROFILE',
    'subsidiary.detail.back': 'Back to Subsidiaries',
    'subsidiary.detail.highlights': 'Highlights',
    'subsidiary.detail.alignment.title': 'Alignment',
    'subsidiary.detail.alignment.desc': 'All subsidiaries operate within APG’s governance and portfolio management framework to ensure consistent standards, risk management, and KPI-driven execution.',
    'subsidiary.detail.alignment.1': 'Governance-first operating model',
    'subsidiary.detail.alignment.2': 'Transparent reporting and controls',
    'subsidiary.detail.alignment.3': 'Cross-sector synergy and capabilities',
    'subsidiary.detail.alignment.4': 'Disciplined execution for growth',

    'subsidiary.bpr.sector': 'Finance',
    'subsidiary.bpr.desc': 'Financial services focused on service proximity and governance discipline.',
    'subsidiary.bpr.highlight.1': 'Service proximity',
    'subsidiary.bpr.highlight.2': 'Risk discipline',
    'subsidiary.bpr.highlight.3': 'Portfolio alignment',

    'subsidiary.dwp.sector': 'Sports',
    'subsidiary.dwp.desc': 'Brand activations, events, and collaborations to strengthen the sports ecosystem.',
    'subsidiary.dwp.highlight.1': 'Event activation',
    'subsidiary.dwp.highlight.2': 'Brand partnerships',
    'subsidiary.dwp.highlight.3': 'Community engagement',

    'subsidiary.sipbro.sector': 'Solutions',
    'subsidiary.sipbro.desc': 'Operational solutions and supporting systems to improve service efficiency.',
    'subsidiary.sipbro.highlight.1': 'Operational tooling',
    'subsidiary.sipbro.highlight.2': 'Service enablement',
    'subsidiary.sipbro.highlight.3': 'Performance discipline',

    'subsidiary.pln.sector': 'Solutions',
    'subsidiary.pln.desc': 'Cross-functional enablement to support enterprise portfolio growth.',
    'subsidiary.pln.highlight.1': 'Cross-function enablement',
    'subsidiary.pln.highlight.2': 'Standardized delivery',
    'subsidiary.pln.highlight.3': 'Enterprise execution',

    'subsidiary.qjamin.sector': 'Risk & Assurance',
    'subsidiary.qjamin.desc': 'Assurance and governance support to maintain portfolio execution quality.',
    'subsidiary.qjamin.highlight.1': 'Assurance & controls',
    'subsidiary.qjamin.highlight.2': 'Governance alignment',
    'subsidiary.qjamin.highlight.3': 'Quality monitoring',

    'subsidiary.proteksi.sector': 'Insurance',
    'subsidiary.proteksi.desc': 'Protection services that strengthen the ecosystem’s financial and operational resilience.',
    'subsidiary.proteksi.highlight.1': 'Protection framework',
    'subsidiary.proteksi.highlight.2': 'Customer-first service',
    'subsidiary.proteksi.highlight.3': 'Compliance-ready operations',

    'subsidiary.pataka.sector': 'Sports',
    'subsidiary.pataka.desc': 'Community development initiatives for a sustainable sports ecosystem.',
    'subsidiary.pataka.highlight.1': 'Community activation',
    'subsidiary.pataka.highlight.2': 'Partnership model',
    'subsidiary.pataka.highlight.3': 'Brand & ecosystem growth',

    'subsidiary.prada-bc.sector': 'Finance',
    'subsidiary.prada-bc.desc': 'Financial services and portfolio execution support with enterprise standards.',
    'subsidiary.prada-bc.highlight.1': 'Portfolio execution support',
    'subsidiary.prada-bc.highlight.2': 'KPI-based delivery',
    'subsidiary.prada-bc.highlight.3': 'Enterprise governance alignment',

    'subsidiary.lps.sector': 'Governance',
    'subsidiary.lps.desc': 'Governance capabilities and control standardization to ensure operational consistency.',
    'subsidiary.lps.highlight.1': 'Policy & controls',
    'subsidiary.lps.highlight.2': 'Reporting discipline',
    'subsidiary.lps.highlight.3': 'Risk visibility',

    'subsidiary.caraka-mulia.sector': 'Insurance',
    'subsidiary.caraka-mulia.desc': 'Protection and risk management solutions for ecosystem resilience.',
    'subsidiary.caraka-mulia.highlight.1': 'Risk protection frameworks',
    'subsidiary.caraka-mulia.highlight.2': 'Compliance-ready operations',
    'subsidiary.caraka-mulia.highlight.3': 'Stakeholder assurance',

    // Tentang Page
    'tentang.hero.badge': 'Who We Are',
    'tentang.hero.title': 'Ardana Perkasa Group',
    'tentang.hero.p1': 'Ardana Perkasa Group (APG) is one of the leading holding companies in Indonesia, committed to driving stability and economic growth through innovative, reliable, and beneficial business solutions for shareholders and stakeholders.',
    'tentang.hero.p2': 'In addition to focusing on sectors supporting financial institutions, APG also expands its business reach into the sports sector, contributing to the development of the sports industry in Indonesia and creating added value for society and the economy.',
    
    'tentang.visi.badge': 'About Us',
    'tentang.visi.title': 'APG Vision',
    'tentang.visi.desc': 'To become one of the largest holding companies in Indonesia that supports stability and economic growth through innovative, reliable business services beneficial to shareholders and stakeholders.',
    
    'tentang.misi.badge': 'About Us',
    'tentang.misi.title': 'APG Mission',
    'tentang.misi.1.title': 'Building Competitive Advantage',
    'tentang.misi.1.desc': 'Developing a portfolio focused on solutions with the latest technology and superior services to meet the needs of shareholders and stakeholders.',
    'tentang.misi.2.title': 'Supporting Financial Stability',
    'tentang.misi.2.desc': 'Contributing to a stable economic ecosystem by providing credible, transparent guarantee products in accordance with regulations.',
    'tentang.misi.3.title': 'Increasing Customer Trust',
    'tentang.misi.3.desc': 'Creating added value for customers by providing accurate, fast, and solution-oriented services.',
    'tentang.misi.4.title': 'Supporting Subsidiary Business Growth',
    'tentang.misi.4.desc': 'Providing strategic, financial, and management support to subsidiaries to achieve sustainable growth.',
    'tentang.misi.5.title': 'Prioritizing Ethics and Compliance',
    'tentang.misi.5.desc': 'Running businesses with Good Corporate Governance (GCG) principles and complying with applicable regulations.',

    'tentang.gallery.badge': 'About Us',
    'tentang.gallery.title': 'Gallery',

    'tentang.contact.title': 'For further information please contact us at:',
    'tentang.contact.address.label': 'Address',
    'tentang.contact.address.value': 'The Mansion Bougenville, Office Tower Fontana, Unit BF 32 B1 & B2, Jl. Trembesi Blok D Pademangan Timur, Kec. Pademangan, North Jakarta',
    'tentang.contact.email.label': 'Email',
    'tentang.contact.email.value': 'info@ardanaperkasagroup.id',
    'tentang.contact.phone.label': 'Telephone',
    'tentang.contact.phone.value': '021 3893 0088',

    // Struktur Page
    'struktur.title': 'Organization Structure',
    'struktur.tag': 'Leadership',
    'struktur.desc': 'Led by experienced professionals to orchestrate cross-sector synergy.',
    'struktur.komisaris': 'Board of Commissioners',
    'struktur.direksi': 'Board of Directors',
    'struktur.cta.title': 'Want to Join Our Ecosystem?',
    'struktur.cta.desc': 'We are always open to strategic collaboration and professional talent.',
    'struktur.cta.view': 'VIEW FULL PROFILE',

    // Common
    'common.contact_us': 'Contact Us',
    'common.learn_more': 'Learn More',
    'footer.tagline': 'Enterprise holding company focused on governance, synergy, and portfolio growth.',
    'footer.location.label': 'Location',
    'footer.location.value': 'North Jakarta',
    'footer.phone.label': 'Phone',
    'footer.phone.value': '021 3893 0088',
    'footer.email.label': 'Email',
    'footer.email.value': 'info@ardanaperkasagroup.id',
    'footer.hours.label': 'Business Hours',
    'footer.hours.value': 'Mon–Fri, 09:00–17:00 WIB',
    'footer.nav.title': 'Navigation',
    'footer.social.title': 'Social Media',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.instagram': 'Instagram',
    'footer.social.x': 'X',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms',
    'footer.legal.security': 'Security',
    'footer.copyright': '© {year} {brand}. All rights reserved.',

    // Contact Page
    'contact.tag': 'CONTACT',
    'contact.title': 'Contact Us',
    'contact.desc': 'For collaboration, partnerships, or corporate solutions, the APG team is ready to connect.',
    'contact.map.title': 'Map location of Ardana Perkasa Group - North Jakarta',
    'contact.card.address.title': 'Address',
    'contact.card.address.value': 'The Mansion Bougenville, Office Tower Fontana, North Jakarta',
    'contact.card.email.title': 'Email',
    'contact.card.email.value': 'info@ardanaperkasagroup.id',
    'contact.card.phone.title': 'Phone',
    'contact.card.phone.value': '021 3893 0088',
    'contact.card.hours.title': 'Business Hours',
    'contact.card.hours.value': 'Mon–Fri, 09:00–17:00 WIB',
    'contact.form.title': 'Send a Message',
    'contact.form.desc': 'Leave a message and our team will get back to you shortly.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'Email address',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Write your message...',
    'contact.form.submit': 'Send Message',

    // AI Assistant
    'ai.button': 'Ask AI',
    'ai.send': 'Send',
    'ai.name': 'Ardana Assistant',
    'ai.subtitle': 'Ask anything • Friendly answers',
    'ai.aria.close': 'Close assistant',
    'ai.aria.open': 'Open assistant',
    'ai.typing': 'Typing…',
    'ai.placeholder': 'Type a message…',
    'ai.error': 'Sorry — I couldn’t respond right now. Please try again.',
    'ai.greeting': 'Hi! I’m here to help. What would you like to ask?',
    'ai.suggestion.1': 'Summarize APG in 3 sentences',
    'ai.suggestion.2': 'Give me a tagline idea',
    'ai.suggestion.3': 'Help me write a professional email',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    const savedLang = localStorage.getItem('app-language') as Language | null;
    if (savedLang === 'id' || savedLang === 'en') {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app-language', lang);
    } catch {
      // ignore storage errors
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
