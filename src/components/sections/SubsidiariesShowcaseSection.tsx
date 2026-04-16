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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(2,6,23,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6"
          >
            {t('subsidiaries.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            {t('subsidiaries.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {highlightSubsidiaries.map((s, index) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <Link 
                href={`/subsidiaries/${s.slug}`}
                className="relative flex flex-col h-full rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color,background-color] duration-[500ms] apg-ease hover:border-slate-300 hover:bg-slate-50 hover:shadow-[var(--shadow-card-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                <span className="sr-only">{s.name}</span>
                <div className="relative isolate aspect-square flex items-center justify-center p-6 sm:p-7 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[500ms] apg-ease group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_62%)]" />
                  </div>
                  <div className="relative w-full h-full max-w-[132px] max-h-[132px] sm:max-w-[148px] sm:max-h-[148px] transition-transform duration-[500ms] apg-ease group-hover:scale-[1.06]">
                    <Image
                      src={s.logoSrc}
                      alt={`${s.name} logo`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 14vw, (min-width: 768px) 26vw, 42vw"
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
            className="apg-btn inline-flex items-center gap-3 bg-[#0A66C2] text-white font-extrabold px-10 py-4 rounded-full shadow-[0_18px_55px_rgba(10,102,194,0.26)] hover:bg-[#0959A9] hover:shadow-[0_30px_90px_rgba(10,102,194,0.30)]"
          >
            {t('subsidiaries.cta')}
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidiariesShowcaseSection;
