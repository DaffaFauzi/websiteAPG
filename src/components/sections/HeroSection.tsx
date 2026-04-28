"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const leftCards = [
    { title: t('overview.value.1.title'), desc: t('overview.value.1.desc'), icon: '🏢' },
    { title: t('overview.value.2.title'), desc: t('overview.value.2.desc'), icon: '🧭' },
  ];

  const rightCards = [
    { title: t('overview.value.3.title'), desc: t('overview.value.3.desc'), icon: '📈' },
    { title: t('overview.value.4.title'), desc: t('overview.value.4.desc'), icon: '🤝' },
  ];

  const overviewCardClass =
    'h-full min-h-[11.75rem] rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease flex flex-col';

  const overviewDescClass =
    'mt-4 text-sm leading-6 text-slate-700 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]';

  return (
    <section className="apg-section-divider relative overflow-hidden bg-white pt-20 pb-24 text-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start lg:items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-[14rem] sm:min-h-[15rem]"
            >
              <p className="text-xs tracking-[0.18em] text-[#0A66C2] font-extrabold uppercase mb-4">{t('overview.tag')}</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-slate-950 leading-[1.08]">{t('overview.title')}</h2>
              <p className="mt-5 text-lg text-slate-700 leading-relaxed max-w-xl">{t('overview.desc')}</p>
            </motion.div>

            <div className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2">
              {leftCards.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className={overviewCardClass}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center text-lg">{item.icon}</div>
                    <div className="min-w-0 text-sm uppercase tracking-[0.16em] text-slate-700 font-extrabold truncate">{item.title}</div>
                  </div>
                  <p className={overviewDescClass}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-slate-200 bg-[var(--bg-secondary)] p-6 shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: t('overview.highlight.1.value'), label: t('overview.highlight.1.label') },
                  { value: t('overview.highlight.2.value'), label: t('overview.highlight.2.label') },
                  { value: t('overview.highlight.3.value'), label: t('overview.highlight.3.label') },
                  { value: t('overview.highlight.4.value'), label: t('overview.highlight.4.label') },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 transition-[transform,border-color,background-color] duration-250 apg-ease"
                  >
                    <div className="text-3xl font-extrabold text-slate-950">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-700 font-extrabold truncate">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2">
              {rightCards.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className={overviewCardClass}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center text-lg">{item.icon}</div>
                    <div className="min-w-0 text-sm uppercase tracking-[0.16em] text-slate-700 font-extrabold truncate">{item.title}</div>
                  </div>
                  <p className={overviewDescClass}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center pt-2">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/subsidiaries')}
                className="apg-btn rounded-full"
              >
                {t('overview.cta.primary')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/tentang')}
                className="apg-btn rounded-full !text-slate-900 hover:bg-slate-900/5 !hover:text-slate-950 hover:border-slate-300"
              >
                {t('overview.cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
