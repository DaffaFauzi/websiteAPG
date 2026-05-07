export type SubsidiaryProfile = {
  displayName: string;
  legalName: string;
  slug: string;
  categoryId: 'guarantee' | 'digital' | 'sports' | 'broker';
  categoryLabelKey: string;
  sectorKey: string;
  descKey: string;
  logoSrc?: string;
  profile: {
    id: string;
    en: string;
  };
};

export const subsidiariesData: SubsidiaryProfile[] = [
  {
    displayName: 'BPR Bonding',
    legalName: 'PT. Buana Perkasa Rajanegara',
    slug: 'bpr',
    categoryId: 'guarantee',
    categoryLabelKey: 'subsidiary.bpr.sector',
    sectorKey: 'subsidiary.bpr.sector',
    descKey: 'subsidiary.bpr.desc',
    logoSrc: '/images/bpr.png',
    profile: {
      id: 'Dikenal dengan BPR Bonding, merupakan anak perusahaan Ardana Perkasa Group yang pertama, bergerak di sektor penyediaan layanan Bank Garansi dan Surety Bond.',
      en: 'Known as BPR Bonding, APG’s first subsidiary, focused on Bank Guarantee and Surety Bond services.',
    },
  },
  {
    displayName: 'DWP Insurance',
    legalName: 'PT. Dwi Kusuma Perkasa',
    slug: 'dwp',
    categoryId: 'guarantee',
    categoryLabelKey: 'subsidiary.bpr.sector',
    sectorKey: 'subsidiary.dwp.sector',
    descKey: 'subsidiary.dwp.desc',
    logoSrc: '/images/dwp.png',
    profile: {
      id: 'DWP Insurance berfokus pada solusi penjaminan dan perlindungan risiko untuk mendukung kebutuhan institusi dan bisnis di berbagai sektor.',
      en: 'DWP Insurance focuses on guarantee and risk protection solutions to support institutions and businesses across sectors.',
    },
  },
  {
    displayName: 'SIP BRO',
    legalName: 'SIP BRO',
    slug: 'sipbro',
    categoryId: 'guarantee',
    categoryLabelKey: 'subsidiary.bpr.sector',
    sectorKey: 'subsidiary.sipbro.sector',
    descKey: 'subsidiary.sipbro.desc',
    logoSrc: '/images/sipbro.png',
    profile: {
      id: 'SIP BRO menghadirkan sistem informasi penjaminan yang terintegrasi untuk mempercepat proses, meningkatkan akurasi, dan memperkuat monitoring layanan.',
      en: 'SIP BRO delivers an integrated guarantee information system to speed up processes, improve accuracy, and strengthen service monitoring.',
    },
  },
  {
    displayName: 'PLN Consultant',
    legalName: 'PT. Perkasa Lintas Nasional',
    slug: 'pln',
    categoryId: 'guarantee',
    categoryLabelKey: 'subsidiary.bpr.sector',
    sectorKey: 'subsidiary.pln.sector',
    descKey: 'subsidiary.pln.desc',
    logoSrc: '/images/pln.png',
    profile: {
      id: 'PLN Consultant menyediakan layanan konsultasi dan pendampingan operasional untuk memperkuat eksekusi portofolio dan tata kelola layanan.',
      en: 'PLN Consultant provides consulting and operational advisory to strengthen portfolio execution and service governance.',
    },
  },
  {
    displayName: 'Qjamin',
    legalName: 'PT. Khalifah Jamin Perkasa',
    slug: 'qjamin',
    categoryId: 'digital',
    categoryLabelKey: 'subsidiary.qjamin.sector',
    sectorKey: 'subsidiary.qjamin.sector',
    descKey: 'subsidiary.qjamin.desc',
    logoSrc: '/images/qjamin.png',
    profile: {
      id: 'Qjamin menghadirkan penjaminan berbasis digital untuk mendukung kontrol, transparansi, dan percepatan layanan secara end-to-end.',
      en: 'Qjamin provides digital-first guarantee enablement to support controls, transparency, and end-to-end service acceleration.',
    },
  },
  {
    displayName: 'Prada Badminton Club',
    legalName: 'Prada Badminton Club',
    slug: 'prada-bc',
    categoryId: 'sports',
    categoryLabelKey: 'subsidiary.prada-bc.sector',
    sectorKey: 'subsidiary.prada-bc.sector',
    descKey: 'subsidiary.prada-bc.desc',
    logoSrc: '/images/prada.png',
    profile: {
      id: 'Prada Badminton Club menjadi wadah pembinaan atlet dan pengembangan ekosistem olahraga dengan standar profesional.',
      en: 'Prada Badminton Club supports athlete development and sports ecosystem growth with professional standards.',
    },
  },
  {
    displayName: 'LPS Insurance Consultant',
    legalName: 'LPS Insurance Consultant',
    slug: 'lps',
    categoryId: 'guarantee',
    categoryLabelKey: 'subsidiary.bpr.sector',
    sectorKey: 'subsidiary.lps.sector',
    descKey: 'subsidiary.lps.desc',
    logoSrc: '/images/lps.png',
    profile: {
      id: 'LPS Insurance Consultant memperkuat pengelolaan risiko melalui konsultasi, standardisasi kontrol, dan pendampingan kepatuhan.',
      en: 'LPS Insurance Consultant strengthens risk management through consulting, control standardization, and compliance support.',
    },
  },
  {
    displayName: 'Caraka Mulia',
    legalName: 'Caraka Mulia',
    slug: 'caraka-mulia',
    categoryId: 'broker',
    categoryLabelKey: 'subsidiary.caraka-mulia.sector',
    sectorKey: 'subsidiary.caraka-mulia.sector',
    descKey: 'subsidiary.caraka-mulia.desc',
    logoSrc: '/images/caraqu.png',
    profile: {
      id: 'Caraka Mulia menyediakan layanan pialang asuransi dan manajemen risiko untuk memastikan perlindungan aset serta kelangsungan bisnis.',
      en: 'Caraka Mulia provides insurance brokerage and risk management to protect assets and ensure business continuity.',
    },
  },
];

export const getSubsidiaryBySlug = (slug: string) =>
  subsidiariesData.find((s) => s.slug === slug);
