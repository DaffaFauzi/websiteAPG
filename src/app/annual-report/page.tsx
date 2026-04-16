'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AnnualReportPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/tentang');
  }, [router]);

  return null;
}
