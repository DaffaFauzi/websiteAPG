'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

const TrustSection = () => {
  const { t } = useLanguage();
  const partnerLogos = [
    '/images/apgg.png',
    '/images/bpr.png',
    '/images/caraqu.png',
    '/images/dwp.png',
    '/images/lps.png',
    '/images/pataka.png',
  ];

  const testimonials = [
    {
      quote: t('trust.testimonial.1.quote'),
      author: t('trust.testimonial.1.author'),
    },
    {
      quote: t('trust.testimonial.2.quote'),
      author: t('trust.testimonial.2.author'),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        {/* Partners */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white/50 tracking-[0.2em] uppercase mb-8 sm:mb-12 leading-tight">{t('trust.partners')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center opacity-60">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo}
                  alt={`${t('trust.partnerAlt')} ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-8 sm:h-12 w-auto object-contain transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden active:scale-95 transition-all duration-200 h-full flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-4 sm:p-8 text-4xl sm:text-6xl text-white/5 font-serif italic">&quot;</div>
              <p className="text-lg sm:text-xl text-white leading-relaxed italic relative z-10 max-w-prose">
                &quot;{t.quote}&quot;
              </p>
              <p className="mt-4 sm:mt-6 text-[#0A66C2] text-sm sm:text-base font-bold tracking-wider">— {t.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#0A66C2] to-[#07337A] p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 relative z-10 leading-tight">{t('trust.cta.title')} <br />{t('brand.name')}</h2>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-3 bg-white text-slate-950 font-black px-8 sm:px-10 py-4 sm:py-5 rounded-2xl w-full sm:w-auto min-h-12 hover:scale-[1.02] active:scale-95 transition-all relative z-10 shadow-xl uppercase tracking-widest text-xs sm:text-sm"
          >
            {t('trust.cta.button')}
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
