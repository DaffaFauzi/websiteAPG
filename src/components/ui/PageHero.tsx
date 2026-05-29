'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import FallbackImage from '@/components/ui/FallbackImage';

type PageHeroVariant =
  | 'about'
  | 'history'
  | 'visionMission'
  | 'gallery'
  | 'contact'
  | 'career'
  | 'subsidiaries'
  | 'subsidiaryDetail'
  | 'structure'
  | 'management'
  | 'orgChart'
  | 'testimonials'
  | 'news';

type Props = {
  tag: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  imageSrc?: string;
  imageAlt?: string;
  variant?: PageHeroVariant;
};

function normalizeHeroText(value: string) {
  return value
    .toLowerCase()
    .replace(/[(){}\[\].,;:!?'"`~@#$%^&*+=<>/\\|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferHeroVariant({
  title,
  tag,
  breadcrumbs,
}: {
  title: string;
  tag: string;
  breadcrumbs: BreadcrumbItem[];
}): PageHeroVariant {
  const haystack = normalizeHeroText([title, tag, ...breadcrumbs.map((b) => b.label)].join(' '));

  const has = (needle: string) => haystack.includes(needle);

  if (has('bagan') || has('chart') || has('organization chart') || has('org chart') || has('structure chart')) {
    return 'orgChart';
  }

  if (has('visi') || has('misi') || has('vision') || has('mission')) {
    return 'visionMission';
  }

  if (has('galeri') || has('gallery')) {
    return 'gallery';
  }

  if (has('sejarah') || has('history')) {
    return 'history';
  }

  if (has('testimoni') || has('testimonial') || has('testimonials')) {
    return 'testimonials';
  }

  if (has('kontak') || has('contact')) {
    return 'contact';
  }

  if (has('berita') || has('news') || has('informasi') || has('information')) {
    return 'news';
  }

  if (has('karir') || has('career')) {
    return 'career';
  }

  if (has('manajemen') || has('management') || has('direksi') || has('komisaris')) {
    return 'management';
  }

  if (has('anak perusahaan') || has('subsidiary') || has('subsidiaries') || has('portfolio') || has('portofolio')) {
    if (has('profil') || has('profile') || has('detail')) return 'subsidiaryDetail';
    return 'subsidiaries';
  }

  if (has('struktur') || has('organization structure') || has('organisasi')) {
    return 'structure';
  }

  return 'about';
}

export default function PageHero({ tag, title, description, breadcrumbs, imageSrc, imageAlt, variant }: Props) {
  const resolvedVariant = variant ?? inferHeroVariant({ title, tag, breadcrumbs });
  const photoByVariant: Record<PageHeroVariant, { bg: string; panel: string }> = {
    about: {
      bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    },
    history: {
      bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1600',
    },
    visionMission: {
      bg: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    },
    gallery: {
      bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600',
    },
    contact: {
      bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600',
    },
    career: {
      bg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600',
    },
    subsidiaries: {
      bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    },
    subsidiaryDetail: {
      bg: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600',
    },
    structure: {
      bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600',
    },
    management: {
      bg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600',
    },
    orgChart: {
      bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600',
    },
    testimonials: {
      bg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1491333324141-c67d737a032e?auto=format&fit=crop&q=80&w=1600',
    },
    news: {
      bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1600',
    },
  };

  const resolvedBgSrc = imageSrc ?? photoByVariant[resolvedVariant].bg;
  const resolvedPanelSrc = photoByVariant[resolvedVariant].panel;
  const resolvedAlt = imageAlt ?? title;
  
  // Custom object position for panel images
  const panelPosition: Record<PageHeroVariant, string> = {
    about: 'object-center',
    history: 'object-center',
    visionMission: 'object-center',
    gallery: 'object-center',
    contact: 'object-center',
    career: 'object-center',
    subsidiaries: 'object-center',
    subsidiaryDetail: 'object-center',
    structure: 'object-center',
    management: 'object-bottom',
    orgChart: 'object-center',
    testimonials: 'object-center',
    news: 'object-center',
  };
  return (
    <section className="apg-section-divider bg-slate-50 pt-8 pb-8 sm:pt-10 sm:pb-10">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#0A66C2] text-white shadow-[0_30px_90px_rgba(2,6,23,0.18)]">
          <div className="absolute inset-0">
            {resolvedBgSrc ? (
              <FallbackImage
                src={resolvedBgSrc}
                fallbackSrc="/images/presentation-placeholder.svg"
                alt={resolvedAlt}
                fill
                className="object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/92 via-[#0A66C2]/70 to-[#0A66C2]/30" />
            <div className="absolute inset-0 opacity-[0.10]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(4,26,64,0.45),transparent_60%)]" />
            </div>
          </div>

          <div className="relative z-10 px-7 sm:px-10 lg:px-14 pt-10 sm:pt-12 pb-12 sm:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex flex-col gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-md w-fit">
                    <div className="relative h-6 w-20 sm:h-7 sm:w-24">
                      <Image
                        src="/images/apgg.png"
                        alt=""
                        fill
                        sizes="96px"
                        className="object-contain [filter:brightness(0)_invert(1)]"
                        priority
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-white/90">
                      {tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-end">
                <div>
                  <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.03] drop-shadow-sm">
                    {title}
                  </h1>
                  <p className="mt-6 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose font-medium">
                    {description}
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="relative h-[18rem] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-md">
                    <FallbackImage
                      src={resolvedPanelSrc}
                      fallbackSrc="/images/presentation-placeholder.svg"
                      alt={resolvedAlt}
                      fill
                      className={`object-cover opacity-90 ${panelPosition[resolvedVariant]}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#041a40]/45 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
