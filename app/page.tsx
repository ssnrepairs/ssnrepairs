import Link from 'next/link';
import { BUSINESS_INFO, formatHours } from '@/lib/constants';

export default function HomePage() {
  const todayHours = BUSINESS_INFO.hours.find(
    h => h.day === new Date().toLocaleDateString('en-US', { weekday: 'long' })
  );

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Electronics Repair in <span className="text-primary-600">Jamaica, Queens</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fast, reliable repairs for iPhones, Samsung phones, laptops, game consoles, and tablets.
              Located at {BUSINESS_INFO.address.street}, just steps from the Parsons Blvd subway station.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment" className="btn-primary text-lg">
                Book Appointment
              </Link>
              <Link href="/contact" className="btn-secondary text-lg">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_INFO.services.map((service) => (
              <div key={service.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose SSN Repairs?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Fast Turnaround</strong> - Most repairs completed same day
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Quality Parts</strong> - Only genuine or OEM-equivalent parts used
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>90-Day Warranty</strong> - Peace of mind on all repairs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Expert Technicians</strong> - Certified repair specialists
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Fair Pricing</strong> - Competitive rates with no hidden fees
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Today&apos;s Hours</h3>
              <div className="space-y-3 mb-6">
                {BUSINESS_INFO.hours.map((hours) => (
                  <div key={hours.day} className="flex justify-between py-2 border-b border-gray-100">
                    <span className={hours.day === todayHours?.day ? 'font-semibold text-primary-600' : ''}>
                      {hours.day}
                    </span>
                    <span className={hours.closed ? 'text-gray-400' : hours.day === todayHours?.day ? 'font-semibold text-primary-600' : ''}>
                      {hours.closed ? 'Closed' : `${formatHours(hours.open)} - ${formatHours(hours.close)}`}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-primary-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Need immediate help?</p>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-bold text-primary-600 hover:text-primary-700">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book an appointment online or walk in during business hours. We&apos;re conveniently located at Parsons Blvd station in Jamaica, Queens.
          </p>
          <Link href="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors text-lg">
            Book Your Repair
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS_INFO.areaServed.map((area) => (
              <span key={area} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                {area}, NY
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
