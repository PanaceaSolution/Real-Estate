import React from 'react';
import { HeroSection } from '../components/hero-section';
import { FeaturedSection } from '../components/featured-section';
import { WhyUsSection } from '../components/why-us-section';
import { TestimonialsSection } from '../components/testimonials-section';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
   return (
      <main className=' text-black'>

         <div className='max-w-screen-2xl mx-auto min-h-screen py-8 px-4 transition-all duration-500'>
            <HeroSection />
            <FeaturedSection />
            <WhyUsSection />
            <TestimonialsSection />
         </div>
      </main>
   );
};

export default Home;
