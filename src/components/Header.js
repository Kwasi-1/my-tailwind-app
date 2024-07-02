import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Auto Repair</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href="/" className="block md:inline hover:underline py-2 md:py-0">Home</a></li>
          <li><a href="/services" className="block md:inline hover:underline py-2 md:py-0">Services</a></li>
          <li><a href="/booking" className="block md:inline hover:underline py-2 md:py-0">Booking</a></li>
          <li><a href="/gallery" className="block md:inline hover:underline py-2 md:py-0">Gallery</a></li>
          <li><a href="/contact" className="block md:inline hover:underline py-2 md:py-0">Contact</a></li>
        </ul>
        <button className="hidden md:block bg-red-600 px-6 py-3 text-lg font-semibold rounded">Book A Schedule</button>
      </nav>
      {isOpen && (
        <button className="block md:hidden bg-red-600 w-full px-6 py-3 mt-4 text-lg font-semibold rounded">
          Book A Schedule
        </button>
      )}
    </header>
  );
};

export default Header;
