'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import FallbackImage from '@/components/ui/FallbackImage';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

const TentangPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <PageHero
        tag={t('tentang.hero.badge')}
        title={t('nav.about')}
        description={t('about.preview.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.about') },
        ]}
        imageAlt={t('nav.about')}
      />

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
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Link
              href="/tentang/visi-misi"
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_55px_-35px_rgba(2,6,23,0.20)] active:scale-[0.99] transition-transform"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.14),transparent_60%)]" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-slate-500">
                  {t('nav.about')}
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#041a40]">
                  {t('tentang.sub.visi_misi.title')}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed font-medium max-w-prose">
                  {t('tentang.sub.visi_misi.desc')}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#0A66C2] font-black">
                  {t('common.learn_more')} <span className="text-base">→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/tentang/galeri"
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_55px_-35px_rgba(2,6,23,0.20)] active:scale-[0.99] transition-transform"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.14),transparent_60%)]" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-slate-500">
                  {t('nav.about')}
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#041a40]">
                  {t('tentang.sub.gallery.title')}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed font-medium max-w-prose">
                  {t('tentang.sub.gallery.desc')}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#0A66C2] font-black">
                  {t('common.learn_more')} <span className="text-base">→</span>
                </div>
              </div>
            </Link>
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
                    href="/tentang/galeri"
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
