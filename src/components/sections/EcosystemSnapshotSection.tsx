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
      bg: 'bg-slate-50',
    },
    {
      icon: BuildingLibraryIcon,
      title: t('ecosystem.insurance'),
      tagline: t('ecosystem.insurance.tag'),
      bg: 'bg-white',
    },
    {
      icon: LightBulbIcon,
      title: t('ecosystem.consulting'),
      tagline: t('ecosystem.consulting.tag'),
      bg: 'bg-white',
    },
    {
      icon: SwatchIcon,
      title: t('ecosystem.sports'),
      tagline: t('ecosystem.sports.tag'),
      bg: 'bg-slate-50',
    },
    {
      icon: PuzzlePieceIcon,
      title: t('ecosystem.solutions'),
      tagline: t('ecosystem.solutions.tag'),
      bg: 'bg-white',
    },
  ];

  return (
    <section className="apg-section-divider relative py-12 sm:py-28 lg:py-32 bg-white overflow-hidden">
      {/* Premium ambient background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 sm:mb-6"
            >
              Strategic Ecosystem
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-snug tracking-tight max-w-[260px] sm:max-w-none"
            >
              {t('ecosystem.title.part1')}
              <span className="text-[#0A66C2] block mt-1 sm:mt-2">{t('ecosystem.title.part2')}</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block max-w-sm text-right"
          >
            <p className="text-slate-600 leading-relaxed font-medium">A diversified portfolio connected by enterprise governance and shared strategic vision.</p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border ${
                  index === 0 
                    ? 'lg:col-span-2 border-[#0A66C2]/20 shadow-md sm:shadow-lg sm:hover:shadow-xl bg-slate-50' 
                    : 'border-slate-200/50 sm:border-slate-200/60 shadow-sm sm:hover:shadow-md bg-white'
                } p-6 sm:p-10 active:scale-[0.98] transition-all duration-300 apg-ease flex flex-col justify-between min-h-[14rem] sm:min-h-[16rem]`}
              >
                <div className="relative z-10">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm text-[#0A66C2] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2]">
                    <sector.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 text-slate-950 tracking-tight">{sector.title}</h3>
                  <p className="text-base leading-relaxed text-slate-600 font-medium">{sector.tagline}</p>
                </div>
                
                {/* Subtle corner accent on hover - Hidden on mobile */}
                <div className="hidden sm:block absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#0A66C2]/0 to-[#0A66C2]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
          
          {/* Fill the 6th spot with an informative/actionable card */}
          <motion.div
             initial={{ opacity: 0, y: 24 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 5 * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
             className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A66C2] to-[#07337A] p-6 sm:p-10 shadow-md sm:shadow-[0_20px_40px_rgba(10,102,194,0.3)] flex flex-col justify-center items-center text-center min-h-[14rem] sm:min-h-[16rem] lg:col-span-3 w-full"
          >
             <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Explore Full Ecosystem</h3>
             <p className="text-white/80 mb-6 sm:mb-8 max-w-xs text-sm sm:text-base">Discover how our subsidiaries synergize to create national impact.</p>
             <button className="w-full sm:w-auto inline-flex min-h-[3rem] sm:min-h-[3.5rem] items-center justify-center bg-white text-[#0A66C2] font-bold px-8 py-3 sm:py-4 rounded-full shadow-sm sm:shadow-md sm:hover:shadow-lg sm:hover:bg-slate-50 transition-all duration-300 ease-out sm:hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]">
                View Portfolio
             </button>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSnapshotSection;
