'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type Insight = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
  image: string;
  date: string;
};

export default function InsightsSection() {
  const { t } = useLanguage();

  const items: Insight[] = [
    { 
      title: t('news.1.title'), 
      excerpt: t('news.1.excerpt'), 
      tag: t('news.1.tag'), 
      href: '#',
      date: t('insights.1.date'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: t('news.2.title'), 
      excerpt: t('news.2.excerpt'), 
      tag: t('news.2.tag'), 
      href: '#',
      date: t('insights.2.date'),
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: t('news.3.title'), 
      excerpt: t('news.3.excerpt'), 
      tag: t('news.3.tag'), 
      href: '#',
      date: t('insights.3.date'),
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <section className="apg-section-divider relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#0A66C2] to-[#041E4A] p-8 sm:p-14 lg:p-20 mb-16 sm:mb-24 shadow-[0_30px_60px_-15px_rgba(10,102,194,0.2)] border border-white/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-white/70 mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/30" />
                {t('insights.tag.corporate_insights')}
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                {t('insights.title')}
              </h2>

              <div className="h-0.5 w-24 bg-white/20 mb-0 rounded-full" />
            </div>

            <Link href="#" className="inline-flex items-center justify-center gap-3 bg-white text-[#0A66C2] font-black px-10 py-4 rounded-full shadow-xl hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95 group min-h-[3.5rem]">
              {t('insights.cta')}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* Static Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href={item.href} className="flex flex-col h-full rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(10,102,194,0.15)] hover:border-[#0A66C2]/20 transition-all duration-500 overflow-hidden active:scale-[0.98]">
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 inline-flex rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase text-[#0A66C2] font-black shadow-sm">
                    {item.tag}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    {item.date || 'May 2025'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-4 leading-tight group-hover:text-[#0A66C2] transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 line-clamp-3 leading-relaxed mb-8 font-medium">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-black text-[#0A66C2]">
                    {t('insights.readMore')}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
