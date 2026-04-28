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
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.18em] text-slate-700 uppercase font-extrabold mb-4">
            {t('focus.tag')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-2">
            {t('focus.title.part1')}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--accent)] mb-6">
            {t('focus.title.part2')}
          </h2>
          <div className="h-1.5 w-20 bg-[var(--accent)] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {focusItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] mb-6">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;
