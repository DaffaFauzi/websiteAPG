'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPreviewSection = () => {
  const { t } = useLanguage();
  const summaryMetrics = [
    { value: t('overview.highlight.1.value'), label: t('overview.highlight.1.label') },
    { value: t('overview.highlight.2.value'), label: t('overview.highlight.2.label') },
  ];

  return (
    <section className="apg-section-divider relative py-16 lg:py-24 overflow-hidden bg-white text-slate-950">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.7)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(10,102,194,0.10),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(7,51,122,0.10),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-[#0A66C2]/5 border border-[#0A66C2]/10 px-4 py-2">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#0A66C2]">
                {t('overview.tag')}
              </span>
            </div>

            <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.03]">
              {t('about.preview.title')}
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-prose font-medium">
              {t('about.preview.desc')}
            </p>

            <div className="mt-8">
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center rounded-full bg-[#0A66C2] text-white px-8 py-4 font-black shadow-xl shadow-blue-500/25 active:scale-[0.98] transition-transform"
              >
                {t('about.preview.cta')}
                <span className="ml-3">→</span>
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {summaryMetrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                className="rounded-[2rem] bg-white text-[#041a40] shadow-[0_22px_50px_-22px_rgba(2,6,23,0.18)] border border-slate-200 px-8 py-7"
              >
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#0A66C2] leading-none">
                  {m.value}
                </div>
                <div className="mt-3 text-sm sm:text-base font-black text-slate-900">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
