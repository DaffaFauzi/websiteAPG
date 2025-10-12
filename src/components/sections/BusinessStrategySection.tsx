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
            Our Strategic Approach
          </motion.div>

          <motion.h2
            variants={textRevealVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Building Tomorrow's
            <span className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Digital Workforce Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={textRevealVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            As a forward-thinking startup, we're strategically positioning ourselves in the global digital transformation landscape.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center px-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Comprehensive HR Management Platform
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              QDC Resource serves as our flagship solution, designed to revolutionize workforce management for modern businesses through innovative technology and streamlined processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center px-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Advanced Web Services
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We provide comprehensive web development and digital solutions, following proven industry models to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center px-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Strategic Market Position
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our commitment is to become the preferred provider of digital workforce solutions, serving an expanding client base across the global business landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategySection;
