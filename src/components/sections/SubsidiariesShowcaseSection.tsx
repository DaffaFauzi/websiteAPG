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
    <section className="apg-section-divider relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: '1.25rem' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6"
          >
            {t('subsidiaries.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: '1.25rem' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-700 max-w-3xl mx-auto"
          >
            {t('subsidiaries.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {highlightSubsidiaries.map((s, index) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link 
                href={`/subsidiaries/${s.slug}`}
                className="relative flex flex-col h-full rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color,background-color] duration-250 apg-ease hover:border-slate-300 hover:bg-slate-50 hover:shadow-[var(--shadow-card-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                <span className="sr-only">{s.name}</span>
                <div className="relative isolate aspect-square flex items-center justify-center p-6 sm:p-7 overflow-hidden">
                  <div className="relative w-full h-full max-w-[8.25rem] max-h-[8.25rem] sm:max-w-[9.25rem] sm:max-h-[9.25rem] transition-transform duration-250 apg-ease group-hover:scale-[1.02]">
                    <Image
                      src={s.logoSrc}
                      alt={`${s.name} logo`}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 64rem) 14vw, (min-width: 48rem) 26vw, 42vw"
                      onLoad={() => setLoaded((prev) => ({ ...prev, [s.slug]: true }))}
                      className={[
                        'object-contain transition-opacity duration-300 ease-out group-hover:mix-blend-multiply',
                        loaded[s.slug] ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            href="/subsidiaries" 
            className="apg-btn inline-flex items-center justify-center gap-3 min-h-12 bg-[#0A66C2] text-white font-extrabold px-10 py-4 rounded-full shadow-[0_0.875rem_2.5rem_rgba(10,102,194,0.22)] hover:bg-[#0959A9] hover:-translate-y-[1px] active:translate-y-0 truncate whitespace-nowrap"
          >
            {t('subsidiaries.cta')}
            <span className="text-xl transition-transform duration-250 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidiariesShowcaseSection;
