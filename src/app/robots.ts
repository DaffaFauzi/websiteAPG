import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ardanaperkasagroup.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Standard exclusions
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
