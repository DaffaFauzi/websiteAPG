'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import InnerPageHero from '@/components/ui/InnerPageHero';
import { StructureVisual } from '@/components/ui/HeroVisuals';

const managementData = [
  {
    categoryKey: 'struktur.komisaris',
    members: [
      { name: 'Affa Rosdiana', role: 'Komisaris', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    categoryKey: 'struktur.direksi',
    members: [
      { name: 'Muhammad Firdaus', role: 'Direktur Utama', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
      { name: 'Toman Clay Manurung', role: 'Direktur', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    categoryKey: 'struktur.divisi',
    members: [
      { name: 'Yeliza Eka Darma', role: 'Kepala Divisi Keuangan', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
      { name: 'Muhammad Azzam', role: 'Supervisor IT', photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
    ]
  }
];

const StructureClient = () => {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <InnerPageHero
        tag={t('struktur.tag')}
        title={t('struktur.title')}
        description={t('struktur.desc')}
      >
        <StructureVisual />
      </InnerPageHero>

      {/* Management Hierarchical Section */}
      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {managementData.map((section, sIdx) => (
              <React.Fragment key={section.categoryKey}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-6 mt-10 w-full text-center relative"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 inline-block bg-[var(--bg-primary)] px-6 relative z-10">
                    {t(section.categoryKey)}
                  </h2>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200 -z-0" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 relative">
                  {section.members.map((member, mIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: mIdx * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 bg-slate-200 border-4 border-white shadow-[var(--shadow-card)] group-hover:-translate-y-1 transition-[transform,box-shadow] duration-250 apg-ease relative z-10">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center px-5 py-4 bg-white rounded-3xl shadow-[var(--shadow-card)] w-64 group-hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-250 apg-ease border border-slate-200 relative z-10">
                        <h3 className="text-lg md:text-xl font-extrabold text-slate-950 mb-1">{member.name}</h3>
                        <p className="text-[#0A66C2] font-semibold text-sm">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Vertical Connector Line */}
                {sIdx < managementData.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '3.75rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-0.5 bg-[#0A66C2]/60 mt-8"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-[#0A66C2] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_68%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t('struktur.cta.title')}</h2>
            <p className="text-lg text-white/80 mb-10">
              {t('struktur.cta.desc')}
            </p>
            <Link 
              href="/kontak"
              className="apg-btn inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-extrabold text-slate-950 shadow-[0_0.875rem_2.5rem_rgba(0,0,0,0.18)] hover:bg-white/95 truncate whitespace-nowrap"
            >
              {t('common.contact_us')}
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default StructureClient;
