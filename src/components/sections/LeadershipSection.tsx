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
    <section className="apg-section-divider relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.18em] text-[#0A66C2] uppercase font-extrabold mb-4">{t('leadership.tag')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950">{t('leadership.title')}</h2>
          <p className="mt-5 text-lg text-slate-700 max-w-3xl mx-auto">{t('leadership.desc')}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p, idx) => (
            <motion.div
              key={`${idx}-${p.role}`}
              initial={{ opacity: 0, y: '1.125rem' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-[var(--shadow-card)] hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)] transition-[transform,box-shadow,border-color] duration-250 apg-ease">
                <div className="relative h-56 w-full bg-slate-100">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(max-width: 64rem) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/0 to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <div className="text-base font-extrabold text-slate-950 truncate">{p.name}</div>
                  <div className="mt-2 text-sm text-slate-700 line-clamp-2 min-h-[2.5rem]">{p.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
