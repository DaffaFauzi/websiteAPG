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
    <section className="apg-section-divider relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Premium ambient background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] p-8 sm:p-14 lg:p-20 mb-16 sm:mb-24 shadow-[0_30px_60px_-15px_rgba(10,102,194,0.2)] border border-white/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_60%)]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="max-w-3xl">
              <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/30" />
                {t('ecosystem.strategic_ecosystem')}
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                {t('ecosystem.title.part1')} <span className="text-white/60">{t('ecosystem.title.part2')}</span>
              </h2>

              <div className="h-0.5 w-24 bg-white/20 mb-0 rounded-full" />
            </div>

            <div className="max-w-xs hidden lg:block">
              <p className="text-white/70 text-lg font-medium leading-relaxed border-l border-white/20 pl-8">
                {t('ecosystem.strategic_desc')}
              </p>
            </div>
          </div>
        </motion.div>

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
             <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t('ecosystem.explore_title')}</h3>
             <p className="text-white/80 mb-6 sm:mb-8 max-w-xs text-sm sm:text-base">{t('ecosystem.explore_desc')}</p>
             <button className="w-full sm:w-auto inline-flex min-h-[3rem] sm:min-h-[3.5rem] items-center justify-center bg-white text-[#0A66C2] font-bold px-8 py-3 sm:py-4 rounded-full shadow-sm sm:shadow-md sm:hover:shadow-lg sm:hover:bg-slate-50 transition-all duration-300 ease-out sm:hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]">
                {t('ecosystem.explore_cta')}
             </button>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSnapshotSection;
