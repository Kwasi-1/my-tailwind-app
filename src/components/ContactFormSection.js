import React from 'react';

const ContactFormSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get a Location-Based Car Repair Estimate</h2>
        <form className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-3 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded font-semibold">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
