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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,102,194,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(2,6,23,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.55)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.22em] text-[#0A66C2] uppercase font-extrabold mb-4">{t('leadership.tag')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950">{t('leadership.title')}</h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">{t('leadership.desc')}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p, idx) => (
            <motion.div
              key={`${idx}-${p.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 apg-ease">
                <div className="relative h-56 w-full bg-slate-100">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/0 to-transparent opacity-75" />
                </div>
                <div className="p-6">
                  <div className="text-base font-extrabold text-slate-950">{p.name}</div>
                  <div className="mt-2 text-sm text-slate-600">{p.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
