import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Professional electronics repair services in Jamaica, Queens, NY. iPhone, Samsung, laptop, game console, and tablet repairs. ${BUSINESS_INFO.address.street} location.`,
};

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Repair Services</h1>
          <p className="text-gray-600 text-lg">
            Expert repair services for all your electronics at our {BUSINESS_INFO.address.city}, Queens location.
            Fast turnaround, quality parts, and a 90-day warranty on all repairs.
          </p>
        </div>

        <div className="space-y-16">
          {BUSINESS_INFO.services.map((service, index) => (
            <div key={service.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Expert Service
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>90-day warranty included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Original or OEM-quality parts</span>
                  </li>
                </ul>
                <Link href="/appointment" className="btn-primary">
                  Book Repair
                </Link>
              </div>
              <div className={`bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-64 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Repair?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Visit us at {BUSINESS_INFO.address.street} in {BUSINESS_INFO.address.city}, Queens.
            Just steps from Parsons Blvd station on the E/F line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors">
              Book Appointment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition-colors">
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
