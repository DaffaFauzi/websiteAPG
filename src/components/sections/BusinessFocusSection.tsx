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
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs tracking-[0.18em] text-[#0A66C2] font-extrabold uppercase mb-3 sm:mb-4">
            {t('focus.tag')}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-950 mb-2 leading-tight">
            {t('focus.title.part1')}
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#0A66C2] mb-4 sm:mb-6 leading-tight drop-shadow-sm">
            {t('focus.title.part2')}
          </h2>
          <div className="h-1 w-16 bg-[#0A66C2] mx-auto rounded-full shadow-[0_2px_10px_rgba(10,102,194,0.4)]" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {focusItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] active:scale-95 transition-all duration-300 apg-ease group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0A66C2] mb-6 shadow-sm group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-sm max-w-prose">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;
