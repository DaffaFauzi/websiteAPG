'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AnakPerusahaanPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/subsidiaries');
  }, [router]);

  return null;
}

