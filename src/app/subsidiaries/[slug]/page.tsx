import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubsidiaryDetailClient from './SubsidiaryDetailClient';
import { getSubsidiaryBySlug } from '../subsidiariesData';

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);
  if (!subsidiary) {
    return {
      title: 'Subsidiary Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: subsidiary.displayName,
    description: subsidiary.profile.en,
    openGraph: {
      title: `${subsidiary.displayName} | Ardana Perkasa Group`,
      description: subsidiary.profile.en,
      url: `/subsidiaries/${subsidiary.slug}`,
    },
  };
}

export default async function SubsidiaryDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);
  if (!subsidiary) notFound();

  return (
    <SubsidiaryDetailClient
      slug={subsidiary.slug}
      displayName={subsidiary.displayName}
      legalName={subsidiary.legalName}
      profile={subsidiary.profile}
      logoSrc={subsidiary.logoSrc}
    />
  );
}
