'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LeadershipSection() {
  const { t } = useLanguage();
  const router = useRouter();

  const levels = [
    { role: 'leadership.1.role', label: t('struktur.komisaris') },
    { role: 'leadership.2.role', label: t('struktur.komisaris') },
    { role: 'leadership.3.role', label: t('struktur.direksi') },
    { role: 'leadership.4.role', label: t('struktur.direksi') },
  ];

  return (
    <section className="apg-section-divider relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] p-8 sm:p-14 lg:p-20 mb-12 sm:mb-16 shadow-[0_30px_60px_-15px_rgba(10,102,194,0.2)] border border-white/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)]" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/30" />
              {t('leadership.tag')}
              <span className="w-8 h-[1px] bg-white/30" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              {t('leadership.title')}
            </h2>

            <div className="h-0.5 w-24 bg-white/20 mb-8 rounded-full" />
            
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl">
              {t('leadership.desc')}
            </p>
          </div>
        </motion.div>

        {/* Vertical Stacking Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-10">
            {levels.map((leader, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border-2 border-slate-100 p-8 sm:p-12 text-center shadow-xl shadow-slate-200/40 hover:border-[#0A66C2]/30 transition-all duration-300 group active:scale-[0.98] relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-100 text-slate-500 text-[9px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-slate-200">
                    {leader.label}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tight group-hover:text-[#0A66C2] transition-colors">
                    {t(leader.role)}
                  </div>
                </motion.div>
                
                {idx < levels.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '2.5rem' }}
                    viewport={{ once: true }}
                    className="w-px bg-slate-200" 
                  />
                )}
              </React.Fragment>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-full flex justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/struktur')}
                className="min-h-[3.75rem] px-12 rounded-full font-black text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t('struktur.cta.view')}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
