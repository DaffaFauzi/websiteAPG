import CareerClient from './CareerClient';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karir',
  description: 'Bergabunglah dengan Ardana Perkasa Group dan bangun karir Anda di berbagai industri lintas sektor dengan standar profesional tinggi.',
};

export default function CareerPage() {
  return <CareerClient />;
}
