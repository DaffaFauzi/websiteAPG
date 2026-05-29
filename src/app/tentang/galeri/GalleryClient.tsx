'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';
import FallbackImage from '@/components/ui/FallbackImage';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GalleryClient() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryImages = useMemo(
    () => [
      { src: '/images/apg1.png', alt: t('gallery.item.1.title') },
      { src: '/images/apg2.png', alt: t('gallery.item.2.title') },
      { src: '/images/apg3.png', alt: t('gallery.item.3.title') },
      { src: '/images/apg4.png', alt: t('gallery.item.4.title') },
      { src: '/images/apg5.png', alt: t('gallery.item.5.title') },
      { src: '/images/apg6.png', alt: t('gallery.item.6.title') },
      { src: '/images/apg7.png', alt: 'Dokumentasi APG' },
      { src: '/images/1.png', alt: 'Aktivitas Korporat 1' },
      { src: '/images/2.png', alt: 'Aktivitas Korporat 2' },
      { src: '/images/3.png', alt: 'Aktivitas Korporat 3' },
      { src: '/images/4.png', alt: 'Aktivitas Korporat 4' },
      { src: '/images/5.png', alt: 'Aktivitas Korporat 5' },
      { src: '/images/6.png', alt: 'Aktivitas Korporat 6' },
      { src: '/images/7.png', alt: 'Aktivitas Korporat 7' },
      { src: '/images/8.png', alt: 'Aktivitas Korporat 8' },
      { src: '/images/9.png', alt: 'Aktivitas Korporat 9' },
      { src: '/images/10.png', alt: 'Aktivitas Korporat 10' },
    ],
    [t],
  );

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    const next = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveIndex(next);
  }, [activeIndex, galleryImages.length]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    const next = (activeIndex + 1) % galleryImages.length;
    setActiveIndex(next);
  }, [activeIndex, galleryImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, goNext, goPrev]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('nav.about')}
        title={t('tentang.sub.gallery.title')}
        description={t('tentang.sub.gallery.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.about'), href: '/tentang' },
          { label: t('tentang.sub.gallery.title') },
        ]}
        imageAlt={t('tentang.sub.gallery.title')}
      />

      <section className="apg-section-divider py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase">
                {t('tentang.gallery.badge')}
              </div>
              <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-[#041a40]">
                {t('tentang.gallery.title')}
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block w-full text-left focus:outline-none"
                  aria-label={`Buka gambar ${index + 1}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <FallbackImage
                      src={img.src}
                      fallbackSrc="/images/presentation-placeholder.svg"
                      alt={img.alt}
                      fill
                      loading="lazy"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A66C2]/10 to-transparent" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-[120]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"
            onClick={() => setActiveIndex(null)}
          />

          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Galeri APG"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="h-11 w-11 rounded-full bg-white/90 border border-slate-200 text-slate-700 grid place-items-center shadow-sm hover:bg-white"
                  aria-label="Tutup"
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>

              <div className="relative bg-slate-950">
                <div className="relative h-[70vh] min-h-[18rem] max-h-[80vh] w-full">
                  <FallbackImage
                    src={galleryImages[activeIndex].src}
                    fallbackSrc="/images/presentation-placeholder.svg"
                    alt={galleryImages[activeIndex].alt}
                    fill
                    className="object-contain object-center"
                  />
                </div>

                <div className="absolute inset-y-0 left-0 flex items-center px-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="h-11 w-11 rounded-full bg-white/90 border border-slate-200 text-slate-900 grid place-items-center shadow-sm hover:bg-white"
                    aria-label="Sebelumnya"
                  >
                    <span className="text-xl leading-none">‹</span>
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center px-3">
                  <button
                    type="button"
                    onClick={goNext}
                    className="h-11 w-11 rounded-full bg-white/90 border border-slate-200 text-slate-900 grid place-items-center shadow-sm hover:bg-white"
                    aria-label="Berikutnya"
                  >
                    <span className="text-xl leading-none">›</span>
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="mx-auto w-fit rounded-full bg-slate-950/55 border border-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-md">
                    {activeIndex + 1} / {galleryImages.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : null}

      <FooterSection />
    </main>
  );
}
