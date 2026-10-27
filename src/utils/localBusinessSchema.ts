import { siteConfig } from '../config/site';

export function getLocalBusinessSchema() {
  const loc = siteConfig.location;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: loc.telephone,
    email: loc.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.postalCode,
      addressCountry: loc.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.coordinates.lat,
      longitude: loc.coordinates.lng,
    },
    openingHoursSpecification: Object.entries(loc.openingHours).map(([day, hours]) => {
      const [openTime, closeTime] = hours.split(' - ').map(time => {
        const [timePart, period] = time.split(' ');
        const [hour, minute] = timePart.split(':').map(Number);
        const hour24 = period === 'PM' && hour !== 12 ? hour + 12 : period === 'AM' && hour === 12 ? 0 : hour;
        return `${String(hour24).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`;
      });
      
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: openTime,
        closes: closeTime,
      };
    }),
    priceRange: '$$',
    image: `${siteConfig.url}/og-image.jpg`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Haircut',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Coloring',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Styling',
          },
        },
      ],
    },
  };
}
