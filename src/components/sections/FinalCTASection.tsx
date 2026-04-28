'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FinalCTASection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 bg-[var(--bg-secondary)] text-slate-950">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: '1.125rem' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.5rem] border border-slate-200 bg-[#0A66C2] text-white p-10 lg:p-14 shadow-[0_1.875rem_7.5rem_rgba(2,6,23,0.26)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase font-extrabold text-white/70">{t('cta.tag')}</p>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold">{t('cta.title')}</h2>
              <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">{t('cta.desc')}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="apg-btn relative rounded-full"
              >
                {t('cta.primary')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="apg-btn rounded-full border-white/30 bg-transparent text-white hover:bg-white/12 hover:text-white hover:-translate-y-[1px] active:translate-y-0"
              >
                {t('cta.secondary')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
