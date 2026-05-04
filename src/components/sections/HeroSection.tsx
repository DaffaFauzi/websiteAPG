"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const metrics = [
    { value: t('overview.highlight.1.value'), label: t('overview.highlight.1.label'), size: 'large', delay: 0.1 },
    { value: t('overview.highlight.3.value'), label: t('overview.highlight.3.label'), size: 'medium', delay: 0.2 },
    { value: t('overview.highlight.2.value'), label: t('overview.highlight.2.label'), size: 'small', delay: 0.3 },
    { value: t('overview.highlight.4.value'), label: t('overview.highlight.4.label'), size: 'small', delay: 0.4 },
  ];



  return (
    <section className="apg-section-divider relative overflow-hidden bg-slate-50 pt-20 pb-20 sm:pt-28 sm:pb-28 text-slate-950">
      {/* Top Transition Seam & Depth */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#07337A]/15 via-[#07337A]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        
        {/* SECTION 1: Executive Snapshot */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#0A66C2] font-extrabold uppercase mb-4 drop-shadow-sm">{t('overview.tag')}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-950 leading-[1.1] drop-shadow-sm">{t('overview.title')}</h2>
              <p className="mt-6 text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-prose mx-auto lg:mx-0">{t('overview.desc')}</p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
              <div className="w-full sm:w-auto shadow-[0_8px_20px_-6px_rgba(10,102,194,0.4)] rounded-full hover:shadow-[0_12px_25px_-6px_rgba(10,102,194,0.5)] transition-shadow duration-300">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => router.push('/subsidiaries')}
                  className="w-full"
                >
                  {t('overview.cta.primary')}
                </Button>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/tentang')}
                className="w-full sm:w-auto"
              >
                {t('overview.cta.secondary')}
              </Button>
            </div>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,102,194,0.15),transparent_70%)] blur-2xl" />
            <div className="flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-[#0A66C2]/30 bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(10,102,194,0.15)] hover:shadow-[0_20px_50px_-12px_rgba(10,102,194,0.25)] transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.15),transparent_70%)]" />
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A66C2] tracking-tighter">{metrics[0].value}</div>
                <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.16em] text-slate-700 font-bold">{metrics[0].label}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-5 sm:p-6 shadow-[0_8px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{metrics[2].value}</div>
                <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-slate-500 font-bold">{metrics[2].label}</div>
              </motion.div>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 shadow-[0_10px_25px_rgb(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">{metrics[1].value}</div>
                <div className="mt-3 text-xs sm:text-sm uppercase tracking-[0.16em] text-slate-700 font-bold">{metrics[1].label}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-md p-5 sm:p-6 shadow-[0_12px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{metrics[3].value}</div>
                <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-slate-500 font-bold">{metrics[3].label}</div>
              </motion.div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
