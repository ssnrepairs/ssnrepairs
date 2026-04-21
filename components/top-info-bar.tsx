'use client';

import Link from 'next/link';
import { BUSINESS_INFO, formatHours } from '@/lib/constants';

export default function TopInfoBar() {
  const todayHours = BUSINESS_INFO.hours.find(
    h => h.day === new Date().toLocaleDateString('en-US', { weekday: 'long' })
  );

  return (
    <div className="bg-primary-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1 hover:text-primary-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">{BUSINESS_INFO.phone}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            <span className="hidden md:inline text-primary-200">|</span>
            <span className="hidden md:flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {todayHours?.closed ? (
                <span className="text-red-200">Closed Today</span>
              ) : (
                <span className="hidden xs:inline">
                  Today: {formatHours(todayHours?.open || '09:00')} - {formatHours(todayHours?.close || '19:00')}
                </span>
              )}
            </div>
            <Link
              href="/appointment"
              className="bg-white text-primary-600 px-3 py-1 rounded-md font-medium hover:bg-primary-50 transition-colors text-xs sm:text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
