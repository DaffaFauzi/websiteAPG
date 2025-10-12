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
      staggerChildren: 0.1,
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


const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const FooterSection: React.FC = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-16 w-32 h-32 border border-[var(--color-primary)]/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 border border-[var(--color-secondary)]/20 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-[var(--color-tertiary)]/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Compact footer content */}
        <motion.div
          className="py-12 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Top section with company info and WhatsApp */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-10">
            {/* Company info */}
            <motion.div
              className="space-y-4"
              variants={headerVariants}
            >
              <div className="flex items-center gap-3">
                <img
                  src="/images/qdc_logo_notext.png"
                  alt="Quantum Dynamics Creations Logo"
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Quantum Dynamics Creations
                </h3>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                {t('footer.description') as string}
              </p>

              {/* Contact Information */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-gray-300">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.contact.addressLabel') as string}</div>
                    <div className="text-gray-300 leading-relaxed">{t('footer.contact.address') as string}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.contact.phoneLabel') as string}</div>
                    <div className="text-gray-300">{t('footer.contact.phone') as string}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-gray-200">{t('footer.contact.hoursLabel') as string}</div>
                    <div className="text-gray-300">{t('footer.contact.hours') as string}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              className="lg:pl-8 flex flex-col justify-center"
              variants={headerVariants}
            >
              <div className="text-center lg:text-left">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                  {t('footer.whatsapp.title') as string}
                </h4>
                <p className="text-gray-300 text-sm mb-6">
                  {t('footer.whatsapp.description') as string}
                </p>

                <motion.a
                  href={`https://wa.me/${(t('footer.contact.phone') as string).replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  <span>{t('footer.whatsapp.button') as string}</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider and copyright */}
          <motion.div
            className="pt-6 border-t border-slate-700"
            variants={dividerVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <motion.div
                className="text-center md:text-left"
                variants={headerVariants}
              >
                <p className="text-gray-400 text-sm">
                  {t('footer.copyright.text') as string} {currentYear} {t('footer.copyright.company') as string}
                </p>
              </motion.div>

              {/* Legal links */}
              <motion.div
                className="flex flex-wrap justify-center md:justify-end gap-4"
                variants={headerVariants}
              >
                {(t('footer.legal.links') as string[]).map((link: string, index: number) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1 }}
      />
    </footer>
  );
};

export default FooterSection;
