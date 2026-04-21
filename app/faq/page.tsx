import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO, formatHours, getFAQSchema } from '@/lib/constants';
import JsonLd from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'FAQ | Electronics Repair Questions Answered | SSN Repairs Jamaica Queens NY',
  description: 'Answers to common questions about phone repair, laptop service, pricing, warranty, business hours, and more at SSN Repairs in Jamaica, Queens, NY. iPhone Samsung fixes.',
  keywords: [
    'electronics repair FAQ',
    'iPhone repair questions Jamaica Queens',
    'laptop repair warranty NY',
    'phone repair pricing Queens',
    'SSN Repairs FAQ',
  ],
};

const expandedFAQs = [
  {
    question: 'What types of electronics do you repair?',
    answer: 'We repair iPhones, Samsung phones, laptops (MacBook, Dell, HP, Lenovo), game consoles (PlayStation, Xbox, Nintendo), tablets (iPad, Samsung Galaxy Tab), and other electronic devices. Screen replacements, battery issues, water damage, and more.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Most screen repairs are completed within 1-2 hours. Battery replacements take about 30-45 minutes. More complex repairs like motherboard issues may take 24-48 hours depending on parts availability. We offer same-day service for common repairs.',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer: 'Yes, we provide a 90-day warranty on all parts and labor. If the same issue reoccurs within this period due to our workmanship or parts, we will fix it at no additional cost.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, MasterCard, Amex, Discover), Apple Pay, Google Pay, Samsung Pay, and Venmo.',
  },
  {
    question: 'Do I need an appointment for repairs?',
    answer: 'Walk-ins are welcome during business hours, but we recommend booking an appointment online or calling ahead to ensure we have the necessary parts and can provide prompt service.',
  },
  {
    question: 'Where are you located and how do I get there?',
    answer: `We are located at ${BUSINESS_INFO.address.full}, just 1 block from Parsons Blvd subway station (E or F train). Bus routes Q3, Q5, Q85 also stop nearby. Street parking available.`,
  },
  {
    question: 'Do you repair devices from other neighborhoods?',
    answer: 'Absolutely! We serve all of Queens including Briarwood, Hillcrest, Kew Gardens, Richmond Hill, South Ozone Park, Woodhaven, Queens Village, and beyond.',
  },
  {
    question: 'Are your parts genuine or OEM?',
    answer: 'We use genuine Apple parts when available, and high-quality OEM-equivalent parts for other brands that meet or exceed manufacturer specifications.',
  },
  {
    question: 'What if my device is under warranty?',
    answer: 'We can help you with manufacturer warranty claims or provide faster out-of-warranty service. Bring your proof of purchase.',
  },
  {
    question: 'Do you offer free diagnostics?',
    answer: 'Yes, diagnostics are free for all devices. No charge if you decide not to repair.',
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd type="faq" />
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 text-center mb-16">
              Everything you need to know about our electronics repair services in Jamaica, Queens.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                {expandedFAQs.slice(0, 5).map((faq, index) => (
                  <details key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <summary className="font-semibold text-lg cursor-pointer list-none pb-2">
                      {faq.question}
                    </summary>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
              <div className="space-y-6">
                {expandedFAQs.slice(5).map((faq, index) => (
                  <details key={index + 5} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <summary className="font-semibold text-lg cursor-pointer list-none pb-2">
                      {faq.question}
                    </summary>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Still Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
