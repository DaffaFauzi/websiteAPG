'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPreviewSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A66C2]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_68%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: '-1.875rem' }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-[0.18em] uppercase text-white/85 mb-6">
              {t('about.preview.tag')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] mb-6">
              {t('about.preview.title')}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              {t('about.preview.desc')}
            </p>
            <Link 
              href="/tentang" 
              className="apg-btn inline-flex items-center justify-center gap-3 min-h-12 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-slate-950 shadow-[0_1.125rem_3.125rem_rgba(0,0,0,0.16)] hover:bg-white/95 group truncate whitespace-nowrap"
            >
              {t('about.preview.cta')}
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-200 apg-ease">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: '1.875rem' }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/6 shadow-[0_1.875rem_7.5rem_rgba(0,0,0,0.22)]">
              <Image
                src="/images/hero_section_top_image.png"
                alt={t('about.preview.imageAlt')}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--background)]/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
