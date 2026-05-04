import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anak Perusahaan',
  description: 'Portofolio bisnis dan anak perusahaan Ardana Perkasa Group (APG) yang bergerak di berbagai sektor strategis.',
};

export default function SubsidiariesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
