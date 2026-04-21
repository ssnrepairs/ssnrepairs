import Script from 'next/script';
import { getLocalBusinessSchema, getFAQSchema } from '@/lib/constants';

interface JsonLdProps {
  type?: 'localBusiness' | 'faq' | 'both';
  customSchemas?: object[];
}

export default function JsonLd({ type = 'both', customSchemas = [] }: JsonLdProps) {
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema();

  const schemas = [];

  if (type === 'localBusiness' || type === 'both') {
    schemas.push(localBusinessSchema);
  }

  if (type === 'faq' || type === 'both') {
    schemas.push(faqSchema);
  }

  schemas.push(...customSchemas);

  const schemaData = schemas.length === 1 ? schemas[0] : schemas;

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2),
      }}
      strategy="beforeInteractive"
    />
  );
}
