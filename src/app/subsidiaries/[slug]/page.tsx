import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubsidiaryDetailClient from './SubsidiaryDetailClient';

type Subsidiary = {
  name: string;
  slug: string;
  sector: string;
  description: string;
  highlights: string[];
  logoSrc?: string;
};

type PageParams = Promise<{ slug: string }>;

const subsidiaries: Subsidiary[] = [
  {
    name: 'BPR',
    slug: 'bpr',
    sector: 'Finance',
    description: 'Layanan finansial yang fokus pada kedekatan layanan dan disiplin tata kelola.',
    highlights: ['Service proximity', 'Risk discipline', 'Portfolio alignment'],
    logoSrc: '/images/bpr.png',
  },
  {
    name: 'DWP',
    slug: 'dwp',
    sector: 'Sports',
    description: 'Aktivasi brand, event, dan kolaborasi untuk penguatan ekosistem olahraga.',
    highlights: ['Event activation', 'Brand partnership', 'Community engagement'],
    logoSrc: '/images/dwp.png',
  },
  {
    name: 'Sipbro',
    slug: 'sipbro',
    sector: 'Solutions',
    description: 'Solusi operasional dan sistem pendukung untuk meningkatkan efisiensi layanan.',
    highlights: ['Operational tooling', 'Service enablement', 'Performance discipline'],
    logoSrc: '/images/sipbro.png',
  },
  {
    name: 'PLN',
    slug: 'pln',
    sector: 'Solutions',
    description: 'Enablement solusi lintas fungsi untuk mendukung pertumbuhan portofolio enterprise.',
    highlights: ['Cross-function enablement', 'Standardized delivery', 'Enterprise execution'],
    logoSrc: '/images/pln.png',
  },
  {
    name: 'Qjamin',
    slug: 'qjamin',
    sector: 'Risk & Assurance',
    description: 'Assurance dan dukungan governance untuk menjaga kualitas eksekusi portofolio.',
    highlights: ['Assurance & controls', 'Governance alignment', 'Quality monitoring'],
    logoSrc: '/images/qjamin.png',
  },
  {
    name: 'Proteksi',
    slug: 'proteksi',
    sector: 'Insurance',
    description: 'Layanan proteksi yang memperkuat ketahanan finansial dan operasional ekosistem.',
    highlights: ['Protection framework', 'Customer-first service', 'Compliance-ready operations'],
    logoSrc: '/images/proteksi.png',
  },
  {
    name: 'Pataka',
    slug: 'pataka',
    sector: 'Sports',
    description: 'Inisiatif pengembangan komunitas dan ekosistem olahraga yang berkelanjutan.',
    highlights: ['Community activation', 'Partnership model', 'Brand & ecosystem growth'],
    logoSrc: '/images/pataka.png',
  },
  {
    name: 'PRADA BC',
    slug: 'prada-bc',
    sector: 'Finance',
    description: 'Layanan keuangan dan dukungan eksekusi portofolio dengan standar enterprise.',
    highlights: ['Portfolio execution support', 'KPI-based delivery', 'Enterprise governance alignment'],
    logoSrc: '/images/prada.png',
  },
  {
    name: 'LPS',
    slug: 'lps',
    sector: 'Governance',
    description: 'Kapabilitas tata kelola dan standardisasi kontrol untuk konsistensi operasional.',
    highlights: ['Policy & controls', 'Reporting discipline', 'Risk visibility'],
    logoSrc: '/images/lps.png',
  },
  {
    name: 'Caraka Mulia',
    slug: 'caraka-mulia',
    sector: 'Insurance',
    description: 'Solusi proteksi dan manajemen risiko untuk ketahanan ekosistem.',
    highlights: ['Risk protection frameworks', 'Compliance-ready operations', 'Stakeholder assurance'],
    logoSrc: '/images/caraka.png',
  },
];

const getSubsidiary = (slug: string) => subsidiaries.find((s) => s.slug === slug);

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) {
    return {
      title: 'Subsidiary Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: subsidiary.name,
    description: subsidiary.description,
    openGraph: {
      title: `${subsidiary.name} | Ardana Perkasa Group`,
      description: subsidiary.description,
      url: `/subsidiaries/${subsidiary.slug}`,
    },
  };
}

export default async function SubsidiaryDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) notFound();

  return <SubsidiaryDetailClient slug={subsidiary.slug} name={subsidiary.name} logoSrc={subsidiary.logoSrc} />;
}
