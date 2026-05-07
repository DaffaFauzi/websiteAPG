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
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] p-8 sm:p-14 lg:p-20 mb-16 sm:mb-24 shadow-[0_30px_60px_-15px_rgba(10,102,194,0.2)] border border-white/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/30" />
              {t('focus.tag')}
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              {t('focus.title.part1')} <span className="text-white/60">{t('focus.title.part2')}</span>
            </h2>

            <div className="h-0.5 w-24 bg-white/20 mb-8 rounded-full" />
            
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-xl">
              {t('overview.desc')}
            </p>
          </div>
        </motion.div>
        
        {/* Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {focusItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 hover:bg-white transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[#0A66C2] mb-6 shadow-sm group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-3 leading-snug">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;
