'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

  const headline = t('hero.headline');
  const subheadline = t('hero.subheadline');
  const ctaText = t('hero.ctaText');
  const learnMoreText = t('hero.learnMore');

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-6 py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        variants={backgroundVariants}
        animate="animate"
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
      >
        {/* Company tagline with breathing effect */}
        <motion.div
          className="mb-6"
          variants={textRevealVariants}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full border border-indigo-100"
            variants={breatheVariants}
            animate="breathe"
          >
            {t('hero.companyTagline')}
          </motion.span>
        </motion.div>

        {/* Main headline with word-by-word reveal */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          variants={textRevealVariants}
        >
          {headline.split(' ').map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-2 ${
                word === 'Quantum-Driven' || word === 'Enterprises'
                  ? 'text-indigo-600'
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
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          variants={textRevealVariants}
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons with premium interactions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={textRevealVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button variant="primary" size="lg">
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
            <Button variant="outline" size="lg">
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
            >
              <motion.div
                className={`w-2 h-2 ${item.color} rounded-full`}
                variants={pulseVariants}
                animate="pulse"
                transition={{ delay: index * 0.5 }}
              />
              <span>{t(item.key)}</span>
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
      />
    </motion.section>
  );
};

export default HeroSection;
