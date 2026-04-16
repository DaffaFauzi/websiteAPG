'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

type Format = 'number' | 'compact' | 'suffix';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  durationSeconds?: number;
  format?: Format;
  suffix?: string;
};

const formatValue = (raw: number, format: Format, suffix?: string) => {
  if (format === 'compact') {
    return new Intl.NumberFormat('id-ID', { notation: 'compact', maximumFractionDigits: 0 }).format(raw);
  }
  if (format === 'suffix') {
    const base = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(raw);
    return `${base}${suffix ?? ''}`;
  }
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(raw);
};

export default function AnimatedNumber({
  value,
  className,
  durationSeconds = 1.2,
  format = 'number',
  suffix,
}: AnimatedNumberProps) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  const formatter = useMemo(() => {
    return (v: number) => formatValue(v, format, suffix);
  }, [format, suffix]);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: durationSeconds,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(formatter(Math.round(latest)));
      },
    });
    return () => controls.stop();
  }, [durationSeconds, formatter, motionValue, value]);

  return <span className={className}>{display}</span>;
}