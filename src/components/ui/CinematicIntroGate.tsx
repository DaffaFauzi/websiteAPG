'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  children: React.ReactNode;
};

export default function CinematicIntroGate({ children }: Props) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<'intro' | 'content'>('intro');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (phase !== 'intro') return;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    timerRef.current = window.setTimeout(() => {
      setPhase('content');
    }, 2600);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [phase]);

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === 'intro' ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-[#050A16] via-[#071C3A] to-[#0B2F6D] text-white"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,123,230,0.40),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(10,102,194,0.35),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(255,255,255,0.10),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.40)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.40)_1px,transparent_1px)] bg-[size:56px_56px]" />
              <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-[#0B7BE6]/25 blur-3xl" />
              <div className="absolute -bottom-44 -right-44 h-[680px] w-[680px] rounded-full bg-[#0A66C2]/22 blur-3xl" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="relative mx-auto w-[min(720px,calc(100vw-48px))]"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/14 bg-white/8 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />

                <div className="relative px-8 py-10 sm:px-10 sm:py-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.82 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-white/8 shadow-[0_0_80px_rgba(10,102,194,0.30)]"
                  >
                    <div className="relative h-10 w-10">
                      <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill className="object-contain" priority />
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="text-[11px] uppercase tracking-[0.32em] text-white/70"
                  >
                    {t('cinema.brand')}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-[1.06]"
                  >
                    {t('cinema.title')}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-5 text-sm sm:text-base text-white/80 leading-7 max-w-[52ch] mx-auto"
                  >
                    {t('cinema.desc')}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {phase === 'content' ? children : null}
    </>
  );
}
