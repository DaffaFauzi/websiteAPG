'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { apgSystem } from '@ds/apg-system';

const FooterSection: React.FC = () => {
  const { t } = useLanguage();

  const socialItems = [
    {
      label: t('footer.social.instagram'),
      href: 'https://www.instagram.com/ardanaperkasagroup?igsh=Y3FnNW91MjIxMzE4',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
      viewBox: '0 0 24 24',
    },
    {
      label: t('footer.social.facebook'),
      href: 'https://www.facebook.com/share/1GBTguH4gV/?mibextid=wwXIfr',
      path: 'M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5A3.5 3.5 0 0 1 14.25 6h2.25v3h-2.25a1 1 0 0 0-1 1V12h3.25l-.5 3h-2.75v7A10 10 0 0 0 22 12Z',
      viewBox: '0 0 24 24',
    },
    {
      label: t('footer.social.linkedin'),
      href: 'https://www.linkedin.com/in/ardana-perkasa-group-a3aa78390/',
      path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z',
      viewBox: '0 0 24 24',
    },
  ];

  const copyright = t('footer.copyright')
    .replace('{year}', String(new Date().getFullYear()))
    .replace('{brand}', t('cinema.brand'));

  return (
    <footer
      className={[
        'relative overflow-hidden pb-0 pt-10',
        'rounded-tl-[clamp(56px,8vw,180px)] rounded-tr-[clamp(56px,8vw,180px)]',
        apgSystem.surfaces.primaryGradient,
        'text-white',
      ].join(' ')}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 opacity-[0.22] ${apgSystem.surfaces.primaryGradientOverlay}`} />
        <div className={`absolute inset-0 opacity-[0.06] ${apgSystem.surfaces.gridOverlay}`} />
        <div className="absolute inset-0 opacity-[0.45] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_65%)]" />
      </div>

      <div className={`relative z-10 ${apgSystem.spacing.container} pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 lg:gap-12 items-center"
        >
          <motion.div {...apgSystem.motion.itemDelay(0.35)} className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem] h-[15rem] sm:h-[16.5rem] lg:h-[18rem] lg:-ml-4">
              <Image
                src="/images/hero_section_top_image.png"
                alt=""
                fill
                sizes="(max-width: 640px) 70vw, 420px"
                className="object-contain object-left-bottom"
                priority={false}
              />
            </div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.h2 {...apgSystem.motion.itemDelay(0.1)} className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] max-w-[28ch] mx-auto lg:mx-0">
              {t('footer.cta.title')}
            </motion.h2>
            <motion.p {...apgSystem.motion.itemDelay(0.2)} className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed max-w-prose mx-auto lg:mx-0">
              {t('footer.cta.desc')}
            </motion.p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.div {...apgSystem.motion.itemDelay(0.3)} className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`h-11 w-11 rounded-full bg-white text-[var(--color-primary)] grid place-items-center shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.03] active:scale-[0.98] ${apgSystem.icon.hover}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox={item.viewBox}>
                      <path d={item.path} />
                    </svg>
                  </a>
                ))}
              </motion.div>

              <motion.div {...apgSystem.motion.itemDelay(0.35)}>
                <Link
                  href="/kontak"
                  className={`${apgSystem.button.base} ${apgSystem.button.size.md} ${apgSystem.button.white} shadow-[0_12px_40px_rgba(255,255,255,0.16)] hover:shadow-[0_16px_52px_rgba(255,255,255,0.22)]`}
                >
                  {t('common.contact_us')} <span className={`ml-3 ${apgSystem.icon.hover}`}>›</span>
                </Link>
              </motion.div>
            </div>

            <motion.div {...apgSystem.motion.itemDelay(0.4)} className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-white/90 text-xs font-bold">
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</a>
              <span className="opacity-70">•</span>
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal.terms')}</a>
            </motion.div>

            <motion.div {...apgSystem.motion.itemDelay(0.45)} className="mt-6 text-white/75 text-xs font-medium">
              {copyright}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
