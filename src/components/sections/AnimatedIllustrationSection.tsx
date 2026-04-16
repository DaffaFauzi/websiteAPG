'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedIllustrationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="max-w-xl space-y-4">
              <p className="text-base font-semibold uppercase tracking-[0.32em] text-[var(--color-secondary)]">
                {t('illustration.tag')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {t('illustration.title')}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-8">
                {t('illustration.desc')}
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_80px_rgba(10,14,27,0.45)]">
              <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
                <div className="animate-slow-spin flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_60px_rgba(14,165,233,0.18)]">
                  <span className="text-sm font-semibold">{t('illustration.badge.ui')}</span>
                </div>
              </div>

              <div className="absolute right-4 top-8 animate-float">
                <div className="flex h-20 w-28 flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/90 p-3 text-white shadow-lg shadow-black/30">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs uppercase tracking-[0.24em] text-emerald-300">{t('illustration.badge.done')}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2.5 w-16 rounded-full bg-white/20" />
                    <div className="h-2.5 w-10 rounded-full bg-white/10" />
                  </div>
                  <div className="rounded-2xl bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                    {t('illustration.badge.checklist')}
                  </div>
                </div>
              </div>

              <div className="absolute right-6 bottom-6 animate-pulse-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-400/15 bg-slate-950/90 text-slate-100 shadow-[0_15px_40px_rgba(15,23,42,0.35)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                    <span className="text-sm font-semibold">⏱</span>
                  </div>
                </div>
              </div>

              <div className="relative flex h-[360px] items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/95 p-6">
                <div className="absolute inset-x-10 top-8 h-24 rounded-[2rem] bg-white/5 blur-2xl" />
                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/95 p-5">
                  <div className="flex h-full w-full flex-col rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(7,11,27,0.28)]">
                    <div className="flex items-center justify-between">
                      <div className="h-3.5 w-16 rounded-full bg-white/15" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="mt-6 flex-1 space-y-4">
                      <div className="h-10 rounded-3xl bg-slate-800/90 p-4">
                        <div className="h-3.5 w-24 rounded-full bg-cyan-400/20" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="h-24 rounded-3xl bg-slate-900/90 p-4">
                          <div className="h-3 w-20 rounded-full bg-white/10" />
                          <div className="mt-3 h-3 rounded-full bg-white/10" />
                        </div>
                        <div className="h-24 rounded-3xl bg-slate-900/90 p-4">
                          <div className="h-3 w-14 rounded-full bg-white/10" />
                          <div className="mt-3 h-3 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedIllustrationSection;
