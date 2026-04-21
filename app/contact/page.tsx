import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO, formatHours } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact SSN Repairs Jamaica NY | Electronics Repair Shop (718) 206-0100',
  description: 'Contact SSN Repairs Jamaica, NY phone & laptop repair shop. 8316 Parsons Blvd near E/F Parsons Blvd station. Free diagnostics, 90-day warranty. Call (718) 206-0100.',
};

export default function ContactPage() {
  const faqs = [
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
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12">
            Get in touch with us for repairs, questions, or to schedule a visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </p>
                    <p className="text-sm text-primary-600 mt-1">
                      Near Parsons Blvd station (E/F trains)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-primary-600 hover:text-primary-700 text-lg">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary-600 hover:text-primary-700">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-3">Transit Directions</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p>
                    <strong>Subway:</strong> {BUSINESS_INFO.transit.subway}
                  </p>
                  <p>
                    <strong>Bus:</strong> {BUSINESS_INFO.transit.bus}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-2">
                {BUSINESS_INFO.hours.map((hours) => (
                  <div key={hours.day} className="flex justify-between py-2 border-b border-gray-100">
                    <span>{hours.day}</span>
                    <span className={hours.closed ? 'text-gray-400' : ''}>
                      {hours.closed ? 'Closed' : `${formatHours(hours.open)} - ${formatHours(hours.close)}`}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/appointment" className="btn-primary w-full justify-center">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
