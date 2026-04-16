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
    '/images/caraka.png',
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
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white/50 tracking-[0.2em] uppercase mb-12">{t('trust.partners')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo}
                  alt={`${t('trust.partnerAlt')} ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 font-serif italic">&quot;</div>
              <p className="text-xl text-white leading-relaxed italic relative z-10">
                &quot;{t.quote}&quot;
              </p>
              <p className="mt-6 text-[var(--color-secondary)] font-bold tracking-wider">— {t.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative z-10">{t('trust.cta.title')} <br />{t('brand.name')}</h2>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-3 bg-white text-black font-black px-10 py-5 rounded-2xl hover:scale-105 transition-transform relative z-10 shadow-xl uppercase tracking-widest text-sm"
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
