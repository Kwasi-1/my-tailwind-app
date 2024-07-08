import React from 'react';
import HeroSection from '../components/HeroSection';
import heroSections from '../data/heroSections';

const About = () => {
  const heroData = heroSections.find(section => section.page === 'about');

  return (
    <div>
      <HeroSection 
        backgroundImage={heroData.backgroundImage}
        title={heroData.title}
        description={heroData.description}
      />
      {/* Add more content specific to the About page here */}
    </div>
  );
};

export default About;
