'use client';

import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BeritaPage() {
  const { t, language } = useLanguage();

  const items =
    language === 'id'
      ? [
          {
            date: 'Mei 2026',
            title: 'Pembaruan Informasi Korporasi APG',
            excerpt: 'Ringkasan pembaruan korporasi untuk mendukung transparansi informasi kepada publik.',
          },
          {
            date: 'April 2026',
            title: 'Aktivitas Kolaborasi & Kemitraan Strategis',
            excerpt: 'Sorotan kegiatan kolaborasi APG dalam memperkuat sinergi lintas sektor.',
          },
          {
            date: 'Maret 2026',
            title: 'Inisiatif Peningkatan Layanan & Standar Operasional',
            excerpt: 'Langkah peningkatan layanan dengan standar enterprise untuk pengalaman pemangku kepentingan yang lebih baik.',
          },
        ]
      : [
          {
            date: 'May 2026',
            title: 'APG Corporate Update',
            excerpt: 'A concise update to support public information transparency.',
          },
          {
            date: 'April 2026',
            title: 'Strategic Collaboration & Partnership Highlights',
            excerpt: 'Key activities that strengthen APG’s cross-sector synergy.',
          },
          {
            date: 'March 2026',
            title: 'Service & Operational Standards Improvement',
            excerpt: 'Continuous improvements with enterprise standards to enhance stakeholder experience.',
          },
        ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('nav.announcements')}
        title={t('nav.news')}
        description={t('announcements.news.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.announcements') },
          { label: t('nav.news') },
        ]}
        imageAlt={t('nav.news')}
        imageSrc="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=2200"
      />

      <section className="apg-section-divider py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase">
              {t('nav.news')}
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#041a40]">
              {language === 'id' ? 'Update & Informasi Terbaru' : 'Latest Updates & Information'}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed font-medium">
              {language === 'id'
                ? 'Halaman ini menampilkan pengumuman dan informasi statis yang relevan. Konten dapat diperbarui sesuai kebutuhan.'
                : 'This page contains static news and announcements. Content can be updated as needed.'}
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-black tracking-[0.18em] uppercase text-slate-400">{item.date}</div>
                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-950 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">{item.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

