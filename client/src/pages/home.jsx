import React from 'react';
import { HeroSection } from '../components/hero-section';
import { FeaturedSection } from '../components/featured-section';
import { WhyUsSection } from '../components/why-us-section';
import { TestimonialsSection } from '../components/testimonials-section';

const Home = () => {
   return (
      <main className=' bg-[#f1faee]'>
         <HeroSection />
         <div className='max-w-screen-2xl mx-auto min-h-screen py-8 px-4 transition-all duration-500'>

            <WhyUsSection />
            <FeaturedSection />
            <TestimonialsSection />
         </div>
      </main>
   );
};

export default Home;
