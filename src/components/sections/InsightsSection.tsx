'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type Insight = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
};

export default function InsightsSection() {
  const { t } = useLanguage();

  const items: Insight[] = [
    { title: t('insights.1.title'), excerpt: t('insights.1.excerpt'), tag: t('insights.1.tag'), href: '#' },
    { title: t('insights.2.title'), excerpt: t('insights.2.excerpt'), tag: t('insights.2.tag'), href: '#' },
    { title: t('insights.3.title'), excerpt: t('insights.3.excerpt'), tag: t('insights.3.tag'), href: '#' },
  ];

  return (
    <section className="apg-section-divider relative py-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(2,6,23,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.22em] text-[#0A66C2] uppercase font-extrabold mb-4">{t('insights.tag')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950">{t('insights.title')}</h2>
            <p className="mt-5 text-lg text-slate-600">{t('insights.desc')}</p>
          </div>
          <Link href="#" className="apg-btn inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-950 shadow-[var(--shadow-card)] hover:border-slate-300 hover:bg-slate-50 hover:shadow-[var(--shadow-card-hover)]">
            {t('insights.cta')}
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link
                href={item.href}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-[500ms] apg-ease hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] sm:flex-row"
              >
                <div className="relative h-44 w-full bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] sm:h-auto sm:w-72">
                  <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:36px_36px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/90 font-extrabold backdrop-blur">
                    {item.tag}
                  </div>
                </div>
                <div className="flex-1 p-7">
                  <div className="text-xl font-extrabold text-slate-950 leading-snug">{item.title}</div>
                  <p className="mt-3 text-sm text-slate-600 leading-6">{item.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0A66C2]">
                    {t('insights.readMore')}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
