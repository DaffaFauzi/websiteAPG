'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type TargetAndTransition } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LogoIntro from '@/components/ui/LogoIntro';
import PatternLoader from '@/components/ui/PatternLoader';
import PageReveal from '@/components/ui/PageReveal';

const INTRO_TIMING = {
  logoDelayMs: 0,
  logoIntroMs: 820,
  loaderStartMs: 860,
  loaderStepMs: 260,
  loaderPhaseEndMs: 1900,
  exitLoaderMs: 220,
  exitLogoMs: 420,
  exitOverlayMs: 680,
  reducedTotalMs: 520,
} as const;

type Phase = 'intro' | 'loader' | 'exitLoader' | 'exitLogo' | 'exitOverlay';
type CSSVarTarget = TargetAndTransition & Record<`--${string}`, string | number>;

function computeShouldPlayIntro() {
  const played = sessionStorage.getItem('introPlayed') === 'true';
  const navEntry = performance.getEntriesByType?.('navigation')?.[0] as PerformanceNavigationTiming | undefined;
  const legacyNavType = (performance as unknown as { navigation?: { type?: number } }).navigation?.type;
  const legacyType = typeof legacyNavType === 'number' ? (legacyNavType === 1 ? 'reload' : 'navigate') : undefined;
  const navType = navEntry?.type ?? legacyType ?? 'navigate';

  return !played || navType === 'reload';
}

function lockBodyScroll() {
  const body = document.body;
  const originalOverflow = body.style.overflow;
  const originalPaddingRight = body.style.paddingRight;
  const originalBg = body.style.backgroundColor;
  const originalPosition = body.style.position;
  const originalTop = body.style.top;
  const originalLeft = body.style.left;
  const originalRight = body.style.right;
  const originalWidth = body.style.width;
  const scrollY = window.scrollY || window.pageYOffset || 0;

  body.style.backgroundColor = '#0A66C2';
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
  body.style.left = '0';
  body.style.right = '0';
  body.style.width = '100%';

  return () => {
    body.style.overflow = originalOverflow;
    body.style.paddingRight = originalPaddingRight;
    body.style.backgroundColor = originalBg;
    body.style.position = originalPosition;
    body.style.top = originalTop;
    body.style.left = originalLeft;
    body.style.right = originalRight;
    body.style.width = originalWidth;
    window.scrollTo(0, scrollY);
  };
}

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [phase, setPhase] = useState<Phase>('intro');
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [reveal, setReveal] = useState(false);
  const [animateReveal, setAnimateReveal] = useState(true);
  const timeoutsRef = useRef<number[]>([]);
  const unlockScrollRef = useRef<null | (() => void)>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const progress = useMemo(() => {
    if (!showSplash) return 1;
    if (reduceMotion) return 1;
    if (phase === 'intro') return 0.12;
    if (phase === 'loader') return 0.12 + Math.max(0, activeIndex + 1) * 0.16;
    if (phase === 'exitLoader') return 0.78;
    if (phase === 'exitLogo') return 0.86;
    return 0.94;
  }, [activeIndex, phase, reduceMotion, showSplash]);

  const overlayEnter = useMemo<CSSVarTarget>(
    () => ({
      opacity: 1,
      scale: 1,
      '--reveal': '0%',
    }),
    [],
  );

  const overlayExit = useMemo<CSSVarTarget>(
    () =>
      reduceMotion
        ? {
            opacity: 0,
            '--reveal': '120%',
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          }
        : {
            opacity: 0,
            scale: 1.03,
            '--reveal': '120%',
            transition: { duration: INTRO_TIMING.exitOverlayMs / 1000, ease: [0.22, 1, 0.36, 1] },
          },
    [reduceMotion],
  );

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let shouldPlay = true;
    try {
      shouldPlay = computeShouldPlayIntro();
    } catch {
      shouldPlay = true;
    }

    const id = window.setTimeout(() => {
      if (!shouldPlay) {
        setReveal(true);
        setShowSplash(false);
        return;
      }

      sessionStorage.setItem('introPlayed', 'true');
      setReveal(false);
      setAnimateReveal(true);
      setShowSplash(true);
      setPhase('intro');
      setActiveIndex(-1);
    }, 0);

    return () => window.clearTimeout(id);
  }, [mounted]);

  useEffect(() => {
    if (!showSplash) return;

    unlockScrollRef.current?.();
    unlockScrollRef.current = lockBodyScroll();

    const node = contentRef.current as (HTMLDivElement & { inert?: boolean }) | null;
    if (node) node.inert = true;

    return () => {
      unlockScrollRef.current?.();
      unlockScrollRef.current = null;
      if (node) node.inert = false;
    };
  }, [showSplash]);

  useEffect(() => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];

    if (!showSplash) return;

    if (reduceMotion) {
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setReveal(true);
          setShowSplash(false);
        }, INTRO_TIMING.reducedTotalMs),
      );
      return;
    }

    timeoutsRef.current.push(window.setTimeout(() => setPhase('loader'), INTRO_TIMING.loaderStartMs));
    for (let i = 0; i < 4; i += 1) {
      timeoutsRef.current.push(
        window.setTimeout(() => setActiveIndex(i), INTRO_TIMING.loaderStartMs + i * INTRO_TIMING.loaderStepMs),
      );
    }

    timeoutsRef.current.push(window.setTimeout(() => setPhase('exitLoader'), INTRO_TIMING.loaderPhaseEndMs));
    timeoutsRef.current.push(
      window.setTimeout(() => setPhase('exitLogo'), INTRO_TIMING.loaderPhaseEndMs + INTRO_TIMING.exitLoaderMs),
    );
    timeoutsRef.current.push(
      window.setTimeout(() => setReveal(true), INTRO_TIMING.loaderPhaseEndMs + INTRO_TIMING.exitLoaderMs),
    );
    timeoutsRef.current.push(
      window.setTimeout(
        () => setPhase('exitOverlay'),
        INTRO_TIMING.loaderPhaseEndMs + INTRO_TIMING.exitLoaderMs + INTRO_TIMING.exitLogoMs,
      ),
    );
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setShowSplash(false);
      }, INTRO_TIMING.loaderPhaseEndMs + INTRO_TIMING.exitLoaderMs + INTRO_TIMING.exitLogoMs + INTRO_TIMING.exitOverlayMs),
    );

    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [reduceMotion, showSplash]);

  return (
    <>
      <div ref={contentRef} aria-hidden={showSplash} className={showSplash ? 'pointer-events-none' : ''}>
        <PageReveal reveal={reveal} animate={animateReveal} disabled={showSplash}>
          {children}
        </PageReveal>
      </div>

      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={overlayEnter}
            animate={overlayEnter}
            exit={overlayExit}
            style={
              {
                backgroundColor: '#0A66C2',
                WebkitMaskImage: 'none',
                maskImage: 'none',
              } as React.CSSProperties
            }
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden will-change-transform transform-gpu"
            role="presentation"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_58%)]" />
            </div>
            <div className="flex w-full flex-col items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 1, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: INTRO_TIMING.logoDelayMs / 1000,
                  duration: INTRO_TIMING.logoIntroMs / 1000,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  'will-change-transform transform-gpu',
                  phase === 'exitLogo' || phase === 'exitOverlay' ? 'pointer-events-none' : '',
                ].join(' ')}
              >
                <motion.div
                  animate={
                    phase === 'exitLogo' || phase === 'exitOverlay'
                      ? { scale: 1.35, opacity: 0 }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{
                    duration: reduceMotion ? 0.25 : INTRO_TIMING.exitLogoMs / 1000,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="will-change-transform transform-gpu"
                >
                  <LogoIntro
                    alt={t('brand.logoAlt')}
                    svgSrc="/images/apgg.png"
                    pngSrc="/images/apgg.png"
                    name={t('brand.name')}
                  />
                </motion.div>
              </motion.div>

              <PatternLoader
                phase={phase}
                activeIndex={activeIndex}
                reduceMotion={reduceMotion}
                className="mt-8"
              />

              <div className="mt-6 w-full max-w-[22rem]">
                <div className="h-[0.1875rem] w-full overflow-hidden rounded-full bg-white/15">
                  <motion.div
                    initial={false}
                    animate={{ scaleX: progress }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: '0% 50%' }}
                    className="h-full w-full rounded-full bg-white/55"
                  />
                </div>
                <div className="mt-2 text-center text-[0.6875rem] font-semibold tracking-[0.16em] text-white/70 uppercase">
                  {t('common.loading')}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
