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
    category: 'Dewan Komisaris',
    members: [
      { name: 'Nama Komisaris Utama', role: 'Komisaris Utama', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
      { name: 'Nama Komisaris Independen', role: 'Komisaris Independen', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    category: 'Dewan Direksi',
    members: [
      { name: 'Nama Direktur Utama', role: 'Direktur Utama', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
      { name: 'Nama Direktur Keuangan', role: 'Direktur Keuangan', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
      { name: 'Nama Direktur Operasional', role: 'Direktur Operasional', photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400' },
      { name: 'Nama Direktur Strategis', role: 'Direktur Strategis', photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=400' },
    ]
  },
  {
    category: 'Kepala Divisi',
    members: [
      { name: 'Kepala Divisi SDM', role: 'Kepala Divisi SDM', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
      { name: 'Kepala Divisi Pemasaran', role: 'Kepala Divisi Pemasaran', photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400' },
      { name: 'Kepala Divisi IT', role: 'Kepala Divisi IT', photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
    ]
  }
];

const StructureClient = () => {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <InnerPageHero
        tag={t('struktur.tag')}
        title={t('struktur.title')}
        description={t('struktur.desc')}
      >
        <StructureVisual />
      </InnerPageHero>

      {/* Management Hierarchical Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {managementData.map((section, sIdx) => (
              <React.Fragment key={section.category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6 mt-10 w-full text-center relative"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block bg-white px-6 relative z-10">
                    {section.category}
                  </h2>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-0" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 relative">
                  {section.members.map((member, mIdx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: mIdx * 0.1 }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 bg-gray-200 border-4 border-white shadow-[0_22px_70px_rgba(15,23,42,0.14)] group-hover:-translate-y-1 transition-all duration-300 ease-in-out relative z-10">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center px-5 py-4 bg-white rounded-3xl shadow-[0_14px_40px_rgba(15,23,42,0.08)] w-64 group-hover:-translate-y-1 transition-all duration-300 ease-in-out border border-slate-200 relative z-10">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-[#0A66C2] font-semibold text-sm">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Vertical Connector Line */}
                {sIdx < managementData.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-0.5 bg-[#0A66C2]/60 mt-8"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white">
        <div className="absolute inset-0 opacity-[0.10]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{t('struktur.cta.title')}</h2>
            <p className="text-lg text-white/80 mb-10">
              {t('struktur.cta.desc')}
            </p>
            <Link 
              href="/kontak"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-extrabold text-slate-950 shadow-[0_18px_55px_rgba(0,0,0,0.20)] hover:bg-white/95 transition-all hover:-translate-y-1"
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
