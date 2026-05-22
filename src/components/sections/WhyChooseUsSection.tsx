'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

type WhyChooseUsSectionProps = {
  variant?: 'default' | 'home';
};

export default function WhyChooseUsSection({ variant = 'default' }: WhyChooseUsSectionProps) {
  const { t } = useLanguage();

  const content = {
    tag: t('why.tag'),
    title: t('why.title'),
    desc: t('why.desc'),
    pillars: [
      { title: t('why.1.title'), desc: t('why.1.desc'), icon: LightBulbIcon },
      { title: t('why.2.title'), desc: t('why.2.desc'), icon: ShieldCheckIcon },
      { title: t('why.3.title'), desc: t('why.3.desc'), icon: ArrowTrendingUpIcon },
      { title: t('why.4.title'), desc: t('why.4.desc'), icon: GlobeAltIcon },
    ],
  };

  if (variant === 'home') {
    const serviceItems = content.pillars.slice(0, 3);
    return (
      <section className={`relative ${apgSystem.spacing.sectionY} -mt-8 md:-mt-20`}>
        <div className={apgSystem.spacing.container}>
          <motion.div {...apgSystem.motion.reveal} className="text-center max-w-2xl mx-auto">
            <motion.p {...apgSystem.motion.itemDelay(0.1)} className={`text-sm text-slate-500 ${apgSystem.typography.tag}`}>
              {content.tag}
            </motion.p>
            <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2} text-slate-950`}>
              {content.title}
            </motion.h2>
            <motion.p {...apgSystem.motion.itemDelay(0.3)} className={`mt-4 ${apgSystem.typography.body}`}>
              {content.desc}
            </motion.p>
          </motion.div>

          <motion.div {...apgSystem.motion.stagger} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {serviceItems.map((item) => (
              <motion.div key={item.title} variants={apgSystem.motion.item.variants} className="h-full">
                <div className={`group ${apgSystem.card.base} ${apgSystem.card.elevated} ${apgSystem.card.paddingComfort} h-full`}>
                  <div className="h-12 w-12 rounded-full bg-slate-50 text-[var(--color-primary)] flex items-center justify-center transition-colors duration-200 group-hover:bg-slate-100">
                    <item.icon className={`h-6 w-6 ${apgSystem.icon.hover}`} />
                  </div>
                  <h3 className={`mt-5 ${apgSystem.typography.h3} text-slate-950 leading-relaxed`}>{item.title}</h3>
                  <p className={`mt-2 ${apgSystem.typography.body}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={`apg-section-divider relative ${apgSystem.spacing.sectionY} bg-slate-50 overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className={`${apgSystem.spacing.container} relative`}>
        <motion.div
          {...apgSystem.motion.reveal}
          className="max-w-2xl"
        >
          <motion.p {...apgSystem.motion.itemDelay(0.1)} className="text-sm text-slate-500">
            {content.tag}
          </motion.p>
          <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2} text-slate-950`}>
            {content.title}
          </motion.h2>
          <motion.p {...apgSystem.motion.itemDelay(0.3)} className={`mt-4 ${apgSystem.typography.body}`}>
            {content.desc}
          </motion.p>
        </motion.div>

        <motion.div {...apgSystem.motion.stagger} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {content.pillars.map((item) => (
            <motion.div
              key={item.title}
              variants={apgSystem.motion.item.variants}
              className={`group ${apgSystem.card.base} ${apgSystem.card.padding} min-h-[11.5rem] text-left`}
            >
              <div className="h-11 w-11 rounded-full bg-slate-50 text-[var(--color-primary)] flex items-center justify-center transition-colors duration-200 group-hover:bg-slate-100">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-4 ${apgSystem.typography.h3} text-slate-950 leading-relaxed`}>{item.title}</h3>
              <p className={`mt-2 ${apgSystem.typography.body}`}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
