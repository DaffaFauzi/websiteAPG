'use client';

import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import FooterSection from '@/components/sections/FooterSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <header className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A]">
        <div className="absolute inset-0 opacity-[0.10]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.2em] text-white/80 font-extrabold uppercase mb-4">
              {t('contact.tag')}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              {t('contact.title')}
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">{t('contact.desc')}</p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_22px_70px_rgba(15,23,42,0.10)] border border-slate-200 bg-white h-[400px]">
                <iframe
                  title={t('contact.map.title')}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=The%20Mansion%20Bougenville%2C%20Office%20Tower%20Fontana%2C%20Jakarta%20Utara&output=embed"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('contact.card.address.title')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.card.address.value')}</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('contact.card.email.title')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.card.email.value')}</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('contact.card.phone.title')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.card.phone.value')}</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('contact.card.hours.title')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.card.hours.value')}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white border border-slate-200 p-8 lg:p-10 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
              <p className="text-gray-600 mb-8">{t('contact.form.desc')}</p>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contact.form.name')}</label>
                  <input
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-full bg-[#0A66C2] text-white font-extrabold py-3 hover:bg-[#0959A9] transition-colors shadow-[0_18px_55px_rgba(10,102,194,0.22)] hover:shadow-[0_26px_80px_rgba(10,102,194,0.28)]"
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
