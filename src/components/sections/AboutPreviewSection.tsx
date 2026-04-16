'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPreviewSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-[0.2em] uppercase text-white/85 backdrop-blur mb-6">
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
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-slate-950 shadow-[0_18px_50px_rgba(0,0,0,0.20)] hover:bg-white/95 transition-all group"
            >
              {t('about.preview.cta')}
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/15 bg-white/5 backdrop-blur shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
              <Image
                src="/images/hero_section_top_image.png"
                alt={t('about.preview.imageAlt')}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--background)]/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/18 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/12 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
