'use client';

import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';
import InnerPageHero from '@/components/ui/InnerPageHero';
import { ContactVisual } from '@/components/ui/HeroVisuals';

export default function ContactClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <InnerPageHero
        tag={t('contact.tag')}
        title={t('contact.title')}
        description={t('contact.desc')}
      >
        <ContactVisual />
      </InnerPageHero>

      <section className="section-padding bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-slate-200 bg-white h-[25rem]">
                <iframe
                  title={t('contact.map.title')}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=The%20Mansion%20Bougenville%2C%20Office%20Tower%20Fontana%2C%20Jakarta%20Utara&output=embed"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-950 mb-2 truncate">{t('contact.card.address.title')}</h3>
                  <p className="text-sm text-slate-700">{t('contact.card.address.value')}</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-950 mb-2 truncate">{t('contact.card.email.title')}</h3>
                  <p className="text-sm text-slate-700">{t('contact.card.email.value')}</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-950 mb-2 truncate">{t('contact.card.phone.title')}</h3>
                  <p className="text-sm text-slate-700">{t('contact.card.phone.value')}</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-950 mb-2 truncate">{t('contact.card.hours.title')}</h3>
                  <p className="text-sm text-slate-700">{t('contact.card.hours.value')}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-extrabold text-slate-950 mb-4">{t('contact.form.title')}</h2>
              <p className="text-slate-700 mb-6">{t('contact.form.desc')}</p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">{t('contact.form.name')}</label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <button
                  type="button"
                  className="apg-btn w-full min-h-12 rounded-full bg-[#0A66C2] text-white font-extrabold py-3 hover:bg-[#0959A9] shadow-[0_0.875rem_2.5rem_rgba(10,102,194,0.18)] mt-4 truncate"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
