export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function generateMetaDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3).trim() + '...';
}

export const SITE_CONFIG = {
  name: 'SSN Repairs',
  titleTemplate: '%s | SSN Repairs - Jamaica, Queens',
  defaultTitle: 'SSN Repairs - Expert Electronics Repair in Jamaica, Queens, NY',
  defaultDescription: 'Professional electronics repair services in Jamaica, Queens, NY. iPhone, Samsung, laptop, game console, and tablet repairs. Fast service, quality parts. Located at 8316 Parsons Blvd.',
  siteUrl: 'https://ssnrepairs.com',
  ogImage: '/og-image.png',
  locale: 'en_US',
} as const;
