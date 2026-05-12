import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Galeri APG',
  description: 'Dokumentasi kegiatan dan momen korporat Ardana Perkasa Group (APG) dalam galeri resmi.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}

