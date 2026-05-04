'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type Leader = {
  name: string;
  role: string;
  image: string;
};

export default function LeadershipSection() {
  const { t } = useLanguage();

  const leaders: Leader[] = [
    {
      name: t('leadership.1.name'),
      role: t('leadership.1.role'),
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: t('leadership.2.name'),
      role: t('leadership.2.role'),
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: t('leadership.3.name'),
      role: t('leadership.3.role'),
      image:
        'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: t('leadership.4.name'),
      role: t('leadership.4.role'),
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <section className="apg-section-divider relative py-16 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.2em] text-[#0A66C2] uppercase font-extrabold mb-4"
          >
            {t('leadership.tag')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight"
          >
            {t('leadership.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            {t('leadership.desc')}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p, idx) => (
            <motion.div
              key={`${idx}-${p.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-full"
            >
              <div className="rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] hover:border-slate-300 transition-all duration-500 apg-ease h-full flex flex-col hover:-translate-y-1">
                <div className="relative h-64 sm:h-72 w-full bg-[#0A66C2]/5 overflow-hidden">
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    className="object-cover transition-all duration-700 group-hover:scale-105" 
                    sizes="(max-width: 64rem) 50vw, 25vw" 
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041a40]/60 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center text-center relative bg-white">
                  {/* Small decorative line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#0A66C2] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-lg font-black text-[#041a40] truncate mb-2 group-hover:text-[#0A66C2] transition-colors duration-300">{p.name}</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0A66C2]/80 tracking-wide uppercase line-clamp-2">{p.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
