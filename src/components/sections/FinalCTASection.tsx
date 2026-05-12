'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

export default function FinalCTASection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className={`relative ${apgSystem.spacing.sectionY}`}>
      <div className={apgSystem.spacing.container}>
        <motion.div
          {...apgSystem.motion.fadeUp}
          className={`relative overflow-hidden rounded-xl ${apgSystem.surfaces.primaryGradient} text-white ${apgSystem.card.paddingComfort} shadow-md`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(4,26,64,0.40),transparent_60%)]" />
          </div>

          <div className="relative">
            <motion.p {...apgSystem.motion.itemDelay(0.1)} className="text-sm text-white/75">
              {t('cta.tag')}
            </motion.p>
            <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2}`}>
              {t('cta.title')}
            </motion.h2>
            <motion.p {...apgSystem.motion.itemDelay(0.3)} className="mt-4 text-base text-white/85 leading-relaxed max-w-2xl">
              {t('cta.desc')}
            </motion.p>

            <div className="mt-7">
              <motion.div {...apgSystem.motion.itemDelay(0.45)}>
                <Button
                  variant="white"
                  size="md"
                  onClick={() => router.push('/kontak')}
                  className="min-h-12 rounded-full px-8 text-sm shadow-[0_10px_30px_rgba(255,255,255,0.18)] hover:shadow-[0_14px_42px_rgba(255,255,255,0.24)]"
                >
                  {t('cta.primary')}
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
