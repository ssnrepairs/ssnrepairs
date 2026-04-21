export const BUSINESS_INFO = {
  name: 'SSN Repairs',
  legalName: 'SSN Repairs Electronics Service Center',
  description: 'Expert electronics repair services in Jamaica, Queens, NY. Specializing in iPhone, Samsung, laptop, game console, and tablet repairs. Fast service, quality parts, and affordable prices.',
  url: 'https://ssnrepairs.com',
  phone: '(718) 555-0123',
  email: 'info@ssnrepairs.com',
  address: {
    street: '8316 Parsons Blvd',
    city: 'Jamaica',
    state: 'NY',
    zip: '11432',
    neighborhood: 'Queens',
    full: '8316 Parsons Blvd, Jamaica, NY 11432',
  },
  geo: {
    latitude: 40.7091,
    longitude: -73.7921,
  },
  hours: [
    { day: 'Monday', open: '09:00', close: '19:00', closed: false },
    { day: 'Tuesday', open: '09:00', close: '19:00', closed: false },
    { day: 'Wednesday', open: '09:00', close: '19:00', closed: false },
    { day: 'Thursday', open: '09:00', close: '19:00', closed: false },
    { day: 'Friday', open: '09:00', close: '19:00', closed: false },
    { day: 'Saturday', open: '10:00', close: '17:00', closed: false },
    { day: 'Sunday', open: '11:00', close: '16:00', closed: false },
  ] as const,
  social: {
    facebook: 'https://facebook.com/ssnrepairs',
    instagram: 'https://instagram.com/ssnrepairs',
    twitter: 'https://twitter.com/ssnrepairs',
  },
  services: [
    {
      name: 'iPhone Repair',
      description: 'Screen replacement, battery replacement, and all iPhone models serviced',
    },
    {
      name: 'Samsung Repair',
      description: 'Galaxy screen repair, battery replacement, and water damage repair',
    },
    {
      name: 'Laptop Repair',
      description: 'MacBook, Dell, HP, Lenovo, and all laptop brands serviced',
    },
    {
      name: 'Game Console Repair',
      description: 'PlayStation, Xbox, Nintendo repairs and maintenance',
    },
    {
      name: 'Tablet Repair',
      description: 'iPad and Android tablet screen and component repairs',
    },
  ],
  transit: {
    subway: 'E or F train to Parsons Blvd station (1 block away)',
    bus: 'Q3, Q5, Q85 bus routes nearby',
  },
  areaServed: [
    'Jamaica',
    'Queens',
    'Briarwood',
    'Hillcrest',
    'Kew Gardens',
    'Richmond Hill',
    'South Ozone Park',
    'Woodhaven',
  ],
} as const;

export type BusinessHours = typeof BUSINESS_INFO.hours;
export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export function formatHours(hour: string): string {
  const [h, m] = hour.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return m > 0 ? `${hour12}:${m.toString().padStart(2, '0')} ${period}` : `${hour12} ${period}`;
}

export function isOpenNow(): boolean {
  const now = new Date();
  const dayIndex = now.getDay();
  const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[dayIndex];
  const todayHours = BUSINESS_INFO.hours.find(h => h.day === today);
  
  if (!todayHours || todayHours.closed) return false;
  
  const currentTime = now.getHours() * 60 + now.getMinutes();
  const [openH, openM] = todayHours.open.split(':').map(Number);
  const [closeH, closeM] = todayHours.close.split(':').map(Number);
  const openTime = openH * 60 + openM;
  const closeTime = closeH * 60 + closeM;
  
  return currentTime >= openTime && currentTime < closeTime;
}

export function getLocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS_INFO.url}#business`,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.hours
      .filter(h => !h.closed)
      .map(h => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    areaServed: BUSINESS_INFO.areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '$$',
    image: `${BUSINESS_INFO.url}/og-image.png`,
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.twitter,
    ],
  };
  return schema;
}

export function getFAQSchema() {
  const faqItems = [
    {
      question: 'What types of electronics do you repair?',
      answer: 'We repair iPhones, Samsung phones, laptops (MacBook, Dell, HP, Lenovo), game consoles (PlayStation, Xbox, Nintendo), tablets (iPad, Samsung Galaxy Tab), and other electronic devices.',
    },
    {
      question: 'How long does a typical repair take?',
      answer: 'Most screen repairs are completed within 1-2 hours. Battery replacements take about 30-45 minutes. More complex repairs may take 24-48 hours depending on parts availability.',
    },
    {
      question: 'Do you offer a warranty on repairs?',
      answer: 'Yes, we provide a 90-day warranty on all parts and labor. If the same issue reoccurs within this period, we will fix it at no additional cost.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit cards, Apple Pay, Google Pay, and Venmo.',
    },
    {
      question: 'Do I need an appointment for repairs?',
      answer: 'While walk-ins are welcome, we recommend booking an appointment to ensure prompt service and parts availability.',
    },
    {
      question: 'Where are you located?',
      answer: `We are located at ${BUSINESS_INFO.address.full}, just steps from the ${BUSINESS_INFO.transit.subway}.`,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
