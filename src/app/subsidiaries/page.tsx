'use client';

import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import LogoBadge from '@/components/ui/LogoBadge';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import FallbackImage from '@/components/ui/FallbackImage';

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
      <header className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A]">
        <div className="absolute inset-0 opacity-[0.10]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.2em] text-white/80 font-extrabold uppercase mb-4">{t('nav.subsidiaries')}</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">{t('subsidiaries.title')}</h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              {t('subsidiaries.desc')}
            </p>
          </div>
        </div>
      </header>

      <section id="portfolio" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subsidiaries.map((s, idx) => {
              const description = language === 'id' ? s.description.id : s.description.en;
              const shortDesc = description.length > 90 ? description.substring(0, 90) + '...' : description;
              
              return (
                <article
                  key={s.slug}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                      <FallbackImage
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                        fallbackSrc="/images/presentation-placeholder.svg"
                        alt={`${s.name} background`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#07337A]/80 via-[#0A66C2]/35 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="rounded-2xl bg-white/92 backdrop-blur px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
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
                      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/18 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[10px] tracking-[0.2em] text-[#0A66C2] font-extrabold uppercase mb-2">
                            {language === 'id' ? s.sector.id : s.sector.en}
                          </p>
                          <h2 className="text-lg font-extrabold text-slate-950 line-clamp-1">{s.name}</h2>
                        </div>
                        <LogoBadge
                          name={s.name}
                          src={s.logoSrc}
                          size={46}
                          className="bg-white border-slate-200 shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
                        />
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                        {shortDesc}
                      </p>

                      <div className="mt-auto">
                        <Link
                          href={`/subsidiaries/${s.slug}`}
                          className="inline-flex items-center justify-center w-full rounded-full bg-[#0A66C2] text-white font-extrabold px-6 py-3 transition-all duration-200 shadow-[0_18px_55px_rgba(10,102,194,0.25)] hover:bg-[#0959A9] hover:shadow-[0_26px_80px_rgba(10,102,194,0.30)]"
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
