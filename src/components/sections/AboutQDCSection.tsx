'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  containerVariants,
  textRevealVariants,
} from '@/lib/animations/variants';

/* eslint-disable @typescript-eslint/no-explicit-any */
const wordRevealVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    filter: 'blur(10px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: i * 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  }),
};

const meaningRevealVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.9,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.3 + 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  }),
};

const philosophyVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const AboutQDCSection: React.FC = () => {
  const { t } = useTranslation();

  const words = [
    {
      word: t('aboutQDC.quantum.word') as string,
      meaning: t('aboutQDC.quantum.meaning') as string,
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      icon: '⚛️',
    },
    {
      word: t('aboutQDC.dynamics.word') as string,
      meaning: t('aboutQDC.dynamics.meaning') as string,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      icon: '🌊',
    },
    {
      word: t('aboutQDC.creations.word') as string,
      meaning: t('aboutQDC.creations.meaning') as string,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      icon: '✨',
    },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      suppressHydrationWarning={true}
    >
      {/* Subtle background pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeOut" }}
        suppressHydrationWarning={true}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.1)_0%,transparent_50%)]" />
      </motion.div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        suppressHydrationWarning={true}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        suppressHydrationWarning={true}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6" suppressHydrationWarning={true}>
        {/* Section title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={textRevealVariants}
          suppressHydrationWarning={true}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            variants={textRevealVariants}
          >
            {t('aboutQDC.title') as string}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Words reveal section */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 items-stretch" suppressHydrationWarning={true}>
          {words.map((item, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              variants={wordRevealVariants}
              custom={index}
              suppressHydrationWarning={true}
            >
              {/* Card background with hover effect */}
              <motion.div
                className="relative h-full p-6 md:p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                suppressHydrationWarning={true}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-6"
                  variants={wordRevealVariants}
                  custom={index}
                >
                  {item.icon}
                </motion.div>

                {/* Word */}
                <motion.h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4 leading-tight`}
                  variants={wordRevealVariants}
                  custom={index}
                >
                  {item.word}
                </motion.h3>

                {/* Meaning */}
                <motion.p
                  className="text-gray-600 text-base md:text-lg leading-relaxed font-medium flex-grow"
                  variants={meaningRevealVariants}
                  custom={index}
                >
                  {item.meaning}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy paragraph */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={philosophyVariants}
          suppressHydrationWarning={true}
        >
          <motion.div
            className="relative p-8 md:p-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl border border-gray-200/50 shadow-xl"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
            suppressHydrationWarning={true}
          >
            {/* Decorative quotes */}
            <motion.div
              className="absolute -top-4 left-8 text-6xl text-indigo-300 opacity-60"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              &ldquo;
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-8 text-6xl text-purple-300 opacity-60"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              &rdquo;
            </motion.div>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium relative z-10"
              variants={philosophyVariants}
            >
              {t('aboutQDC.philosophy') as string}
            </motion.p>

            {/* Subtle background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.3)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3)_0%,transparent_50%)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom transition gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2.5 }}
        suppressHydrationWarning={true}
      />
    </motion.section>
  );
};

export default AboutQDCSection;
