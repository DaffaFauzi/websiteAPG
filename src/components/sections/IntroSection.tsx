'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const IntroSection: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section className="apg-section-divider relative overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white">
      <motion.div
        style={{ y: yBackground }}
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.34),transparent_46%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.22),transparent_56%)]" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/24 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/14 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-28 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-[#FF7A00]/20 blur-3xl animate-pulse-soft" />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/80 backdrop-blur">
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
                className="apg-btn rounded-full bg-[#0A66C2] hover:bg-[#0959A9] shadow-[0_18px_55px_rgba(10,102,194,0.40)] hover:shadow-[0_30px_90px_rgba(10,102,194,0.42)]"
              >
                {t('intro.cta.primary')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/annual-report')}
                className="apg-btn rounded-full border-white/25 text-white hover:bg-white/10 hover:text-white"
              >
                {t('intro.cta.secondary')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
            className="relative flex justify-center items-end h-[360px] sm:h-[460px] xl:h-[620px]"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 left-8 h-28 w-28 rounded-full bg-white/25 blur-2xl" />
              <div className="absolute bottom-0 right-6 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
            </div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/hero_section_top_image.png"
                alt="APG Hero Illustration"
                fill
                className="object-contain object-bottom drop-shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="absolute left-2 top-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-float"
            >
              <div className="text-xs tracking-[0.22em] text-white/70 uppercase font-bold">{t('hero.card.projects.label')}</div>
              <div className="mt-1 text-2xl font-extrabold text-white">{t('hero.card.projects.value')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="absolute right-2 top-24 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-float"
            >
              <div className="text-xs tracking-[0.22em] text-white/70 uppercase font-bold">{t('hero.card.partners.label')}</div>
              <div className="mt-1 text-2xl font-extrabold text-white">{t('hero.card.partners.value')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="absolute left-10 bottom-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-float"
            >
              <div className="text-xs tracking-[0.22em] text-white/70 uppercase font-bold">{t('hero.card.industries.label')}</div>
              <div className="mt-1 text-2xl font-extrabold text-white">{t('hero.card.industries.value')}</div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10" />
      </div>
    </section>
  );
};

export default IntroSection;
