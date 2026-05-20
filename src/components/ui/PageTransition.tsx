'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [showLoader, setShowLoader] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    
    const frameId = requestAnimationFrame(() => {
      setShowLoader(true);
      timerRef.current = window.setTimeout(() => setShowLoader(false), 420);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {showLoader ? (
          <motion.div
            key="route-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A66C2]"
            aria-label={t('common.loading')}
            role="status"
          >
            <div className="flex flex-col items-center justify-center px-6">
              <div className="relative h-10 w-28 sm:h-12 sm:w-36">
                <Image src="/images/apgg.png" alt={t('brand.logoAlt')} fill sizes="144px" className="object-contain" priority />
              </div>
              <div className="mt-5 h-1 w-40 overflow-hidden rounded-full bg-white/15">
                <motion.div
                  initial={{ x: '-60%' }}
                  animate={{ x: '120%' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], repeat: Infinity }}
                  className="h-full w-24 rounded-full bg-white/60"
                />
              </div>
              <div className="mt-3 text-center text-[0.6875rem] font-semibold tracking-[0.16em] text-white/75 uppercase">
                {t('common.loading')}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transitionEnd: { transform: 'none' },
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
