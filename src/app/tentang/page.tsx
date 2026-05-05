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

      {/* 1. Corporate Identity Overview */}
      <section className="apg-section-divider py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transitionEnd: { transform: 'none' }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-32 z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
                Corporate Narrative
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#041a40] leading-tight tracking-tight">
                {t('tentang.hero.title')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="lg:col-span-7 space-y-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                {t('tentang.hero.p1')}
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {t('tentang.hero.p2')}
              </p>
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-[20rem] sm:h-[28rem] mt-12 border border-slate-100">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1200"
                  fallbackSrc="/images/presentation-placeholder.svg"
                  alt="Corporate Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Strategic Vision & Mission */}
      <section className="apg-section-divider py-16 sm:py-24 lg:py-32 bg-slate-50 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transitionEnd: { transform: 'none' }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:sticky lg:top-32 z-10"
            >
              <div className="absolute -left-6 -top-6 text-9xl text-slate-200/50 font-serif leading-none select-none">&ldquo;</div>
              <div className="relative z-10">
                <div className="text-[10px] sm:text-xs font-black text-[#0A66C2] tracking-[0.2em] uppercase mb-6">
                  {t('tentang.visi.badge')}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#041a40] leading-snug mb-8">
                  {t('tentang.visi.title')}
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  {t('tentang.visi.desc')}
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="text-[10px] sm:text-xs font-black text-[#0A66C2] tracking-[0.2em] uppercase mb-6">
                {t('tentang.misi.badge')}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#041a40] leading-snug mb-8">
                {t('tentang.misi.title')}
              </h3>
              
              <div className="space-y-6">
                {misiList.map((misi, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-[#0A66C2] text-lg group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#041a40] text-lg mb-2">{misi.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {misi.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Premium Documentation Gallery */}
      <section id="gallery" className="apg-section-divider py-16 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,102,194,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(7,51,122,0.2),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              {t('tentang.gallery.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              {t('tentang.gallery.title')}
            </h2>
          </div>

          {/* Masonry Layout for Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.slice(0, 7).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden border border-white/10 break-inside-avoid group cursor-pointer"
              >
                <div className={`relative ${index % 3 === 0 ? 'aspect-square' : index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[3/2]'}`}>
                  <FallbackImage
                    src={src}
                    fallbackSrc="/images/presentation-placeholder.svg"
                    alt={`Documentation ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041a40]/90 via-[#041a40]/20 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Institutional Contact Access */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-slate-50 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#07337A] to-[#041a40] text-white p-10 sm:p-14 lg:p-20 shadow-[0_30px_60px_rgba(4,26,64,0.4)]"
          >
            {/* Ambient patterns */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.3),transparent_70%)] blur-2xl" />
            
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                  Corporate Access Gateway
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md mb-12">
                  {t('tentang.contact.title')}
                </h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white/60 mb-1 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{t('tentang.contact.address.label')}</h3>
                      <p className="text-white text-base sm:text-lg font-medium leading-relaxed max-w-sm">
                        {t('tentang.contact.address.value')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-white/60 mb-1 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{t('tentang.contact.email.label')}</h3>
                        <p className="text-white font-medium">
                          {t('tentang.contact.email.value')}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-white/60 mb-1 text-[10px] sm:text-xs uppercase tracking-[0.2em]">{t('tentang.contact.phone.label')}</h3>
                        <p className="text-white font-medium">
                          {t('tentang.contact.phone.value')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block relative h-full min-h-[300px]">
                 <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center">
                    <div className="text-white text-center">
                       <svg className="w-16 h-16 mx-auto mb-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                       </svg>
                       <div className="text-xl font-bold tracking-tight mb-2">Pusat Informasi APG</div>
                       <p className="text-sm text-white/70">Tim kami siap melayani berbagai kebutuhan strategis, investasi, dan pertanyaan seputar portofolio holding.</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default TentangPage;
