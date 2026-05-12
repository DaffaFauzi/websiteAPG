'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

export default function LeadershipSection() {
  const { t } = useLanguage();
  const router = useRouter();

  const roles = [t('leadership.1.role'), t('leadership.2.role'), t('leadership.3.role'), t('leadership.4.role')];

  return (
    <section className={`apg-section-divider relative ${apgSystem.spacing.sectionY}`}>
      <div className={apgSystem.spacing.container}>
        <motion.div
          {...apgSystem.motion.reveal}
          className={`${apgSystem.card.base} ${apgSystem.card.paddingComfort}`}
        >
          <div className="rounded-xl bg-[var(--color-primary)] text-white p-6 sm:p-7">
            <motion.p {...apgSystem.motion.itemDelay(0.1)} className="text-sm text-white/75">
              {t('leadership.tag')}
            </motion.p>
            <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2}`}>
              {t('leadership.title')}
            </motion.h2>
            <motion.p {...apgSystem.motion.itemDelay(0.3)} className="mt-3 text-base text-white/85 leading-relaxed">
              {t('leadership.desc')}
            </motion.p>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <motion.div {...apgSystem.motion.stagger} className="flex flex-col items-center">
              {roles.map((role, idx) => (
                <React.Fragment key={role}>
                  <motion.div
                    variants={apgSystem.motion.item.variants}
                    className="w-full max-w-[30rem]"
                  >
                    <div className={`${apgSystem.card.subtle} ${apgSystem.card.padding} text-center`}>
                      <div className="text-sm font-semibold uppercase tracking-wide text-slate-800 leading-relaxed">{role}</div>
                    </div>
                  </motion.div>

                  {idx < roles.length - 1 ? (
                    <motion.div
                      aria-hidden
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 + idx * 0.08 }}
                      className="w-px h-14 bg-gradient-to-b from-slate-200/80 to-slate-200/30 origin-top"
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <motion.div {...apgSystem.motion.itemDelay(0.45)}>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => router.push('/struktur')}
                  className="min-h-12 px-8 rounded-full text-sm"
                >
                  {t('struktur.cta.view')}
                  <span className={`ml-3 ${apgSystem.icon.hover}`}>→</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
