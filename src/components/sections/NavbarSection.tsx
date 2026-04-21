'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const NavbarSection: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if clicking on the hamburger button
      if (hamburgerButtonRef.current?.contains(event.target as Node)) {
        return;
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
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
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md text-slate-900 shadow-sm"
      style={{ color: '#0f172a' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3" style={{ color: 'inherit' }}>
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white p-1">
                <Image
                  src="/images/apgg.png"
                  alt={t('brand.logoAlt')}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] tracking-[0.25em] font-bold text-[var(--color-secondary)] uppercase">
                </span>
                <span
                  className="block text-sm md:text-base font-extrabold text-slate-950 tracking-tight"
                  style={{ color: '#020617' }}
                >
                  {t('brand.name')}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-xl ${
                  isActiveLink(item.href)
                    ? 'text-[#0A66C2] bg-slate-100 border border-slate-200'
                    : 'text-slate-900 hover:text-[#0A66C2] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4 relative flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-[0_10px_30px_rgba(0,0,0,0.06)] apg-ease">
              <span
                aria-hidden="true"
                className={[
                  'absolute inset-y-1 left-1 w-10 rounded-full bg-[#0A66C2] shadow-[0_18px_55px_rgba(10,102,194,0.28)] transition-transform duration-500 apg-ease',
                  language === 'en' ? 'translate-x-[44px]' : 'translate-x-0',
                ].join(' ')}
              />
              <button
                onClick={() => setLanguage('id')}
                className={[
                  'relative z-10 w-10 px-0 py-2 text-xs font-extrabold transition-colors duration-300 apg-ease rounded-full',
                  language === 'id' ? 'text-white' : 'text-slate-600 hover:text-slate-900',
                ].join(' ')}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={[
                  'relative z-10 w-10 px-0 py-2 text-xs font-extrabold transition-colors duration-300 apg-ease rounded-full',
                  language === 'en' ? 'text-white' : 'text-slate-600 hover:text-slate-900',
                ].join(' ')}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              ref={hamburgerButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-secondary)]"
              aria-expanded="false"
            >
              <span className="sr-only">{t('nav.menu.open')}</span>
              {/* Hamburger icon */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-2.5 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/30 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="lg:hidden relative z-50" ref={mobileMenuRef}>
            <div className="mx-4 mt-4 px-3 py-3 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-black/10">
            {/* Navigation Items */}
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2.5 text-base font-semibold rounded-xl transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="mt-6 flex items-center justify-between px-4 py-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-sm font-extrabold text-slate-700 uppercase tracking-widest">{t('nav.language')}</span>
                <div className="relative flex rounded-full border border-slate-200 bg-white p-1 shadow-[0_10px_30px_rgba(0,0,0,0.06)] apg-ease">
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute inset-y-1 left-1 w-12 rounded-full bg-[#0A66C2] transition-transform duration-500 apg-ease shadow-[0_18px_55px_rgba(10,102,194,0.28)]',
                      language === 'en' ? 'translate-x-[52px]' : 'translate-x-0',
                    ].join(' ')}
                  />
                  <button
                    onClick={() => setLanguage('id')}
                    className={[
                      'relative z-10 w-12 px-0 py-2 text-sm font-extrabold rounded-full transition-colors duration-300 apg-ease',
                      language === 'id' ? 'text-white' : 'text-slate-600',
                    ].join(' ')}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={[
                      'relative z-10 w-12 px-0 py-2 text-sm font-extrabold rounded-full transition-colors duration-300 apg-ease',
                      language === 'en' ? 'text-white' : 'text-slate-600',
                    ].join(' ')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarSection;
