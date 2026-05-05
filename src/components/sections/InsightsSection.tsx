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

  const featured = items[0];
  const listItems = items.slice(1);

  return (
    <section className="apg-section-divider relative py-12 sm:py-20 lg:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative">
        <div className="flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between mb-16 sm:mb-20">
          <div className="max-w-2xl text-center sm:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm"
            >
              <span className="text-[#0A66C2]">📰</span> Corporate Newsroom
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 leading-tight tracking-tight max-w-[280px] sm:max-w-none mx-auto sm:mx-0"
            >
              {t('insights.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed max-w-[320px] sm:max-w-prose mx-auto sm:mx-0"
            >
              {t('insights.desc')}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-0"
          >
            <Link href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-sm sm:shadow-[0_8px_20px_rgba(0,0,0,0.04)] sm:hover:bg-slate-50 transition-all sm:hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] sm:hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] group border border-slate-200 min-h-[3rem]">
              {t('insights.cta')}
              <span className="transition-transform duration-300 sm:group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 group"
          >
            <Link href={featured.href} className="block h-full relative rounded-2xl sm:rounded-[2rem] overflow-hidden bg-white shadow-sm sm:shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 sm:group-hover:border-slate-200 active:scale-[0.98]">
              <div className="relative h-64 sm:h-80 md:h-96 w-full bg-[#0A66C2] overflow-hidden">
                <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute top-6 left-6 inline-flex rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[0.625rem] sm:text-xs tracking-[0.2em] uppercase text-white font-bold shadow-sm">
                  {featured.tag}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 text-white transform transition-transform duration-300 sm:group-hover:-translate-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 tracking-tight drop-shadow-md">
                  {featured.title}
                </h3>
                <p className="text-white/80 line-clamp-2 text-sm sm:text-base leading-relaxed mb-6 font-medium max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-white">
                  {t('insights.readMore')}
                  <span className="transition-transform duration-300 sm:group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Staked Articles */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {listItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                className="group flex-1"
              >
                <Link href={item.href} className="flex flex-col sm:flex-row h-full rounded-2xl sm:rounded-3xl bg-white shadow-sm sm:shadow-[0_8px_30px_rgb(0,0,0,0.03)] sm:hover:shadow-[0_16px_32px_rgb(0,0,0,0.06)] border border-slate-100 sm:hover:border-slate-200 transition-all duration-300 overflow-hidden active:scale-[0.98]">
                  <div className="relative h-40 sm:h-full sm:w-48 bg-slate-100 overflow-hidden shrink-0">
                    <div className="hidden sm:block absolute inset-0 bg-[#07337A]/5 group-hover:bg-[#07337A]/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 inline-flex rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[0.625rem] tracking-[0.15em] uppercase text-[#07337A] font-bold shadow-sm">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 leading-snug sm:group-hover:text-[#0A66C2] transition-colors duration-300 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A66C2]">
                      {t('insights.readMore')}
                      <span className="transition-transform duration-300 sm:group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
