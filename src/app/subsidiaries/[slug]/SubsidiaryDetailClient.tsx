'use client';

import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import LogoBadge from '@/components/ui/LogoBadge';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  slug: string;
  name: string;
  logoSrc?: string;
};

export default function SubsidiaryDetailClient({ slug, name, logoSrc }: Props) {
  const { t } = useLanguage();

  const highlights = [
    t(`subsidiary.${slug}.highlight.1`),
    t(`subsidiary.${slug}.highlight.2`),
    t(`subsidiary.${slug}.highlight.3`),
  ];

  const alignment = [
    t('subsidiary.detail.alignment.1'),
    t('subsidiary.detail.alignment.2'),
    t('subsidiary.detail.alignment.3'),
    t('subsidiary.detail.alignment.4'),
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="relative overflow-hidden pt-24 pb-12 bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_58%)]" />
          <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.2em] text-white/75 font-extrabold">{t('subsidiary.detail.tag')}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <LogoBadge name={name} src={logoSrc} size={64} className="rounded-2xl" />
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05] text-white">
                  {name}
                </h1>
                <p className="mt-3 text-sm tracking-[0.18em] text-white/85">{t(`subsidiary.${slug}.sector`)}</p>
              </div>
            </div>
            <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
              {t(`subsidiary.${slug}.desc`)}
            </p>
            <div className="mt-7">
              <Link
                href="/subsidiaries"
                className="apg-btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white/90 hover:bg-white/14 hover:text-white"
              >
                <span aria-hidden="true">←</span> {t('subsidiary.detail.back')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 apg-ease">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-[-0.01em] text-slate-950">
                {t('subsidiary.detail.highlights')}
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#0A66C2] shadow-[0_0_0_6px_rgba(10,102,194,0.16)]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:col-span-5 rounded-3xl border border-white/18 bg-gradient-to-br from-[#0B7BE6] via-[#0A66C2] to-[#07337A] p-6 sm:p-8 overflow-hidden shadow-[0_22px_70px_rgba(0,0,0,0.18)] text-white">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:64px_64px]"
              />
              <div className="relative">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-[-0.01em]">
                  {t('subsidiary.detail.alignment.title')}
                </h2>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  {t('subsidiary.detail.alignment.desc')}
                </p>

                <div className="mt-8 grid gap-3">
                  {alignment.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-sm text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

