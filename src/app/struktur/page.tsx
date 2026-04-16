import type { Metadata } from 'next';
import StructureClient from './StructureClient';

export const metadata: Metadata = {
  title: 'Struktur Organisasi',
  description: 'Mengenal jajaran manajemen dan struktur organisasi Ardana Perkasa Group (APG).',
  keywords: ['Manajemen APG', 'Direksi', 'Komisaris', 'Struktur Organisasi', 'Holding'],
};

export default function StrukturPage() {
  return <StructureClient />;
}