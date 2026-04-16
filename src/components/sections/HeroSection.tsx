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
    'h-full min-h-[188px] rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 apg-ease flex flex-col';

  const overviewDescClass =
    'mt-4 text-sm leading-6 text-slate-600 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]';

  return (
    <section className="apg-section-divider relative overflow-hidden bg-white pt-20 pb-24 text-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(0,128,128,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start lg:items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs tracking-[0.22em] text-[#0A66C2] font-extrabold uppercase mb-4">{t('overview.tag')}</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-slate-950 leading-[1.08]">{t('overview.title')}</h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">{t('overview.desc')}</p>
            </motion.div>

            <div className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2">
              {leftCards.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={overviewCardClass}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center text-lg">{item.icon}</div>
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-500 font-bold">{item.title}</div>
                  </div>
                  <p className={overviewDescClass}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#0A66C2]/10 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-[#E7F3FF] via-white to-[#E9FBF6] p-6 shadow-[0_40px_100px_rgba(15,23,42,0.10)] overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0A66C2]/12 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: t('overview.highlight.1.value'), label: t('overview.highlight.1.label') },
                  { value: t('overview.highlight.2.value'), label: t('overview.highlight.2.label') },
                  { value: t('overview.highlight.3.value'), label: t('overview.highlight.3.label') },
                  { value: t('overview.highlight.4.value'), label: t('overview.highlight.4.label') },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-white/70 bg-white/90 backdrop-blur p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 apg-ease"
                  >
                    <div className="text-3xl font-extrabold text-slate-950">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500 font-bold">{item.label}</div>
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
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={overviewCardClass}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-slate-100 flex items-center justify-center text-lg">{item.icon}</div>
                    <div className="text-sm uppercase tracking-[0.22em] text-slate-500 font-bold">{item.title}</div>
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
                className="apg-btn rounded-full bg-[#0A66C2] hover:bg-[#0959A9] shadow-[0_18px_55px_rgba(10,102,194,0.28)] hover:shadow-[0_30px_90px_rgba(10,102,194,0.34)]"
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
