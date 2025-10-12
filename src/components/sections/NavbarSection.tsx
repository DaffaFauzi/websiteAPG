'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import ReactCountryFlag from 'react-country-flag';

// Mobile Language Switcher Component
const MobileLanguageSwitcher: React.FC<{ onLanguageChange?: () => void }> = ({ onLanguageChange }) => {
  const { language, setLanguage, availableLanguages } = useTranslation();

  // Map language codes to country codes for flags
  const getCountryCode = (langCode: string) => {
    const countryMap: { [key: string]: string } = {
      en: 'GB',
      id: 'ID',
      ms: 'MY',
      zh: 'CN',
      ru: 'RU',
    };
    return countryMap[langCode] || langCode.toUpperCase();
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'en' | 'id' | 'ms' | 'zh' | 'ru');
    onLanguageChange?.();
  };

  return (
    <div className="space-y-1">
      {availableLanguages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
            language === lang.code
              ? 'text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 border-l-4 border-[var(--color-secondary)]'
              : 'text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50'
          }`}
        >
          <ReactCountryFlag
            countryCode={getCountryCode(lang.code)}
            svg
            style={{
              width: '18px',
              height: '14px',
            }}
          />
          <span>{lang.name}</span>
          {language === lang.code && (
            <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

const NavbarSection: React.FC = () => {
  const { t } = useTranslation();
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
    { href: '/', label: t('navigation.home') as string },
    { href: '/about', label: t('navigation.aboutUs') as string },
    { href: '/products', label: t('navigation.products') as string },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/qdc_logo_notext.png"
                alt="QDC Logo"
                width={40}
                height={40}
                className="h-8 w-8 md:h-10 md:w-10"
              />
              <span className="text-sm font-bold text-[var(--color-primary)] sm:hidden">
                QDC Tech
              </span>
              <span className="text-lg md:text-xl font-bold text-[var(--color-primary)] hidden sm:block">
                Quantum Dynamics Creations
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-[var(--color-secondary)] border-b-2 border-[var(--color-secondary)]'
                    : 'text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 rounded-md'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={hamburgerButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-secondary)]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
            className="fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="md:hidden relative z-50" ref={mobileMenuRef}>
            <div className="px-2 pt-2 pb-3 bg-white border-t border-gray-200 shadow-lg">
            {/* Navigation Items */}
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 border-l-4 border-[var(--color-secondary)]'
                      : 'text-gray-700 hover:text-[var(--color-primary)] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Language</p>
                <MobileLanguageSwitcher onLanguageChange={() => setIsMobileMenuOpen(false)} />
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
