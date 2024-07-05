import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactFormSection from '../components/ContactFormSection';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';
import EmailSignUp from '../components/EmailSignUp';

const Home = () => {
  return ( 
    <div className="Home">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactFormSection />
      <GallerySection />
      <Contact/>
      <EmailSignUp/>
    </div>
  );
}
 
export default Home;