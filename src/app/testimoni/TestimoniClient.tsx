'use client';

import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';

export default function TestimoniClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <PageHero
        tag={t('testimoni.tag')}
        title={t('testimoni.title')}
        description={t('testimoni.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.testimonials') },
        ]}
        imageAlt={t('testimoni.title')}
      />

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

