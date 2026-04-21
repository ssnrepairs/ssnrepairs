import { BUSINESS_INFO, formatHours } from '@/lib/constants';

export default function BusinessSettings() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Business Settings</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Business Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <p className="text-gray-900">{BUSINESS_INFO.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <p className="text-gray-900">{BUSINESS_INFO.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <p className="text-gray-900">{BUSINESS_INFO.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <p className="text-gray-900">{BUSINESS_INFO.address.full}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
        <div className="space-y-2">
          {BUSINESS_INFO.hours.map((hours) => (
            <div key={hours.day} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="font-medium">{hours.day}</span>
              <span className={hours.closed ? 'text-gray-400' : 'text-gray-900'}>
                {hours.closed ? 'Closed' : `${formatHours(hours.open)} - ${formatHours(hours.close)}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <div className="space-y-3">
          {BUSINESS_INFO.services.map((service) => (
            <div key={service.name} className="border-b border-gray-100 pb-3 last:border-0">
              <p className="font-medium">{service.name}</p>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
