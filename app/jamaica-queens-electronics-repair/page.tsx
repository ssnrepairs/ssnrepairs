import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/json-ld';
import { BUSINESS_INFO, getLocalBusinessSchema, getFAQSchema } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Jamaica Queens Electronics Repair | Phone Laptop Fixes SSN Repairs',
  description: 'Top-rated electronics repair in Jamaica Queens NY at 8316 Parsons Blvd. iPhone Samsung laptop game console service near E/F Parsons Blvd. 90-day warranty (718) 206-0100.',
  keywords: [
    'electronics repair Jamaica Queens',
    'Jamaica Queens NY repair shop',
    'Parsons Blvd electronics repair',
    'iPhone repair Jamaica Queens',
    'Samsung repair 11432',
    'laptop repair Queens NY',
    'game console repair Jamaica',
    'phone repair near Parsons Blvd',
    'Briarwood electronics repair',
    'Queens Village phone repair',
    '8316 Parsons Blvd repair',
    'Jamaica station electronics',
    'Briarwood phone repair',
    'Hillcrest electronics service',
    'Kew Gardens phone repair',
  ],
  alternates: {
    canonical: 'https://ssnrepairs.com/jamaica-queens-electronics-repair',
  },
};

const localSchema = getLocalBusinessSchema();
const faqSchema = getFAQSchema();

export default function JamaicaQueensRepairPage() {
  return (
    <>
      <JsonLd type="both" customSchemas={[localSchema, faqSchema]} />
      
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Jamaica, Queens, NY 11432
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Electronics Repair in <span className="text-primary-200">Jamaica Queens</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Your neighborhood repair shop at <strong>8316 Parsons Blvd</strong>. 
              Fast, reliable repairs for iPhones, Samsung, laptops, game consoles, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors text-lg">
                Book Appointment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-700 transition-colors text-lg">
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Jamaica Queens&apos; Trusted Electronics Repair Center
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Located conveniently at <strong>{BUSINESS_INFO.address.street} in Jamaica, Queens</strong>, 
                  SSN Repairs has been serving the community with expert electronics repair services. 
                  Our shop is just steps away from the Parsons Blvd subway station on the E/F line, 
                  making us easily accessible from anywhere in Queens.
                </p>
                <p>
                  Whether you&apos;re in Briarwood, Hillcrest, Kew Gardens, Queens Village, Richmond Hill, 
                  or any of the surrounding neighborhoods, we&apos;re your go-to destination for all electronics repair needs.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Why Jamaica Queens Chooses SSN Repairs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Same-Day Repairs</strong> - Most repairs completed within 1-2 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>90-Day Warranty</strong> - Peace of mind on all repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Expert Technicians</strong> - Certified repair specialists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Fair Pricing</strong> - No hidden fees, competitive rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Quality Parts</strong> - Genuine and OEM-equivalent components</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <ul className="space-y-2 text-sm">
                  {BUSINESS_INFO.hours.map((hours) => (
                    <li key={hours.day} className="flex justify-between py-1 border-b border-gray-200 last:border-0">
                      <span>{hours.day}</span>
                      <span className={hours.closed ? 'text-gray-400' : 'font-medium'}>
                        {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Getting Here
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Subway</p>
                    <p className="text-gray-600">{BUSINESS_INFO.transit.subway}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Bus</p>
                    <p className="text-gray-600">{BUSINESS_INFO.transit.bus}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{BUSINESS_INFO.address.full}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <p className="text-primary-700 font-medium mb-2">Have questions?</p>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-2xl font-bold text-primary-600 hover:text-primary-700">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Services We Offer in Jamaica Queens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_INFO.services.map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Neighborhoods We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS_INFO.areaServed.map((area) => (
              <span key={area} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            We proudly serve customers from all over Queens. Our location at Parsons Blvd is easily 
            accessible from these neighborhoods and beyond.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Jamaica Queens Repair Shop
          </h2>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
          </p>
          <p className="text-primary-200 mb-8">
            Steps from Parsons Blvd station (E/F trains)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors text-lg">
              Book Your Repair
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-700 transition-colors text-lg">
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Do you repair devices from all neighborhoods in Queens?',
                a: 'Yes! We welcome customers from all over Queens including Jamaica, Briarwood, Hillcrest, Kew Gardens, Queens Village, Richmond Hill, South Ozone Park, and Woodhaven. Our location at Parsons Blvd is convenient from anywhere in Queens.',
              },
              {
                q: 'How long does a typical repair take?',
                a: 'Most screen repairs are completed within 1-2 hours. Battery replacements take about 30-45 minutes. More complex repairs may take 24-48 hours depending on parts availability.',
              },
              {
                q: 'Is there parking near your shop?',
                a: 'Yes, there is street parking available on Parsons Blvd and surrounding streets. We are also easily accessible by subway (E/F to Parsons Blvd) and bus.',
              },
              {
                q: 'What brands do you repair?',
                a: 'We repair Apple (iPhone, iPad, MacBook), Samsung, LG, Google Pixel, Motorola, and most Android devices. We also service Dell, HP, Lenovo, and Mac computers, as well as PlayStation, Xbox, and Nintendo consoles.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
