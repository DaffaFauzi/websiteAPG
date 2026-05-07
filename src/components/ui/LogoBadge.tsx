'use client';

import Image from 'next/image';
import React, { useMemo, useState } from 'react';

export type LogoBadgeProps = {
  name: string;
  src?: string;
  size?: number;
  className?: string;
};

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

export default function LogoBadge({ name, src, size = 48, className }: LogoBadgeProps) {
  const [hasError, setHasError] = useState(false);

  const showImage = Boolean(src) && !hasError;
  const label = useMemo(() => initials(name), [name]);
  const sizeRem = `${size / 16}rem`;

  return (
    <div
      className={[
        'rounded-2xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ width: sizeRem, height: sizeRem }}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={`${name} logo`}
          width={size}
          height={size}
          sizes={`${size}px`}
          className={[
            'h-full w-full object-contain p-2',
            src?.includes('/images/prada.png') ? 'filter brightness-105 contrast-125' : '',
            src?.includes('/images/caraqu.png') ? 'filter brightness-110 contrast-150 saturate-110' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth === 0) setHasError(true);
          }}
          onError={() => setHasError(true)}
          priority={false}
        />
      ) : (
        <span className="text-xs font-extrabold text-slate-950">{label}</span>
      )}
    </div>
  );
}
