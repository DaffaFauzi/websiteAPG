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
    <footer className="relative bg-[#020617] overflow-hidden">
      {/* Premium ambient grid & glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[radial-gradient(circle_at_top_center,rgba(10,102,194,0.15),transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <motion.div
          className="py-16 sm:py-20 lg:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Top section with company info and links */}
          <div className="grid lg:grid-cols-[1.5fr_2.5fr] gap-12 lg:gap-16 mb-16 md:mb-20">
            {/* Company info */}
            <motion.div
              className="space-y-8"
              variants={headerVariants}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/10 bg-white p-2 overflow-hidden shadow-lg">
                  <Image
                    src="/images/apgg.png"
                    alt={t('brand.logoAlt')}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {t('brand.name')}
                  </h3>
                  <div className="text-[#0A66C2] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mt-0.5">Holding Company</div>
                </div>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
                {t('footer.tagline')}
              </p>

              {/* Contact Information */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4 text-slate-400">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm pt-1">
                    <div className="font-extrabold text-slate-200 text-[10px] uppercase tracking-widest mb-1.5">{t('footer.location.label')}</div>
                    <div className="text-slate-400 leading-relaxed max-w-[16rem]">{t('footer.location.value')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-extrabold text-slate-200 text-[10px] uppercase tracking-widest mb-1">{t('footer.phone.label')}</div>
                    <div className="text-slate-400">{t('footer.phone.value')}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-extrabold text-slate-200 text-[10px] uppercase tracking-widest mb-1">{t('footer.email.label')}</div>
                    <div className="text-slate-400">{t('footer.email.value')}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick links, Governance, and Social */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8 pt-4 lg:pt-0"
              variants={headerVariants}
            >
              {/* Core Navigation */}
              <div>
                <h4 className="text-base font-extrabold text-white mb-8 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Corporate</h4>
                <div className="flex flex-col gap-4 text-sm font-medium">
                  {[
                    { href: '/', label: t('nav.home') },
                    { href: '/tentang', label: t('nav.about') },
                    { href: '/struktur', label: t('nav.structure') },
                    { href: '/subsidiaries', label: t('nav.subsidiaries') },
                    { href: '/kontak', label: t('nav.contact') },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-all duration-300 inline-block w-fit relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0A66C2] hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Governance */}
              <div>
                <h4 className="text-base font-extrabold text-white mb-8 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Governance</h4>
                <div className="flex flex-col gap-4 text-sm font-medium">
                  {[
                    { href: '#', label: 'Board of Directors' },
                    { href: '#', label: 'Corporate Guidelines' },
                    { href: '#', label: 'Sustainability Report' },
                    { href: '#', label: 'Investor Relations' },
                    { href: '#', label: 'Code of Conduct' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-all duration-300 inline-block w-fit relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#0A66C2] hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-base font-extrabold text-white mb-8 uppercase tracking-[0.2em] text-[10px] sm:text-xs">Connect</h4>
                <div className="flex flex-col gap-4 text-sm font-medium">
                  {[
                    { href: '#', label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z' },
                    { href: '#', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-slate-400 hover:text-[#0A66C2] transition-colors duration-300 group"
                    >
                      <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path d={item.icon} />
                      </svg>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider and copyright */}
          <motion.div
            className="pt-8 border-t border-white/10"
            variants={dividerVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.div
                className="text-center md:text-left"
                variants={headerVariants}
              >
                <p className="text-slate-500 text-[11px] sm:text-xs tracking-wide font-medium">
                  {t('footer.copyright').replace('{year}', String(currentYear)).replace('{brand}', t('brand.name'))}
                </p>
              </motion.div>

              <motion.div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3" variants={headerVariants}>
                {[
                  { href: '#', label: t('footer.legal.privacy') },
                  { href: '#', label: t('footer.legal.terms') },
                  { href: '#', label: t('footer.legal.security') },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-500 hover:text-white transition-colors duration-200 apg-ease text-[11px] sm:text-xs tracking-wide font-medium"
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
