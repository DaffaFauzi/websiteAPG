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

  return (
    <div
      className={[
        'rounded-xl border border-[var(--color-border)] bg-black/25 flex items-center justify-center overflow-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain p-2"
          onError={() => setHasError(true)}
          priority={false}
        />
      ) : (
        <span className="text-sm font-semibold text-white">{label}</span>
      )}
    </div>
  );
}