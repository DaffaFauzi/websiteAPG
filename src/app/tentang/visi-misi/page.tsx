import type { Metadata } from 'next';
import VisiMisiClient from './VisiMisiClient';

export const metadata: Metadata = {
  title: 'Visi & Misi',
  description: 'Visi dan misi Ardana Perkasa Group (APG) sebagai holding company nasional dengan standar tata kelola enterprise.',
};

export default function VisiMisiPage() {
  return <VisiMisiClient />;
}

