import React from 'react';

const reasons = [
  'Experienced Technicians',
  'Affordable Prices',
  'High-Quality Parts',
  'Fast and Efficient Service',
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason} className="bg-gray-100 p-6 rounded shadow-lg">
              <p className="text-xl font-semibold">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
