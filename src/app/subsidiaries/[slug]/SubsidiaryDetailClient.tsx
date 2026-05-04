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
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Portfolio Header */}
      <header className="relative overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-[#07337A] to-[#041a40] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,102,194,0.4),transparent_60%)] blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              {t('subsidiary.detail.tag')}
            </div>
            
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl border-4 border-white/20 p-4 shadow-2xl flex items-center justify-center shrink-0">
                <LogoBadge name={name} src={logoSrc} size={80} className="rounded-xl" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-2 drop-shadow-md">
                  {name}
                </h1>
                <p className="text-sm sm:text-base tracking-[0.15em] text-[#A6C8FF] font-bold uppercase">
                  {t(`subsidiary.${slug}.sector`)}
                </p>
              </div>
            </div>
            
            <p className="mt-8 text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-prose font-medium">
              {t(`subsidiary.${slug}.desc`)}
            </p>
            
            <div className="mt-10 flex gap-4">
              <Link
                href="/subsidiaries"
                className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-extrabold text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300 shadow-lg truncate whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t('subsidiary.detail.back')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Intelligence Dashboard */}
      <section className="pb-16 sm:pb-24 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Value Creation Highlights */}
            <div className="lg:col-span-7 rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.1)] transition-shadow duration-500 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6">
                Value Creation
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#041a40] leading-tight mb-8">
                {t('subsidiary.detail.highlights')}
              </h2>
              
              <ul className="space-y-6 text-base sm:text-lg text-slate-700">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="leading-relaxed font-medium text-slate-800">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Alignment Matrix */}
            <div className="relative lg:col-span-5 rounded-[2rem] border border-white/10 bg-[#0A66C2] p-8 sm:p-10 overflow-hidden shadow-[0_30px_60px_rgba(10,102,194,0.3)] text-white flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white/90 text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                  Strategic Matrix
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-4">
                  {t('subsidiary.detail.alignment.title')}
                </h2>
                <p className="text-white/80 leading-relaxed font-medium mb-8">
                  {t('subsidiary.detail.alignment.desc')}
                </p>

                <div className="grid gap-4">
                  {alignment.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm sm:text-base text-white/95 font-medium leading-relaxed">
                        {item}
                      </span>
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

