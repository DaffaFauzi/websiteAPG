import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ardanaperkasagroup.com';

  // Define your static routes
  const routes = [
    '',
    '/tentang',
    '/struktur',
    '/subsidiaries',
    '/karir',
    '/kontak',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
