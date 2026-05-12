'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';

const NodeCard = ({ title, compact }: { title: string; compact?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 14, scale: 0.99 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={[
      'relative group rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center',
      'shadow-[0_14px_32px_-18px_rgba(2,6,23,0.18)]',
      'transition-[transform,border-color,box-shadow] duration-300',
      'hover:-translate-y-0.5 hover:border-[#0A66C2]/35 hover:shadow-[0_20px_40px_-18px_rgba(10,102,194,0.25)]',
      compact ? 'min-h-[4.25rem]' : 'min-h-[4.75rem]',
    ].join(' ')}
  >
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(10,102,194,0.10),transparent_62%)]" />
    </div>
    <div className={['relative z-10 font-black tracking-tight leading-tight text-slate-950', compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'].join(' ')}>
      {title}
    </div>
  </motion.div>
);

const GroupCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="relative w-full max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white shadow-[0_24px_60px_-30px_rgba(2,6,23,0.20)]"
  >
    <div className="relative px-7 py-5 sm:px-10 sm:py-7 bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] text-white">
      <div className="absolute inset-0 pointer-events-none opacity-[0.28]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(4,26,64,0.40),transparent_60%)]" />
      </div>
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="text-[10px] sm:text-xs font-black tracking-[0.24em] uppercase text-white/90">
          {title}
        </div>
      </div>
    </div>
    <div className="p-7 sm:p-10 bg-white">
      {children}
    </div>
  </motion.div>
);

const VLine = ({ h = 12 }: { h?: number }) => <div className="w-px bg-slate-200 mx-auto" style={{ height: `${h * 4}px` }} />;

const StructureClient = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('struktur.tag')}
        title={t('struktur.title')}
        description={t('struktur.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.structure') },
        ]}
        imageAlt={t('struktur.title')}
      />

      {/* Main Organizational Chart */}
      <section className="apg-section-divider py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="relative overflow-x-auto">
            <div className="min-w-[22rem] lg:min-w-0">
              <div className="flex flex-col items-center">
                <GroupCard title={t('struktur.title')}>
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[26rem]">
                      <NodeCard title={t('leadership.1.role')} />
                    </div>
                    <VLine h={6} />
                    <div className="w-full max-w-[26rem]">
                      <NodeCard title={t('leadership.2.role')} />
                    </div>
                    <VLine h={6} />
                    <div className="w-full max-w-[26rem]">
                      <NodeCard title={t('leadership.3.role')} />
                    </div>
                    <VLine h={6} />
                    <div className="w-full max-w-[26rem]">
                      <NodeCard title={t('leadership.4.role')} />
                    </div>

                    <div className="relative w-full mt-10">
                      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-10 h-10 w-[78%]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
                      </div>
                      <div className="lg:hidden w-px h-10 bg-slate-200 mx-auto" />

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pt-10">
                        <div className="relative flex flex-col items-center">
                          <div className="hidden lg:block absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-200" />
                          <NodeCard title={t('struktur.manager_keuangan')} compact />
                          <VLine h={6} />
                          <NodeCard title={t('struktur.supervisor_keuangan')} compact />
                          <VLine h={6} />
                          <NodeCard title={t('struktur.staff_keuangan')} compact />
                        </div>

                        <div className="relative flex flex-col items-center">
                          <div className="hidden lg:block absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-200" />
                          <NodeCard title={t('struktur.manager_operasional')} compact />
                          <VLine h={6} />
                          <NodeCard title={t('struktur.supervisor_it')} compact />
                          <VLine h={6} />
                          <NodeCard title={t('struktur.staff_operasional')} compact />
                        </div>
                      </div>
                    </div>
                  </div>
                </GroupCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance CTA */}
      <section className="apg-section-divider pb-16 lg:pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#041a40] rounded-[2.5rem] p-12 sm:p-20 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">
                {t('struktur.cta.title')}
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
                {t('struktur.cta.desc')}
              </p>
              <Button 
                variant="white"
                onClick={() => window.location.href = '/kontak'}
                className="!text-[#041a40] font-bold"
              >
                {t('common.contact_us')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default StructureClient;
