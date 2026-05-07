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
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      title: t('gallery.item.1.title'),
      category: t('gallery.item.1.category'),
      className: 'aspect-[4/3]',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
      title: t('gallery.item.2.title'),
      category: t('gallery.item.2.category'),
      className: 'aspect-[4/3]',
    },
    {
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      title: t('gallery.item.3.title'),
      category: t('gallery.item.3.category'),
      className: 'aspect-[4/3]',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
      title: t('gallery.item.4.title'),
      category: t('gallery.item.4.category'),
      className: 'aspect-[4/3]',
    },
    {
      src: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200',
      title: t('gallery.item.5.title'),
      category: t('gallery.item.5.category'),
      className: 'aspect-[4/3]',
    },
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
      title: t('gallery.item.6.title'),
      category: t('gallery.item.6.category'),
      className: 'aspect-[4/3]',
    },
  ];

  return (
    <section className="apg-section-divider relative py-12 lg:py-20 bg-slate-950 overflow-hidden">
      {/* Premium dark corporate background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-6 backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#0A66C2]" />
              {t('gallery.tag.enterprise_activities')}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
            >
              {t('gallery.title')}
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-auto"
          >
            <a
              href="/tentang#gallery"
              className="min-h-[3.5rem] inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-8 py-4 w-full md:w-auto text-sm font-black text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all active:scale-[0.98] group"
            >
              <PhotoIcon className="h-5 w-5 text-[#0A66C2]" />
              <span>{t('gallery.cta')}</span>
            </a>
          </motion.div>
        </div>

        {/* Gallery Grid - Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl group cursor-pointer border border-white/5 hover:border-[#0A66C2]/30 transition-all duration-500 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a40] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="inline-flex w-fit px-3 py-1 mb-4 rounded-full bg-[#0A66C2] text-[10px] font-black tracking-widest uppercase text-white shadow-lg">
                  {img.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                  {img.title}
                </h3>
              </div>

              {/* Static View Overlay */}
              <div className="absolute bottom-6 left-8 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white/60 text-sm font-bold tracking-wide uppercase">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
