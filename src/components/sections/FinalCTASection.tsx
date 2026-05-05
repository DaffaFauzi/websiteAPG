'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FinalCTASection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 sm:py-28 lg:py-32 bg-slate-50 text-slate-950">

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#07337A] to-[#041a40] text-white p-8 sm:p-14 lg:p-20 shadow-md sm:shadow-[0_30px_60px_-15px_rgba(4,26,64,0.6)]"
        >
          {/* Institutional ambient patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="hidden sm:block absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_70%)] blur-2xl" />
          <div className="hidden sm:block absolute left-0 bottom-0 w-1/2 h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)] blur-2xl" />

          <div className="relative z-10 grid gap-8 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6 backdrop-blur-md">
                {t('cta.tag')}
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight max-w-[280px] sm:max-w-none mx-auto lg:mx-0">
                {t('cta.title')}
              </h2>
              <p className="mt-3 sm:mt-6 text-sm sm:text-lg lg:text-xl text-white/80 sm:text-white/95 leading-relaxed max-w-[320px] sm:max-w-2xl mx-auto lg:mx-0 font-medium">
                {t('cta.desc')}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:ml-auto justify-center lg:justify-end mt-6 lg:mt-0">
              <Button
                variant="white"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="w-full min-h-[3rem] shadow-[0_8px_20px_rgba(255,255,255,0.15)] text-[#0A66C2] font-bold"
              >
                {t('cta.primary')}
              </Button>
              <Button
                variant="white-outline"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="w-full min-h-[3rem] border-white/30 text-white/80 hover:text-white text-sm"
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
