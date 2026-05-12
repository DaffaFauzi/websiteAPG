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
      if (!navRef.current) return;
      if (navRef.current.contains(event.target as Node)) return;
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
      { href: '/pengumuman/berita', label: t('nav.news') },
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
    <nav
      ref={navRef}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-[background-color,box-shadow,backdrop-filter] duration-[380ms] ease-in-out',
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 pointer-events-auto'
          : 'bg-transparent pointer-events-none',
      ].join(' ')}
      aria-label={t('nav.aria')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 lg:h-20 flex items-center justify-between">
          <motion.div
            initial={false}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : -10,
              pointerEvents: showContent ? 'auto' : 'none',
            }}
            transition={{ duration: 0.36, ease: [0.42, 0, 0.58, 1] }}
            className="hidden md:flex items-center gap-1"
          >
            {pathname !== '/' ? (
              <Link
                href="/"
                aria-label={t('nav.home')}
                className={[
                  'h-10 w-10 rounded-lg grid place-items-center transition-colors',
                  isActiveLink('/') ? 'text-[#0A66C2]' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100',
                ].join(' ')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1v-10.5z" />
                </svg>
              </Link>
            ) : null}

            <div className="relative" onMouseEnter={() => scheduleOpen('about')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('about')}
                className={[
                  'px-3 py-2 rounded-lg text-sm font-semibold transition-colors',
                  desktopDropdown === 'about' || aboutItems.some((x) => isActiveLink(x.href))
                    ? 'text-[#0A66C2] bg-[#0A66C2]/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100',
                ].join(' ')}
                aria-haspopup="menu"
                aria-expanded={desktopDropdown === 'about'}
              >
                {t('nav.about')}
              </button>
            </div>

            <div className="relative" onMouseEnter={() => scheduleOpen('structure')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('structure')}
                className={[
                  'px-3 py-2 rounded-lg text-sm font-semibold transition-colors',
                  desktopDropdown === 'structure' || structureItems.some((x) => isActiveLink(x.href))
                    ? 'text-[#0A66C2] bg-[#0A66C2]/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100',
                ].join(' ')}
                aria-haspopup="menu"
                aria-expanded={desktopDropdown === 'structure'}
              >
                {t('nav.structure')}
              </button>
            </div>

            <div className="relative" onMouseEnter={() => scheduleOpen('subsidiaries')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('subsidiaries')}
                className={[
                  'px-3 py-2 rounded-lg text-sm font-semibold transition-colors',
                  desktopDropdown === 'subsidiaries' || isActiveLink('/anak-perusahaan') || isActiveLink('/subsidiaries')
                    ? 'text-[#0A66C2] bg-[#0A66C2]/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100',
                ].join(' ')}
                aria-haspopup="menu"
                aria-expanded={desktopDropdown === 'subsidiaries'}
              >
                {t('nav.subsidiaries')}
              </button>
            </div>

            <div className="relative" onMouseEnter={() => scheduleOpen('announcements')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('announcements')}
                className={[
                  'px-3 py-2 rounded-lg text-sm font-semibold transition-colors',
                  desktopDropdown === 'announcements' || announcementsItems.some((x) => isActiveLink(x.href))
                    ? 'text-[#0A66C2] bg-[#0A66C2]/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100',
                ].join(' ')}
                aria-haspopup="menu"
                aria-expanded={desktopDropdown === 'announcements'}
              >
                {t('nav.announcements')}
              </button>
            </div>

            <Link
              href="/kontak"
              className={[
                'px-3 py-2 rounded-lg text-sm font-semibold transition-colors',
                isActiveLink('/kontak') ? 'text-[#0A66C2] bg-[#0A66C2]/10' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100',
              ].join(' ')}
            >
              {t('nav.contact')}
            </Link>
          </motion.div>

          <motion.div
            initial={false}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : -10,
              pointerEvents: showContent ? 'auto' : 'none',
            }}
            transition={{ duration: 0.36, ease: [0.42, 0, 0.58, 1] }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="hidden lg:flex items-center gap-1 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 px-1 py-1">
              <button
                onClick={() => setLanguage('id')}
                className={[
                  'px-3 py-2 text-xs font-black rounded-lg transition-colors min-h-10',
                  language === 'id' ? 'bg-[#0A66C2] text-white' : 'text-slate-700 hover:bg-slate-100',
                ].join(' ')}
                aria-label={t('language.id.aria')}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={[
                  'px-3 py-2 text-xs font-black rounded-lg transition-colors min-h-10',
                  language === 'en' ? 'bg-[#0A66C2] text-white' : 'text-slate-700 hover:bg-slate-100',
                ].join(' ')}
                aria-label={t('language.en.aria')}
              >
                EN
              </button>
            </div>

            <Link href="/" aria-label={t('brand.name')} className="flex items-center">
              <div className="relative h-6 w-20 sm:h-7 sm:w-24">
                <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill sizes="96px" className="object-contain" priority />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden h-10 w-10 rounded-lg bg-[#0A66C2] text-white grid place-items-center shadow-sm active:scale-[0.98] transition-transform"
              aria-label={mobileOpen ? t('nav.menu.close') : t('nav.menu.open')}
              aria-expanded={mobileOpen}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <motion.span
                  animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0, width: 20 }}
                  transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
                  className="block h-[3px] bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1, x: mobileOpen ? 16 : 0 }}
                  transition={{ duration: 0.25, ease: [0.42, 0, 0.58, 1] }}
                  className="block h-[3px] w-5 bg-white rounded-full"
                />
                <motion.span
                  animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0, width: 20 }}
                  transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
                  className="block h-[3px] bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showContent && desktopDropdown ? (
          <motion.div
            key="desktop-dropdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.42, 0, 0.58, 1] }}
            className="absolute top-full left-0 right-0"
            onMouseEnter={() => {
              clearHoverTimers();
            }}
            onMouseLeave={scheduleClose}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
              {desktopDropdown === 'about' ? (
                <div className="rounded-xl bg-white shadow-lg border border-slate-200 p-4 w-full max-w-lg">
                  <div className="text-xs font-black tracking-[0.18em] uppercase text-slate-500 px-2">{t('nav.about')}</div>
                  <div className="mt-3 space-y-1">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setDesktopDropdown(null)}
                        className={[
                          'flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition-colors',
                          isActiveLink(item.href) ? 'bg-[#0A66C2] text-white' : 'text-slate-800 hover:bg-slate-50',
                        ].join(' ')}
                      >
                        <span>{item.label}</span>
                        <span className={isActiveLink(item.href) ? 'text-white/85' : 'text-slate-400'}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {desktopDropdown === 'structure' ? (
                <div className="rounded-xl bg-white shadow-lg border border-slate-200 p-4 w-full max-w-md">
                  <div className="text-xs font-black tracking-[0.18em] uppercase text-slate-500 px-2">{t('nav.structure')}</div>
                  <div className="mt-3 space-y-1">
                    {structureItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDesktopDropdown(null)}
                        className={[
                          'flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition-colors',
                          isActiveLink(item.href) ? 'bg-[#0A66C2] text-white' : 'text-slate-800 hover:bg-slate-50',
                        ].join(' ')}
                      >
                        <span>{item.label}</span>
                        <span className={isActiveLink(item.href) ? 'text-white/85' : 'text-slate-400'}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {desktopDropdown === 'announcements' ? (
                <div className="rounded-xl bg-white shadow-lg border border-slate-200 p-4 w-full max-w-md">
                  <div className="text-xs font-black tracking-[0.18em] uppercase text-slate-500 px-2">{t('nav.announcements')}</div>
                  <div className="mt-3 space-y-1">
                    {announcementsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDesktopDropdown(null)}
                        className={[
                          'flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition-colors',
                          isActiveLink(item.href) ? 'bg-[#0A66C2] text-white' : 'text-slate-800 hover:bg-slate-50',
                        ].join(' ')}
                      >
                        <span>{item.label}</span>
                        <span className={isActiveLink(item.href) ? 'text-white/85' : 'text-slate-400'}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {desktopDropdown === 'subsidiaries' ? (
                <div className="rounded-xl bg-white shadow-lg border border-slate-200 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4">
                      <div className="text-xs font-black tracking-[0.18em] uppercase text-slate-500">{t('nav.subsidiaries')}</div>
                      <div className="mt-3 text-sm text-slate-600 leading-relaxed">{t('subsidiaries.desc')}</div>
                      <div className="mt-5">
                        <Link
                          href="/anak-perusahaan"
                          onClick={() => setDesktopDropdown(null)}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A66C2] hover:text-[#095aa9]"
                        >
                          {t('nav.subsidiaries_all')} <span>→</span>
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {subsidiariesPreview.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/subsidiaries/${s.slug}`}
                            onClick={() => setDesktopDropdown(null)}
                            className="group rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 rounded-lg bg-white border border-slate-200 overflow-hidden grid place-items-center flex-shrink-0">
                                {s.logoSrc ? <Image src={s.logoSrc} alt="" fill sizes="40px" className="object-contain p-1" /> : null}
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-slate-950 truncate">{s.displayName}</div>
                                <div className="mt-1 text-xs text-slate-500 truncate">{t(s.sectorKey)}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && mobileOpen ? (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-slate-950/25 backdrop-blur-[2px] md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && mobileOpen ? (
          <motion.aside
            key="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.42, 0, 0.58, 1] }}
            className="fixed top-0 right-0 z-[70] h-full w-[20rem] max-w-[88vw] bg-white shadow-2xl border-l border-slate-200 md:hidden"
            role="dialog"
            aria-label={t('nav.menu.open')}
          >
            <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200">
              <div className="relative h-6 w-20">
                <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill sizes="80px" className="object-contain" />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="h-10 w-10 rounded-lg hover:bg-slate-100 grid place-items-center"
                aria-label={t('nav.menu.close')}
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            <div className="p-4 space-y-2">
              {pathname !== '/' ? (
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 border border-slate-200"
                >
                  <span className="h-9 w-9 rounded-lg bg-slate-100 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1v-10.5z" />
                    </svg>
                  </span>
                  <span>{t('nav.home')}</span>
                </Link>
              ) : null}

              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion((v) => (v === 'about' ? null : 'about'))}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  aria-expanded={mobileAccordion === 'about'}
                >
                  <span>{t('nav.about')}</span>
                  <span className="text-slate-400">{mobileAccordion === 'about' ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAccordion === 'about' ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.42, 0, 0.58, 1] }}
                      className="px-2 pb-2"
                    >
                      {aboutItems.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={[
                            'block rounded-lg px-3 py-2 text-sm transition-colors',
                            isActiveLink(item.href) ? 'bg-[#0A66C2] text-white' : 'text-slate-700 hover:bg-slate-50',
                          ].join(' ')}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion((v) => (v === 'structure' ? null : 'structure'))}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  aria-expanded={mobileAccordion === 'structure'}
                >
                  <span>{t('nav.structure')}</span>
                  <span className="text-slate-400">{mobileAccordion === 'structure' ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAccordion === 'structure' ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.42, 0, 0.58, 1] }}
                      className="px-2 pb-2"
                    >
                      {structureItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={[
                            'block rounded-lg px-3 py-2 text-sm transition-colors',
                            isActiveLink(item.href) ? 'bg-[#0A66C2] text-white' : 'text-slate-700 hover:bg-slate-50',
                          ].join(' ')}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion((v) => (v === 'subsidiaries' ? null : 'subsidiaries'))}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  aria-expanded={mobileAccordion === 'subsidiaries'}
                >
                  <span>{t('nav.subsidiaries')}</span>
                  <span className="text-slate-400">{mobileAccordion === 'subsidiaries' ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAccordion === 'subsidiaries' ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.42, 0, 0.58, 1] }}
                      className="px-2 pb-3"
                    >
                      <Link
                        href="/anak-perusahaan"
                        onClick={() => setMobileOpen(false)}
                        className={[
                          'block rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                          isActiveLink('/anak-perusahaan') || isActiveLink('/subsidiaries') ? 'bg-[#0A66C2] text-white' : 'text-slate-700 hover:bg-slate-50',
                        ].join(' ')}
                      >
                        {t('nav.subsidiaries_all')}
                      </Link>

                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {subsidiariesPreview.slice(0, 4).map((s) => (
                          <Link
                            key={s.slug}
                            href={`/subsidiaries/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className="relative h-8 w-8 rounded-lg bg-white border border-slate-200 overflow-hidden flex-shrink-0">
                                {s.logoSrc ? <Image src={s.logoSrc} alt="" fill sizes="32px" className="object-contain p-1" /> : null}
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-semibold text-slate-900 truncate">{s.displayName}</div>
                                <div className="text-[10px] text-slate-500 truncate">{t(s.sectorKey)}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion((v) => (v === 'announcements' ? null : 'announcements'))}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  aria-expanded={mobileAccordion === 'announcements'}
                >
                  <span>{t('nav.announcements')}</span>
                  <span className="text-slate-400">{mobileAccordion === 'announcements' ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAccordion === 'announcements' ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.42, 0, 0.58, 1] }}
                      className="px-2 pb-2"
                    >
                      {announcementsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={[
                            'block rounded-lg px-3 py-2 text-sm transition-colors',
                            isActiveLink(item.href) ? 'bg-[#0A66C2] text-white' : 'text-slate-700 hover:bg-slate-50',
                          ].join(' ')}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <Link
                href="/kontak"
                onClick={() => setMobileOpen(false)}
                className={[
                  'flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold transition-colors',
                  isActiveLink('/kontak') ? 'bg-[#0A66C2] text-white border-[#0A66C2]' : 'text-slate-900 hover:bg-slate-50',
                ].join(' ')}
              >
                <span>{t('nav.contact')}</span>
                <span className={isActiveLink('/kontak') ? 'text-white/85' : 'text-slate-400'}>→</span>
              </Link>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarSection;
