const Gallery = [
  require('../assets/image1.png'),
  require('../assets/image2.png'),
  require('../assets/image3.png'),
  require('../assets/image4.png'),
  require('../assets/image5.png'),
  require('../assets/image6.png')
];

const GalleryComponent = () => {
  return ( 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[250px]">
        {Gallery.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden ${
              (index + 1) % 3 === 2 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
            />
          </div>
        ))}
      </div>
   );
}
 
export default GalleryComponent;