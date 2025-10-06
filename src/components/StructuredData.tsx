import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Pampilhais Estate – 40.7 Hectares Investment Property',
      description:
        '40.7-hectare estate in Grândola/Santa Margarida da Serra, Alentejo, Portugal. Development potential for boutique eco-resort, private estate, or regenerative agriculture.',
      priceCurrency: 'EUR',
      price: '1200000',
      availability: 'https://schema.org/InStock',
      itemOffered: {
        '@type': 'Place',
        name: 'Pampilhais Estate',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Grândola / Santa Margarida da Serra',
          addressRegion: 'Alentejo',
          addressCountry: 'PT',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '38.3', // Placeholder - replace with actual coordinates
          longitude: '-8.7', // Placeholder - replace with actual coordinates
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          ratingCount: '1',
        },
      },
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Noblestate Family Real Estate',
        telephone: '+351-XXX-XXX-XXX', // Placeholder
        email: 'contact@noblestate.pt', // Placeholder
      },
      areaServed: {
        '@type': 'Place',
        name: 'Alentejo, Portugal',
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Total Area',
          value: '407000 m²',
        },
        {
          '@type': 'PropertyValue',
          name: 'Land Type',
          value: 'Rural/Agricultural with Tourism Potential',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;
