'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '@/contexts/LanguageContext';
type ScrollCinemaProps = {
  children: React.ReactNode;
};

const ScrollCinema = ({ children }: ScrollCinemaProps) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !logoRef.current) {
      return;
    }

    let ctx: ReturnType<typeof gsap.context> | null = null;

    const init = () => {
      if (!containerRef.current || !overlayRef.current || !logoRef.current) {
        return;
      }

      ctx = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

        intro.set(overlayRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          clipPath: 'circle(150% at 50% 50%)',
        });
        intro.from(logoRef.current, {
          opacity: 0,
          scale: 0.72,
          y: 30,
          duration: 1,
        });
        intro.to(
          logoRef.current,
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'expo.out',
          },
          0,
        );
        intro.to(
          logoRef.current,
          {
            scale: 1.05,
            y: -8,
            duration: 0.8,
            yoyo: true,
            repeat: 1,
            ease: 'sine.inOut',
          },
          1,
        );
        intro.to(
          overlayRef.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 1.1,
            delay: 0.4,
            ease: 'power2.inOut',
          },
          1.4,
        );
        intro.to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: 'power1.out',
            pointerEvents: 'none',
          },
          '>-0.2',
        );
      }, containerRef);
    };

    const rafId = window.requestAnimationFrame(() => {
      init();
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white"
        style={{
          clipPath: 'circle(0% at 50% 50%)',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <div
          ref={logoRef}
          className="flex flex-col items-center gap-4 rounded-3xl border border-cyan-400/20 bg-slate-950/95 px-8 py-10 text-center shadow-[0_30px_80px_rgba(14,165,233,0.18)]"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-3xl font-bold tracking-[0.24em] text-cyan-100">
            {t('brand.short')}
          </div>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">{t('cinema.brand')}</p>
            <h1 className="text-3xl font-semibold text-white">{t('cinema.title')}</h1>
            <p className="text-sm text-white/75">{t('cinema.desc')}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ScrollCinema;
