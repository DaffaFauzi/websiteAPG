'use client';

import { motion } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';

const managementList = [
  { role: 'Dewan Komisaris', name: 'Affa Rosdiana' },
  { role: 'Direktur Utama', name: 'Muhammad Firdaus' },
  { role: 'Direktur', name: 'Toman Clay Manurung' },
  { role: 'Kepala Divisi Keuangan', name: 'Yeliza Eka Darma' },
  { role: 'Kepala Divisi Operasional', name: '( Segera )' },
  { role: 'Kepala Divisi IT', name: '( Segera )' },
  { role: 'Kepala Divisi Support', name: '( Segera )' },
  { role: 'Kepala Divisi Operasional', name: '( Segera )' },
  { role: 'Supervisor Accounting, Tax & Marketing', name: '( Segera )' },
  { role: 'Supervisor Finance & Corporate Planning', name: '( Segera )' },
  { role: 'Supervisor IT Programmer', name: 'Muhammad Azam' },
  { role: 'Supervisor IT Support', name: '( Segera )' },
  { role: 'Supervisor Marketing', name: '( Segera )' },
  { role: 'Supervisor Compliance', name: '( Segera )' },
  { role: 'Supervisor SDM & Umum', name: '( Segera )' },
  { role: 'Supervisor Sekretaris Perusahaan', name: '( Segera )' },
];

export default function StrukturManajemenPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PageHero
        tag={t('nav.structure')}
        title={t('nav.management')}
        description={t('leadership.desc')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.structure'), href: '/struktur' },
          { label: t('nav.management') },
        ]}
        imageAlt={t('nav.management')}
        variant="management"
      />

      <section className="apg-section-divider py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-6">
              {t('nav.management')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041a40] tracking-tight">
              {t('leadership.title')}
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#0A66C2] mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {managementList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="group flex items-center p-4 sm:p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-[#0A66C2]/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0A66C2] font-bold text-sm sm:text-base mr-4 sm:mr-6 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300">
                  {idx + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#041a40] group-hover:text-[#0A66C2] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
