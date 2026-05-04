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
    <section className="apg-section-divider relative py-20 sm:py-24 lg:py-24 bg-white overflow-hidden">
      {/* Premium ambient background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-24 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.2em] text-[#0A66C2] uppercase font-extrabold mb-4"
          >
            {t('why.tag')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight"
          >
            {t('why.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            {t('why.desc')}
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-start">
            {pillars.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:border-slate-300 transition-all duration-500 apg-ease hover:-translate-y-1 ${idx % 2 === 1 ? 'lg:mt-8' : ''}`}
              >
                <div className="relative mb-8 h-16 w-16 rounded-2xl bg-white shadow-sm border border-slate-100 text-[#0A66C2] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white z-10">
                  <item.icon className="h-8 w-8" />
                  {/* Subtle glow underneath icon on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[#0A66C2] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                </div>
                
                <h3 className="text-xl font-extrabold text-slate-950 mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">{item.desc}</p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
