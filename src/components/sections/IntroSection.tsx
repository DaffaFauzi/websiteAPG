'use client';

import React from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const IntroSection: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const moveX = useMotionValue(0);
  const moveY = useMotionValue(0);

  const sTiltX = useSpring(tiltX, { stiffness: 140, damping: 18, mass: 0.2 });
  const sTiltY = useSpring(tiltY, { stiffness: 140, damping: 18, mass: 0.2 });
  const sMoveX = useSpring(moveX, { stiffness: 140, damping: 18, mass: 0.2 });
  const sMoveY = useSpring(moveY, { stiffness: 140, damping: 18, mass: 0.2 });

  const parallaxX = useTransform(sMoveX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(sMoveY, [-1, 1], [-8, 8]);
  const rotateX = useTransform(sTiltY, [-1, 1], [0.6, -0.6]);
  const rotateY = useTransform(sTiltX, [-1, 1], [-0.8, 0.8]);

  return (
    <section className="apg-section-divider relative overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#07337A] text-white">
      {/* Refined Background Elements */}
      <motion.div
        style={{ y: yBackground }}
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_66%)]" />
      </motion.div>
      
      {/* Subtle Glow Behind Hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(11,123,230,0.25),transparent_70%)] blur-[80px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_0.0625rem,transparent_0.0625rem),linear-gradient(to_bottom,rgba(255,255,255,0.55)_0.0625rem,transparent_0.0625rem)] bg-[size:4.5rem_4.5rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80">
              <span className="font-semibold">{t('intro.badge')}</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold tracking-[-0.02em] text-white leading-[1.04] sm:text-5xl lg:text-6xl">
              {t('intro.title.part1')}{' '}
              <span className="text-white">{t('intro.title.highlight')}</span>{' '}
              {t('intro.title.part2')}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              {t('intro.desc')}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/subsidiaries')}
                className="apg-btn rounded-full shadow-lg shadow-black/10"
              >
                {t('intro.cta.primary')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/annual-report')}
                className="apg-btn rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white hover:-translate-y-[1px] active:translate-y-0"
              >
                {t('intro.cta.secondary')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex justify-center items-end h-[22.5rem] sm:h-[28.75rem] xl:h-[38.75rem]"
          >
            <motion.div
              className="relative w-full h-full"
              onMouseMove={(e) => {
                if (reduceMotion) return;
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const nx = (x - 0.5) * 2;
                const ny = (y - 0.5) * 2;
                moveX.set(nx);
                moveY.set(ny);
                tiltX.set(nx);
                tiltY.set(ny);
              }}
              onMouseLeave={() => {
                moveX.set(0);
                moveY.set(0);
                tiltX.set(0);
                tiltY.set(0);
              }}
            >
              {/* Refined Lighting & Integration Elements */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Core radial highlight behind character */}
                <div className="absolute left-1/2 top-[56%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_65%)]" />
                
                {/* Soft ambient glow for integration */}
                <div className="absolute left-1/2 top-[60%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(11,123,230,0.15),transparent_70%)] blur-[40px]" />
                
                {/* Contact shadow below character */}
                <div className="absolute left-1/2 bottom-0 h-12 w-[24rem] -translate-x-1/2 rounded-[100%] bg-black/35 blur-[24px]" />
              </div>

              <motion.div
                className="relative h-full w-full will-change-transform transform-gpu"
                style={
                  reduceMotion
                    ? undefined
                    : {
                        x: parallaxX,
                        y: parallaxY,
                        rotateX,
                        rotateY,
                        transformPerspective: 1200,
                      }
                }
              >
                {/* Image with improved rendering & lighting effects */}
                <div className="relative h-full w-full">
                  {/* Subtle light wrap effect (glow around edges) */}
                  <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-30 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(11,123,230,0.2)_70%)]" />
                  
                  <Image
                    src="/images/hero_section_top_image.png"
                    alt="APG Hero Illustration"
                    fill
                    quality={100}
                    sizes="(max-width: 48rem) 92vw, (max-width: 80rem) 46vw, 40rem"
                    className="object-contain object-bottom select-none antialiased"
                    style={{ 
                      filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))',
                      imageRendering: 'auto'
                    }}
                    priority
                  />
                </div>

                {/* Internal lighting refinement */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(11,123,230,0.12),transparent_60%)] mix-blend-overlay" />
              </motion.div>
            </motion.div>

            {/* Floating Cards with Premium Animation & Depth - Auto-float + Mouse Parallax */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: reduceMotion ? 0 : [0, -10, 0]
              }}
              transition={{ 
                delay: 0.3, 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute left-0 top-6 rounded-2xl border border-white/16 bg-white/10 backdrop-blur-md px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:left-4 sm:top-10 z-20"
              style={{
                y: useTransform(sMoveY, [-1, 1], [-15, 15]),
                x: useTransform(sMoveX, [-1, 1], [-12, 12]),
              }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { 
                  y: [0, -8, 0], 
                  rotate: [0, -1.5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase font-black">{t('hero.card.projects.label')}</div>
                <div className="mt-1 text-2xl font-black text-white">{t('hero.card.projects.value')}</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: reduceMotion ? 0 : [0, 12, 0]
              }}
              transition={{ 
                delay: 0.4, 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                y: {
                  duration: 6.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }
              }}
              className="absolute right-0 top-20 rounded-2xl border border-white/16 bg-white/10 backdrop-blur-md px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:right-4 sm:top-28 z-20"
              style={{
                y: useTransform(sMoveY, [-1, 1], [15, -15]),
                x: useTransform(sMoveX, [-1, 1], [12, -12]),
              }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { 
                  y: [0, -10, 0], 
                  rotate: [0, 1.8, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 6.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }
                }
              >
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase font-black">{t('hero.card.partners.label')}</div>
                <div className="mt-1 text-2xl font-black text-white">{t('hero.card.partners.value')}</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                x: reduceMotion ? 0 : [0, 5, 0]
              }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                x: {
                  duration: 7.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }
              }}
              className="absolute left-8 bottom-4 rounded-2xl border border-white/16 bg-white/10 backdrop-blur-md px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:left-14 sm:bottom-8 z-20"
              style={{
                y: useTransform(sMoveY, [-1, 1], [-8, 8]),
                x: useTransform(sMoveX, [-1, 1], [10, -10]),
              }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { 
                  y: [0, -6, 0], 
                  rotate: [0, -1.2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 7.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }
                }
              >
                <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase font-black">{t('hero.card.industries.label')}</div>
                <div className="mt-1 text-2xl font-black text-white">{t('hero.card.industries.value')}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10" />
      </div>
    </section>
  );
};

export default IntroSection;
