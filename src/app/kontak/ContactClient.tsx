'use client';

import { useState } from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import InnerPageHero from '@/components/ui/InnerPageHero';
import { ContactVisual } from '@/components/ui/HeroVisuals';

export default function ContactClient() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      // Mock backend submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      // Reset after success message
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <InnerPageHero
        tag={t('contact.tag')}
        title={t('contact.title')}
        description={t('contact.desc')}
      >
        <ContactVisual />
      </InnerPageHero>

      <section className="apg-section-divider py-16 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Info & Map */}
            <div className="lg:col-span-6 flex flex-col gap-8 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-slate-200 bg-white min-h-[20rem] flex-grow relative group"
              >
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <iframe
                  title={t('contact.map.title')}
                  className="w-full h-full border-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=The%20Mansion%20Bougenville%2C%20Office%20Tower%20Fontana%2C%20Jakarta%20Utara&output=embed"
                />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {[
                  { icon: MapPinIcon, title: t('contact.card.address.title'), value: t('contact.card.address.value') },
                  { icon: EnvelopeIcon, title: t('contact.card.email.title'), value: t('contact.card.email.value') },
                  { icon: PhoneIcon, title: t('contact.card.phone.title'), value: t('contact.card.phone.value') },
                  { icon: ClockIcon, title: t('contact.card.hours.title'), value: t('contact.card.hours.value') },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group bg-white p-6 rounded-[2rem] border border-slate-200 shadow-[0_8px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 hover:border-[#0A66C2]/30 hover:shadow-[0_20px_40px_rgba(10,102,194,0.08)] transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-[#0A66C2] flex items-center justify-center mb-5 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-[#041a40] mb-2 text-sm uppercase tracking-wider">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] sticky top-32">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-[#0A66C2] text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6">
                  Direct Inquiry
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#041a40] mb-4 tracking-tight">{t('contact.form.title')}</h2>
                <p className="text-slate-600 mb-10 text-base leading-relaxed font-medium">{t('contact.form.desc')}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.form.name')}</label>
                      <input
                        required
                        disabled={isSubmitting || isSuccess}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-slate-900 font-medium outline-none focus:bg-white focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10 transition-all duration-300 disabled:opacity-60"
                        placeholder={t('contact.form.name.placeholder')}
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting || isSuccess}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-slate-900 font-medium outline-none focus:bg-white focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10 transition-all duration-300 disabled:opacity-60"
                        placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.form.message')}</label>
                      <textarea
                        required
                        disabled={isSubmitting || isSuccess}
                        rows={5}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 text-slate-900 font-medium outline-none focus:bg-white focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10 transition-all duration-300 resize-none disabled:opacity-60"
                        placeholder={t('contact.form.message.placeholder')}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isError && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-semibold border border-red-100"
                      >
                        Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
                      </motion.div>
                    )}
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 rounded-xl bg-green-50 text-green-700 text-sm font-semibold border border-green-100"
                      >
                        Pesan Anda berhasil terkirim. Tim kami akan segera menghubungi Anda.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full min-h-[3.75rem] rounded-2xl bg-gradient-to-r from-[#07337A] to-[#0A66C2] text-white font-extrabold text-base tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSuccess ? (
                      <>
                        <span>Terkirim</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
