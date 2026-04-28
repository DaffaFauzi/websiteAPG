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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.18em] text-[#0A66C2] uppercase font-extrabold mb-4">{t('insights.tag')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950">{t('insights.title')}</h2>
            <p className="mt-5 text-lg text-slate-700">{t('insights.desc')}</p>
          </div>
          <Link href="#" className="apg-btn inline-flex items-center justify-center gap-3 min-h-12 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-950 shadow-[var(--shadow-card)] hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-[1px] active:translate-y-0 truncate whitespace-nowrap">
            {t('insights.cta')}
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: '1.125rem' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                href={item.href}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-250 apg-ease hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] sm:flex-row"
              >
                <div className="relative h-44 w-full bg-[#0A66C2] sm:h-auto sm:w-72">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_58%)]" />
                  <div className="absolute left-5 top-5 inline-flex max-w-[calc(100%-2.5rem)] rounded-full bg-white/14 px-3 py-1 text-[0.625rem] tracking-[0.18em] uppercase text-white/90 font-extrabold truncate">
                    {item.tag}
                  </div>
                </div>
                <div className="flex-1 p-7">
                  <div className="text-xl font-extrabold text-slate-950 leading-snug line-clamp-2 min-h-[2.75rem]">{item.title}</div>
                  <p className="mt-3 text-sm text-slate-700 leading-6 line-clamp-2 min-h-[3rem]">{item.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0A66C2]">
                    {t('insights.readMore')}
                    <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
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
