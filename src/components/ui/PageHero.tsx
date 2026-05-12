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
  | 'testimonials';

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
      panel: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600',
    },
    history: {
      bg: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=1600',
    },
    visionMission: {
      bg: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600',
    },
    gallery: {
      bg: 'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1600',
    },
    contact: {
      bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&q=80&w=1600',
    },
    career: {
      bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=1600',
    },
    subsidiaries: {
      bg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1600',
    },
    subsidiaryDetail: {
      bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    },
    structure: {
      bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    },
    management: {
      bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1600',
    },
    orgChart: {
      bg: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600',
    },
    testimonials: {
      bg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2200',
      panel: 'https://images.unsplash.com/photo-1524503033411-f7a2b3c8c5e3?auto=format&fit=crop&q=80&w=1600',
    },
  };

  const resolvedBgSrc = imageSrc ?? photoByVariant[resolvedVariant].bg;
  const resolvedPanelSrc = photoByVariant[resolvedVariant].panel;
  const resolvedAlt = imageAlt ?? title;
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
                    <div className="relative h-5 w-16">
                      <Image
                        src="/images/apgg.png"
                        alt=""
                        fill
                        sizes="64px"
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
                      className="object-cover opacity-90"
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
