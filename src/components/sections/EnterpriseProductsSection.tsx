'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  UsersIcon,
  CogIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

/* eslint-disable @typescript-eslint/no-explicit-any */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const EnterpriseProductsSection: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 'erp',
      title: t('enterpriseProducts.products.erp.title') as string,
      description: t('enterpriseProducts.products.erp.description') as string,
      icon: BuildingOfficeIcon,
      features: [
        t('enterpriseProducts.products.erp.features.finance') as string,
        t('enterpriseProducts.products.erp.features.procurement') as string,
        t('enterpriseProducts.products.erp.features.inventory') as string,
        t('enterpriseProducts.products.erp.features.manufacturing') as string,
        t('enterpriseProducts.products.erp.features.hr') as string,
        t('enterpriseProducts.products.erp.features.sales') as string,
      ],
      gradient: 'from-blue-500 to-indigo-600',
      accentColor: 'from-blue-600 to-indigo-700',
      bgGradient: 'from-blue-50/90 to-indigo-50/90',
      iconColor: 'text-blue-600',
    },
    {
      id: 'kpi',
      title: t('enterpriseProducts.products.kpi.title') as string,
      description: t('enterpriseProducts.products.kpi.description') as string,
      icon: ChartBarIcon,
      features: [
        t('enterpriseProducts.products.kpi.features.definition') as string,
        t('enterpriseProducts.products.kpi.features.dashboards') as string,
        t('enterpriseProducts.products.kpi.features.benchmarking') as string,
        t('enterpriseProducts.products.kpi.features.alerting') as string,
        t('enterpriseProducts.products.kpi.features.planning') as string,
        t('enterpriseProducts.products.kpi.features.reporting') as string,
      ],
      gradient: 'from-emerald-500 to-teal-600',
      accentColor: 'from-emerald-600 to-teal-700',
      bgGradient: 'from-emerald-50/90 to-teal-50/90',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'supplyChain',
      title: t('enterpriseProducts.products.supplyChain.title') as string,
      description: t('enterpriseProducts.products.supplyChain.description') as string,
      icon: TruckIcon,
      features: [
        t('enterpriseProducts.products.supplyChain.features.forecasting') as string,
        t('enterpriseProducts.products.supplyChain.features.suppliers') as string,
        t('enterpriseProducts.products.supplyChain.features.transport') as string,
        t('enterpriseProducts.products.supplyChain.features.warehouse') as string,
        t('enterpriseProducts.products.supplyChain.features.coldChain') as string,
        t('enterpriseProducts.products.supplyChain.features.returns') as string,
      ],
      gradient: 'from-purple-500 to-violet-600',
      accentColor: 'from-purple-600 to-violet-700',
      bgGradient: 'from-purple-50/90 to-violet-50/90',
      iconColor: 'text-purple-600',
    },
    {
      id: 'assetManagement',
      title: t('enterpriseProducts.products.assetManagement.title') as string,
      description: t('enterpriseProducts.products.assetManagement.description') as string,
      icon: WrenchScrewdriverIcon,
      features: [
        t('enterpriseProducts.products.assetManagement.features.registry') as string,
        t('enterpriseProducts.products.assetManagement.features.maintenance') as string,
        t('enterpriseProducts.products.assetManagement.features.workOrders') as string,
        t('enterpriseProducts.products.assetManagement.features.spareParts') as string,
        t('enterpriseProducts.products.assetManagement.features.safety') as string,
        t('enterpriseProducts.products.assetManagement.features.fieldService') as string,
      ],
      gradient: 'from-orange-500 to-red-600',
      accentColor: 'from-orange-600 to-red-700',
      bgGradient: 'from-orange-50/90 to-red-50/90',
      iconColor: 'text-orange-600',
    },
    {
      id: 'compliance',
      title: t('enterpriseProducts.products.compliance.title') as string,
      description: t('enterpriseProducts.products.compliance.description') as string,
      icon: ShieldCheckIcon,
      features: [
        t('enterpriseProducts.products.compliance.features.tracking') as string,
        t('enterpriseProducts.products.compliance.features.policies') as string,
        t('enterpriseProducts.products.compliance.features.assessment') as string,
        t('enterpriseProducts.products.compliance.features.dashboards') as string,
        t('enterpriseProducts.products.compliance.features.workflows') as string,
        t('enterpriseProducts.products.compliance.features.audits') as string,
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accentColor: 'from-cyan-600 to-blue-700',
      bgGradient: 'from-cyan-50/90 to-blue-50/90',
      iconColor: 'text-cyan-600',
    },
    {
      id: 'hrAnalytics',
      title: t('enterpriseProducts.products.hrAnalytics.title') as string,
      description: t('enterpriseProducts.products.hrAnalytics.description') as string,
      icon: UsersIcon,
      features: [
        t('enterpriseProducts.products.hrAnalytics.features.recruitment') as string,
        t('enterpriseProducts.products.hrAnalytics.features.performance') as string,
        t('enterpriseProducts.products.hrAnalytics.features.learning') as string,
        t('enterpriseProducts.products.hrAnalytics.features.attendance') as string,
        t('enterpriseProducts.products.hrAnalytics.features.analytics') as string,
        t('enterpriseProducts.products.hrAnalytics.features.planning') as string,
      ],
      gradient: 'from-pink-500 to-rose-600',
      accentColor: 'from-pink-600 to-rose-700',
      bgGradient: 'from-pink-50/90 to-rose-50/90',
      iconColor: 'text-pink-600',
    },
    {
      id: 'mes',
      title: t('enterpriseProducts.products.mes.title') as string,
      description: t('enterpriseProducts.products.mes.description') as string,
      icon: CogIcon,
      features: [
        t('enterpriseProducts.products.mes.features.control') as string,
        t('enterpriseProducts.products.mes.features.monitoring') as string,
        t('enterpriseProducts.products.mes.features.quality') as string,
        t('enterpriseProducts.products.mes.features.bom') as string,
        t('enterpriseProducts.products.mes.features.traceability') as string,
        t('enterpriseProducts.products.mes.features.reporting') as string,
      ],
      gradient: 'from-slate-600 to-gray-700',
      accentColor: 'from-slate-700 to-gray-800',
      bgGradient: 'from-slate-50/90 to-gray-50/90',
      iconColor: 'text-slate-600',
    },
    {
      id: 'sustainability',
      title: t('enterpriseProducts.products.sustainability.title') as string,
      description: t('enterpriseProducts.products.sustainability.description') as string,
      icon: GlobeAmericasIcon,
      features: [
        t('enterpriseProducts.products.sustainability.features.goals') as string,
        t('enterpriseProducts.products.sustainability.features.carbon') as string,
        t('enterpriseProducts.products.sustainability.features.energy') as string,
        t('enterpriseProducts.products.sustainability.features.reporting') as string,
        t('enterpriseProducts.products.sustainability.features.risk') as string,
        t('enterpriseProducts.products.sustainability.features.compliance') as string,
      ],
      gradient: 'from-green-500 to-emerald-600',
      accentColor: 'from-green-600 to-emerald-700',
      bgGradient: 'from-green-50/90 to-emerald-50/90',
      iconColor: 'text-green-600',
    },
    {
      id: 'cybersecurity',
      title: t('enterpriseProducts.products.cybersecurity.title') as string,
      description: t('enterpriseProducts.products.cybersecurity.description') as string,
      icon: LockClosedIcon,
      features: [
        t('enterpriseProducts.products.cybersecurity.features.threatDetection') as string,
        t('enterpriseProducts.products.cybersecurity.features.incidentResponse') as string,
        t('enterpriseProducts.products.cybersecurity.features.zeroTrust') as string,
        t('enterpriseProducts.products.cybersecurity.features.endpoint') as string,
        t('enterpriseProducts.products.cybersecurity.features.intelligence') as string,
        t('enterpriseProducts.products.cybersecurity.features.compliance') as string,
      ],
      gradient: 'from-red-500 to-rose-600',
      accentColor: 'from-red-600 to-rose-700',
      bgGradient: 'from-red-50/90 to-rose-50/90',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating premium shapes */}
        <motion.div
          className="absolute top-32 left-20 w-32 h-32 border border-blue-200/20 rounded-full"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-24 h-24 border border-purple-200/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 border border-emerald-200/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-16 h-16 border border-orange-200/20 rotate-12"
          animate={{
            rotate: [12, 192, 12],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 md:mb-24 lg:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-8"
            variants={headerVariants}
          >
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 text-sm font-semibold rounded-full border border-slate-200/50 shadow-sm">
              {t('enterpriseProducts.badge') as string}
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 md:mb-10 leading-tight"
            variants={headerVariants}
          >
            {t('enterpriseProducts.title') as string}
          </motion.h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            variants={headerVariants}
          >
            {t('enterpriseProducts.subtitle') as string}
          </motion.p>
        </motion.div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-20 md:mb-24 lg:mb-32">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={productVariants}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden"
                  whileHover={{
                    y: -16,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  variants={cardVariants}
                >
                  {/* Premium card background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Accent border gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[1px] rounded-3xl`}>
                    <div className="w-full h-full bg-white rounded-3xl" />
                  </div>

                  <div className="relative p-8 md:p-10 lg:p-12">
                    {/* Premium icon with enhanced effects */}
                    <motion.div
                      className="relative mb-10"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <div className="relative inline-block">
                        <IconComponent className={`w-16 h-16 md:w-18 md:h-18 ${product.iconColor} drop-shadow-sm`} />
                        {/* Icon glow effect */}
                        <motion.div
                          className={`absolute -inset-3 bg-gradient-to-r ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700`}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Title with premium gradient */}
                    <motion.h3
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-6 md:mb-8 leading-tight`}
                    >
                      {product.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-medium"
                    >
                      {product.description}
                    </motion.p>

                    {/* Features list with premium styling */}
                    <motion.div
                      className="space-y-5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={containerVariants}
                    >
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start gap-4"
                          variants={featureVariants}
                          transition={{ delay: featureIndex * 0.08 }}
                        >
                          <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center mt-0.5 shadow-sm`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium leading-relaxed text-base md:text-lg">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Premium hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA section */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="relative max-w-6xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/95 via-purple-50/95 to-emerald-50/95 backdrop-blur-sm rounded-4xl border border-white/60 shadow-2xl" />

            {/* Decorative elements */}
            <div className="absolute -top-8 left-16 text-9xl text-blue-200/30 font-serif">&ldquo;</div>
            <div className="absolute -bottom-8 right-16 text-9xl text-purple-200/30 font-serif">&rdquo;</div>

            {/* Content */}
            <div className="relative px-10 md:px-14 lg:px-18 py-14 md:py-18 lg:py-22">
              <motion.div
                className="text-center"
                variants={headerVariants}
              >
                <motion.p
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-800 leading-relaxed font-semibold mb-10 md:mb-12"
                  variants={headerVariants}
                >
                  {t('enterpriseProducts.cta') as string}
                </motion.p>

                {/* Premium CTA buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
                  variants={containerVariants}
                >
                  <motion.button
                    className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-lg md:text-xl"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('enterpriseProducts.exploreButton') as string}
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 md:px-10 md:py-5 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-500 text-lg md:text-xl shadow-lg hover:shadow-xl"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('enterpriseProducts.consultationButton') as string}
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Subtle animated background gradients */}
            <motion.div
              className="absolute inset-0 opacity-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 1.5 }}
            >
              <div className="absolute top-12 left-12 w-40 h-40 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-3xl" />
              <div className="absolute bottom-12 right-12 w-48 h-48 bg-gradient-to-br from-purple-400/40 to-emerald-400/40 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium bottom transition */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 1.5 }}
      />
    </section>
  );
};

export default EnterpriseProductsSection;
