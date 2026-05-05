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
    { href: '/karir', label: t('career.nav') },
    { href: '/kontak', label: t('nav.contact') },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
            : 'bg-white border-b border-slate-100'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
                <Image
                  src="/images/apgg.png"
                  alt={t('brand.logoAlt')}
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-tight flex flex-col justify-center">
                <span className="block text-sm sm:text-lg font-black text-[#041a40] tracking-tight group-hover:text-[#0A66C2] transition-colors duration-300">
                  {t('brand.name')}
                </span>
                <span className="text-[0.6rem] sm:text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
                  Holding Company
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`relative py-2 text-sm font-bold transition-all duration-300 ${
                  isActiveLink(item.href)
                    ? 'text-[#0A66C2]'
                    : 'text-slate-600 hover:text-[#041a40]'
                }`}
              >
                {item.label}
                {isActiveLink(item.href) && (
                  <motion.div
                    layoutId="desktopNavIndicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#0A66C2] rounded-t-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`absolute -bottom-[1px] left-1/2 right-1/2 h-[2px] bg-[#041a40] rounded-t-full transition-all duration-300 ${isActiveLink(item.href) ? 'hidden' : 'hover:left-0 hover:right-0 opacity-0 hover:opacity-100'}`} />
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4 flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-200/60">
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1.5 text-xs font-black rounded-full transition-all duration-300 ${
                  language === 'id' ? 'bg-white text-[#0A66C2] shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-black rounded-full transition-all duration-300 ${
                  language === 'en' ? 'bg-white text-[#0A66C2] shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={hamburgerButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-[60] flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full text-slate-700 hover:bg-slate-50 active:scale-90 transition-all duration-200"
              aria-label={isMobileMenuOpen ? t('nav.menu.close') : t('nav.menu.open')}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                    width: isMobileMenuOpen ? 24 : 24
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-0.5 bg-slate-900 rounded-full origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-6 bg-slate-900 rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                    width: isMobileMenuOpen ? 24 : 24
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-0.5 bg-slate-900 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Navigation Menu — rendered OUTSIDE <nav> to avoid backdrop-filter stacking context bug */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="fixed inset-0 z-[55] lg:hidden"
        >
          {/* Solid white background — full viewport, tap to close */}
          <div 
            className="absolute inset-0 bg-white"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Safe-area aware content container — handles iOS notch & home indicator */}
          <div
            className="relative h-full flex flex-col overflow-y-auto overscroll-contain"
            style={{
              paddingTop: 'max(6rem, calc(4rem + env(safe-area-inset-top)))',
              paddingBottom: 'max(3rem, calc(2rem + env(safe-area-inset-bottom)))',
              paddingLeft: 'max(1.25rem, calc(1rem + env(safe-area-inset-left)))',
              paddingRight: 'max(1.25rem, calc(1rem + env(safe-area-inset-right)))',
            }}>
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    delay: index * 0.04, 
                    duration: 0.3, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group relative block py-4 text-2xl sm:text-3xl font-bold transition-all duration-300 leading-tight ${
                      isActiveLink(item.href)
                        ? 'text-[#0A66C2] translate-x-2'
                        : 'text-slate-900 hover:text-[#0A66C2] active:scale-[0.98]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      {item.label}
                      {isActiveLink(item.href) && (
                        <motion.span 
                          layoutId="activeTabMobile"
                          className="ml-4 h-2 w-2 rounded-full bg-[#0A66C2]" 
                        />
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navigationItems.length * 0.04 + 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-auto pt-8 pb-4 flex flex-col gap-4"
            >
              <Link
                href="/kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center bg-[#0A66C2] text-white font-bold py-4 rounded-full min-h-[3rem] active:scale-[0.98] transition-transform duration-200 shadow-md"
              >
                {t('nav.contact')}
              </Link>
              
              <div className="flex items-center justify-between p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  {t('nav.language')}
                </span>
                <div className="flex bg-white rounded-full p-1 border border-slate-200 shadow-sm">
                  <button
                    onClick={() => setLanguage('id')}
                    className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 ${
                      language === 'id' 
                        ? 'bg-[#0A66C2] text-white shadow-lg shadow-blue-200' 
                        : 'text-slate-600 active:bg-slate-50'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 ${
                      language === 'en' 
                        ? 'bg-[#0A66C2] text-white shadow-lg shadow-blue-200' 
                        : 'text-slate-600 active:bg-slate-50'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default NavbarSection;
