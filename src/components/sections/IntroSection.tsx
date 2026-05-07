'use client';

import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const IntroSection: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section className="apg-section-divider bg-slate-50 pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="relative min-h-[36rem] sm:min-h-[42rem] lg:min-h-[46rem] overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] text-white shadow-[0_30px_90px_rgba(2,6,23,0.18)]">
          <motion.div style={{ y: yBackground }} className="pointer-events-none absolute inset-0 opacity-[0.55]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(4,26,64,0.35),transparent_60%)]" />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
          </div>

          <div className="relative z-10 px-7 sm:px-10 lg:px-14 pt-12 sm:pt-14 pb-16 sm:pb-20">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="text-left">
                <h1 className="mt-7 text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.02] max-w-[16ch]">
                  {t('intro.title.part1')}{' '}
                  {t('intro.title.highlight')}{' '}
                  {t('intro.title.part2')}
                </h1>

                <div className="mt-6 w-[18rem] h-6">
                  <div className="h-1/2 bg-[#E11D48]" />
                  <div className="h-1/2 bg-white" />
                </div>

                <p className="mt-6 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose font-medium">
                  {t('intro.desc')}
                </p>

                <div className="mt-7">
                  <Button
                    variant="white"
                    size="md"
                    onClick={() => router.push('/tentang')}
                    className="min-h-12 px-7 rounded-full shadow-[0_18px_40px_rgba(2,6,23,0.22)]"
                  >
                    {t('common.learn_more')}
                    <span className="ml-3 text-base">→</span>
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={
                  reduceMotion
                    ? { opacity: 1, scale: 1 }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: [0, -12, 0],
                      }
                }
                transition={
                  reduceMotion
                    ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                    : {
                        opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                        scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                        y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                      }
                }
                className="relative flex justify-center items-end h-[16rem] sm:h-[28rem] lg:h-[34rem]"
              >
                <div className="relative w-full h-full">
                  <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-[58%] h-[16rem] sm:h-[24rem] w-[16rem] sm:w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_65%)]" />
                    <div className="absolute left-1/2 bottom-0 h-4 sm:h-10 w-[12rem] sm:w-[22rem] -translate-x-1/2 rounded-[100%] bg-black/35 blur-[18px] sm:blur-[26px]" />
                  </div>

                  <motion.div
                    className="relative h-full w-full will-change-transform transform-gpu"
                    animate={reduceMotion ? undefined : { x: [0, 8, 0, -8, 0] }}
                    transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Image
                      src="/images/hero_section_top_image.png"
                      alt="APG Hero Illustration"
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
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
