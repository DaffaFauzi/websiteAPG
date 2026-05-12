'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

export default function ProcessSection() {
  const { t } = useLanguage();
  const content = {
    tag: t('process.tag'),
    title: t('process.title'),
    desc: t('process.desc'),
    steps: [
      { num: '01', title: t('process.step1.title'), desc: t('process.step1.desc') },
      { num: '02', title: t('process.step2.title'), desc: t('process.step2.desc') },
      { num: '03', title: t('process.step3.title'), desc: t('process.step3.desc') },
      { num: '04', title: t('process.step4.title'), desc: t('process.step4.desc') },
    ],
  };

  return (
    <section className={`${apgSystem.spacing.sectionY} bg-slate-50`}>
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

        <div className="mt-10 relative">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 }}
            className="hidden md:block absolute left-10 right-10 top-8 h-px bg-slate-200 origin-left"
            aria-hidden
          />

          <motion.div {...apgSystem.motion.stagger} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            {content.steps.map((step) => (
              <motion.div key={step.num} variants={apgSystem.motion.item.variants} className="h-full">
                <div className={`group ${apgSystem.card.base} ${apgSystem.card.padding} h-full text-center`}>
                  <div className="mx-auto h-16 w-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[var(--color-primary)] font-semibold tracking-tight">
                    {step.num}
                  </div>
                  <h3 className={`mt-5 ${apgSystem.typography.h3} text-slate-950 leading-relaxed`}>{step.title}</h3>
                  <p className={`mt-2 ${apgSystem.typography.body}`}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
