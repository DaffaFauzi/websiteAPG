'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhotoIcon } from '@heroicons/react/24/outline';

const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1200',
      title: 'Annual Stakeholder Meeting 2025',
      category: 'Governance',
      className: 'col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto',
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      title: 'Cross-Sector Strategy Alignment',
      category: 'Operations',
      className: 'col-span-1 row-span-1 aspect-[4/3] md:aspect-auto',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      title: 'Global Partnership Signing',
      category: 'Expansion',
      className: 'col-span-1 row-span-1 aspect-[4/3] md:aspect-auto',
    },
  ];

  return (
    <section className="apg-section-divider relative py-20 sm:py-24 lg:pt-28 lg:pb-32 bg-slate-950 overflow-hidden">
      {/* Premium dark corporate background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6 backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Corporate Documentation
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {t('gallery.title')}
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/tentang#gallery"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0A66C2] px-8 py-3.5 w-full sm:w-auto text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(10,102,194,0.4)] hover:bg-[#3b82f6] hover:shadow-[0_12px_24px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1 active:scale-95 group border border-blue-400/30"
            >
              <PhotoIcon className="h-5 w-5" />
              <span>{t('gallery.cta')}</span>
            </a>
          </motion.div>
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:auto-rows-[16rem] lg:auto-rows-[20rem]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-[2rem] bg-slate-800 shadow-xl group cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-500 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a40]/90 via-[#041a40]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="inline-flex px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-md text-[0.625rem] font-extrabold tracking-widest uppercase text-white shadow-sm border border-white/20">
                  {img.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
