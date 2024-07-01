import React from 'react';

const services = [
  { title: 'Engine Repair', icon: '🚗' },
  { title: 'Oil Change', icon: '🛢️' },
  { title: 'Tire Services', icon: '🔧' },
  { title: 'AC Servicing', icon: '❄️' },
  { title: 'Battery Replacement', icon: '🔋' },
  { title: 'Brake Repair', icon: '🛠️' },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">We Are Specialists In Following Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">High-quality service for your car.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
