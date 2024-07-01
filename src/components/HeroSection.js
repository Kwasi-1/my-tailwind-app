import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen text-whie flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-bold mb-4 ">Expert Auto Repair for All Makes and Models</h1>
      <p className="text-xl mb-8">Reliable and Affordable Service</p>
      <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded">Book an Appointment</button>
    </section>
  );
};

export default HeroSection;
