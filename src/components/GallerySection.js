import React from 'react';

const images = [
  'path/to/image1.jpg',
  'path/to/image2.jpg',
  'path/to/image3.jpg',
  'path/to/image4.jpg',
  'path/to/image5.jpg',
  'path/to/image6.jpg',
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
