'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const KeyMetricsSection: React.FC = () => {
  const { t } = useLanguage();
  const metrics = [
    {
      label: t('metrics.subsidiaries'),
      value: 15,
      suffix: '+',
      icon: BuildingOfficeIcon,
    },
    {
      label: t('metrics.partners'),
      value: 200,
      suffix: '+',
      icon: UserGroupIcon,
    },
    {
      label: t('metrics.projects'),
      value: 500,
      suffix: '+',
      icon: BriefcaseIcon,
    },
    {
      label: t('metrics.sectors'),
      value: 10,
      suffix: '',
      icon: GlobeAltIcon,
    },
  ];

  return (
    <section className="apg-section-divider relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#07337A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_0.0625rem,transparent_0.0625rem),linear-gradient(to_bottom,rgba(255,255,255,0.55)_0.0625rem,transparent_0.0625rem)] bg-[size:4.5rem_4.5rem]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.18em] text-white/75 uppercase font-extrabold mb-4">{t('metrics.tag')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] text-white leading-[1.06]">{t('metrics.title')}</h2>
            <p className="mt-5 text-lg text-white/80">{t('metrics.desc')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="rounded-3xl bg-white/96 border border-white/26 p-7 h-full shadow-[var(--shadow-card)] group-hover:border-white/34 group-hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-[0_0.875rem_2.5rem_rgba(2,6,23,0.20)] transition-shadow duration-250 apg-ease">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 text-xs tracking-[0.16em] uppercase text-slate-700 font-extrabold truncate">{item.label}</div>
                  </div>
                  <div className="mt-8 text-5xl font-extrabold text-slate-950">
                    <AnimatedNumber value={item.value} format={item.suffix ? 'suffix' : 'number'} suffix={item.suffix} />
                  </div>
                  <div className="mt-3 text-sm text-slate-700">{t('metrics.caption')}</div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
