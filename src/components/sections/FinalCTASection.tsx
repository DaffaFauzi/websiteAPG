'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FinalCTASection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/18 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-[#FF7A00]/25 blur-3xl" />
        <div className="absolute bottom-14 left-12 h-44 w-44 rounded-full bg-[#22C55E]/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-white/18 bg-white/10 backdrop-blur p-10 lg:p-14 shadow-[0_30px_120px_rgba(0,0,0,0.28)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-xs tracking-[0.24em] uppercase font-bold text-white/70">{t('cta.tag')}</p>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold">{t('cta.title')}</h2>
              <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">{t('cta.desc')}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="apg-btn relative rounded-full bg-[#0A66C2] hover:bg-[#0959A9] shadow-[0_18px_55px_rgba(10,102,194,0.35)] hover:shadow-[0_30px_90px_rgba(10,102,194,0.40)]"
              >
                {t('cta.primary')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/kontak')}
                className="apg-btn rounded-full border-white/30 text-white hover:bg-white/12 hover:text-white shadow-[0_14px_40px_rgba(0,0,0,0.14)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
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
