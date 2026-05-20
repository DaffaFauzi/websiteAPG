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
  const jobsData = useMemo(() => getJobsData(t), [t]);
  
  const [search, setSearch] = useState('');
  const [isTriggered, setIsTriggered] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(() => {
    if (!search) return jobsData;
    return jobsData.filter((job) => 
      job.title.toLowerCase().includes(search.toLowerCase()) || 
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, jobsData]);

  const handleSearchTrigger = (val?: string) => {
    if (val) setSearch(val);
    
    setIsTriggered(true);
    // Smooth scroll to results
    setTimeout(() => {
      const el = document.getElementById('results-label');
      if (el) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleReset = () => {
    setSearch('');
    setIsTriggered(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!isTriggered ? (
            <motion.div
              key="initial-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CareerIntroSection t={t} isTriggered={false} />
              
              <CareerSearchBar 
                t={t} 
                search={search} 
                setSearch={setSearch} 
                onSearchTrigger={handleSearchTrigger} 
                isTriggered={false}
              />

              <WhyChooseUsSection />
            </motion.div>
          ) : (
            <motion.div
              key="result-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CareerIntroSection t={t} isTriggered={true} />
              <CareerSearchBar 
                t={t} 
                search={search} 
                setSearch={setSearch} 
                onSearchTrigger={handleSearchTrigger} 
                isTriggered={true}
              />

              {/* Results Section */}
              <section id="results" className="py-16">
                <div className="px-4 sm:px-6 lg:px-8">
                  {filteredJobs.length > 0 ? (
                    <div className="space-y-10">
                      {/* Results Header */}
                      <div id="results-label" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-50 pb-8">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-none">
                            {t('career.search.results_for')}{' '}
                            <span className="text-[#0A66C2]">&quot;{search || t('career.all_jobs')}&quot;</span>
                          </h3>
                          <p className="mt-3 text-xs font-black text-slate-400 uppercase tracking-widest">
                            {filteredJobs.length} {filteredJobs.length === 1 ? t('career.jobs_found_single') : t('career.jobs_found_plural')}
                          </p>
                        </div>
                        <button 
                          onClick={handleReset} 
                          className="px-5 py-2 rounded-xl bg-slate-50 text-[11px] font-black text-slate-500 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 group transition-all"
                        >
                          <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {t('career.reset_filter')}
                        </button>
                      </div>

                      {/* Job Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredJobs.map((job) => (
                          <JobCard key={job.id} job={job} t={t} onDetail={setSelectedJob} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <EmptyState t={t} search={search} onReset={handleReset} />
                  )}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl p-8 sm:p-12 no-scrollbar border border-slate-100"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="space-y-10">
                <div>
                  <span className="text-[10px] font-black text-[#0A66C2] uppercase tracking-[0.2em] bg-[#0A66C2]/5 px-4 py-1.5 rounded-full mb-6 inline-block">
                    {selectedJob.company}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6 tracking-tight leading-tight">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-sm bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                      <svg className="w-4 h-4 text-[#0A66C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-sm bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                      <svg className="w-4 h-4 text-[#0A66C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedJob.type}
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">{selectedJob.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
                  <div className="space-y-6">
                    <h4 className="text-base font-black text-[#041a40] uppercase tracking-widest flex items-center gap-3">
                      <span className="w-10 h-[2.5px] bg-[#0A66C2]" />
                      {t('career.modal.responsibilities')}
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i} className="text-base text-slate-500 flex gap-4 leading-relaxed">
                          <span className="text-[#0A66C2] font-black shrink-0">•</span> 
                          <span className="font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-base font-black text-[#041a40] uppercase tracking-widest flex items-center gap-3">
                      <span className="w-10 h-[2.5px] bg-[#0A66C2]" />
                      {t('career.modal.requirements')}
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.requirements.map((r, i) => (
                        <li key={i} className="text-base text-slate-500 flex gap-4 leading-relaxed">
                          <span className="text-[#0A66C2] font-black shrink-0">•</span> 
                          <span className="font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-10 flex flex-col sm:flex-row gap-4 border-t border-slate-50">
                  <Button className="flex-[2] h-14 rounded-2xl bg-[#0A66C2] text-white font-black text-base shadow-xl shadow-blue-500/10 hover:bg-[#0855A1] active:scale-95 transition-all">
                    {t('career.job.cta.apply')}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-14 rounded-2xl border-slate-100 text-slate-400 font-bold text-base hover:bg-slate-50 hover:text-slate-700 transition-all" 
                    onClick={() => setSelectedJob(null)}
                  >
                    {t('career.modal.close')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterSection />
    </main>
  );
}
