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
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <InnerPageHero
        tag={t('struktur.tag')}
        title={t('struktur.title')}
        description={t('struktur.desc')}
      >
        <StructureVisual />
      </InnerPageHero>

      {/* Institutional Governance Architecture */}
      <section className="apg-section-divider py-16 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            {managementData.map((section, sIdx) => (
              <React.Fragment key={section.categoryKey}>
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-10 sm:mb-12 mt-12 w-full text-center relative flex justify-center items-center"
                >
                  <div className="absolute left-0 right-0 h-px bg-slate-200" />
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#041a40] uppercase bg-slate-50 px-8 relative z-10">
                    {t(section.categoryKey)}
                  </h2>
                </motion.div>

                {/* Governance Plates */}
                <div className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-8 lg:gap-10 relative">
                  {section.members.map((member, mIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: mIdx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative w-full sm:w-[18rem] md:w-[20rem]"
                    >
                      <div className="rounded-[2rem] bg-white border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-slate-200 transition-all duration-500 flex flex-col h-full">
                        {/* Portrait */}
                        <div className="relative h-[18rem] w-full bg-[#0A66C2]/5 overflow-hidden">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 320px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#041a40]/60 via-transparent to-transparent opacity-60" />
                        </div>
                        
                        {/* Info Plate */}
                        <div className="p-6 relative bg-white flex flex-col justify-center text-center">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0A66C2] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <h3 className="text-lg font-black text-[#041a40] mb-1 group-hover:text-[#0A66C2] transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-xs font-bold tracking-widest text-[#0A66C2]/80 uppercase">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Vertical Connector */}
                {sIdx < managementData.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '4rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[2px] bg-slate-200 mt-10"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Institutional CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-slate-50 text-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#07337A] to-[#041a40] text-white p-10 sm:p-14 lg:p-20 shadow-[0_30px_60px_rgba(4,26,64,0.4)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(10,102,194,0.4),transparent_60%)] blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                Governance Inquiry
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                {t('struktur.cta.title')}
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-10 leading-relaxed font-medium">
                {t('struktur.cta.desc')}
              </p>
              <Link
                href="/kontak"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-white px-8 sm:px-10 py-3 text-sm font-extrabold text-[#041a40] shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 truncate whitespace-nowrap"
              >
                {t('common.contact_us')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default StructureClient;
