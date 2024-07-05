import React from 'react';
import BackgroundImage from '../assets/email-image.png';
import '@fontsource/inter';

const EmailSignUp = () => {
  return (
    <div className="bg-cover bg-center flex flex-col items-center w-4/5 mx-auto py-24 justify-center bg-gray-700 text-white font-" 
    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${BackgroundImage})`,  fontFamily: 'Inter' }}
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">
          Email us for any concerns with your car.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Sign Up for Exclusive Car Updates!
        </p>
      </div>
      <div className="flex items-center py-1 w-1/2 justify-between px-2 rounded-md bg-white">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md focus:outline-none text-black"
        />
        <button className="px-6 py-3 bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
          Check Availability
        </button>
      </div>
      
    </div>
  );
};

export default EmailSignUp;
