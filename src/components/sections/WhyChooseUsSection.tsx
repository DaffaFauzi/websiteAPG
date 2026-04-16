'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import {
  ShieldCheckIcon,
  Squares2X2Icon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyChooseUsSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const pressedTimeoutRef = useRef<number | null>(null);

  const items = [
    { icon: Squares2X2Icon, title: t('why.1.title'), desc: t('why.1.desc') },
    { icon: ShieldCheckIcon, title: t('why.2.title'), desc: t('why.2.desc') },
    { icon: ArrowTrendingUpIcon, title: t('why.3.title'), desc: t('why.3.desc') },
    { icon: HandRaisedIcon, title: t('why.4.title'), desc: t('why.4.desc') },
  ];

  useEffect(() => {
    return () => {
      if (pressedTimeoutRef.current) {
        window.clearTimeout(pressedTimeoutRef.current);
      }
    };
  }, []);

  const press = useCallback((idx: number) => {
    setPressedIndex(idx);
    if (pressedTimeoutRef.current) {
      window.clearTimeout(pressedTimeoutRef.current);
    }
    pressedTimeoutRef.current = window.setTimeout(() => {
      setPressedIndex(null);
    }, 240);
  }, []);

  return (
    <section className="apg-section-divider relative py-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.10),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_55%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.22em] text-[var(--accent)] uppercase font-bold mb-4">{t('why.tag')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950">{t('why.title')}</h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">{t('why.desc')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              className={[
                'group relative rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-[0_14px_40px_rgba(15,23,42,0.06)]',
                'transition-[transform,box-shadow,border-color,background-color] duration-[500ms] apg-ease',
                'hover:border-slate-300 hover:bg-slate-50 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)]',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
                pressedIndex === idx ? 'border-slate-300 bg-slate-50 shadow-[0_22px_70px_rgba(15,23,42,0.10)]' : '',
              ].join(' ')}
              role="button"
              tabIndex={0}
              onClick={() => press(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  press(idx);
                }
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-[500ms] apg-ease group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.10),transparent_55%)]" />
              </div>
              <div className="flex items-start gap-5 relative">
                <div className="h-12 w-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-[0_18px_40px_rgba(2,6,23,0.20)] transition-[transform,box-shadow,background-color] duration-[500ms] apg-ease group-hover:shadow-[0_26px_70px_rgba(10,102,194,0.20)] group-hover:scale-[1.06] group-active:scale-[1.02]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-950 transition-colors duration-[500ms] apg-ease group-hover:text-slate-950">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
