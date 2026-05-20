'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

const IntroSection: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, -40]);
  const imageY = useTransform(scrollY, [0, 900], [0, -18]);
  const [showHeroLogo, setShowHeroLogo] = useState(true);
  const content = {
    badge: t('hero.about.badge'),
    headline: t('hero.headline'),
    subheadline: t('hero.subheadline'),
    cta: t('common.learn_more'),
    illustrationAlt: t('hero.illustrationAlt'),
    logoAlt: t('brand.logoAlt'),
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowHeroLogo(latest <= 12);
  });

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${apgSystem.surfaces.primaryGradient} ${apgSystem.surfaces.heroCurve} text-white`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <div className={`absolute inset-0 ${apgSystem.surfaces.primaryGradientOverlay}`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <div className={`absolute inset-0 ${apgSystem.surfaces.gridOverlay}`} />
      </motion.div>
      <motion.div className="pointer-events-none absolute inset-0" style={reduceMotion ? undefined : { y: bgY }}>
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, 12, 0] }}
          transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0A66C2]/20 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -16, 0], y: [0, -10, 0] }}
          transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
        />
        <motion.div
          className="absolute top-24 -right-28 h-72 w-72 rounded-full bg-[#041E4A]/25 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -14, 0], y: [0, 10, 0] }}
          transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
        />
      </motion.div>

      <div className={`${apgSystem.spacing.container} ${apgSystem.spacing.heroShellPad} ${apgSystem.spacing.heroBottomGap} relative z-10`}>
        <motion.div
          initial="hidden"
          animate={showHeroLogo ? 'show' : 'hidden'}
          variants={apgSystem.motion.logoBadge.variants}
          transition={apgSystem.motion.logoBadge.transition}
          className="absolute left-0 top-7 md:top-9"
        >
          <div className={apgSystem.badge.logo}>
            <div className="relative h-16 w-36">
              <Image src="/images/apgg.png" alt={content.logoAlt} fill sizes="144px" className="object-contain" />
            </div>
          </div>
        </motion.div>

        <div className={`grid items-center gap-10 md:gap-12 lg:grid-cols-2 ${apgSystem.spacing.heroInnerPad}`}>
          <div className="text-left">
            <motion.h1 {...apgSystem.motion.itemDelay(0.2)} className={`mt-4 ${apgSystem.typography.h1} max-w-[22ch]`}>
              {content.headline}
            </motion.h1>
            <motion.p {...apgSystem.motion.itemDelay(0.3)} className="mt-5 text-base text-white/80 leading-relaxed max-w-prose">
              {content.subheadline}
            </motion.p>

            <div className="mt-7 flex items-center gap-3">
              <motion.div
                {...apgSystem.motion.itemDelay(0.45)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Button
                  variant="white"
                  size="md"
                  onClick={() => router.push('/tentang')}
                  className={`${apgSystem.button.noScaleHover} shadow-[0_10px_30px_rgba(255,255,255,0.16)] hover:shadow-[0_14px_44px_rgba(255,255,255,0.22)]`}
                >
                  {content.cta}
                  <span className={`ml-3 text-base ${apgSystem.icon.hover}`}>→</span>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div {...apgSystem.motion.itemDelay(0.35)} className="relative flex justify-center items-end h-[15rem] sm:h-[22rem] lg:h-[28rem]">
            <div className="relative w-full h-full max-w-[34rem]">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[55%] h-[14rem] sm:h-[18rem] w-[14rem] sm:w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_65%)]" />
                <div className="absolute left-1/2 bottom-0 h-5 w-[16rem] -translate-x-1/2 rounded-[100%] bg-black/30 blur-[22px]" />
              </div>

              <motion.div
                className="relative h-full w-full will-change-transform transform-gpu"
                animate={reduceMotion ? undefined : apgSystem.motion.float.animate()}
                transition={reduceMotion ? undefined : apgSystem.motion.float.transition}
                style={reduceMotion ? undefined : { y: imageY }}
              >
                <Image
                  src="/images/hero_section_top_image.png"
                  alt={content.illustrationAlt}
                  fill
                  quality={100}
                  sizes="(max-width: 48rem) 92vw, (max-width: 80rem) 46vw, 40rem"
                  className="object-contain object-bottom select-none"
                  style={{ filter: 'drop-shadow(0 22px 55px rgba(0,0,0,0.28))' }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 160" className="block w-full h-[7.5rem] md:h-[10rem]" preserveAspectRatio="none">
          <path
            fill="rgb(248 250 252)"
            d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,133.3C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default IntroSection;
