'use client';

import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimoniClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <header className="relative overflow-hidden pt-16 sm:pt-24 pb-8 sm:pb-12 bg-[#0A66C2] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_68%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.18em] text-white/75 font-extrabold uppercase">{t('testimoni.tag')}</p>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-tight">
              {t('testimoni.title')}
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-prose">
              {t('testimoni.desc')}
            </p>
          </div>
        </div>
      </header>

      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 text-center shadow-[var(--shadow-card)]">
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-prose mx-auto">
              {t('testimoni.placeholder.quote')}
            </p>
            <p className="mt-4 text-slate-950 font-extrabold text-sm sm:text-base uppercase tracking-wider">{t('testimoni.placeholder.author')}</p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

