'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

/* eslint-disable @typescript-eslint/no-explicit-any */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: '-1.25rem' },
  visible: {
    opacity: 1,
    y: '0rem',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};


const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const FooterSection: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A66C2] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.16),transparent_68%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Compact footer content */}
        <motion.div
          className="py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Top section with company info and WhatsApp */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-10">
            {/* Company info */}
            <motion.div
              className="space-y-4"
              variants={headerVariants}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl border border-white/18 bg-white/95 p-1 overflow-hidden shadow-[0_0.875rem_2.5rem_rgba(2,6,23,0.18)]">
                  <Image
                    src="/images/apgg.png"
                    alt={t('brand.logoAlt')}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {t('brand.name')}
                </h3>
              </div>

              <p className="text-white/72 text-sm md:text-base leading-relaxed max-w-md">
                {t('footer.tagline')}
              </p>

              {/* Contact Information */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-white/70">
                  <svg className="w-4 h-4 text-white/75 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-semibold text-white/85">{t('footer.location.label')}</div>
                    <div className="text-white/70 leading-relaxed">{t('footer.location.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-4 h-4 text-white/75 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-semibold text-white/85">{t('footer.phone.label')}</div>
                    <div className="text-white/70">{t('footer.phone.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/70">
                  <div className="text-sm">
                    <div className="font-semibold text-white/85">{t('footer.email.label')}</div>
                    <div className="text-white/70">{t('footer.email.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-4 h-4 text-white/75 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-semibold text-white/85">{t('footer.hours.label')}</div>
                    <div className="text-white/70">{t('footer.hours.value')}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              className="lg:pl-8 flex flex-col justify-center"
              variants={headerVariants}
            >
              <div className="text-center lg:text-left">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">{t('footer.nav.title')}</h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {[
                    { href: '/', label: t('nav.home') },
                    { href: '/tentang', label: t('nav.about') },
                    { href: '/struktur', label: t('nav.structure') },
                    { href: '/subsidiaries', label: t('nav.subsidiaries') },
                    { href: '/kontak', label: t('nav.contact') },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 apg-ease"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-4">{t('footer.social.title')}</h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                    {[
                      { href: '#', label: t('footer.social.linkedin') },
                      { href: '#', label: t('footer.social.instagram') },
                      { href: '#', label: t('footer.social.x') },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 apg-ease"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider and copyright */}
          <motion.div
            className="pt-6 border-t border-slate-700"
            variants={dividerVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <motion.div
                className="text-center md:text-left"
                variants={headerVariants}
              >
                <p className="text-white/55 text-sm">
                  {t('footer.copyright').replace('{year}', String(currentYear)).replace('{brand}', t('brand.name'))}
                </p>
              </motion.div>

              <motion.div className="flex flex-wrap justify-center md:justify-end gap-4" variants={headerVariants}>
                {[
                  { href: '#', label: t('footer.legal.privacy') },
                  { href: '#', label: t('footer.legal.terms') },
                  { href: '#', label: t('footer.legal.security') },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/55 hover:text-white transition-colors duration-200 apg-ease text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </footer>
  );
};

export default FooterSection;
