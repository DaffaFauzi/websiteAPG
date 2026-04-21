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
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                {t('tentang.hero.title')}
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">{t('tentang.hero.p1')}</p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">{t('tentang.hero.p2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.10)] h-[300px] sm:h-[400px] lg:h-[520px]"
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
              className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.10)] h-[300px] sm:h-[400px] order-2 lg:order-1"
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
            >
              <div className="inline-flex items-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
                {t('tentang.visi.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                {t('tentang.visi.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
            >
              <div className="inline-flex items-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
                {t('tentang.misi.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                {t('tentang.misi.title')}
              </h2>
              
              <div className="space-y-6">
                {misiList.map((misi, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 font-bold text-gray-900 text-lg mt-1">
                      {index + 1}.
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{misi.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
              className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.10)] h-[400px] sm:h-[500px] lg:h-[620px]"
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
              {t('tentang.gallery.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {t('tentang.gallery.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1 }}
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition-all duration-300 group cursor-pointer"
              >
                <FallbackImage
                  src={src}
                  fallbackSrc="/images/presentation-placeholder.svg"
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
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
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white shadow-[0_30px_120px_rgba(0,0,0,0.24)]">
            <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
            <div className="grid md:grid-cols-[0.8fr_1.2fr] items-center">
              
              {/* Left Image (Person with Headset) */}
              <div className="relative h-[300px] md:h-[400px] hidden md:block">
                <FallbackImage 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                  fallbackSrc="/images/presentation-placeholder.svg"
                  alt="Customer Support" 
                  fill 
                  className="object-cover"
                />
                {/* Gradient overlay to blend image with background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A66C2]/85" />
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
