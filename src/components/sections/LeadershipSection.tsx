'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';
import ImagePreviewModal from '@/components/ui/ImagePreviewModal';

export default function LeadershipSection() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

          <div className="mt-10 max-w-5xl mx-auto">
            <motion.div {...apgSystem.motion.itemDelay(0.4)} className="group relative aspect-[16/6] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-slate-50 cursor-pointer" onClick={() => setIsPreviewOpen(true)}>
              <Image 
                src="/images/struktur APG.png" 
                alt="Bagan Struktur Organisasi" 
                fill 
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur px-6 py-2.5 rounded-full text-slate-900 font-bold text-sm shadow-xl flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Klik untuk Preview
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div {...apgSystem.motion.itemDelay(0.45)}>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setIsPreviewOpen(true)}
                  className="min-h-12 px-8 rounded-full text-sm border-slate-200"
                >
                  Preview Bagan
                  <svg className="ml-3 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Button>
              </motion.div>
              <motion.div {...apgSystem.motion.itemDelay(0.5)}>
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

      <ImagePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        imageSrc="/images/struktur APG.png"
        imageAlt="Bagan Struktur Organisasi"
      />
    </section>
  );
}
