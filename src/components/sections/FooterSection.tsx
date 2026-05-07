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

  const socialItems = [
    {
      label: t('footer.social.instagram'),
      href: 'https://www.instagram.com/ardanaperkasagroup?igsh=Y3FnNW91MjIxMzE4',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
      viewBox: '0 0 24 24',
    },
    {
      label: t('footer.social.facebook'),
      href: 'https://www.facebook.com/share/1GBTguH4gV/?mibextid=wwXIfr',
      path: 'M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5A3.5 3.5 0 0 1 14.25 6h2.25v3h-2.25a1 1 0 0 0-1 1V12h3.25l-.5 3h-2.75v7A10 10 0 0 0 22 12Z',
      viewBox: '0 0 24 24',
    },
    {
      label: t('footer.social.linkedin'),
      href: 'https://www.linkedin.com/in/ardana-perkasa-group-a3aa78390/',
      path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z',
      viewBox: '0 0 24 24',
    },
  ];

  const copyright = t('footer.copyright')
    .replace('{year}', String(new Date().getFullYear()))
    .replace('{brand}', t('cinema.brand'));

  return (
    <footer className="bg-white pt-10 sm:pt-12 lg:pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 pb-0">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={containerVariants}>
          <motion.div
            variants={headerVariants}
            className="relative overflow-hidden rounded-[2.75rem] sm:rounded-[3.75rem] bg-[#0A66C2] text-white shadow-[0_30px_80px_rgba(2,6,23,0.18)]"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.22),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(4,26,64,0.38),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_65%)]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 sm:gap-10 lg:gap-14 items-center px-8 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[24rem] aspect-[4/5] lg:-ml-10 lg:-mb-10">
                  <Image
                    src="/images/hero_section_top_image.png"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 70vw, 420px"
                    className="object-contain object-left-bottom"
                    priority={false}
                  />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.02] max-w-[14ch] mx-auto lg:mx-0">
                  {t('footer.cta.title')}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose mx-auto lg:mx-0">
                  {t('footer.cta.desc')}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    {socialItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="h-11 w-11 rounded-full bg-white text-[#0A66C2] grid place-items-center shadow-[0_10px_24px_rgba(2,6,23,0.14)] active:scale-[0.98] transition-transform"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox={item.viewBox}>
                          <path d={item.path} />
                        </svg>
                      </a>
                    ))}
                  </div>

                  <Link
                    href="/kontak"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-white text-[#041a40] px-7 py-3 text-sm font-extrabold shadow-[0_18px_40px_rgba(2,6,23,0.18)] active:scale-[0.98] transition-transform"
                  >
                    {t('common.contact_us')} <span className="ml-3 text-base">›</span>
                  </Link>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-white/90 text-xs font-bold">
                  <a href="#" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</a>
                  <span className="opacity-70">•</span>
                  <a href="#" className="hover:text-white transition-colors">{t('footer.legal.terms')}</a>
                </div>

                <div className="mt-6 text-white/75 text-xs font-medium">
                  {copyright}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
