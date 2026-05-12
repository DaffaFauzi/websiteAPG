'use client';

import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SejarahPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <PageHero
        tag={t('nav.about')}
        title={t('nav.about_history')}
        description={t('nav.about_history.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.about'), href: '/tentang' },
          { label: t('nav.about_history') },
        ]}
        imageAlt={t('nav.about_history')}
        variant="history"
      />

      <section className="apg-section-divider py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              <div className="text-xs font-black tracking-[0.18em] uppercase text-slate-500">{t('tentang.corporate_narrative')}</div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#041a40]">
                {t('tentang.hero.title')}
              </h2>
              <div className="mt-6 space-y-5">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{t('tentang.hero.p1')}</p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{t('tentang.hero.p2')}</p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t('hero.about.p1')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
