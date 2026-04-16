'use client';

import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimoniClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="relative overflow-hidden pt-24 pb-12 bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
          <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] text-white/75 font-extrabold">{t('testimoni.tag')}</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
              {t('testimoni.title')}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
              {t('testimoni.desc')}
            </p>
          </div>
        </div>
      </header>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 apg-ease">
            <p className="text-xl text-slate-600">
              {t('testimoni.placeholder.quote')}
            </p>
            <p className="mt-4 text-slate-950 font-extrabold">{t('testimoni.placeholder.author')}</p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

