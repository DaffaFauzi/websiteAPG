'use client';

import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import LogoBadge from '@/components/ui/LogoBadge';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import FallbackImage from '@/components/ui/FallbackImage';
import InnerPageHero from '@/components/ui/InnerPageHero';
import { SubsidiariesVisual } from '@/components/ui/HeroVisuals';

const subsidiaries = [
  {
    name: 'PT. Buana Perkasa Rajanegara',
    slug: 'bpr',
    sector: { id: 'Keuangan', en: 'Finance' },
    description: {
      id: 'Layanan finansial yang fokus pada kedekatan layanan dan disiplin tata kelola.',
      en: 'Financial services focusing on service proximity and governance discipline.'
    },
    logoSrc: '/images/bpr.png',
  },
  {
    name: 'PT. Dwi Kusuma Perkasa',
    slug: 'dwp',
    sector: { id: 'Olahraga', en: 'Sports' },
    description: {
      id: 'Aktivasi brand, event, dan kolaborasi untuk penguatan ekosistem olahraga.',
      en: 'Brand activation, events, and collaboration to strengthen the sports ecosystem.'
    },
    logoSrc: '/images/dwp.png',
  },
  {
    name: 'PT. SipBro Delapan Perkasa',
    slug: 'sipbro',
    sector: { id: 'Solusi', en: 'Solutions' },
    description: {
      id: 'Solusi operasional dan sistem pendukung untuk meningkatkan efisiensi layanan.',
      en: 'Operational solutions and support systems to improve service efficiency.'
    },
    logoSrc: '/images/sipbro.png',
  },
  {
    name: 'PT. Perkasa Lintas Nasional',
    slug: 'pln',
    sector: { id: 'Solusi', en: 'Solutions' },
    description: {
      id: 'Enablement solusi lintas fungsi untuk mendukung pertumbuhan portofolio enterprise.',
      en: 'Cross-functional solution enablement to support enterprise portfolio growth.'
    },
    logoSrc: '/images/pln.png',
  },
  {
    name: 'PT. khalifah Jamin Perkasa',
    slug: 'qjamin',
    sector: { id: 'Risiko & Assurance', en: 'Risk & Assurance' },
    description: {
      id: 'Assurance dan dukungan governance untuk menjaga kualitas eksekusi portofolio.',
      en: 'Assurance and governance support to maintain portfolio execution quality.'
    },
    logoSrc: '/images/qjamin.png',
  },
  {
    name: 'PT. Proteksi Perkasa Solutions',
    slug: 'proteksi',
    sector: { id: 'Asuransi', en: 'Insurance' },
    description: {
      id: 'Layanan proteksi yang memperkuat ketahanan finansial dan operasional ekosistem.',
      en: 'Protection services that strengthen the financial and operational resilience of the ecosystem.'
    },
    logoSrc: '/images/proteksi.png',
  },
  {
    name: 'PT. Pataka Perkasa Konsultan',
    slug: 'pataka',
    sector: { id: 'Olahraga', en: 'Sports' },
    description: {
      id: 'Inisiatif pengembangan komunitas dan ekosistem olahraga yang berkelanjutan.',
      en: 'Community development initiatives and sustainable sports ecosystems.'
    },
    logoSrc: '/images/pataka.png',
  },
  {
    name: 'Prada Badminton Club',
    slug: 'prada-bc',
    sector: { id: 'Keuangan', en: 'Finance' },
    description: {
      id: 'Layanan keuangan dan dukungan eksekusi portofolio dengan standar enterprise.',
      en: 'Financial services and portfolio execution support with enterprise standards.'
    },
    logoSrc: '/images/prada.png',
  },
  {
    name: 'PT. Lintas Perkasa Solutions',
    slug: 'lps',
    sector: { id: 'Tata Kelola', en: 'Governance' },
    description: {
      id: 'Kapabilitas tata kelola dan standardisasi kontrol untuk konsistensi operasional.',
      en: 'Governance capabilities and control standardization for operational consistency.'
    },
    logoSrc: '/images/lps.png',
  },
  {
    name: 'PT. Caraka Mulia',
    slug: 'caraka-mulia',
    sector: { id: 'Asuransi', en: 'Insurance' },
    description: {
      id: 'Solusi proteksi dan manajemen risiko untuk ketahanan ekosistem.',
      en: 'Protection and risk management solutions for ecosystem resilience.'
    },
    logoSrc: '/images/caraka.png',
  },
];

export default function SubsidiariesPage() {
  const { language, t } = useLanguage();
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <InnerPageHero
        tag={t('nav.subsidiaries')}
        title={t('subsidiaries.title')}
        description={t('subsidiaries.desc')}
      >
        <SubsidiariesVisual />
      </InnerPageHero>

      <section id="portfolio" className="section-padding bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subsidiaries.map((s, idx) => {
              const description = language === 'id' ? s.description.id : s.description.en;
              const shortDesc = description.length > 90 ? description.substring(0, 90) + '...' : description;
              
              return (
                <article
                  key={s.slug}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-250 apg-ease"
                >
                  <div className="overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <FallbackImage
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                        fallbackSrc="/images/presentation-placeholder.svg"
                        alt={`${s.name} background`}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/55 via-slate-950/25 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.18)]">
                          <Image
                            src={s.logoSrc}
                            alt={`${s.name} logo`}
                            width={180}
                            height={72}
                            className="h-10 w-auto object-contain"
                            priority={idx < 3}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[0.625rem] tracking-[0.18em] text-[#0A66C2] font-extrabold uppercase mb-2 truncate">
                            {language === 'id' ? s.sector.id : s.sector.en}
                          </p>
                          <h2 className="text-lg font-extrabold text-slate-950 line-clamp-1">{s.name}</h2>
                        </div>
                        <LogoBadge
                          name={s.name}
                          src={s.logoSrc}
                          size={46}
                          className="bg-white border-slate-200"
                        />
                      </div>
                      
                      <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-grow">
                        {shortDesc}
                      </p>

                      <div className="mt-auto">
                        <Link
                          href={`/subsidiaries/${s.slug}`}
                          className="apg-btn inline-flex items-center justify-center w-full min-h-12 rounded-full bg-[#0A66C2] text-white font-extrabold px-6 py-3 shadow-[0_0.875rem_2.5rem_rgba(10,102,194,0.18)] hover:bg-[#0959A9] truncate whitespace-nowrap"
                          aria-label={`${t('subsidiaries.card.cta')} ${s.name}`}
                        >
                          {t('subsidiaries.card.cta')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
