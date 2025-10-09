'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  RectangleStackIcon,
  ChartBarSquareIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

/* eslint-disable @typescript-eslint/no-explicit-any */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const CompetitiveAdvantageSection: React.FC = () => {
  const { t } = useTranslation();

  const competitiveFeatures = [
    {
      id: 'verticalTemplates',
      title: t('competitiveAdvantage.features.verticalTemplates.title') as string,
      description: t('competitiveAdvantage.features.verticalTemplates.description') as string,
      icon: RectangleStackIcon,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50/80 to-indigo-50/80',
      iconColor: 'text-blue-600',
      examples: t('competitiveAdvantage.features.verticalTemplates.examples') as string,
      layout: 'icon-left',
    },
    {
      id: 'kpiAnalytics',
      title: t('competitiveAdvantage.features.kpiAnalytics.title') as string,
      description: t('competitiveAdvantage.features.kpiAnalytics.description') as string,
      icon: ChartBarSquareIcon,
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50/80 to-teal-50/80',
      iconColor: 'text-emerald-600',
      examples: t('competitiveAdvantage.features.kpiAnalytics.examples') as string,
      layout: 'icon-right',
    },
    {
      id: 'aiModules',
      title: t('competitiveAdvantage.features.aiModules.title') as string,
      description: t('competitiveAdvantage.features.aiModules.description') as string,
      icon: CpuChipIcon,
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50/80 to-violet-50/80',
      iconColor: 'text-purple-600',
      examples: t('competitiveAdvantage.features.aiModules.examples') as string,
      layout: 'icon-left',
    },
    {
      id: 'mobileAccess',
      title: t('competitiveAdvantage.features.mobileAccess.title') as string,
      description: t('competitiveAdvantage.features.mobileAccess.description') as string,
      icon: DevicePhoneMobileIcon,
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50/80 to-red-50/80',
      iconColor: 'text-orange-600',
      examples: t('competitiveAdvantage.features.mobileAccess.examples') as string,
      layout: 'icon-right',
    },
    {
      id: 'integrations',
      title: t('competitiveAdvantage.features.integrations.title') as string,
      description: t('competitiveAdvantage.features.integrations.description') as string,
      icon: ArrowPathIcon,
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50/80 to-blue-50/80',
      iconColor: 'text-cyan-600',
      examples: t('competitiveAdvantage.features.integrations.examples') as string,
      layout: 'icon-left',
    },
    {
      id: 'compliance',
      title: t('competitiveAdvantage.features.compliance.title') as string,
      description: t('competitiveAdvantage.features.compliance.description') as string,
      icon: GlobeAltIcon,
      gradient: 'from-slate-600 to-gray-700',
      bgGradient: 'from-slate-50/80 to-gray-50/80',
      iconColor: 'text-slate-600',
      examples: t('competitiveAdvantage.features.compliance.examples') as string,
      layout: 'icon-right',
    },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-28 xl:py-36 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-[0.015] md:opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
        </div>

        {/* Floating accent elements */}
        <motion.div
          className="absolute top-20 right-16 w-20 h-20 border-2 border-blue-200/20 rounded-full"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-16 h-16 border border-purple-200/25 rounded-lg rotate-45"
          animate={{
            rotate: [45, 225, 45],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-12 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-24 w-8 h-8 border border-orange-200/30 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mobile-optimized section header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4 md:mb-6"
            variants={headerVariants}
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 text-xs md:text-sm font-semibold rounded-full border border-slate-200/50">
              {t('competitiveAdvantage.badge') as string}
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-2"
            variants={headerVariants}
          >
            {t('competitiveAdvantage.title') as string}
          </motion.h2>

          <motion.div
            className="w-16 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-4 md:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-4"
            variants={headerVariants}
          >
            {t('competitiveAdvantage.subtitle') as string}
          </motion.p>
        </motion.div>

        {/* Magazine-style alternating layout */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {competitiveFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isIconLeft = feature.layout === 'icon-left';

            return (
              <motion.div
                key={feature.id}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Mobile: Stacked layout */}
                <div className="md:hidden px-4">
                  <motion.div
                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden mx-auto max-w-md"
                    variants={stepVariants}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative p-6">
                      {/* Icon and title */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent leading-tight`}>
                            {feature.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                        {feature.description}
                      </p>

                      {/* Examples */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-3">
                          {t('competitiveAdvantage.examplesLabel') as string}
                        </h4>
                        {feature.examples.split(',').map((example, exampleIndex) => (
                          <motion.div
                            key={exampleIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 + exampleIndex * 0.08 }}
                          >
                            <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {example.trim()}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />
                  </motion.div>
                </div>

                {/* Desktop: Alternating side-by-side layout */}
                <div className="hidden md:flex md:items-center md:gap-8 lg:gap-12">
                  {/* Icon side */}
                  <div className={`flex-shrink-0 ${isIconLeft ? 'order-1' : 'order-2'}`}>
                    <motion.div
                      className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} shadow-xl`}
                      whileHover={{ scale: 1.05, rotate: isIconLeft ? -2 : 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div
                        className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      </motion.div>

                      {/* Floating accent elements */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-3 -left-3 w-6 h-6 bg-white/10 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Text card side */}
                  <div className={`flex-1 ${isIconLeft ? 'order-2' : 'order-1'}`}>
                    <motion.div
                      className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                      variants={isIconLeft ? contentVariants : stepVariants}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative p-8 lg:p-10">
                        {/* Title */}
                        <h3 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4 leading-tight`}>
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                          {feature.description}
                        </p>

                        {/* Examples */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                            {t('competitiveAdvantage.examplesLabel') as string}
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {feature.examples.split(',').map((example, exampleIndex) => (
                              <motion.div
                                key={exampleIndex}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: isIconLeft ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 + exampleIndex * 0.08 }}
                              >
                                <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                                <span className="text-gray-700 text-base leading-relaxed">
                                  {example.trim()}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modern bottom transition */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
};

export default CompetitiveAdvantageSection;
