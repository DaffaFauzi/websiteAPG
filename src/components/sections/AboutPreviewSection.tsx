'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

const AboutPreviewSection = () => {
  const { t } = useLanguage();
  const content = {
    tag: t('overview.tag'),
    title: t('about.preview.title'),
    desc: t('about.preview.desc'),
    cta: t('about.preview.cta'),
    imageSrc:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200',
    imageAlt: t('gallery.images.meeting'),
    summaryMetrics: [
      { value: t('overview.highlight.1.value'), label: t('overview.highlight.1.label') },
      { value: t('overview.highlight.2.value'), label: t('overview.highlight.2.label') },
    ],
  };

  return (
    <section className={`relative ${apgSystem.spacing.sectionY} bg-white overflow-hidden`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#0A66C2]/30 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#095aa9]/20 blur-3xl" />
      </div>
      <div className={apgSystem.spacing.container}>
        <motion.div {...apgSystem.motion.reveal} className={`relative ${apgSystem.card.base} ${apgSystem.card.paddingComfort}`}>
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.9)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div {...apgSystem.motion.itemDelay(0.35)} className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border-4 border-slate-50 bg-slate-100 shadow-xl aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/sW9DbylGvgE?autoplay=0&rel=0"
                  title="COMPRO - APG"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                ></iframe>
              </div>
            </motion.div>

            <div className="lg:col-span-6">
              <motion.p {...apgSystem.motion.itemDelay(0.1)} className={`text-sm text-slate-500 ${apgSystem.typography.tag}`}>
                {content.tag}
              </motion.p>
              <motion.h2 {...apgSystem.motion.itemDelay(0.2)} className={`mt-3 ${apgSystem.typography.h2} text-slate-950`}>
                {content.title}
              </motion.h2>
              <motion.p {...apgSystem.motion.itemDelay(0.3)} className={`mt-4 ${apgSystem.typography.body}`}>
                {content.desc}
              </motion.p>

              <motion.div {...apgSystem.motion.stagger} className="mt-6 grid grid-cols-2 gap-3">
                {content.summaryMetrics.map((m) => (
                  <motion.div key={m.label} variants={apgSystem.motion.item.variants} className={`${apgSystem.card.subtle} p-5`}>
                    <div className="text-2xl font-semibold tracking-tight text-[var(--color-primary)] leading-none">{m.value}</div>
                    <div className="mt-2 text-sm text-slate-500 leading-relaxed">{m.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-7">
                <motion.div {...apgSystem.motion.itemDelay(0.45)} className="inline-flex">
                  <Link
                    href="/tentang"
                    className={`${apgSystem.button.base} ${apgSystem.button.size.md} ${apgSystem.button.primary}`}
                  >
                    {content.cta}
                    <span className={`ml-3 ${apgSystem.icon.hover}`}>→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
