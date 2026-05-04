'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A66C2] text-white px-6">
      <div className="relative text-center max-w-lg">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_58%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_66%)]" />
        </div>
        <p className="text-xs tracking-[0.18em] text-white/75 font-extrabold uppercase">{t('notFound.tag')}</p>
        <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.02em] leading-none">404</h1>
        <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-prose mx-auto">
          {t('notFound.desc')}
        </p>
        <Link
          href="/"
          className="apg-btn inline-flex items-center justify-center mt-8 min-h-[3.25rem] rounded-full bg-white px-8 py-3 text-sm font-extrabold text-slate-950 shadow-[0_0.875rem_2.5rem_rgba(0,0,0,0.18)] hover:bg-white/95 active:scale-95 transition-transform truncate whitespace-nowrap"
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </div>
  );
}
