'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const NavbarSection: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll state for sticky logic
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ... (keep existing mobile menu logic)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hamburgerButtonRef.current?.contains(event.target as Node)) return;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setIsMobileMenuOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  // Robust body scroll lock — fixes iOS Safari bounce-scroll bug
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position, then fix body in place
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position on close
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { href: '/', label: t('nav.home') },
    { href: '/tentang', label: t('nav.about') },
    { href: '/struktur', label: t('nav.structure') },
    { href: '/subsidiaries', label: t('nav.subsidiaries') },
    { href: '/kontak', label: t('nav.contact') },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const showBrand = scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500"
      >
        <div className="fixed left-0 top-0 z-[60]">
          <motion.div
            initial={false}
            animate={{ opacity: showBrand ? 1 : 0, y: showBrand ? 0 : -6, pointerEvents: showBrand ? 'auto' : 'none' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              aria-label={t('brand.name')}
              className={[
                'relative flex items-center justify-center bg-white shadow-[0_20px_60px_rgba(2,6,23,0.16)]',
                'rounded-br-[40px]',
                'w-[233px] h-[94px]',
              ].join(' ')}
            >
              <div className="relative h-[44px] w-[160px] overflow-hidden">
                <Image
                  src="/images/apgg.png"
                  alt={t('brand.logoAlt')}
                  fill
                  sizes="160px"
                  className="object-contain scale-[1.08]"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div
            className={[
              'flex items-center justify-end',
              scrolled ? 'py-3.5 sm:py-4' : 'py-5 sm:py-6',
            ].join(' ')}
          >
            <motion.div
              initial={false}
              animate={{ opacity: isMobileMenuOpen ? 0 : 1, pointerEvents: isMobileMenuOpen ? 'none' : 'auto' }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex items-center gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-full bg-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] p-1.5">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-4 py-2 text-xs font-black rounded-full transition-all duration-250 min-h-11 ${
                    language === 'id' ? 'bg-[#0A66C2] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-xs font-black rounded-full transition-all duration-250 min-h-11 ${
                    language === 'en' ? 'bg-[#0A66C2] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  EN
                </button>
                </div>

                <button
                  ref={hamburgerButtonRef}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative z-[60] flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] text-slate-700 hover:bg-slate-50 active:scale-[0.96] transition-all duration-200"
                  aria-label={isMobileMenuOpen ? t('nav.menu.close') : t('nav.menu.open')}
                >
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <motion.span
                      animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0, width: 22 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="block h-0.5 bg-slate-900 rounded-full origin-center"
                    />
                    <motion.span
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? 20 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="block h-0.5 w-[1.375rem] bg-slate-900 rounded-full"
                    />
                    <motion.span
                      animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0, width: 22 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="block h-0.5 bg-slate-900 rounded-full origin-center"
                    />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
    </nav>

    {/* Navigation Menu */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="fixed inset-0 z-[55]"
        >
          <div 
            className="absolute inset-0 bg-slate-950/20"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative h-full">
            <div
              className="relative h-full max-w-7xl mx-auto"
              style={{
                paddingTop: 'max(2rem, env(safe-area-inset-top))',
                paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
                paddingLeft: 'max(0rem, env(safe-area-inset-left))',
                paddingRight: 'max(0rem, env(safe-area-inset-right))',
              }}
            >
              <motion.aside
                initial={{ opacity: 0, x: 56, scale: 0.985 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 46, scale: 0.99 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={[
                  'absolute top-0 bottom-0 right-0 left-0 sm:left-auto',
                  'w-full sm:w-[min(44rem,calc(100vw-2rem))]',
                  'rounded-none sm:rounded-l-[46px]',
                  'bg-[#1870F0] overflow-hidden',
                  'shadow-[0_30px_80px_rgba(2,6,23,0.28)]',
                ].join(' ')}
              >
                <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(4,26,64,0.38),transparent_60%)]" />
                </div>

                <div className="relative z-10 h-full flex flex-col px-6 py-6 sm:pt-8 sm:pr-12 sm:pb-6 sm:pl-14">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="h-11 w-11 rounded-full bg-white/14 border border-white/25 grid place-items-center text-white active:scale-[0.98] transition-transform"
                        aria-label={t('nav.home')}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1v-10.5z" />
                        </svg>
                      </Link>
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-white/90 text-xs font-black tracking-[0.18em] uppercase">
                        Menu
                      </div>
                    </div>

                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="h-11 w-11 grid place-items-center text-white/90 hover:text-white active:scale-[0.98] transition-transform"
                      aria-label={t('nav.menu.close')}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 6l12 12M18 6 6 18" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1fr_auto_0.95fr] gap-8 flex-1 min-h-0">
                    <nav className="flex flex-col">
                      {navigationItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={[
                              'flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4',
                              'text-white text-lg sm:text-xl font-extrabold',
                              'transition-[background-color,transform] duration-200 active:scale-[0.98]',
                              isActiveLink(item.href) ? 'bg-white/14' : 'hover:bg-white/10',
                            ].join(' ')}
                          >
                            <span>{item.label}</span>
                            <span className="text-white/70 text-xl">›</span>
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    <div className="hidden lg:block w-px bg-white/25 rounded-full" />

                    <div className="grid gap-4 sm:gap-6 min-h-0">
                      <Link
                        href="/subsidiaries"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/10 backdrop-blur-xl p-6 sm:p-7 active:scale-[0.98] transition-transform"
                      >
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_60%)]" />
                        <div className="relative z-10">
                          <div className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white/70">
                            {t('nav.subsidiaries')}
                          </div>
                          <div className="mt-2 text-white text-xl sm:text-2xl font-black leading-tight">
                            {t('subsidiaries.title')}
                          </div>
                          <div className="mt-3 inline-flex items-center gap-2 text-white/85 text-sm font-bold">
                            {t('subsidiaries.card.cta')}
                            <span className="text-base">→</span>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/kontak"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/10 backdrop-blur-xl p-6 sm:p-7 active:scale-[0.98] transition-transform"
                      >
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_60%)]" />
                        <div className="relative z-10">
                          <div className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white/70">
                            {t('nav.contact')}
                          </div>
                          <div className="mt-2 text-white text-xl sm:text-2xl font-black leading-tight">
                            {t('common.contact_us')}
                          </div>
                          <div className="mt-3 inline-flex items-center gap-2 text-white/85 text-sm font-bold">
                            {t('nav.contact')}
                            <span className="text-base">→</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80 text-xs font-bold">
                    <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
                      {t('nav.contact')}
                    </Link>
                    <span className="opacity-50">•</span>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</a>
                    <span className="opacity-50">•</span>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.legal.terms')}</a>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default NavbarSection;
