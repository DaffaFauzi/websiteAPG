'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  containerVariants,
  textRevealVariants,
  wordVariants,
} from '@/lib/animations/variants';

const BusinessStrategySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={textRevealVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6 border border-[var(--color-primary)]/20"
          >
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2"></span>
            {t('businessStrategy.badge') as string}
          </motion.div>

          <motion.h2
            variants={textRevealVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('businessStrategy.title') as string}
            <span className="block text-[var(--color-secondary)]">
              {t('businessStrategy.titleHighlight') as string}
            </span>
          </motion.h2>

          <motion.p
            variants={textRevealVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            {t('businessStrategy.subtitle') as string}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('businessStrategy.focusAreas.hrPlatform.title') as string}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t('businessStrategy.focusAreas.hrPlatform.description') as string}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('businessStrategy.focusAreas.webServices.title') as string}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t('businessStrategy.focusAreas.webServices.description') as string}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('businessStrategy.focusAreas.marketPosition.title') as string}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t('businessStrategy.focusAreas.marketPosition.description') as string}
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16 mb-16"
        >
          <motion.div
            variants={textRevealVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6 border border-[var(--color-primary)]/20"
          >
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2"></span>
            {t('businessStrategy.whyChooseUs.badge') as string}
          </motion.div>

          <motion.h2
            variants={textRevealVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('businessStrategy.whyChooseUs.title') as string}
            <span className="block text-[var(--color-secondary)]">
              {t('businessStrategy.whyChooseUs.titleHighlight') as string}
            </span>
          </motion.h2>

          <motion.p
            variants={textRevealVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            {t('businessStrategy.whyChooseUs.subtitle') as string}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <svg className="w-12 h-12 text-[var(--color-tertiary)] mb-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              {t('businessStrategy.whyChooseUs.features.innovation.title') as string}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {t('businessStrategy.whyChooseUs.features.innovation.description') as string}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <svg className="w-12 h-12 text-[var(--color-tertiary)] mb-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              {t('businessStrategy.whyChooseUs.features.results.title') as string}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {t('businessStrategy.whyChooseUs.features.results.description') as string}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <svg className="w-12 h-12 text-[var(--color-tertiary)] mb-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              {t('businessStrategy.whyChooseUs.features.support.title') as string}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {t('businessStrategy.whyChooseUs.features.support.description') as string}
            </p>
          </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <svg className="w-12 h-12 text-[var(--color-tertiary)] mb-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              {t('businessStrategy.whyChooseUs.features.costEffective.title') as string}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {t('businessStrategy.whyChooseUs.features.costEffective.description') as string}
            </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategySection;
