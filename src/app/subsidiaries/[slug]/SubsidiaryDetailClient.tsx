'use client';

import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

type Props = {
  slug: string;
  displayName: string;
  legalName: string;
  profile: { id: string; en: string };
  logoSrc?: string;
  cssBlend?: boolean;
};

export default function SubsidiaryDetailClient({ slug, displayName, legalName, profile, logoSrc, cssBlend }: Props) {
  const { t, language } = useLanguage();
  const profileText = language === 'id' ? profile.id : profile.en;

  const highlights = [
    t(`subsidiary.${slug}.highlight.1`),
    t(`subsidiary.${slug}.highlight.2`),
    t(`subsidiary.${slug}.highlight.3`),
  ];

  const alignment = [
    t('subsidiary.detail.alignment.1'),
    t('subsidiary.detail.alignment.2'),
    t('subsidiary.detail.alignment.3'),
    t('subsidiary.detail.alignment.4'),
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('subsidiary.detail.tag')}
        title={displayName}
        description={legalName}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.subsidiaries'), href: '/subsidiaries' },
          { label: displayName },
        ]}
        imageAlt={displayName}
      />

      <section className="apg-section-divider py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="rounded-[2.5rem] bg-white p-7 sm:p-8 shadow-[0_20px_55px_-35px_rgba(2,6,23,0.20)] ring-1 ring-slate-200/70">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <div className="relative h-16 sm:h-24 px-4 sm:px-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-[0_16px_45px_rgba(2,6,23,0.12)] flex items-center justify-center shrink-0">
                {logoSrc ? (
                  <div className="relative h-10 sm:h-14 w-32 sm:w-48 flex items-center justify-center">
                    <Image
                      src={logoSrc}
                      alt={`${displayName} logo`}
                      fill
                      className={['object-contain', cssBlend ? 'mix-blend-multiply' : ''].filter(Boolean).join(' ')}
                      sizes="(max-width: 640px) 96px, 160px"
                    />
                  </div>
                ) : (
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-400">{displayName.charAt(0)}</div>
                )}
              </div>
              <div>
                <p className="text-xs sm:text-sm tracking-[0.15em] text-[#0A66C2] font-black uppercase">
                  {t(`subsidiary.${slug}.sector`)}
                </p>
                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 leading-tight">
                  {displayName}
                </h2>
                <p className="mt-2 text-sm text-slate-600 font-semibold">
                  {legalName}
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-4xl space-y-3">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {profileText}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {t(`subsidiary.${slug}.desc`)}
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/subsidiaries"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-950 hover:bg-slate-50 active:scale-95 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t('subsidiary.detail.back')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Intelligence Dashboard */}
      <section className="apg-section-divider py-10 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            
            {/* Value Creation Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 rounded-[2.5rem] bg-white p-7 sm:p-8 shadow-[0_20px_55px_-35px_rgba(2,6,23,0.20)] ring-1 ring-slate-200/70 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 ring-1 ring-slate-200/70 text-slate-500 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-5">
                {t('subsidiary.detail.value_creation')}
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#041a40] leading-tight mb-6">
                {t('subsidiary.detail.highlights')}
              </h2>
              
              <ul className="text-sm sm:text-base text-slate-700">
                {highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className={[
                      'flex items-start gap-4',
                      idx === 0 ? '' : 'mt-4 pt-4 border-t border-slate-200/70',
                    ].join(' ')}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center font-black mt-0.5 text-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="leading-relaxed font-medium text-slate-800">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise Alignment Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="relative lg:col-span-5 rounded-[2.5rem] bg-white p-7 sm:p-8 overflow-hidden shadow-[0_20px_55px_-35px_rgba(2,6,23,0.20)] ring-1 ring-slate-200/70 flex flex-col justify-center"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.10),transparent_60%)]" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 ring-1 ring-slate-200/70 text-slate-500 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-5">
                  {t('subsidiary.detail.strategic_matrix')}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-tight mb-3">
                  {t('subsidiary.detail.alignment.title')}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {t('subsidiary.detail.alignment.desc')}
                </p>

                <div className="grid gap-3">
                  {alignment.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-200/70 hover:ring-slate-300 transition-colors duration-300"
                    >
                      <span className="grid place-items-center w-8 h-8 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

