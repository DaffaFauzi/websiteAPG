import React from 'react';

const JsonLd = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ardanaperkasagroup.com';
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ardana Perkasa Group (APG)',
    alternateName: 'APG',
    url: baseUrl,
    logo: `${baseUrl}/images/apgg.png`,
    description: 'Ardana Perkasa Group (APG) adalah holding company berskala nasional yang membangun ekosistem bisnis lintas sektor dengan standar tata kelola enterprise yang kuat.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sudirman Central Business District (SCBD)',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12190',
      addressCountry: 'ID'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-21-XXXX-XXXX', // Replace with actual phone
      contactType: 'customer service',
      email: 'info@ardanaperkasagroup.com',
      availableLanguage: ['Indonesian', 'English']
    },
    sameAs: [
      'https://www.linkedin.com/company/ardana-perkasa-group', // Example
      // Add other social media URLs here
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
};

export default JsonLd;
