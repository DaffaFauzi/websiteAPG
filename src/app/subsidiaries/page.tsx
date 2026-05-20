'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import { subsidiariesData } from './subsidiariesData';

export default function SubsidiariesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('nav.subsidiaries')}
        title={t('subsidiaries.title')}
        description={t('subsidiaries.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.subsidiaries') },
        ]}
        imageAlt={t('subsidiaries.title')}
      />

      <section id="portfolio" className="apg-section-divider py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase">
                {t('subsidiaries.card.label')}
              </div>
              <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-[#041a40]">
                {t('subsidiaries.title')}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl font-medium">
                {t('subsidiaries.desc')}
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {subsidiariesData.map((s, idx) => {
              const description = t(s.descKey);
              const shortDesc = description.length > 90 ? description.substring(0, 90) + '...' : description;
              const sectorLabel = s.categoryLabelKey ? t(s.categoryLabelKey) : t(s.sectorKey);

              // Final optical size equalization scale map aligned to correct subsidiaries slugs
              const subsidiaryLogoScale: Record<string, string> = {
                "bpr": "scale-100",                      // bpr-bonding
                "caraka-mulia": "scale-[1.8]",           // caraka-mulia
                "dwp": "scale-[0.85]",                   // dwp-insurance
                "sipbro": "scale-[1.1]",                 // sip-bro
                "qjamin": "scale-[1.1]",                 // khalifah-jamin-perkasa
                "prada-bc": "scale-[1.2]",               // prada-badminton-club
                "lps": "scale-100",                      // lps-insurance-consultant
                "pln": "scale-[1.05]",                   // perkasa-lintas-nasional
              };

              return (
                <div
                  key={s.slug}
                  className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-out p-6 gap-4"
                >
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/60 text-[9px] font-extrabold tracking-[0.15em] text-slate-500 uppercase">
                      {sectorLabel}
                    </span>
                  </div>

                  <div className="h-[90px] flex items-center justify-center mb-5 overflow-hidden w-full">
                    {s.logoSrc ? (
                      <div className={`flex items-center justify-center h-full ${subsidiaryLogoScale[s.slug] || "scale-100"}`}>
                        <img
                          src={s.logoSrc}
                          alt={`${s.displayName} logo`}
                          className={['h-[58px] w-auto object-contain select-none transition-transform duration-300 ease-out group-hover:scale-105', s.cssBlend || s.slug === 'caraka-mulia' || s.slug === 'prada-bc' ? 'mix-blend-multiply logo-clean' : ''].filter(Boolean).join(' ')}
                          loading={idx < 3 ? 'eager' : 'lazy'}
                        />
                      </div>
                    ) : (
                      <div className="text-lg font-black text-slate-300 uppercase tracking-widest">{s.displayName}</div>
                    )}
                  </div>

                  <div className="flex flex-col items-center text-center gap-2 flex-grow">
                    <h2 className="text-base sm:text-lg font-semibold text-[#041a40] leading-tight mb-1 group-hover:text-[#0A66C2] transition-colors duration-300">
                      {s.legalName}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-4 w-full">
                    <Link
                      href={`/subsidiaries/${s.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-50 text-[#041a40] text-[11px] font-extrabold border border-slate-200 hover:bg-slate-100 transition-colors duration-300 after:absolute after:inset-0 after:z-10"
                    >
                      {t('subsidiaries.card.cta')}
                    </Link>
                    {s.websiteUrl ? (
                      <a
                        href={s.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white text-[11px] font-extrabold hover:bg-[#041a40] transition-colors duration-300 shadow-sm shadow-blue-100 relative z-20"
                      >
                        Visit Website
                        <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-50 text-slate-400 text-[11px] font-extrabold border border-slate-100 cursor-not-allowed relative z-20">
                        No Website
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Access CTA */}
      <section className="apg-section-divider relative overflow-hidden py-16 lg:py-24 bg-white text-slate-950">
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
                {t('subsidiaries.cta.tag')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                {t('subsidiaries.cta.title')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                {t('subsidiaries.cta.desc')}
              </p>
              <Link
                href="/kontak"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-[#0A66C2] px-8 sm:px-10 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 truncate whitespace-nowrap"
              >
                {t('subsidiaries.cta.button')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
