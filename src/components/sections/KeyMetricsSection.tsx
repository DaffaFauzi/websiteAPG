'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const KeyMetricsSection: React.FC = () => {
  const { t } = useLanguage();
  const metrics = [
    {
      label: t('metrics.subsidiaries'),
      value: 15,
      suffix: '+',
      icon: BuildingOfficeIcon,
    },
    {
      label: t('metrics.partners'),
      value: 200,
      suffix: '+',
      icon: UserGroupIcon,
    },
    {
      label: t('metrics.projects'),
      value: 500,
      suffix: '+',
      icon: BriefcaseIcon,
    },
    {
      label: t('metrics.sectors'),
      value: 10,
      suffix: '',
      icon: GlobeAltIcon,
    },
  ];

  return (
    <section className="apg-section-divider relative py-16 sm:py-20 lg:py-20 bg-slate-950 overflow-hidden shadow-[inset_0_20px_40px_-15px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,102,194,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(7,51,122,0.2),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left: Enterprise Expansion & Progress */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#38bdf8] font-extrabold uppercase mb-4 drop-shadow-sm">{t('metrics.tag')}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-md">{t('metrics.title')}</h2>
              <p className="mt-6 text-slate-300 font-medium text-base sm:text-lg leading-relaxed max-w-lg drop-shadow-sm">{t('metrics.desc')}</p>
            </motion.div>

            {/* Progress Bars / Growth Indicator */}
            <div className="space-y-6 pt-4 max-w-md">
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                  <span>Ecosystem Expansion</span>
                  <span className="text-[#0A66C2]">92%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '92%' }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#0A66C2] to-[#38bdf8] rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                  <span>Partner Integration</span>
                  <span className="text-[#0A66C2]">85%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '85%' }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-[#0A66C2] to-[#38bdf8] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Metrics Dashboard */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Top Left: Subsidiaries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-2 sm:col-span-1 rounded-3xl bg-slate-900/90 border border-slate-700/50 backdrop-blur-sm p-6 sm:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between min-h-[14rem] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center">
                  {React.createElement(metrics[0].icon, { className: "h-6 w-6" })}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-slate-400 font-extrabold">{metrics[0].label}</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={metrics[0].value} format={metrics[0].suffix ? 'suffix' : 'number'} suffix={metrics[0].suffix} />
                </div>
              </div>
            </motion.div>

            {/* Top Right: Partners (Accent Block) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2 sm:col-span-1 rounded-3xl bg-gradient-to-br from-[#0A66C2] to-[#041E4A] border border-[#38bdf8]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(10,102,194,0.4)] hover:shadow-[0_0_70px_rgba(10,102,194,0.6)] transition-all duration-300 flex flex-col justify-between min-h-[14rem] sm:mt-8 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-white/10 text-white flex items-center justify-center backdrop-blur-md">
                  {React.createElement(metrics[1].icon, { className: "h-6 w-6" })}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-white/70 font-extrabold">{metrics[1].label}</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={metrics[1].value} format={metrics[1].suffix ? 'suffix' : 'number'} suffix={metrics[1].suffix} />
                </div>
              </div>
            </motion.div>

            {/* Bottom Left: Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 sm:col-span-1 rounded-3xl bg-slate-900/90 border border-slate-700/50 backdrop-blur-sm p-6 sm:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between min-h-[14rem] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center">
                  {React.createElement(metrics[2].icon, { className: "h-6 w-6" })}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-slate-400 font-extrabold">{metrics[2].label}</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={metrics[2].value} format={metrics[2].suffix ? 'suffix' : 'number'} suffix={metrics[2].suffix} />
                </div>
              </div>
            </motion.div>

            {/* Bottom Right: Sectors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 sm:col-span-1 rounded-3xl bg-slate-900/90 border border-slate-700/50 backdrop-blur-sm p-6 sm:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between min-h-[14rem] sm:mt-8 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center">
                  {React.createElement(metrics[3].icon, { className: "h-6 w-6" })}
                </div>
                <div className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-slate-400 font-extrabold">{metrics[3].label}</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <AnimatedNumber value={metrics[3].value} format={metrics[3].suffix ? 'suffix' : 'number'} suffix={metrics[3].suffix} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
