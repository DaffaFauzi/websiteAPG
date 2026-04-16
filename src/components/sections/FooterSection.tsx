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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};


const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const FooterSection: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-16 w-32 h-32 border border-white/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 border border-white/18 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/14 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
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
                <div className="relative w-10 h-10 rounded-xl border border-white/10 bg-white p-1 overflow-hidden">
                  <Image
                    src="/images/apgg.png"
                    alt={t('brand.logoAlt')}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('brand.name')}
                </h3>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                {t('footer.tagline')}
              </p>

              {/* Contact Information */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-gray-300">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.location.label')}</div>
                    <div className="text-gray-300 leading-relaxed">{t('footer.location.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.phone.label')}</div>
                    <div className="text-gray-300">{t('footer.phone.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.email.label')}</div>
                    <div className="text-gray-300">{t('footer.email.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.hours.label')}</div>
                    <div className="text-gray-300">{t('footer.hours.value')}</div>
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
                      className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
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
                        className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
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
                <p className="text-gray-400 text-sm">
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
                    className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07337A] via-[#07337A]/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1 }}
      />
    </footer>
  );
};

export default FooterSection;
