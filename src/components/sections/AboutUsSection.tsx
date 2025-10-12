'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  CpuChipIcon,
  BoltIcon,
  SparklesIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

/* eslint-disable @typescript-eslint/no-explicit-any */
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const AboutUsSection: React.FC = () => {
  const { t } = useTranslation();

  const essenceItems = [
    {
      word: t('aboutQDC.quantum.word') as string,
      description: t('aboutQDC.quantum.meaning') as string,
      icon: CpuChipIcon,
      color: 'text-[var(--color-primary)]',
    },
    {
      word: t('aboutQDC.dynamics.word') as string,
      description: t('aboutQDC.dynamics.meaning') as string,
      icon: BoltIcon,
      color: 'text-[var(--color-secondary)]',
    },
    {
      word: t('aboutQDC.creations.word') as string,
      description: t('aboutQDC.creations.meaning') as string,
      icon: SparklesIcon,
      color: 'text-[var(--color-tertiary)]',
    },
  ];

  const valuesTranslations = t('aboutQDC.values') as {
    innovation: { title: string; description: string };
    integrity: { title: string; description: string };
    adaptability: { title: string; description: string };
    empowerment: { title: string; description: string };
  };

  const coreValues = [
    {
      title: valuesTranslations.innovation.title,
      description: valuesTranslations.innovation.description,
      icon: LightBulbIcon,
    },
    {
      title: valuesTranslations.integrity.title,
      description: valuesTranslations.integrity.description,
      icon: ShieldCheckIcon,
    },
    {
      title: valuesTranslations.adaptability.title,
      description: valuesTranslations.adaptability.description,
      icon: ArrowPathIcon,
    },
    {
      title: valuesTranslations.empowerment.title,
      description: valuesTranslations.empowerment.description,
      icon: UserGroupIcon,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutQDC.title') as string}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-primary)] font-medium mb-8">
            {t('aboutQDC.subtitle') as string}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutQDC.description') as string}
          </p>
        </motion.div>

        {/* Company Philosophy */}
        <motion.div
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-8 md:p-12 border border-gray-100">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
              {t('aboutQDC.companyPhilosophy') as string}
            </p>
          </div>
        </motion.div>

        {/* Our Name, Our Essence - Simplified */}
        <motion.div
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutQDC.essenceTitle') as string}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('aboutQDC.essenceDescription') as string}
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {essenceItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gray-50 border border-gray-200">
                      <IconComponent className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 ${item.color}`}>
                    {item.word}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mission & Vision - Combined */}
        <motion.div
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('aboutQDC.missionTitle') as string}
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 md:p-8 border border-blue-100">
                <p className="text-gray-800 leading-relaxed font-medium">
                  {t('aboutQDC.mission') as string}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('aboutQDC.visionTitle') as string}
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 md:p-8 border border-green-100">
                <p className="text-gray-800 leading-relaxed font-medium">
                  {t('aboutQDC.vision') as string}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values - Simplified List */}
        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutQDC.valuesTitle') as string}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('aboutQDC.valuesDescription') as string}
            </p>
          </div>

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-white border border-gray-200">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
