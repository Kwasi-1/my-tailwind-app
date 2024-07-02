import React from 'react';

const Gallery = [
  require('../assets/mechanic.png'),
  require('../assets/happy-mechanic.png'),
  require('../assets/engine.png'),
  require('../assets/mechanic.png'),
  require('../assets/mechanic.png'),
  require('../assets/mechanic.png')
];

const GallerySection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="mb-8 text-gray-700">
        Explore our latest automotive triumphs - showcasing precision in every service and genuine parts, ensuring your vehicle excels on every journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Gallery.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img src={image} alt={image.alt} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <a href="/gallery" className="text-red-600 hover:underline">View More</a>
      </div>
    </div>
  );
};

export default GallerySection;
