'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems: FAQItem[] = [
    {
      question: t('faq.items.0.question') as string,
      answer: t('faq.items.0.answer') as string,
    },
    {
      question: t('faq.items.1.question') as string,
      answer: t('faq.items.1.answer') as string,
    },
    {
      question: t('faq.items.2.question') as string,
      answer: t('faq.items.2.answer') as string,
    },
    {
      question: t('faq.items.3.question') as string,
      answer: t('faq.items.3.answer') as string,
    },
    {
      question: t('faq.items.4.question') as string,
      answer: t('faq.items.4.answer') as string,
    },
    {
      question: t('faq.items.5.question') as string,
      answer: t('faq.items.5.answer') as string,
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
      {/* Background pattern */}
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
        className="absolute top-16 right-16 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
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
        className="absolute bottom-16 left-16 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
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

      <div className="relative z-10 max-w-4xl mx-auto px-6" suppressHydrationWarning={true}>
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
          suppressHydrationWarning={true}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            suppressHydrationWarning={true}
          >
            <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            variants={headerVariants}
          >
            {t('faq.title') as string}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={headerVariants}
          >
            {t('faq.subtitle') as string}
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* FAQ items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          suppressHydrationWarning={true}
        >
          {faqItems.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                suppressHydrationWarning={true}
              >
                <motion.div
                  className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                  suppressHydrationWarning={true}
                >
                  <motion.button
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                    onClick={() => toggleItem(index)}
                    suppressHydrationWarning={true}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        suppressHydrationWarning={true}
                      >
                        <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      </motion.div>
                    </div>
                  </motion.button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 }
                    }}
                    className="overflow-hidden"
                    suppressHydrationWarning={true}
                  >
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ y: -10 }}
                      animate={{ y: isOpen ? 0 : -10 }}
                      transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
                      suppressHydrationWarning={true}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Bottom transition gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        suppressHydrationWarning={true}
      />
    </motion.section>
  );
};

export default FAQSection;
