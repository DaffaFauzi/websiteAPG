'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
  phase: 'intro' | 'loader' | 'exitLoader' | 'exitLogo' | 'exitOverlay';
  activeIndex: number;
  reduceMotion: boolean;
};

const PATTERN_STROKE = 'rgba(255,255,255,0.86)';
const PATTERN_STROKE_WIDTH = 1.65;

function Concentric() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke={PATTERN_STROKE} strokeWidth={PATTERN_STROKE_WIDTH}>
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="12" />
        <circle cx="24" cy="24" r="6" />
      </g>
    </svg>
  );
}

function DiamondLines() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke={PATTERN_STROKE} strokeWidth={PATTERN_STROKE_WIDTH} strokeLinejoin="round">
        <path d="M24 6 L42 24 L24 42 L6 24 Z" />
        <path d="M24 14 L34 24 L24 34 L14 24 Z" />
        <path d="M24 6 V42" opacity="0.6" />
        <path d="M6 24 H42" opacity="0.6" />
      </g>
    </svg>
  );
}

function HexagonLines() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke={PATTERN_STROKE} strokeWidth={PATTERN_STROKE_WIDTH} strokeLinejoin="round">
        <path d="M24 7 L38 15 V33 L24 41 L10 33 V15 Z" />
        <path d="M24 13 L33 18.5 V29.5 L24 35 L15 29.5 V18.5 Z" />
        <path d="M10 15 L38 33" opacity="0.55" />
        <path d="M38 15 L10 33" opacity="0.55" />
      </g>
    </svg>
  );
}

function DiagonalArrows() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <g
        fill="none"
        stroke={PATTERN_STROKE}
        strokeWidth={PATTERN_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 34 L26 18" />
        <path d="M18 34 L34 18" opacity="0.8" />
        <path d="M26 34 L38 22" opacity="0.6" />
        <path d="M26 18 L26 24" />
        <path d="M26 18 L20 18" />
        <path d="M34 18 L34 24" opacity="0.8" />
        <path d="M34 18 L28 18" opacity="0.8" />
      </g>
    </svg>
  );
}

const PATTERNS = [Concentric, DiamondLines, HexagonLines, DiagonalArrows] as const;

export default function PatternLoader({ className, phase, activeIndex, reduceMotion }: Props) {
  const containerAnim = useMemo(() => {
    if (phase === 'intro') return { opacity: 0.55, y: '0rem' };
    if (reduceMotion) return { opacity: 1, y: '0rem' };
    if (phase === 'exitLoader' || phase === 'exitLogo' || phase === 'exitOverlay') return { opacity: 0, y: '-0.375rem' };
    return { opacity: 1, y: '0rem' };
  }, [phase, reduceMotion]);

  return (
    <motion.div
      aria-hidden={false}
      animate={containerAnim}
      transition={{
        duration: reduceMotion ? 0.2 : phase === 'exitLoader' || phase === 'exitLogo' || phase === 'exitOverlay' ? 0.16 : 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={['flex items-center justify-center gap-3', className].filter(Boolean).join(' ')}
    >
      {PATTERNS.map((Pattern, idx) => {
        const isActive = idx === activeIndex;
        return (
          <motion.div
            key={idx}
            animate={
              reduceMotion
                ? { opacity: 0.55, scale: 1 }
                : isActive
                  ? { opacity: 1, scale: 1.03 }
                  : { opacity: 0.35, scale: 1 }
            }
            transition={{ duration: reduceMotion ? 0.12 : 0.26, ease: [0.22, 1, 0.36, 1] }}
            className={[
              'h-12 w-12 sm:h-14 sm:w-14 rounded-xl',
              'bg-white/10 border border-white/18',
              'will-change-transform transform-gpu',
            ].join(' ')}
          >
            <div className="h-full w-full p-2">{<Pattern />}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
