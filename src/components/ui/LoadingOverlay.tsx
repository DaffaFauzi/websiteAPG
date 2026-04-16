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
        {/* Animated Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 h-32 w-32 rounded-full bg-[var(--color-primary)] blur-[60px]"
        />
        
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-2xl"
        >
          <Image
            src="/images/apgg.png"
            alt={t('brand.logoAlt')}
            fill
            className="object-contain p-1"
            priority
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col items-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-secondary)]">
            {t('brand.name')}
          </span>
          
          {/* Progress Bar Line */}
          <div className="mt-4 h-[2px] w-24 overflow-hidden rounded-full bg-white/5">
            <motion.div
              animate={{ 
                x: [-100, 100],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="h-full w-full bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
