'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import FallbackImage from '@/components/ui/FallbackImage';
import { useLanguage } from '@/contexts/LanguageContext';
import InnerPageHero from '@/components/ui/InnerPageHero';
import { AboutVisual } from '@/components/ui/HeroVisuals';

const TentangPage = () => {
  const { t } = useLanguage();

  const misiList = [
    { title: t('tentang.misi.1.title'), desc: t('tentang.misi.1.desc') },
    { title: t('tentang.misi.2.title'), desc: t('tentang.misi.2.desc') },
    { title: t('tentang.misi.3.title'), desc: t('tentang.misi.3.desc') },
    { title: t('tentang.misi.4.title'), desc: t('tentang.misi.4.desc') },
    { title: t('tentang.misi.5.title'), desc: t('tentang.misi.5.desc') },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <InnerPageHero
        tag={t('tentang.hero.badge')}
        title={t('nav.about')}
        description={t('about.preview.desc')}
      >
        <AboutVisual />
      </InnerPageHero>

      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight mb-4">
                {t('tentang.hero.title')}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">{t('tentang.hero.p1')}</p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">{t('tentang.hero.p2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[var(--shadow-card)] h-[18.75rem] sm:h-[25rem] lg:h-[32.5rem]"
            >
              <FallbackImage
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1200"
                fallbackSrc="/images/presentation-placeholder.svg"
                alt="Corporate Meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Visi Section */}
      <section className="section-padding bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[var(--shadow-card)] h-[18.75rem] sm:h-[25rem] order-2 lg:order-1"
            >
              <FallbackImage 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                fallbackSrc="/images/presentation-placeholder.svg"
                alt="Vision" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              <div className="inline-flex items-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 text-[0.625rem] font-extrabold tracking-[0.18em] uppercase mb-4">
                {t('tentang.visi.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-4">
                {t('tentang.visi.title')}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {t('tentang.visi.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Misi Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 text-[0.625rem] font-extrabold tracking-[0.18em] uppercase mb-4">
                {t('tentang.misi.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-6">
                {t('tentang.misi.title')}
              </h2>
              
              <div className="space-y-4">
                {misiList.map((misi, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 font-bold text-slate-950 text-lg mt-1">
                      {index + 1}.
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 text-lg mb-1">{misi.title}</h3>
                      <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                        {misi.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[var(--shadow-card)] h-[25rem] sm:h-[31.25rem] lg:h-[38.75rem]"
            >
              <FallbackImage 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
                fallbackSrc="/images/presentation-placeholder.svg"
                alt="Handshake Mission" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Section */}
      <section id="gallery" className="section-padding bg-[var(--bg-secondary)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 text-[0.625rem] font-extrabold tracking-[0.18em] uppercase mb-4">
              {t('tentang.gallery.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950">
              {t('tentang.gallery.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 group cursor-pointer"
              >
                <FallbackImage
                  src={src}
                  fallbackSrc="/images/presentation-placeholder.svg"
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0A66C2] text-white shadow-[0_1.875rem_7.5rem_rgba(0,0,0,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_58%)]" />
            <div className="grid md:grid-cols-[0.8fr_1.2fr] items-center">
              
              {/* Left Image (Person with Headset) */}
              <div className="relative h-[18.75rem] md:h-[25rem] hidden md:block">
                <FallbackImage 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                  fallbackSrc="/images/presentation-placeholder.svg"
                  alt="Customer Support" 
                  fill 
                  className="object-cover"
                />
                {/* Gradient overlay to blend image with background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A66C2]/75" />
              </div>

              {/* Right Content */}
              <div className="p-10 md:p-12 lg:p-16 z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 leading-tight">
                  {t('tentang.contact.title')}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-extrabold text-white/85 mb-1">{t('tentang.contact.address.label')}</h3>
                    <p className="text-white/90 text-sm leading-relaxed max-w-md">
                      {t('tentang.contact.address.value')}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-extrabold text-white/85 mb-1">{t('tentang.contact.email.label')}</h3>
                      <p className="text-white/90 text-sm">
                        {t('tentang.contact.email.value')}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white/85 mb-1">{t('tentang.contact.phone.label')}</h3>
                      <p className="text-white/90 text-sm">
                        {t('tentang.contact.phone.value')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default TentangPage;
