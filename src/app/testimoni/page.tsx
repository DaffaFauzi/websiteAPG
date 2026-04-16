import type { Metadata } from 'next';
import TestimoniClient from './TestimoniClient';

export const metadata: Metadata = {
  title: 'Testimoni',
  description: 'Dengarkan apa kata mitra dan anak perusahaan kami tentang Ardana Perkasa Group.',
  keywords: ['Testimoni APG', 'ulasan', 'mitra', 'anak perusahaan'],
  openGraph: {
    title: 'Testimoni | Ardana Perkasa Group',
    description: 'Dengarkan apa kata mitra dan anak perusahaan kami tentang Ardana Perkasa Group.',
    url: '/testimoni',
  },
};

export default function TestimoniPage() {
  return <TestimoniClient />;
}
