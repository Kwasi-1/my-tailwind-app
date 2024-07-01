import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactFormSection from '../components/ContactFormSection';
// import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const Home = () => {
  return ( 
    <div className="Home">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactFormSection />
      {/* <GallerySection /> */}
      <Footer />
    </div>
  );
}
 
export default Home;