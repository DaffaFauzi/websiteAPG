'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import NavbarSection from '@/components/sections/NavbarSection';
import Button from '@/components/ui/Button';
import FallbackImage from '@/components/ui/FallbackImage';
import Image from 'next/image';

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
      <NavbarSection />
      
      <section className="apg-section-divider bg-slate-50 pt-8 pb-8 sm:pt-10 sm:pb-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#0A66C2] text-white shadow-[0_30px_90px_rgba(2,6,23,0.18)]">
            <div className="absolute inset-0">
              <FallbackImage
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2200"
                fallbackSrc="/images/presentation-placeholder.svg"
                alt="Organizational structure"
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
                    {t('struktur.tag')}
                  </span>
                </div>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-end">
                <div>
                  <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.03] drop-shadow-sm">
                    {t('struktur.title')}
                  </h1>
                  <p className="mt-6 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose font-medium">
                    {t('struktur.desc')}
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="relative h-[18rem] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md">
                    <FallbackImage
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
                      fallbackSrc="/images/presentation-placeholder.svg"
                      alt="Organization planning"
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

                    <div className="relative w-full mt-8">
                      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-8 h-8 w-[70%]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
                      </div>
                      <div className="lg:hidden w-px h-8 bg-slate-200 mx-auto" />

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pt-8 lg:pt-10">
                        <div className="relative">
                          <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-200" />
                          <NodeCard title={t('struktur.kadiv_keuangan')} compact />
                        </div>

                        <div className="relative flex flex-col items-center">
                          <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-200" />
                          <NodeCard title={t('struktur.kadiv_operasional')} compact />
                          <VLine h={6} />
                          <NodeCard title={t('struktur.supervisor_it')} compact />
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
