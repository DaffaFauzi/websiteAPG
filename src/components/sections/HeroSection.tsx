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
    <section className="apg-section-divider relative overflow-hidden bg-white py-16 lg:py-24 text-slate-950">
      {/* Premium Background Layering */}
      <div className="absolute top-0 inset-x-0 h-[40rem] bg-gradient-to-b from-[#07337A]/10 via-[#07337A]/2 to-transparent pointer-events-none" />
      
      {/* Modern Radial Depth */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(10,102,194,0.08),transparent_50%)] pointer-events-none" />
      
      {/* Subtle Grid — even lighter for premium feel */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: Executive Snapshot */}
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 sm:space-y-10 text-center lg:text-left"
          >
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[10px] sm:text-[11px] tracking-[0.3em] text-[#0A66C2] font-black uppercase mb-5 inline-block px-4 py-1.5 rounded-full bg-[#0A66C2]/5 border border-[#0A66C2]/10"
              >
                {t('overview.tag')}
              </motion.p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-950 leading-[1.05] drop-shadow-sm mx-auto lg:mx-0 max-w-[15ch] lg:max-w-none">
                {t('overview.title')}
              </h1>
              <p className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-[320px] sm:max-w-prose mx-auto lg:mx-0">
                {t('overview.desc')}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 sm:flex-row w-full sm:w-auto px-0 mt-8 sm:mt-10">
              <div className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => router.push('/subsidiaries')}
                  className="w-full min-h-[3.75rem] px-10 text-base font-black shadow-[0_20px_40px_-10px_rgba(10,102,194,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(10,102,194,0.5)] transition-all duration-300"
                >
                  {t('overview.cta.primary')}
                </Button>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/tentang')}
                className="w-full sm:w-auto min-h-[3.75rem] px-10 text-base font-bold border-slate-200 hover:bg-slate-50 transition-all duration-300"
              >
                {t('overview.cta.secondary')}
              </Button>
            </div>
          </motion.div>

          <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-end">
            <div className="hidden sm:block absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,102,194,0.1),transparent_70%)] blur-2xl" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0A66C2]/20 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-lg sm:shadow-[0_20px_50px_-12px_rgba(10,102,194,0.15)] transition-all duration-300 group hover:-translate-y-1 active:scale-[0.98] flex-1 max-w-sm"
            >
              <div className="text-5xl sm:text-6xl font-black text-[#0A66C2] tracking-tighter">{metrics[0].value}</div>
              <div className="mt-4 text-sm sm:text-base uppercase tracking-[0.2em] text-slate-800 font-black">{metrics[0].label}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md p-6 sm:p-10 shadow-lg sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex-1 max-w-sm"
            >
              <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter">{metrics[2].value}</div>
              <div className="mt-4 text-sm sm:text-base uppercase tracking-[0.2em] text-slate-700 font-black">{metrics[2].label}</div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
