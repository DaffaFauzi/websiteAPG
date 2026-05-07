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
    name: 'SIP BRO',
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
    name: 'Prada Badminton Club',
    slug: 'prada-bc',
    logoSrc: '/images/prada.png',
  },
  {
    name: 'LPS Insurance Consultant',
    slug: 'lps',
    logoSrc: '/images/lps.png',
  },
  {
    name: 'Caraka Mulia',
    slug: 'caraka-mulia',
    logoSrc: '/images/caraqu.png',
  },
];

const SubsidiariesShowcaseSection = () => {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  // Highlight only top 6 subsidiaries for homepage
  const highlightSubsidiaries = subsidiariesData.slice(0, 6);

  return (
    <section className="apg-section-divider relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] p-8 sm:p-14 lg:p-20 mb-12 sm:mb-16 shadow-[0_30px_60px_-15px_rgba(10,102,194,0.2)] border border-white/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/30" />
              {t('subsidiaries.tag')}
              <span className="w-8 h-[1px] bg-white/30" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              {t('subsidiaries.title')}
            </h2>

            <div className="h-0.5 w-24 bg-white/20 mb-8 rounded-full" />
            
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl">
              {t('subsidiaries.desc')}
            </p>
          </div>
        </motion.div>

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
                  <div
                    className={[
                      'relative w-full h-[4.5rem] sm:h-[5rem] max-w-[13rem] transition-transform duration-500 group-hover:scale-105 transform-gpu',
                      s.slug === 'prada-bc' ? 'scale-[0.9]' : '',
                      s.slug === 'dwp' ? 'scale-[0.9]' : '',
                      s.slug === 'bpr' ? 'scale-[0.92]' : '',
                      s.slug === 'sipbro' ? 'scale-[1.05]' : '',
                      s.slug === 'qjamin' ? 'scale-[1.04]' : '',
                      s.slug === 'lps' ? 'scale-[1.12]' : '',
                      s.slug === 'caraka-mulia' ? 'scale-[1.1]' : '',
                    ].join(' ')}
                  >
                    <Image
                      src={s.logoSrc}
                      alt={`${s.name} logo`}
                      fill
                      className={[
                        'object-contain transition-all duration-500 transform group-hover:scale-110',
                        s.slug === 'prada-bc' ? 'filter brightness-105 contrast-125' : '',
                        s.slug === 'caraka-mulia' ? 'filter brightness-110 contrast-150 saturate-110' : '',
                        loaded[s.slug] ? 'opacity-100 scale-100' : 'opacity-0 scale-95 blur-sm',
                      ].join(' ')}
                      onLoad={() => setLoaded(prev => ({ ...prev, [s.slug]: true }))}
                      sizes="(max-width: 640px) 120px, 160px"
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
