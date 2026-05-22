'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { subsidiariesData } from '@/app/subsidiaries/subsidiariesData';
import { apgSystem } from '@ds/apg-system';

const SubsidiariesShowcaseSection = () => {
  const { t } = useLanguage();
  const highlightSubsidiaries = subsidiariesData.slice(0, 6);
  const content = {
    tag: t('subsidiaries.tag'),
    title: t('subsidiaries.title'),
    desc: t('subsidiaries.desc'),
    cta: t('nav.subsidiaries_all'),
  };

  const subsidiaryLogoScale: Record<string, string> = {
    "bpr": "scale-100",                      // bpr-bonding
    "caraka-mulia": "scale-[1.8]",           // caraka-mulia
    "dwp": "scale-[0.85]",                   // dwp-insurance
    "sipbro": "scale-100",                 // sip-bro
    "qjamin": "scale-[1.1]",                 // khalifah-jamin-perkasa
    "prada-bc": "scale-[1.2]",               // prada-badminton-club
    "lps": "scale-100",                      // lps-insurance-consultant
    "pln": "scale-[1.05]",                   // perkasa-lintas-nasional
  };

  return (
    <section className={`relative ${apgSystem.spacing.sectionY} bg-white`}>
      <div className={apgSystem.spacing.container}>
        <motion.div {...apgSystem.motion.reveal} className={`${apgSystem.card.base} ${apgSystem.card.paddingComfort}`}>
          <div className="text-center max-w-2xl mx-auto">
            <motion.p {...apgSystem.motion.itemDelay(0.1)} className={`text-sm text-slate-500 ${apgSystem.typography.tag}`}>
              {content.tag}
            </motion.p>
            <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2} text-slate-950`}>
              {content.title}
            </motion.h2>
            <motion.p {...apgSystem.motion.itemDelay(0.3)} className={`mt-4 ${apgSystem.typography.body}`}>
              {content.desc}
            </motion.p>
          </div>

          <motion.div {...apgSystem.motion.stagger} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightSubsidiaries.map((s) => (
              <motion.div key={s.slug} variants={apgSystem.motion.item.variants} className="h-full">
                <Link href={`/subsidiaries/${s.slug}`} className={`group ${apgSystem.card.subtle} ${apgSystem.card.padding} h-full flex flex-col justify-center`}>
                  <div className="flex items-center justify-between gap-6">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-950 leading-relaxed truncate">{s.displayName}</div>
                      <div className="mt-1 text-xs text-slate-500 leading-relaxed">{t(s.sectorKey)}</div>
                    </div>
                    <div className="h-14 sm:h-16 w-28 sm:w-32 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {s.logoSrc ? (
                        <div className={`flex items-center justify-center h-full w-full ${subsidiaryLogoScale[s.slug] || "scale-100"}`}>
                          <img
                            src={s.logoSrc}
                            alt={`${s.displayName} logo`}
                            className={['h-[38px] sm:h-[48px] w-auto object-contain select-none transition-transform duration-300 ease-out group-hover:scale-105', s.cssBlend || s.slug === 'caraka-mulia' || s.slug === 'prada-bc' ? 'mix-blend-multiply' : ''].filter(Boolean).join(' ')}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                    <span className={apgSystem.link.underline}>{t('insights.readMore')}</span>
                    <span className={`transition-transform duration-200 group-hover:translate-x-0.5 ${apgSystem.icon.hover}`}>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex justify-center">
            <motion.div {...apgSystem.motion.itemDelay(0.45)}>
              <Link href="/subsidiaries" className={`${apgSystem.button.base} ${apgSystem.button.size.md} ${apgSystem.button.primary}`}>
                {content.cta}
                <span className={apgSystem.icon.hover}>→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidiariesShowcaseSection;
