'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FinalCTASection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-slate-50 text-slate-950">

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#07337A] to-[#041a40] text-white p-10 sm:p-14 lg:p-20 shadow-[0_30px_60px_-15px_rgba(4,26,64,0.6)]"
        >
          {/* Institutional ambient patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_70%)] blur-2xl" />
          <div className="absolute left-0 bottom-0 w-1/2 h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)] blur-2xl" />

          <div className="relative z-10 grid gap-10 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                {t('cta.tag')}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                {t('cta.title')}
              </h2>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-sm">
                {t('cta.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto lg:ml-auto justify-center lg:justify-end mt-4 lg:mt-0">
              <Button
                variant="white"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="w-full sm:w-auto"
              >
                {t('cta.primary')}
              </Button>
              <Button
                variant="white-outline"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="w-full sm:w-auto"
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
