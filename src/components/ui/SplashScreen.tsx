'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SplashScreen() {
  const { t } = useLanguage();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Cek localStorage, jika belum pernah ditampilkan di sesi ini, tampilkan splash
    const hasShown = localStorage.getItem('splashShown');
    if (!hasShown) {
      setShowSplash(true);
      // Simpan di sessionStorage agar hanya muncul sekali per sesi (atau localStorage jika mau lebih lama)
      localStorage.setItem('splashShown', 'true');
      
      const timer = setTimeout(() => {
        setShowSplash(false);
        // Scroll smooth ke beranda jika ada elemen dengan id beranda
        const beranda = document.getElementById('beranda');
        if (beranda) {
          beranda.scrollIntoView({ behavior: 'smooth' });
        }
      }, 3000); // 3 detik
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--background)]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            {/* Mengganti dengan logo teks yang sesuai SS (APG dalam lingkaran) */}
            <div className="flex items-center justify-center w-24 h-24 rounded-full border-2 border-cyan-800 bg-[var(--background)]">
              <span className="text-3xl font-black tracking-widest text-white">{t('brand.short')}</span>
            </div>
            
            <div className="text-center space-y-4">
              <h2 className="text-sm tracking-[0.3em] text-cyan-500 uppercase font-medium">
                {t('cinema.brand')}
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {t('cinema.title')}
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                {t('cinema.desc')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
