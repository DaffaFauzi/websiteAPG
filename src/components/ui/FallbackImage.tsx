'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type Props = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc: string;
};

export default function FallbackImage({ src, fallbackSrc, alt = '', onError, ...rest }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const currentSrc = failedSrc === src ? fallbackSrc : src;

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={(e) => {
        if (failedSrc !== src) setFailedSrc(src);
        onError?.(e);
      }}
    />
  );
}
