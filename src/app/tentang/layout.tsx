import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Mengenal lebih dekat Ardana Perkasa Group (APG), visi, misi, dan identitas korporat kami sebagai National Holding Company.',
};

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
