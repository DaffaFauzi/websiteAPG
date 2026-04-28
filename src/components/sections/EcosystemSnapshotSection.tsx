'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BanknotesIcon,
  BuildingLibraryIcon,
  LightBulbIcon,
  SwatchIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

const EcosystemSnapshotSection = () => {
  const { t } = useLanguage();
  const sectors = [
    {
      icon: BanknotesIcon,
      title: t('ecosystem.finance'),
      tagline: t('ecosystem.finance.tag'),
    },
    {
      icon: BuildingLibraryIcon,
      title: t('ecosystem.insurance'),
      tagline: t('ecosystem.insurance.tag'),
    },
    {
      icon: LightBulbIcon,
      title: t('ecosystem.consulting'),
      tagline: t('ecosystem.consulting.tag'),
    },
    {
      icon: SwatchIcon,
      title: t('ecosystem.sports'),
      tagline: t('ecosystem.sports.tag'),
    },
    {
      icon: PuzzlePieceIcon,
      title: t('ecosystem.solutions'),
      tagline: t('ecosystem.solutions.tag'),
    },
  ];

  const cardThemes = [
    {
      accent: 'text-[#0A66C2]',
    },
    {
      accent: 'text-[#FF7A00]',
    },
    {
      accent: 'text-[#16A34A]',
    },
  ];

  return (
    <section className="apg-section-divider relative section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
              {t('ecosystem.tag')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
              {t('ecosystem.title.part1')}
              <span className="text-[#0A66C2]">{t('ecosystem.title.part2')}</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={[
                  'group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease',
                ].join(' ')}
              >
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                    <sector.icon className={['h-6 w-6', theme.accent].join(' ')} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3 text-slate-950 truncate">{sector.title}</h3>
                  <p className="text-sm leading-relaxed line-clamp-2 min-h-[2.5rem] text-slate-700">{sector.tagline}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSnapshotSection;
