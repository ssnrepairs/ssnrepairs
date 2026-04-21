'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO, formatHours } from '@/lib/constants';


export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    issue: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const devices = [
    'iPhone',
    'Samsung Phone',
    'Other Android Phone',
    'MacBook / iMac',
    'Windows Laptop',
    'iPad / Tablet',
    'PlayStation',
    'Xbox',
    'Nintendo Switch',
    'Other Gaming Console',
    'Other Device',
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment booking would be processed here. In production, this would connect to your booking system.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Book an Appointment</h1>
          <p className="text-gray-600 text-center mb-12">
            Schedule your repair visit at our {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} location.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={BUSINESS_INFO.phone}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-2">
                  Device Type *
                </label>
                <select
                  id="device"
                  name="device"
                  required
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select device type</option>
                  {devices.map((device) => (
                    <option key={device} value={device}>{device}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe the Issue *
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  required
                  rows={3}
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Screen cracked, battery draining fast, etc."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any additional information..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center text-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="mt-8 bg-primary-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Location & Hours</h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {BUSINESS_INFO.address.full}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Transit:</strong> {BUSINESS_INFO.transit.subway}
            </p>
            <div className="text-sm text-gray-600">
              <strong>Business Hours:</strong>
              <ul className="mt-2 grid grid-cols-2 gap-1">
                {BUSINESS_INFO.hours.map((hours) => (
                  <li key={hours.day}>
                    {hours.day}: {hours.closed ? 'Closed' : `${formatHours(hours.open)} - ${formatHours(hours.close)}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
