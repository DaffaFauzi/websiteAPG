'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const LoadingOverlay = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 -z-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(10,102,194,0.22),transparent_60%)]" />
        
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/14 bg-white p-2 shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.30)]"
        >
          <Image
            src="/images/apgg.png"
            alt={t('brand.logoAlt')}
            fill
            sizes="80px"
            className="object-contain p-1"
            priority
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col items-center"
        >
          <span className="text-[0.625rem] font-extrabold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
            {t('brand.name')}
          </span>
          
          {/* Progress Bar Line */}
          <div className="mt-4 h-[0.125rem] w-24 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ 
                x: ['-100%', '100%'],
              }}
              transition={{ 
                duration: 1.6, 
                repeat: Infinity, 
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full bg-gradient-to-r from-transparent via-[#0A66C2] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
