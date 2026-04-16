'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white px-6">
      <div className="relative text-center max-w-lg">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
          <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
        <p className="text-xs tracking-[0.2em] text-white/75 font-extrabold">{t('notFound.tag')}</p>
        <h1 className="mt-4 text-6xl font-extrabold tracking-[-0.02em] leading-none">404</h1>
        <p className="mt-4 text-white/80 leading-relaxed">
          {t('notFound.desc')}
        </p>
        <Link
          href="/"
          className="apg-btn inline-flex items-center justify-center mt-8 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 shadow-[0_18px_55px_rgba(0,0,0,0.22)] hover:bg-white/95"
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </div>
  );
}
