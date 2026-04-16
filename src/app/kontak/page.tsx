import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi Ardana Perkasa Group (APG). Lokasi kantor: Jakarta Utara. Informasi telepon, email, jam operasional, dan formulir kontak.',
  keywords: ['Kontak APG', 'Ardana Perkasa Group', 'Jakarta Utara', 'email', 'telepon'],
  openGraph: {
    title: 'Kontak | Ardana Perkasa Group',
    description: 'Hubungi APG untuk kolaborasi, kemitraan, dan kebutuhan corporate solutions.',
    url: '/kontak',
  },
};

export default function KontakPage() {
  return <ContactClient />;
}
