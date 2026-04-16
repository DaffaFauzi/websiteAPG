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
      card: 'bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] border-white/15',
      iconWrap: 'bg-white/14',
      text: 'text-white',
      subtext: 'text-white/80',
    },
    {
      card: 'bg-gradient-to-br from-[#FF8A1A] via-[#FF7A00] to-[#D85F00] border-white/15',
      iconWrap: 'bg-white/14',
      text: 'text-white',
      subtext: 'text-white/80',
    },
    {
      card: 'bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#0F7A38] border-white/15',
      iconWrap: 'bg-white/14',
      text: 'text-white',
      subtext: 'text-white/80',
    },
  ];

  return (
    <section className="apg-section-divider relative section-padding bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(0,128,128,0.06),transparent_58%)]" />
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={[
                  'group relative overflow-hidden rounded-3xl border p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 apg-ease',
                  theme.card,
                ].join(' ')}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="relative">
                  <div className={['mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl', theme.iconWrap].join(' ')}>
                    <sector.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={['text-xl font-extrabold mb-3', theme.text].join(' ')}>{sector.title}</h3>
                  <p className={['text-sm leading-relaxed', theme.subtext].join(' ')}>{sector.tagline}</p>
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
