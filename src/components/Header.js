import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Auto Repair</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/booking" className="hover:underline">Booking</a></li>
          <li><a href="/gallery" className="hover:underline">Gallery</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded">Book A Shedule</button>
      </nav>
    </header>
  );
};

export default Header;
