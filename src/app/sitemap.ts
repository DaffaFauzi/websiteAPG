import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ardanaperkasagroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/tentang',
    '/struktur',
    '/subsidiaries',
    '/karir',
    '/kontak',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add specific subsidiary routes dynamically if needed
  // This is a static representation of known dynamic routes for the sitemap
  const subsidiarySlugs = [
    'bpr',
    'dwp',
    'sipbro',
    'pln',
    'qjamin',
    'proteksi',
    'pataka',
    'prada-bc',
    'lps',
    'caraka-mulia'
  ];

  const subsidiaryRoutes = subsidiarySlugs.map((slug) => ({
    url: `${siteUrl}/subsidiaries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...subsidiaryRoutes];
}
