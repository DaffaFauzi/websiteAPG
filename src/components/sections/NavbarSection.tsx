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
    const id = window.setTimeout(() => setIsMobileMenuOpen(false), 0);
    return () => window.clearTimeout(id);
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
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white text-slate-900"
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
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="leading-tight">
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
                title={item.label}
                className={`relative min-h-11 min-w-24 max-w-44 px-4 py-2 text-sm font-semibold transition-colors duration-200 apg-ease rounded-xl border truncate whitespace-nowrap ${
                  isActiveLink(item.href)
                    ? 'text-[#0A66C2] bg-white border-slate-200 after:absolute after:left-3 after:right-3 after:bottom-[0.35rem] after:h-[0.125rem] after:rounded-full after:bg-[#0A66C2]'
                    : 'text-slate-900 border-transparent hover:text-[#0A66C2] hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4 relative flex items-center rounded-full border border-slate-200 bg-white p-1 apg-ease">
              <span
                aria-hidden="true"
                className={[
                  'absolute inset-y-1 left-1 w-10 rounded-full bg-[#0A66C2] transition-transform duration-250 apg-ease',
                  language === 'en' ? 'translate-x-[2.75rem]' : 'translate-x-0',
                ].join(' ')}
              />
              <button
                onClick={() => setLanguage('id')}
                className={[
                  'relative z-10 w-10 px-0 py-2 text-xs font-extrabold transition-colors duration-200 apg-ease rounded-full',
                  language === 'id' ? 'text-white' : 'text-slate-600 hover:text-slate-900',
                ].join(' ')}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={[
                  'relative z-10 w-10 px-0 py-2 text-xs font-extrabold transition-colors duration-200 apg-ease rounded-full',
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
              className="inline-flex items-center justify-center min-h-12 min-w-12 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 apg-ease focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0A66C2]"
              aria-expanded="false"
            >
              <span className="sr-only">{t('nav.menu.open')}</span>
              {/* Hamburger icon */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-400 apg-ease ${
                    isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-400 apg-ease top-2.5 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-400 apg-ease ${
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
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/25 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="lg:hidden relative z-50" ref={mobileMenuRef}>
            <div className="mx-4 mt-4 px-3 py-3 bg-white border border-slate-200 rounded-2xl shadow-[0_1rem_2.5rem_rgba(2,6,23,0.10)]">
            {/* Navigation Items */}
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.label}
                  className={`relative block min-h-12 px-3 py-3 text-base font-semibold rounded-xl transition-colors duration-200 apg-ease border truncate whitespace-nowrap ${
                    isActiveLink(item.href)
                      ? 'text-[#0A66C2] bg-white border-slate-200 after:absolute after:left-4 after:right-4 after:bottom-[0.75rem] after:h-[0.125rem] after:rounded-full after:bg-[#0A66C2]'
                      : 'text-slate-700 border-transparent hover:text-slate-900 hover:bg-slate-50 hover:border-slate-200'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="mt-6 flex items-center justify-between px-4 py-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-sm font-extrabold text-slate-700 uppercase tracking-[0.18em]">{t('nav.language')}</span>
                <div className="relative flex rounded-full border border-slate-200 bg-white p-1 apg-ease">
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute inset-y-1 left-1 w-12 rounded-full bg-[#0A66C2] transition-transform duration-250 apg-ease',
                      language === 'en' ? 'translate-x-[3.25rem]' : 'translate-x-0',
                    ].join(' ')}
                  />
                  <button
                    onClick={() => setLanguage('id')}
                    className={[
                      'relative z-10 w-12 min-h-12 px-0 py-2 text-sm font-extrabold rounded-full transition-colors duration-200 apg-ease',
                      language === 'id' ? 'text-white' : 'text-slate-600',
                    ].join(' ')}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={[
                      'relative z-10 w-12 min-h-12 px-0 py-2 text-sm font-extrabold rounded-full transition-colors duration-200 apg-ease',
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
