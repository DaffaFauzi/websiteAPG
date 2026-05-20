'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

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
      href: '/pengumuman/berita',
      date: t('insights.1.date'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: t('news.2.title'), 
      excerpt: t('news.2.excerpt'), 
      tag: t('news.2.tag'), 
      href: '/pengumuman/berita',
      date: t('insights.2.date'),
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: t('news.3.title'), 
      excerpt: t('news.3.excerpt'), 
      tag: t('news.3.tag'), 
      href: '/pengumuman/berita',
      date: t('insights.3.date'),
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'
    },
  ];
  const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
  const [featured, ...rest] = items;

  return (
    <section className={`apg-section-divider relative ${apgSystem.spacing.sectionY}`}>
      <div className={apgSystem.spacing.container}>
        <motion.div
          {...apgSystem.motion.reveal}
          className={`${apgSystem.card.base} ${apgSystem.card.paddingComfort}`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <motion.p {...apgSystem.motion.itemDelay(0.1)} className="text-sm text-slate-500">
                {t('insights.tag.corporate_insights')}
              </motion.p>
              <motion.h2
                {...apgSystem.motion.itemDelay(0.2)}
                className={`mt-3 ${apgSystem.typography.h2} text-slate-950`}
              >
                {t('insights.title')}
              </motion.h2>
              <motion.p {...apgSystem.motion.itemDelay(0.3)} className={`mt-4 ${apgSystem.typography.body}`}>
                {t('insights.desc')}
              </motion.p>
            </div>

            <motion.div {...apgSystem.motion.itemDelay(0.35)}>
              <Link
                href="/annual-report"
                className={`${apgSystem.button.base} ${apgSystem.button.size.md} ${apgSystem.button.primary} w-fit`}
              >
                {t('insights.cta')}
                <span className={apgSystem.icon.hover}>→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div {...apgSystem.motion.stagger} className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <motion.div variants={apgSystem.motion.item.variants} className="lg:col-span-7 h-full">
              <Link href={featured.href} className={`group h-full flex flex-col overflow-hidden ${apgSystem.card.base}`}>
                <div className="relative h-56 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={featured.image || PLACEHOLDER_IMAGE}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/0 to-transparent opacity-80 transition-opacity duration-200 group-hover:opacity-95" />
                </div>
                <div className={apgSystem.card.padding}>
                  <div className="text-sm text-slate-500">{featured.date}</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 leading-relaxed transition-transform duration-200 group-hover:-translate-y-0.5">
                    {featured.title}
                  </h3>
                  <p className={`mt-3 ${apgSystem.typography.body}`}>{featured.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                    <span className={apgSystem.link.underline}>{t('insights.readMore')}</span>
                    <span className={`transition-transform duration-200 group-hover:translate-x-0.5 ${apgSystem.icon.hover}`}>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {rest.map((item) => (
                <motion.div key={item.title} variants={apgSystem.motion.item.variants} className="h-full">
                  <Link href={item.href} className={`group h-full grid sm:grid-cols-[10.5rem_1fr] overflow-hidden ${apgSystem.card.base}`}>
                    <div className="relative h-44 sm:h-full w-full overflow-hidden">
                      <Image
                        src={item.image || PLACEHOLDER_IMAGE}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/0 to-transparent opacity-70 transition-opacity duration-200 group-hover:opacity-90" />
                    </div>
                    <div className={apgSystem.card.padding}>
                      <div className="text-sm text-slate-500">{item.date}</div>
                      <h3 className="mt-2 text-lg font-medium text-slate-950 leading-relaxed transition-transform duration-200 group-hover:-translate-y-0.5">
                        {item.title}
                      </h3>
                      <p className={`mt-2 ${apgSystem.typography.body}`}>{item.excerpt}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                        <span className={apgSystem.link.underline}>{t('insights.readMore')}</span>
                        <span className={`transition-transform duration-200 group-hover:translate-x-0.5 ${apgSystem.icon.hover}`}>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
