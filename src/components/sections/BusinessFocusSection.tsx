'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LightBulbIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const BusinessFocusSection = () => {
  const { t } = useLanguage();
  const focusItems = [
    {
      icon: ScaleIcon,
      title: t('focus.1.title'),
      description: t('focus.1.desc'),
    },
    {
      icon: ShieldCheckIcon,
      title: t('focus.2.title'),
      description: t('focus.2.desc'),
    },
    {
      icon: LightBulbIcon,
      title: t('focus.3.title'),
      description: t('focus.3.desc'),
    },
    {
      icon: UserGroupIcon,
      title: t('focus.4.title'),
      description: t('focus.4.desc'),
    },
    {
      icon: Cog6ToothIcon,
      title: t('focus.5.title'),
      description: t('focus.5.desc'),
    },
  ];

  return (
    <section className="py-12 sm:py-24 lg:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#0A66C2] font-bold uppercase mb-3">
            {t('focus.tag')}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-1 leading-snug max-w-[260px] sm:max-w-none mx-auto">
            {t('focus.title.part1')}
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A66C2] mb-5 sm:mb-6 leading-snug max-w-[260px] sm:max-w-none mx-auto">
            {t('focus.title.part2')}
          </h2>
          <div className="h-[3px] w-12 bg-[#0A66C2]/70 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
          {focusItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-0 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 sm:border-slate-200/80 shadow-none sm:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] sm:hover:border-slate-300 sm:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 group sm:hover:-translate-y-1"
            >
              <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0A66C2]/8 sm:bg-slate-50 flex items-center justify-center text-[#0A66C2] sm:mb-5 sm:shadow-sm sm:group-hover:bg-[#0A66C2] sm:group-hover:text-white transition-colors duration-300">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-3 leading-snug">{item.title}</h3>
                <p className="text-slate-500 sm:text-slate-700 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;
