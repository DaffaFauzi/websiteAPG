'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FinalCTASection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Background ambient grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] p-8 sm:p-14 lg:p-20 shadow-[0_40px_80px_-20px_rgba(10,102,194,0.25)] border border-white/10 text-white"
        >
          {/* Institutional ambient patterns */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.2),transparent_68%)]" />
          </div>

          <div className="relative z-10 grid gap-10 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center text-center lg:text-left">
            <div>
              <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-[1px] bg-white/30" />
                {t('cta.tag')}
                <span className="w-8 h-[1px] bg-white/30 lg:hidden" />
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                {t('cta.title')}
              </h2>

              <div className="h-0.5 w-24 bg-white/20 mb-8 rounded-full mx-auto lg:mx-0" />

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                {t('cta.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:ml-auto justify-center lg:justify-end mt-6 lg:mt-0">
              <Button
                variant="white"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="w-full sm:w-auto lg:w-full min-h-[3.5rem] rounded-full bg-white px-10 py-4 text-sm font-black text-[#041E4A] shadow-xl hover:bg-slate-50 active:scale-95 transition-all duration-300 group"
              >
                {t('cta.primary')}
                <span className="text-xl group-hover:translate-x-1.5 transition-transform duration-300 ml-2">→</span>
              </Button>
              <Button
                variant="white-outline"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="w-full sm:w-auto lg:w-full min-h-[3.5rem] border-white/30 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {t('cta.secondary')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
