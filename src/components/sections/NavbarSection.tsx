'use client';

import React, { useMemo, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { subsidiariesData } from '@/app/subsidiaries/subsidiariesData';

type DesktopDropdownId = 'about' | 'structure' | 'subsidiaries' | 'announcements';

const NavbarSection: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const mobileDrawerRef = useRef<HTMLElement>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<DesktopDropdownId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<DesktopDropdownId | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target)) return;
      if (mobileDrawerRef.current?.contains(target)) return;
      
      setDesktopDropdown(null);
      setMobileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setDesktopDropdown(null);
      setMobileOpen(false);
      setMobileAccordion(null);
    });
    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const handleNavClick =
    (href: string, after?: () => void) =>
    (e: React.MouseEvent) => {
      if (pathname === href) {
        e.preventDefault();
        after?.();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }
      after?.();
    };

  const showContent = scrolled;

  const aboutItems = useMemo(
    () => [
      {
        id: 'history' as const,
        href: '/tentang/sejarah',
        label: t('nav.about_history'),
        desc: t('nav.about_history.desc'),
        imageSrc: '/images/hero_section_top_image.png',
      },
      {
        id: 'vision' as const,
        href: '/tentang/visi-misi',
        label: t('nav.vision_mission'),
        desc: t('nav.vision_mission.desc'),
        imageSrc: '/images/presentation-placeholder.svg',
      },
      {
        id: 'gallery' as const,
        href: '/tentang/galeri',
        label: t('nav.gallery'),
        desc: t('nav.gallery.desc'),
        imageSrc: '/images/hero_section_top_image.png',
      },
    ],
    [t],
  );

  const structureItems = useMemo(
    () => [
      { href: '/struktur/bagan', label: t('nav.structure_chart') },
      { href: '/struktur/manajemen', label: t('nav.management') },
    ],
    [t],
  );

  const announcementsItems = useMemo(
    () => [
      // { href: '/pengumuman/berita', label: t('nav.news') },
      { href: '/karir', label: t('nav.career') },
    ],
    [t],
  );

  const subsidiariesPreview = useMemo(() => subsidiariesData.slice(0, 6), []);

  const clearHoverTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const scheduleOpen = (id: DesktopDropdownId) => {
    clearHoverTimers();
    openTimer.current = window.setTimeout(() => setDesktopDropdown(id), 150);
  };

  const scheduleClose = () => {
    clearHoverTimers();
    closeTimer.current = window.setTimeout(() => setDesktopDropdown(null), 180);
  };

  const toggleDesktopDropdown = (id: DesktopDropdownId) => {
    setDesktopDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <nav
        ref={navRef}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || mobileOpen
            ? 'bg-white shadow-md translate-y-0 opacity-100'
            : 'bg-transparent -translate-y-4 opacity-0 pointer-events-none md:pointer-events-auto',
        ].join(' ')}
        aria-label={t('nav.aria')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 lg:h-20 flex items-center justify-between">
            {/* Mobile View: Logo (Left) & Hamburger (Right) */}
            <div className="md:hidden flex items-center justify-between w-full pointer-events-auto">
              {(scrolled || mobileOpen) && (
                <>
                  <Link
                    href="/"
                    onClick={handleNavClick('/')}
                    className="transition-opacity duration-300"
                  >
                    <div className="relative h-6 w-20 sm:h-7 sm:w-24">
                      <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill sizes="96px" className="object-contain" priority />
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    className="h-10 w-10 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
                    aria-label={mobileOpen ? t('nav.menu.close') : t('nav.menu.open')}
                  >
                    <div className="flex flex-col gap-1.5 items-center justify-center">
                      <motion.span
                        animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0, width: 20 }}
                        className="block h-[2.5px] bg-white rounded-full origin-center"
                      />
                      <motion.span
                        animate={{ opacity: mobileOpen ? 0 : 1, x: mobileOpen ? 10 : 0 }}
                        className="block h-[2.5px] w-5 bg-white rounded-full"
                      />
                      <motion.span
                        animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0, width: 20 }}
                        className="block h-[2.5px] bg-white rounded-full origin-center"
                      />
                    </div>
                  </button>
                </>
              )}
            </div>

            {/* Desktop View: Links (Left) & Logo (Right) */}
            <div className={`hidden md:flex items-center gap-1 transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              {pathname !== '/' && (
                <Link
                  href="/"
                  className="h-10 w-10 rounded-lg grid place-items-center text-slate-700 hover:text-[#0A66C2] hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
              )}

              <div className="relative" onMouseEnter={() => scheduleOpen('about')} onMouseLeave={scheduleClose}>
                <button
                  onClick={() => toggleDesktopDropdown('about')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${desktopDropdown === 'about' || aboutItems.some(x => isActiveLink(x.href)) ? 'text-[#0A66C2] bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  {t('nav.about')}
                </button>
                <AnimatePresence>
                  {scrolled && desktopDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 hidden md:block"
                    >
                      {aboutItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${isActiveLink(item.href) ? 'bg-blue-50 text-[#0A66C2]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative" onMouseEnter={() => scheduleOpen('structure')} onMouseLeave={scheduleClose}>
                <button
                  onClick={() => toggleDesktopDropdown('structure')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${desktopDropdown === 'structure' || structureItems.some(x => isActiveLink(x.href)) ? 'text-[#0A66C2] bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  {t('nav.structure')}
                </button>
                <AnimatePresence>
                  {scrolled && desktopDropdown === 'structure' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 hidden md:block"
                    >
                      {structureItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${isActiveLink(item.href) ? 'bg-blue-50 text-[#0A66C2]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/subsidiaries"
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${isActiveLink('/subsidiaries') ? 'text-[#0A66C2] bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {t('nav.subsidiaries')}
              </Link>

              <div className="relative" onMouseEnter={() => scheduleOpen('announcements')} onMouseLeave={scheduleClose}>
                <button
                  onClick={() => toggleDesktopDropdown('announcements')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${desktopDropdown === 'announcements' || announcementsItems.some(x => isActiveLink(x.href)) ? 'text-[#0A66C2] bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  {t('nav.announcements')}
                </button>
                <AnimatePresence>
                  {scrolled && desktopDropdown === 'announcements' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 hidden md:block"
                    >
                      {announcementsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${isActiveLink(item.href) ? 'bg-blue-50 text-[#0A66C2]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/kontak"
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${isActiveLink('/kontak') ? 'text-[#0A66C2] bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {t('nav.contact')}
              </Link>
            </div>

            <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <Link href="/" className="flex items-center">
                <div className="relative h-7 w-24">
                  <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill sizes="96px" className="object-contain" priority />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              ref={mobileDrawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[110] h-full w-[280px] bg-white shadow-2xl md:hidden flex flex-col"
            >
              <div className="h-16 px-6 flex items-center justify-between border-b border-slate-50 shrink-0">
                <div className="relative h-6 w-20">
                  <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill sizes="80px" className="object-contain" />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-10 w-10 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 grid place-items-center"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-8">
                <div className="space-y-6">
                  {/* Home Link */}
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`block text-slate-900 font-black text-lg hover:text-[#0A66C2] transition-colors ${isActiveLink('/') ? 'text-[#0A66C2]' : ''}`}
                  >
                    {t('nav.home')}
                  </Link>

                  {/* About Accordion */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setMobileAccordion(v => v === 'about' ? null : 'about')}
                      className="w-full flex items-center justify-between text-slate-900 font-black text-lg"
                    >
                      <span>{t('nav.about')}</span>
                      <svg className={`w-5 h-5 transition-transform ${mobileAccordion === 'about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'about' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-slate-100"
                        >
                          {aboutItems.map(item => (
                            <Link key={item.id} href={item.href} onClick={() => setMobileOpen(false)} className="text-slate-500 font-bold hover:text-[#0A66C2]">
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Structure Accordion */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setMobileAccordion(v => v === 'structure' ? null : 'structure')}
                      className="w-full flex items-center justify-between text-slate-900 font-black text-lg"
                    >
                      <span>{t('nav.structure')}</span>
                      <svg className={`w-5 h-5 transition-transform ${mobileAccordion === 'structure' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'structure' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-slate-100"
                        >
                          {structureItems.map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-slate-500 font-bold hover:text-[#0A66C2]">
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/subsidiaries" onClick={() => setMobileOpen(false)} className="block text-slate-900 font-black text-lg hover:text-[#0A66C2]">
                    {t('nav.subsidiaries')}
                  </Link>

                  {/* Announcements Accordion */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setMobileAccordion(v => v === 'announcements' ? null : 'announcements')}
                      className="w-full flex items-center justify-between text-slate-900 font-black text-lg"
                    >
                      <span>{t('nav.announcements')}</span>
                      <svg className={`w-5 h-5 transition-transform ${mobileAccordion === 'announcements' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'announcements' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-slate-100"
                        >
                          {announcementsItems.map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-slate-500 font-bold hover:text-[#0A66C2]">
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/kontak" onClick={() => setMobileOpen(false)} className="block text-slate-900 font-black text-lg hover:text-[#0A66C2]">
                    {t('nav.contact')}
                  </Link>
                </div>
              </div>

              <div className="p-8 border-t border-slate-50">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] text-center">
                  © {new Date().getFullYear()} ARDANA PERKASA GROUP
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarSection;
