'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const subsidiariesData = [
  {
    name: 'PT. Buana Perkasa Rajanegara',
    slug: 'bpr',
    logoSrc: '/images/bpr.png',
  },
  {
    name: 'PT. Dwi Kusuma Perkasa',
    slug: 'dwp',
    logoSrc: '/images/dwp.png',
  },
  {
    name: 'PT. Sipbro',
    slug: 'sipbro',
    logoSrc: '/images/sipbro.png',
  },
  {
    name: 'PT. PLN',
    slug: 'pln',
    logoSrc: '/images/pln.png',
  },
  {
    name: 'PT. Qjamin',
    slug: 'qjamin',
    logoSrc: '/images/qjamin.png',
  },
  {
    name: 'PT. Proteksi',
    slug: 'proteksi',
    logoSrc: '/images/proteksi.png',
  },
  {
    name: 'PT. Pataka',
    slug: 'pataka',
    logoSrc: '/images/pataka.png',
  },
  {
    name: 'Prada Badminton Club',
    slug: 'prada-bc',
    logoSrc: '/images/prada.png',
  },
  {
    name: 'PT. Lintas Perkasa Solutions',
    slug: 'lps',
    logoSrc: '/images/lps.png',
  },
  {
    name: 'PT. Caraka Mulia',
    slug: 'caraka-mulia',
    logoSrc: '/images/caraka.png',
  },
];

const SubsidiariesShowcaseSection = () => {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  // Highlight only top 6 subsidiaries for homepage
  const highlightSubsidiaries = subsidiariesData.slice(0, 6);

  return (
    <section className="apg-section-divider relative py-12 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 shadow-sm"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#0A66C2] animate-pulse" />
            Institutional Network
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-950 mb-4 sm:mb-6 leading-snug tracking-tight max-w-[260px] sm:max-w-none mx-auto"
          >
            {t('subsidiaries.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-slate-600 max-w-[320px] sm:max-w-2xl mx-auto leading-relaxed"
          >
            {t('subsidiaries.desc')}
          </motion.p>
        </div>

        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-8 lg:p-12 shadow-sm sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-200/60 transition-shadow duration-300 sm:hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            {highlightSubsidiaries.map((s, index) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
                className={`relative group ${index % 3 !== 2 ? 'md:border-r md:border-slate-100' : ''} ${index < 3 ? 'md:border-b md:border-slate-100' : ''} ${index % 2 !== 1 ? 'border-r border-slate-100 md:border-r-0' : ''} ${index < 4 ? 'border-b border-slate-100 md:border-b-0' : ''}`}
              >
                <Link 
                  href={`/subsidiaries/${s.slug}`}
                  className="relative flex flex-col h-full p-6 sm:p-12 items-center justify-center transition-all duration-300 active:bg-slate-50 sm:hover:bg-slate-50 focus:outline-none"
                >
                  <span className="sr-only">{s.name}</span>
                  <div className="relative w-full h-full max-w-[8rem] sm:max-w-[10rem] aspect-[3/2] transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={s.logoSrc}
                      alt={`${s.name} logo`}
                      fill
                      sizes="(min-width: 64rem) 14vw, (min-width: 48rem) 26vw, 42vw"
                      onLoad={() => setLoaded((prev) => ({ ...prev, [s.slug]: true }))}
                      className={`object-contain transition-all duration-500 drop-shadow-sm ${loaded[s.slug] ? 'opacity-100 group-hover:scale-105 group-hover:-translate-y-1 group-hover:drop-shadow-md' : 'opacity-0'}`}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link 
            href="/subsidiaries" 
            className="w-full sm:w-auto inline-flex min-h-[3.5rem] items-center justify-center gap-3 bg-[#0A66C2] text-white font-extrabold px-8 py-4 rounded-full shadow-sm sm:shadow-md sm:shadow-[#0A66C2]/20 sm:hover:bg-[#0959A9] transition-all duration-300 ease-out sm:hover:shadow-lg sm:hover:shadow-[#0A66C2]/30 sm:hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98] group"
          >
            {t('subsidiaries.cta')}
            <span className="transition-transform duration-300 sm:group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidiariesShowcaseSection;
