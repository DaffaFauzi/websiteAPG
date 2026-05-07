'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import FallbackImage from '@/components/ui/FallbackImage';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

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
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600',
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="apg-section-divider bg-slate-50 pt-8 pb-8 sm:pt-10 sm:pb-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#0A66C2] text-white shadow-[0_30px_90px_rgba(2,6,23,0.18)]">
            <div className="absolute inset-0">
              <FallbackImage
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200"
                fallbackSrc="/images/presentation-placeholder.svg"
                alt="APG Headquarters"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/92 via-[#0A66C2]/70 to-[#0A66C2]/30" />
              <div className="absolute inset-0 opacity-[0.10]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(4,26,64,0.45),transparent_60%)]" />
              </div>
            </div>

            <div className="relative z-10 px-7 sm:px-10 lg:px-14 pt-10 sm:pt-12 pb-12 sm:pb-14">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-md">
                  <div className="relative h-5 w-16">
                    <Image
                      src="/images/apgg.png"
                      alt={t('brand.logoAlt')}
                      fill
                      sizes="64px"
                      className="object-contain [filter:brightness(0)_invert(1)]"
                      priority
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white/90">
                    {t('tentang.hero.badge')}
                  </span>
                </div>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-end">
                <div>
                  <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.03] drop-shadow-sm">
                    {t('nav.about')}
                  </h1>
                  <p className="mt-6 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose font-medium">
                    {t('about.preview.desc')}
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="relative h-[18rem] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md">
                    <FallbackImage
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600"
                      fallbackSrc="/images/presentation-placeholder.svg"
                      alt="Corporate skyline"
                      fill
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#041a40]/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apg-section-divider py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transitionEnd: { transform: 'none' },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-32 z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
                {t('tentang.corporate_narrative')}
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
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-[20rem] sm:h-[28rem] mt-10 border border-slate-100">
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

      <section className="apg-section-divider py-16 lg:py-24 bg-slate-50 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transitionEnd: { transform: 'none' },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:sticky lg:top-32 z-10"
            >
              <div className="absolute -left-6 -top-6 text-9xl text-slate-200/50 font-serif leading-none select-none">
                &ldquo;
              </div>
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

      <section id="gallery" className="apg-section-divider py-16 lg:py-24 bg-white">
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50"
              >
                <div className="relative aspect-[4/3]">
                  <FallbackImage
                    src={src}
                    fallbackSrc="/images/presentation-placeholder.svg"
                    alt={`APG gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A66C2]/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="apg-section-divider py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-[#07337A] to-[#041a40] text-white p-10 sm:p-14 lg:p-16 shadow-[0_30px_60px_rgba(4,26,64,0.35)]"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.18]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(10,102,194,0.28),transparent_65%)]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                  {t('common.contact_us')}
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08]">
                  {t('tentang.contact.title')}
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed max-w-prose">
                  {t('contact.desc')}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center justify-center rounded-full bg-white text-[#041a40] px-8 py-4 font-black shadow-xl active:scale-[0.98] transition-transform"
                  >
                    {t('common.contact_us')}
                    <span className="ml-3">→</span>
                  </Link>
                  <Link
                    href="#gallery"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 font-black text-white/90 hover:bg-white/10 active:scale-[0.98] transition-transform"
                  >
                    {t('gallery.cta')}
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-[2rem] border border-white/15 bg-white/6 backdrop-blur-md p-8">
                  <div className="text-[10px] font-black tracking-[0.25em] uppercase text-white/70">
                    {t('tentang.contact.address.label')}
                  </div>
                  <div className="mt-2 text-white font-extrabold leading-snug">
                    {t('tentang.contact.address.value')}
                  </div>
                  <div className="mt-6 h-px w-full bg-white/15" />
                  <div className="mt-6 grid gap-4 text-white/90 font-bold">
                    <div>
                      <div className="text-[10px] font-black tracking-[0.25em] uppercase text-white/70">
                        {t('tentang.contact.email.label')}
                      </div>
                      <div className="mt-1">{t('tentang.contact.email.value')}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-[0.25em] uppercase text-white/70">
                        {t('tentang.contact.phone.label')}
                      </div>
                      <div className="mt-1">{t('tentang.contact.phone.value')}</div>
                    </div>
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
