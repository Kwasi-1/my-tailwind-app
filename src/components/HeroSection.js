import React from 'react';
import backgroundImage from '../assets/Hero-bg-Image.png'; // Adjust the path as necessary
import Header from './Header';

const HeroSection = () => {
  return (
    <section 
      className="bg-cover bg-center h-screen flex items-center justify-cente bg-slate-800" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-left text-white w-11/12 md:w-2/3 lg:w-2/5 mx-4 md:ml-28">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-10">
          Expert Auto Repair for All Makes and Models
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-8">
          At The Auto Chef, we blend meticulous craftsmanship with innovative techniques to transform your vehicle into a masterpiece. Specializing in high-end automobile restoration and facelifts, our expert team ensures every detail is perfected.
        </p>
        <div className="flex flex-col md:flex-row">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 mb-4 md:mb-0 md:mr-4 rounded text-sm md:text-lg">
            Book A Schedule
          </button>
          <button className="bg-white text-red-600 px-6 py-3 rounded text-sm md:text-lg">
            Talk To Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
