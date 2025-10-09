'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';

/* eslint-disable @typescript-eslint/no-explicit-any */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const serviceVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.automation.title') as string,
      description: t('services.automation.description') as string,
      icon: '⚙️',
      features: [
        t('services.automation.features.workflow') as string,
        t('services.automation.features.process') as string,
        t('services.automation.features.efficiency') as string,
      ],
      gradient: 'from-blue-500 to-cyan-600',
      accentColor: 'from-blue-600 to-cyan-700',
      bgGradient: 'from-blue-50/80 to-cyan-50/80',
    },
    {
      title: t('services.integration.title') as string,
      description: t('services.integration.description') as string,
      icon: '🔗',
      features: [
        t('services.integration.features.api') as string,
        t('services.integration.features.sync') as string,
        t('services.integration.features.harmony') as string,
      ],
      gradient: 'from-purple-500 to-indigo-600',
      accentColor: 'from-purple-600 to-indigo-700',
      bgGradient: 'from-purple-50/80 to-indigo-50/80',
    },
    {
      title: t('services.analytics.title') as string,
      description: t('services.analytics.description') as string,
      icon: '📊',
      features: [
        t('services.analytics.features.insights') as string,
        t('services.analytics.features.visualization') as string,
        t('services.analytics.features.reporting') as string,
      ],
      gradient: 'from-emerald-500 to-teal-600',
      accentColor: 'from-emerald-600 to-teal-700',
      bgGradient: 'from-emerald-50/80 to-teal-50/80',
    },
  ];

  return (
    <section className="relative py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-16 w-24 h-24 border border-blue-200/30 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 border border-purple-200/30 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12 border border-emerald-200/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20 lg:mb-24 xl:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-6"
            variants={headerVariants}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200/50">
              Quantum Officeless™ Platform
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
            variants={headerVariants}
          >
            {t('services.title') as string}
          </motion.h2>

          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
            variants={headerVariants}
          >
            Transform your enterprise with cutting-edge automation, seamless integration, and intelligent analytics.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={serviceVariants}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 overflow-hidden"
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                variants={cardVariants}
              >
                {/* Card background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Accent border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[1px] rounded-3xl`}>
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>

                <div className="relative p-6 md:p-8 lg:p-10">
                  {/* Icon with enhanced animation */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-6xl lg:text-7xl mb-4">{service.icon}</div>
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className={`text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4 md:mb-6 leading-tight`}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium"
                  >
                    {service.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-4"
                        variants={featureVariants}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced subtext section */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="relative max-w-5xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Background with glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-emerald-50/90 backdrop-blur-sm rounded-4xl border border-white/50 shadow-2xl" />

            {/* Decorative elements */}
            <div className="absolute -top-6 left-12 text-8xl text-blue-200/40 font-serif">&ldquo;</div>
            <div className="absolute -bottom-6 right-12 text-8xl text-purple-200/40 font-serif">&rdquo;</div>

            {/* Content */}

            {/* Subtle animated background patterns */}
            <motion.div
              className="absolute inset-0 opacity-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-emerald-400/30 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium bottom transition */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1 }}
      />
    </section>
  );
};

export default ServicesSection;
