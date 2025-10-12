'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  containerVariants,
  textRevealVariants,
  wordVariants,
  buttonVariants,
  backgroundVariants,
  trustIndicatorVariants,
  pulseVariants,
  breatheVariants,
} from '@/lib/animations/variants';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const headlineData = t('hero.headline') as { text: string; highlightWords: string[] };
  const headline = headlineData.text;
  const highlightWords = headlineData.highlightWords;
  const subheadline = t('hero.subheadline') as string;
  const ctaText = t('hero.ctaText') as string;
  const learnMoreText = t('hero.learnMore') as string;

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-white px-4 sm:px-6 pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 xl:pt-36 xl:pb-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      suppressHydrationWarning={true}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        variants={backgroundVariants}
        animate="animate"
        suppressHydrationWarning={true}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:24px_24px]" />
      </motion.div>

      {/* Floating Particles */}
      {/* {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: i * 0.5,
            duration: 3 + i * 0.5,
          }}
        />
      ))} */}

      {/* Main content container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        suppressHydrationWarning={true}
      >

        {/* Main headline with word-by-word reveal */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight"
          variants={textRevealVariants}
        >
          {headline.split(' ').map((word: string, index: number) => (
            <motion.span
              key={index}
              className={`inline-block mr-2 ${
                highlightWords.includes(word)
                  ? 'text-[var(--color-secondary)]'
                  : 'text-gray-900'
              }`}
              variants={wordVariants}
              custom={index}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline with smooth reveal */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          variants={textRevealVariants}
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons with premium interactions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          variants={textRevealVariants}
          suppressHydrationWarning={true}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://wa.me/+6282114929200', '_blank')}
            >
              {ctaText}
              <motion.svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </Button>
          </motion.div>

          {/* Optional secondary CTA */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/about')}
            >
              {learnMoreText}
              <motion.svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators with staggered animation */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
          variants={trustIndicatorVariants}
          initial="hidden"
          animate="visible"
          suppressHydrationWarning={true}
        >
          {[
            { color: 'bg-green-500', key: 'hero.trustIndicators.security' },
            { color: 'bg-blue-500', key: 'hero.trustIndicators.platform' },
            { color: 'bg-purple-500', key: 'hero.trustIndicators.solutions' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              variants={textRevealVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              suppressHydrationWarning={true}
            >
              <motion.div
                className={`w-2 h-2 ${item.color} rounded-full`}
                variants={pulseVariants}
                animate="pulse"
                transition={{ delay: index * 0.5 }}
              />
              <span>{t(item.key) as string}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated bottom fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        suppressHydrationWarning={true}
      />
    </motion.section>
  );
};

export default HeroSection;
