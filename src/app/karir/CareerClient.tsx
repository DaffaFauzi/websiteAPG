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
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
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
      <section id="jobs-listing" className="sticky top-16 z-40 bg-white border-b border-slate-200 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder={t('career.search.placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full min-h-12 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] transition-colors bg-white text-slate-950"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <span className="max-w-40 text-xs font-bold text-slate-500 uppercase tracking-wider truncate whitespace-nowrap">{t('career.filter.location')}:</span>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="min-h-12 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] text-slate-950"
                >
                  {locations.map(loc => <option key={loc} value={loc}>{loc === 'All' ? t('career.filter.all') : loc}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="max-w-40 text-xs font-bold text-slate-500 uppercase tracking-wider truncate whitespace-nowrap">{t('career.filter.category')}:</span>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="min-h-12 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] text-slate-950"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? t('career.filter.all') : cat}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Tabs */}
      <section className="pt-6 pb-2 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
            {companies.map(company => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`min-h-12 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCompany === company 
                  ? 'apg-btn bg-[#0A66C2] text-white shadow-[0_0.875rem_2.5rem_rgba(10,102,194,0.18)]' 
                  : 'apg-btn bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {company === 'All' ? t('career.filter.all') : company}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listing Grid */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-3">
              {filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 md:px-8 md:py-6 shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#0A66C2] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-250 apg-ease origin-top" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="max-w-56 text-[0.625rem] font-bold text-[#0A66C2] uppercase tracking-widest bg-[#0A66C2]/10 px-2.5 py-1 rounded-full truncate whitespace-nowrap">
                          {job.company}
                        </span>
                        <span className="text-[0.625rem] font-medium text-slate-400 flex items-center gap-1 whitespace-nowrap">
                          📍 {job.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-[#0A66C2] transition-colors duration-200 apg-ease line-clamp-2 min-h-[3.25rem]">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[0.5625rem] font-bold uppercase tracking-wider">
                          {job.type}
                        </span>
                        {job.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded text-[0.5625rem] font-medium border border-slate-100">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedJob(job)}
                        className="group-hover:bg-slate-50 !text-slate-700 hover:!text-slate-900 hover:bg-slate-100 !border-slate-200 hover:!border-slate-300 text-xs py-2"
                      >
                        {t('career.job.detail')}
                      </Button>
                      <Button size="sm" className="text-xs py-2">
                        {t('career.job.apply')} →
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-slate-500 font-medium">{t('career.empty')}</p>
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
              className="absolute inset-0 bg-slate-950/60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: '1.25rem' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: '1.25rem' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-[0_1.375rem_4.375rem_rgba(15,23,42,0.18)] p-8 md:p-12 no-scrollbar"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                ✕
              </button>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#0A66C2] uppercase tracking-widest bg-[#0A66C2]/10 px-3 py-1 rounded-full">
                      {selectedJob.company}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      📍 {selectedJob.location} • {selectedJob.type}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-4">
                    {selectedJob.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                      <span className="h-6 w-1 bg-[#0A66C2] rounded-full" />
                      {t('career.modal.responsibilities')}
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600 text-sm">
                          <span className="text-[#0A66C2] mt-1">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                      <span className="h-6 w-1 bg-[#0B7BE6] rounded-full" />
                      {t('career.modal.requirements')}
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600 text-sm">
                          <span className="text-[#0B7BE6] mt-1">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                  <Button className="w-full sm:w-auto px-12">
                    {t('career.job.apply')}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedJob(null)} className="w-full sm:w-auto">
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
