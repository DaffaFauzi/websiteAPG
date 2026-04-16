'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

type Props = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc: string;
};

export default function FallbackImage({ src, fallbackSrc, alt = '', onError, ...rest }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={(e) => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
        onError?.(e);
      }}
    />
  );
}
