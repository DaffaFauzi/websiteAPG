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
      alt: t('gallery.images.meeting'),
      className: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      alt: t('gallery.images.collaboration'),
      className: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      alt: t('gallery.images.success'),
      className: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section className="apg-section-divider relative py-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(2,6,23,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#0A66C2]/40" />
            <span className="text-[#0A66C2] font-extrabold tracking-[0.2em] text-xs uppercase">
              {t('gallery.tag')}
            </span>
            <div className="h-[1px] w-12 bg-[#0A66C2]/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.02em] text-slate-950 mb-6">
            {t('gallery.title')}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border border-slate-200 shadow-[var(--shadow-card)] group transition-all duration-500 apg-ease hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex justify-center">
          <motion.a
            href="/tentang#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="apg-btn inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-700 shadow-[var(--shadow-card)] hover:border-slate-300 hover:bg-slate-50 hover:text-[#0A66C2] hover:shadow-[var(--shadow-card-hover)] cursor-pointer"
          >
            <PhotoIcon className="h-5 w-5" />
            <span>{t('gallery.cta')}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
