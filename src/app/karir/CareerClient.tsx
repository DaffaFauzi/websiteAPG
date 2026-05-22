'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/ui/Button';
import FooterSection from '@/components/sections/FooterSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PageHero from '@/components/ui/PageHero';

// --- Types ---
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
}

type TFunction = (key: string) => string;

// --- Mock Data ---
const getJobsData = (t: TFunction): Job[] => [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'APG Digital',
    location: 'Jakarta',
    type: t('career.job.type.full_time'),
    category: 'Tech',
    tags: ['React', 'Next.js', 'TypeScript'],
    description: t('career.job.1.desc'),
    requirements: [t('career.job.1.req.1'), t('career.job.1.req.2')],
    responsibilities: [t('career.job.1.resp.1'), t('career.job.1.resp.2')],
  },
  {
    id: '2',
    title: 'Marketing Officer',
    company: 'BPR Bonding',
    location: 'Bandung',
    type: t('career.job.type.full_time'),
    category: 'Finance',
    tags: ['Marketing', 'Strategy'],
    description: t('career.job.2.desc'),
    requirements: [t('career.job.2.req.1')],
    responsibilities: [t('career.job.2.resp.1')],
  },
  {
    id: '3',
    title: 'Finance Staff',
    company: 'DWP Insurance',
    location: 'Surabaya',
    type: t('career.job.type.full_time'),
    category: 'Finance',
    tags: ['Finance', 'Accounting'],
    description: t('career.job.3.desc'),
    requirements: [t('career.job.3.req.1')],
    responsibilities: [t('career.job.3.resp.1')],
  },
];

// --- Internal Components ---

const CareerIntroSection = ({ t, isTriggered }: { t: TFunction; isTriggered: boolean }) => (
  <section className={`transition-all duration-700 ${isTriggered ? 'py-8' : 'py-16'} bg-white`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`font-black text-[#041a40] tracking-tight transition-all duration-700 ${isTriggered ? 'text-xl sm:text-2xl mb-3' : 'text-2xl sm:text-3xl lg:text-4xl mb-5'}`}>
          {isTriggered ? t('career.intro.headline') : t('career.search.guidance.title')}
        </h2>
        <p className={`text-slate-500 max-w-xl mx-auto font-medium leading-relaxed transition-all duration-700 ${isTriggered ? 'text-xs sm:text-sm' : 'text-base sm:text-lg'}`}>
          {isTriggered ? t('career.intro.subtext') : t('career.search.guidance.desc')}
        </p>
      </motion.div>
    </div>
  </section>
);

const CareerSearchBar = ({ 
  t, 
  search, 
  setSearch, 
  onSearchTrigger,
  isTriggered
}: { 
  t: TFunction; 
  search: string; 
  setSearch: (v: string) => void; 
  onSearchTrigger: (val?: string) => void;
  isTriggered: boolean;
}) => {
  const suggestedKeywords = [
    { key: 'it', label: t('career.keywords.it') },
    { key: 'finance', label: t('career.keywords.finance') },
    { key: 'marketing', label: t('career.keywords.marketing') },
    { key: 'operasional', label: t('career.keywords.operasional') },
  ];

  return (
    <div className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isTriggered ? 'py-4 sticky top-20 z-40' : 'relative z-20 mb-16'}`}>
      <motion.div 
        layout
        className={`bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] p-1.5 border border-slate-100 transition-all duration-300 flex items-center focus-within:border-[#0A66C2] focus-within:shadow-[0_10px_40px_-10px_rgba(10,102,194,0.15)]`}
      >
        <div className="relative flex-1 flex items-center">
          <span className="pl-5 text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder={t('career.search.placeholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearchTrigger()}
            className="w-full h-11 sm:h-13 pl-3 pr-4 rounded-full bg-transparent text-slate-900 font-bold outline-none text-sm sm:text-base placeholder:text-slate-400/70"
          />
        </div>
        <Button 
          onClick={() => onSearchTrigger()}
          className="h-11 sm:h-13 px-6 sm:px-10 rounded-full bg-[#0A66C2] text-white font-bold shadow-md hover:bg-[#0855A1] transition-all"
        >
          {t('career.search.button')}
        </Button>
      </motion.div>
      
      <AnimatePresence>
        {!isTriggered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 text-center"
          >
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">
              {t('career.search.suggested')}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedKeywords.map((kw) => (
                <button
                  key={kw.key}
                  onClick={() => onSearchTrigger(kw.label)}
                  className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-black hover:bg-slate-100 hover:text-[#0A66C2] transition-all"
                >
                  {kw.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JobCard = ({ job, t, onDetail }: { job: Job; t: TFunction; onDetail: (j: Job) => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    className="group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(10,102,194,0.1)] hover:border-[#0A66C2]/15 transition-all duration-300 flex flex-col justify-between h-full"
  >
    <div className="flex flex-col gap-4">
      {/* Position Header (Company & Title) */}
      <div>
        <div className="text-xs font-bold text-[#0A66C2] uppercase tracking-wider mb-1">
          {job.company}
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0A66C2] transition-colors duration-300 tracking-tight leading-snug">
          {job.title}
        </h3>
      </div>

      {/* Location & Type */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
        <span className="inline-flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {job.location}
        </span>
        <span>•</span>
        <span className="inline-flex px-2 py-0.5 bg-slate-50 rounded border border-slate-100 text-[10px] uppercase font-bold tracking-wider">
          {job.type}
        </span>
      </div>

      {/* Brief Description */}
      <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
        {job.description}
      </p>
    </div>

    {/* Actions / CTA */}
    <div className="flex items-center gap-3 pt-5 mt-4 border-t border-slate-100">
      <Button 
        variant="secondary" 
        onClick={() => onDetail(job)}
        className="flex-1 h-11 rounded-xl font-bold text-xs border border-slate-200 text-slate-600 hover:text-[#0A66C2] hover:bg-slate-50 transition-colors"
      >
        {t('career.job.cta.detail')}
      </Button>
      <Button 
        className="flex-1 h-11 rounded-xl bg-[#0A66C2] text-white font-bold text-xs shadow-md shadow-blue-500/10 hover:bg-[#0855A1] active:scale-95 transition-all"
        onClick={() => onDetail(job)}
      >
        {t('career.job.cta.apply')}
      </Button>
    </div>
  </motion.div>
);

const EmptyState = ({ t, search, onReset }: { t: TFunction; search: string; onReset: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    className="text-center py-20 px-6"
  >
    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-slate-100 shadow-sm">
      <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">{t('career.job_not_found')}</h3>
    <p className="text-slate-400 font-medium mb-10 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
      {t('career.empty.message')}{' '}
      <span className="text-slate-900 font-black italic">&quot;{search}&quot;</span>. {t('career.search.try_other')}
    </p>
    <Button 
      variant="outline" 
      onClick={onReset} 
      className="rounded-full px-8 h-12 font-bold text-sm border-slate-200 hover:bg-slate-50 transition-all"
    >
      {t('career.reset_filter')}
    </Button>
  </motion.div>
);

// --- Main Page Client ---

export default function CareerClient() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <PageHero
        tag={t('career.hero.tag')}
        title={t('career.hero.title')}
        description={t('career.hero.subtitle')}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.career') },
        ]}
        imageAlt={t('career.hero.title')}
      />

      <div className="max-w-4xl mx-auto py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-slate-100 shadow-sm">
            <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Belum tersedia lowongan kerja saat ini.
          </h2>
          
          <p className="text-slate-500 font-medium max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Silakan pantau halaman ini secara berkala untuk informasi karir terbaru di Ardana Perkasa Group.
          </p>

          <div className="mt-12">
            <Button
              variant="secondary"
              onClick={() => window.location.href = '/kontak'}
              className="rounded-full px-10 h-14 font-bold text-sm border-slate-200 hover:bg-slate-50 transition-all"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </motion.div>
      </div>

      <FooterSection />
    </main>
  );
}
