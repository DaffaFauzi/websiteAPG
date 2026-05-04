'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/ui/Button';
import NavbarSection from '@/components/sections/NavbarSection';
import FooterSection from '@/components/sections/FooterSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import InnerPageHero from '@/components/ui/InnerPageHero';
import { CareerVisual } from '@/components/ui/HeroVisuals';

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

const jobsData: Job[] = [
  {
    id: '1',
    title: 'Software Engineer (Frontend)',
    company: 'APG Digital',
    location: 'Jakarta',
    type: 'Full-time',
    category: 'Tech',
    tags: ['React', 'Next.js', 'TypeScript'],
    description: 'We are looking for a Software Engineer to join our growing tech team and build modern web applications for our digital ecosystem.',
    requirements: [
      '3+ years of experience with React/Next.js',
      'Proficiency in TypeScript and modern CSS (Tailwind)',
      'Experience with state management and API integration',
      'Strong problem-solving skills and attention to detail',
    ],
    responsibilities: [
      'Develop and maintain high-quality web applications',
      'Collaborate with designers and backend engineers',
      'Optimize applications for performance and scalability',
      'Participate in code reviews and technical discussions',
    ],
  },
  {
    id: '2',
    title: 'Finance Analyst',
    company: 'BPR Bonding',
    location: 'Bandung',
    type: 'Full-time',
    category: 'Finance',
    tags: ['Accounting', 'Financial Modeling', 'Reporting'],
    description: 'BPR Bonding is seeking a Finance Analyst to support our financial reporting and strategic planning processes.',
    requirements: [
      'Bachelor degree in Accounting or Finance',
      'Minimum 2 years of experience in financial analysis',
      'Proficiency in financial modeling and reporting tools',
      'Excellent analytical and communication skills',
    ],
    responsibilities: [
      'Prepare monthly and quarterly financial reports',
      'Analyze financial performance and trends',
      'Support the budgeting and forecasting process',
      'Assist in internal and external audits',
    ],
  },
  {
    id: '3',
    title: 'Insurance Specialist',
    company: 'DWP Insurance',
    location: 'Surabaya',
    type: 'Full-time',
    category: 'Insurance',
    tags: ['Claims', 'Risk Assessment', 'Client Relations'],
    description: 'Join DWP Insurance as an Insurance Specialist to manage client claims and provide expert advice on risk management.',
    requirements: [
      'Strong knowledge of insurance products and regulations',
      'Minimum 3 years of experience in the insurance industry',
      'Ability to build and maintain client relationships',
      'Professional certification in insurance (AAIK/AIIS) is a plus',
    ],
    responsibilities: [
      'Process insurance claims accurately and efficiently',
      'Perform risk assessments for potential clients',
      'Advise clients on coverage options and risk mitigation',
      'Monitor market trends and competitor activities',
    ],
  },
  {
    id: '4',
    title: 'Sports Event Coordinator',
    company: 'Pataka Consultant',
    location: 'Jakarta',
    type: 'Contract',
    category: 'Operations',
    tags: ['Event Planning', 'Logistics', 'Marketing'],
    description: 'Pataka Consultant is looking for an energetic Event Coordinator to manage sports events and community activations.',
    requirements: [
      'Experience in event planning and execution',
      'Strong organizational and multitasking skills',
      'Passion for sports and community development',
      'Excellent interpersonal and negotiation skills',
    ],
    responsibilities: [
      'Plan and execute sports events and community programs',
      'Manage event logistics, vendors, and budgets',
      'Coordinate with marketing for event promotion',
      'Ensure high participant satisfaction and event safety',
    ],
  },
  {
    id: '5',
    title: 'Consultant (Strategy & Operations)',
    company: 'PLN Consultant',
    location: 'Jakarta',
    type: 'Full-time',
    category: 'Consulting',
    tags: ['Business Strategy', 'Operational Excellence', 'PMO'],
    description: 'Join PLN Consultant to help our clients optimize their business operations and achieve strategic growth.',
    requirements: [
      'Strong analytical and problem-solving framework',
      'Experience in business consulting or operational management',
      'Ability to lead projects and manage multiple stakeholders',
      'Excellent presentation and communication skills',
    ],
    responsibilities: [
      'Develop business strategies and operational improvement plans',
      'Manage project timelines and deliverables',
      'Conduct market research and competitive analysis',
      'Facilitate workshops and client meetings',
    ],
  },
];

const companies = ['All', 'APG Digital', 'BPR Bonding', 'DWP Insurance', 'Pataka Consultant', 'PLN Consultant'];
const locations = ['All', 'Jakarta', 'Bandung', 'Surabaya'];
const categories = ['All', 'Tech', 'Finance', 'Insurance', 'Operations', 'Consulting'];

export default function CareerClient() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                           job.company.toLowerCase().includes(search.toLowerCase());
      const matchesCompany = selectedCompany === 'All' || job.company === selectedCompany;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      return matchesSearch && matchesCompany && matchesLocation && matchesCategory;
    });
  }, [search, selectedCompany, selectedLocation, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <NavbarSection />

      {/* Hero Section */}
      <InnerPageHero
        tag={t('career.hero.tag')}
        title={t('career.hero.title')}
        description={t('career.hero.subtitle')}
      >
        <CareerVisual />
      </InnerPageHero>

      {/* Search & Filter Bar */}
      <section id="jobs-listing" className="sticky top-[4.5rem] md:top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder={t('career.search.placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full min-h-[3.25rem] pl-12 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] transition-colors bg-white/90 text-slate-950 text-sm font-medium shadow-inner"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <div className="flex-1 sm:flex-initial flex items-center gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest truncate whitespace-nowrap">{t('career.filter.location')}</span>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="flex-1 sm:flex-initial min-h-[3.25rem] px-4 py-2 rounded-xl border border-slate-200 bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] text-slate-950 shadow-sm"
                >
                  {locations.map(loc => <option key={loc} value={loc}>{loc === 'All' ? t('career.filter.all') : loc}</option>)}
                </select>
              </div>
              <div className="flex-1 sm:flex-initial flex items-center gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest truncate whitespace-nowrap">{t('career.filter.category')}</span>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 sm:flex-initial min-h-[3.25rem] px-4 py-2 rounded-xl border border-slate-200 bg-white/90 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] text-slate-950 shadow-sm"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? t('career.filter.all') : cat}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Tabs */}
      <section className="pt-8 pb-4 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
            {companies.map(company => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`min-h-[2.75rem] px-5 sm:px-8 py-2 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all whitespace-nowrap ${
                  selectedCompany === company 
                  ? 'bg-[#041a40] text-white shadow-[0_8px_20px_rgba(4,26,64,0.15)]' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-95 shadow-sm'
                }`}
              >
                {company === 'All' ? t('career.filter.all') : company}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listing Grid */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4 sm:gap-6">
              {filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(idx * 0.05, 0.5), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A66C2] to-[#041a40] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-black text-[#0A66C2] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-md">
                          {job.company}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1 rounded-md">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#0A66C2] transition-colors duration-300 leading-tight">
                          {job.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-[10px] font-bold uppercase tracking-wider">
                          {job.type}
                        </span>
                        {job.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-white text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0 mt-2 md:mt-0">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedJob(job)}
                        className="bg-white hover:bg-slate-50 !border-slate-200 hover:!border-[#0A66C2] hover:!text-[#0A66C2] transition-colors shadow-sm"
                      >
                        {t('career.job.detail')}
                      </Button>
                      <Button size="sm" className="shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30">
                        {t('career.job.apply')} →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Posisi tidak ditemukan</h3>
              <p className="text-slate-500 font-medium">{t('career.empty')}</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setSearch('');
                  setSelectedCompany('All');
                  setSelectedLocation('All');
                  setSelectedCategory('All');
                }}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <WhyChooseUsSection />

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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] p-6 sm:p-10 md:p-14 no-scrollbar"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 h-12 w-12 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="space-y-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[10px] font-black text-[#0A66C2] uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-md">
                      {selectedJob.company}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-md">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedJob.location}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-md">
                      {selectedJob.type}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 mb-6 leading-tight tracking-tight">
                    {selectedJob.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium max-w-3xl">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                  <div className="space-y-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                    <h4 className="text-xl font-extrabold text-[#041a40] flex items-center gap-3">
                      <div className="h-8 w-1.5 bg-[#0A66C2] rounded-full" />
                      {t('career.modal.responsibilities')}
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-slate-700 text-base font-medium">
                          <svg className="w-5 h-5 text-[#0A66C2] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5 bg-blue-50/50 rounded-3xl p-6 sm:p-8 border border-blue-100/50">
                    <h4 className="text-xl font-extrabold text-[#041a40] flex items-center gap-3">
                      <div className="h-8 w-1.5 bg-[#0B7BE6] rounded-full" />
                      {t('career.modal.requirements')}
                    </h4>
                    <ul className="space-y-4">
                      {selectedJob.requirements.map((item, idx) => (
                        <li key={idx} className="flex gap-4 text-slate-700 text-base font-medium">
                          <svg className="w-5 h-5 text-[#0B7BE6] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto px-12 py-4 text-base shadow-xl shadow-blue-500/20">
                    {t('career.job.apply')}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedJob(null)} className="w-full sm:w-auto px-12 py-4 text-base bg-slate-50 border-slate-200">
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
