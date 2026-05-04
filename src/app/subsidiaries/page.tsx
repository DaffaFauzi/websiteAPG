'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import LogoBadge from '@/components/ui/LogoBadge';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
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
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <InnerPageHero
        tag={t('nav.subsidiaries')}
        title={t('subsidiaries.title')}
        description={t('subsidiaries.desc')}
      >
        <SubsidiariesVisual />
      </InnerPageHero>

      {/* Strategic Ecosystem Platform */}
      <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {subsidiaries.map((s, idx) => {
              const description = language === 'id' ? s.description.id : s.description.en;
              const shortDesc = description.length > 90 ? description.substring(0, 90) + '...' : description;
              
              return (
                <Link
                  href={`/subsidiaries/${s.slug}`}
                  key={s.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm hover:shadow-lg hover:border-[#0A66C2]/20 transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  {/* Logo Zone — Clean white canvas, no overlay, no plate */}
                  <div className="relative flex items-center justify-center w-full h-44 sm:h-48 bg-white border-b border-slate-100 overflow-hidden px-8 py-6">
                    {/* Subtle top-corner APG tint — purely decorative, not a box */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[4rem] bg-gradient-to-bl from-[#0A66C2]/5 to-transparent pointer-events-none" />
                    
                    <div className="relative w-full h-full max-w-[12rem] mx-auto">
                      <Image
                        src={s.logoSrc}
                        alt={`${s.name} logo`}
                        fill
                        className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width: 48rem) 50vw, (max-width: 75rem) 33vw, 200px"
                        priority={idx < 3}
                      />
                    </div>

                    {/* Sector badge — top left */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-[9px] font-extrabold tracking-[0.18em] text-slate-500 uppercase">
                        {language === 'id' ? s.sector.id : s.sector.en}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    {/* Hover accent bar */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-[#0A66C2] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-left" />

                    <h2 className="text-base sm:text-lg font-extrabold text-[#041a40] leading-tight mb-2 group-hover:text-[#0A66C2] transition-colors duration-300">
                      {s.name}
                    </h2>

                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5 flex-grow">
                      {shortDesc}
                    </p>

                    <div className="mt-auto flex items-center text-sm font-bold text-[#0A66C2] group-hover:text-[#041a40] transition-colors duration-300">
                      {t('subsidiaries.card.cta')}
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Access CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-white text-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden bg-slate-50 text-[#041a40] border border-slate-200 p-10 sm:p-14 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0A66C2] text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-8 shadow-sm">
                Ecosystem Synergies
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                Ingin berkolaborasi dengan ekosistem kami?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Kami selalu terbuka untuk peluang strategis lintas sektor. Temukan sinergi bersama Ardana Perkasa Group.
              </p>
              <Link
                href="/kontak"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-[#0A66C2] px-8 sm:px-10 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 truncate whitespace-nowrap"
              >
                Jelajahi Peluang
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
