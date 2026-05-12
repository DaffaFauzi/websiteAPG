'use client';

import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-black tracking-[0.18em] uppercase">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        const content = item.href && !isLast ? (
          <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className={isLast ? 'text-white' : 'text-white/80'}>{item.label}</span>
        );

        return (
          <span key={`${item.label}-${idx}`} className="inline-flex items-center gap-2">
            {content}
            {!isLast && <span className="opacity-60">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

