'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import NavbarSection from '@/components/sections/NavbarSection';
import FallbackImage from '@/components/ui/FallbackImage';
import { subsidiariesData } from './subsidiariesData';

export default function SubsidiariesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <NavbarSection />

      <section className="apg-section-divider bg-slate-50 pt-8 pb-8 sm:pt-10 sm:pb-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#0A66C2] text-white shadow-[0_30px_90px_rgba(2,6,23,0.18)]">
            <div className="absolute inset-0">
              <FallbackImage
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2200"
                fallbackSrc="/images/presentation-placeholder.svg"
                alt="Subsidiaries ecosystem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/92 via-[#0A66C2]/70 to-[#0A66C2]/30" />
              <div className="absolute inset-0 opacity-[0.10]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(4,26,64,0.45),transparent_60%)]" />
              </div>
            </div>

            <div className="relative z-10 px-7 sm:px-10 lg:px-14 pt-10 sm:pt-12 pb-12 sm:pb-14">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-md">
                  <div className="relative h-5 w-16">
                    <Image
                      src="/images/apgg.png"
                      alt={t('brand.logoAlt')}
                      fill
                      sizes="64px"
                      className="object-contain [filter:brightness(0)_invert(1)]"
                      priority
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white/90">
                    {t('nav.subsidiaries')}
                  </span>
                </div>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-end">
                <div>
                  <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.03] drop-shadow-sm">
                    {t('subsidiaries.title')}
                  </h1>
                  <p className="mt-6 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose font-medium">
                    {t('subsidiaries.desc')}
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="relative h-[18rem] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md">
                    <FallbackImage
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600"
                      fallbackSrc="/images/presentation-placeholder.svg"
                      alt="Ecosystem collaboration"
                      fill
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#041a40]/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {subsidiariesData.map((s, idx) => {
              const description = t(s.descKey);
              const shortDesc = description.length > 90 ? description.substring(0, 90) + '...' : description;
              const sectorLabel = s.categoryLabelKey ? t(s.categoryLabelKey) : t(s.sectorKey);

              return (
                <Link
                  href={`/subsidiaries/${s.slug}`}
                  key={s.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm hover:shadow-lg hover:border-[#0A66C2]/20 transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  <div className="relative flex items-center justify-center w-full h-44 sm:h-48 bg-white border-b border-slate-100 overflow-hidden px-8 pt-10 pb-6">
                    <div
                      className={[
                        'relative w-full h-[5rem] sm:h-[5.5rem] max-w-[13rem] mx-auto transform-gpu',
                        s.slug === 'prada-bc' ? 'scale-[0.9]' : '',
                        s.slug === 'dwp' ? 'scale-[0.9]' : '',
                        s.slug === 'bpr' ? 'scale-[0.92]' : '',
                        s.slug === 'sipbro' ? 'scale-[1.05]' : '',
                        s.slug === 'qjamin' ? 'scale-[1.04]' : '',
                        s.slug === 'lps' ? 'scale-[1.12]' : '',
                        s.slug === 'caraka-mulia' ? 'scale-[1.1]' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {s.logoSrc ? (
                        <Image
                          src={s.logoSrc}
                          alt={`${s.displayName} logo`}
                          fill
                          className={[
                            'object-contain transition-transform duration-300 ease-out group-hover:scale-[1.05]',
                            s.slug === 'prada-bc' ? 'filter brightness-105 contrast-125' : '',
                            s.slug === 'caraka-mulia' ? 'filter brightness-110 contrast-150 saturate-110' : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          sizes="(max-width: 48rem) 50vw, (max-width: 75rem) 33vw, 200px"
                          priority={idx < 3}
                        />
                      ) : null}
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-[9px] font-extrabold tracking-[0.18em] text-slate-500 uppercase relative z-10">
                        {sectorLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-grow">
                    <div className="absolute top-0 left-6 right-6 h-px bg-[#0A66C2] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-left" />

                    <h2 className="text-base sm:text-lg font-extrabold text-[#041a40] leading-tight mb-2 group-hover:text-[#0A66C2] transition-colors duration-300">
                      {s.legalName}
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
