'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';
import {
  LightBulbIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const BusinessFocusSection = () => {
  const { t } = useLanguage();
  const content = {
    tag: t('focus.tag'),
    title: `${t('focus.title.part1')} ${t('focus.title.part2')}`,
    desc: t('overview.desc'),
    items: [
      { icon: ScaleIcon, title: t('focus.1.title'), description: t('focus.1.desc') },
      { icon: ShieldCheckIcon, title: t('focus.2.title'), description: t('focus.2.desc') },
      { icon: LightBulbIcon, title: t('focus.3.title'), description: t('focus.3.desc') },
      { icon: UserGroupIcon, title: t('focus.4.title'), description: t('focus.4.desc') },
    ],
  };

  return (
    <section className={`${apgSystem.spacing.sectionY} bg-slate-50`}>
      <div className={apgSystem.spacing.container}>
        <motion.div {...apgSystem.motion.reveal} className="max-w-2xl">
          <motion.p {...apgSystem.motion.itemDelay(0.1)} className={`text-sm text-slate-500 ${apgSystem.typography.tag}`}>
            {content.tag}
          </motion.p>
          <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2} text-slate-950`}>
            {content.title}
          </motion.h2>
          <motion.p {...apgSystem.motion.itemDelay(0.3)} className={`mt-4 ${apgSystem.typography.body}`}>
            {content.desc}
          </motion.p>
        </motion.div>

        <motion.div {...apgSystem.motion.stagger} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {content.items.map((item) => (
            <motion.div key={item.title} variants={apgSystem.motion.item.variants} className="h-full">
              <div className={`group ${apgSystem.card.base} ${apgSystem.card.padding} h-full`}>
                <div className="h-12 w-12 rounded-full bg-slate-50 text-[var(--color-primary)] flex items-center justify-center transition-colors duration-200 group-hover:bg-slate-100">
                  <item.icon className={`h-6 w-6 ${apgSystem.icon.hover}`} />
                </div>
                <h3 className={`mt-5 ${apgSystem.typography.h3} text-slate-950 leading-relaxed`}>{item.title}</h3>
                <p className={`mt-2 ${apgSystem.typography.body}`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessFocusSection;
