'use client';

import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import PageHero from '@/components/ui/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VisiMisiClient() {
  const { t } = useLanguage();

  const misiList = [
    { title: t('tentang.misi.1.title'), desc: t('tentang.misi.1.desc') },
    { title: t('tentang.misi.2.title'), desc: t('tentang.misi.2.desc') },
    { title: t('tentang.misi.3.title'), desc: t('tentang.misi.3.desc') },
    { title: t('tentang.misi.4.title'), desc: t('tentang.misi.4.desc') },
    { title: t('tentang.misi.5.title'), desc: t('tentang.misi.5.desc') },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('nav.about')}
        title={t('tentang.sub.visi_misi.title')}
        description={t('tentang.sub.visi_misi.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.about'), href: '/tentang' },
          { label: t('tentang.sub.visi_misi.title') },
        ]}
        imageAlt={t('tentang.sub.visi_misi.title')}
      />

      <section className="apg-section-divider py-16 lg:py-24 bg-white relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:sticky lg:top-32 z-10"
            >
              <div className="absolute -left-6 -top-6 text-9xl text-slate-200/50 font-serif leading-none select-none">
                &ldquo;
              </div>
              <div className="relative z-10">
                <div className="text-[10px] sm:text-xs font-black text-[#0A66C2] tracking-[0.2em] uppercase mb-6">
                  {t('tentang.visi.badge')}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#041a40] leading-snug mb-8">
                  {t('tentang.visi.title')}
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  {t('tentang.visi.desc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <div className="text-[10px] sm:text-xs font-black text-[#0A66C2] tracking-[0.2em] uppercase mb-6">
                {t('tentang.misi.badge')}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#041a40] leading-snug mb-8">
                {t('tentang.misi.title')}
              </h3>

              <div className="space-y-6">
                {misiList.map((misi, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-[#0A66C2] text-lg group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#041a40] text-lg mb-2">{misi.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {misi.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
