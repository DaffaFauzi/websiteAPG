'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseUsSection() {
  const { t } = useLanguage();

  const pillars = [
    { title: t('why.1.title'), desc: t('why.1.desc'), icon: LightBulbIcon },
    { title: t('why.2.title'), desc: t('why.2.desc'), icon: ShieldCheckIcon },
    { title: t('why.3.title'), desc: t('why.3.desc'), icon: ArrowTrendingUpIcon },
    { title: t('why.4.title'), desc: t('why.4.desc'), icon: GlobeAltIcon },
  ];

  return (
    <section className="apg-section-divider relative py-12 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Premium ambient background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-24 px-2">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.2em] text-[#0A66C2] uppercase font-bold mb-3"
          >
            {t('why.tag')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-snug max-w-[260px] sm:max-w-none mx-auto"
          >
            {t('why.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 sm:mt-6 text-sm sm:text-lg text-slate-600 font-medium max-w-[320px] sm:max-w-2xl mx-auto leading-relaxed"
          >
            {t('why.desc')}
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-10 items-start">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-0 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 sm:border-slate-200/80 shadow-none sm:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.05)] sm:hover:bg-white sm:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] sm:hover:border-slate-200 transition-all duration-300 active:scale-[0.98] sm:hover:-translate-y-1 ${idx % 2 === 1 ? 'lg:mt-8' : ''}`}
              >
                <div className="relative shrink-0 h-11 w-11 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-white border border-slate-100 text-[#0A66C2] flex items-center justify-center sm:mb-6 sm:shadow-sm transition-all duration-300 sm:group-hover:bg-[#0A66C2] sm:group-hover:text-white sm:group-hover:scale-105">
                  <item.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-semibold sm:font-bold text-slate-900 mb-1 sm:mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-500 sm:text-slate-700 sm:font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
