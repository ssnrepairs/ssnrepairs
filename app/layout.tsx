import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import TopInfoBar from '@/components/top-info-bar';
import Footer from '@/components/footer';
import JsonLd from '@/components/json-ld';
import { SITE_CONFIG, generateMetaDescription } from '@/lib/utils';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.defaultDescription,
  keywords: [
    'electronics repair',
    'Jamaica Queens electronics repair',
    '8316 Parsons Blvd repair',
    'iPhone repair Jamaica Queens',
    'Samsung repair Queens',
    'laptop repair Jamaica NY',
    'game console repair Queens',
    'tablet repair Jamaica',
    'phone repair near me',
    'electronics repair Queens NY',
    'SSN Repairs',
    'Parsons Blvd repair shop',
    'Briarwood electronics',
    'Queens Village repair',
    'Richmond Hill phone repair',
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.siteUrl,
    siteName: BUSINESS_INFO.name,
    title: SITE_CONFIG.defaultTitle,
    description: generateMetaDescription(
      `Expert electronics repair in Jamaica, Queens, NY. iPhone, Samsung, laptop, game console, and tablet repairs at ${BUSINESS_INFO.address.street}.`
    ),
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Electronics Repair in ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.defaultTitle,
    description: generateMetaDescription(
      `Expert electronics repair in Jamaica, Queens, NY. Fast service at ${BUSINESS_INFO.address.street}.`
    ),
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd type="both" />
        <TopInfoBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
