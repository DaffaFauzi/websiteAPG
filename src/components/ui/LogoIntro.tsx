'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

type Props = {
  alt: string;
  svgSrc: string;
  pngSrc: string;
  name: string;
};

export default function LogoIntro({ alt, svgSrc, pngSrc, name }: Props) {
  const [useSvg, setUseSvg] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const src = useMemo(() => (useSvg ? svgSrc : pngSrc), [pngSrc, svgSrc, useSvg]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-4">
        <div className="relative h-[5rem] w-[5rem] sm:h-[5.25rem] sm:w-[5.25rem]">
          <div
            aria-hidden="true"
            className={[
              'absolute inset-0 grid place-items-center rounded-2xl border border-white/16 bg-white/10',
              loaded && !failed ? 'opacity-0' : 'opacity-100',
              'transition-opacity duration-500 apg-ease',
            ].join(' ')}
          >
            <span className="text-white font-extrabold tracking-[0.12em] text-base">APG</span>
          </div>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="5.25rem"
            className={[
              'object-contain [filter:brightness(0)_invert(1)]',
              loaded && !failed ? 'opacity-100' : 'opacity-0',
              'transition-opacity duration-500 apg-ease',
            ].join(' ')}
            onLoad={() => setLoaded(true)}
            onError={() => {
              if (useSvg) {
                setUseSvg(false);
                setLoaded(false);
              } else {
                setFailed(true);
              }
            }}
          />
        </div>
        <div className="text-white font-extrabold tracking-tight text-base sm:text-lg leading-none">
          {name}
        </div>
      </div>
      <div className="mt-3 h-px w-20 bg-white/35" />
    </div>
  );
}
