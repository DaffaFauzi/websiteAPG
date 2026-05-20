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
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
          },
          {
            date: 'April 2026',
            title: 'Aktivitas Kolaborasi & Kemitraan Strategis',
            excerpt: 'Sorotan kegiatan kolaborasi APG dalam memperkuat sinergi lintas sektor.',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600',
          },
          {
            date: 'Maret 2026',
            title: 'Inisiatif Peningkatan Layanan & Standar Operasional',
            excerpt: 'Langkah peningkatan layanan dengan standar enterprise untuk pengalaman pemangku kepentingan yang lebih baik.',
            image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600',
          },
        ]
      : [
          {
            date: 'May 2026',
            title: 'APG Corporate Update',
            excerpt: 'A concise update to support public information transparency.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
          },
          {
            date: 'April 2026',
            title: 'Strategic Collaboration & Partnership Highlights',
            excerpt: 'Key activities that strengthen APG’s cross-sector synergy.',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600',
          },
          {
            date: 'March 2026',
            title: 'Service & Operational Standards Improvement',
            excerpt: 'Continuous improvements with enterprise standards to enhance stakeholder experience.',
            image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600',
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
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200"
      />

      <section className="apg-section-divider py-16 md:py-24 bg-white">
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-slate-950/0 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold tracking-wide text-slate-400">{item.date}</div>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950 leading-snug transition-colors duration-200 group-hover:text-[#0A66C2]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">{item.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

