import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import house1 from '../assets/house1.png';
import house4 from '../assets/house4.png';
import house5 from '../assets/house5.png';
import house6 from '../assets/house6.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={className}
         style={{ ...style, display: "block", background: "#A855F7", borderRadius: "50%" }}
         onClick={onClick}
      />
   );
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={className}
         style={{ ...style, display: "block", background: "#A855F7", borderRadius: "50%" }}
         onClick={onClick}
      />
   );
}

export const HeroSection = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      pauseOnFocus: true,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <section className="w-full flex justify-center items-center lg:gap-10">

         <div className="relative w-full">
            <Carousel
               showThumbs={false}
               showArrows={true}
               autoPlay={true}
               infiniteLoop={true}
               interval={5000}
               transitionTime={2000}
               swipeable={true}
            >
               {[house1, house4, house5, house6].map((house) => (
                  <div key={house} className='rounded-2xl relative'>
                     <img src={house} alt="House" className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:min-h-screen object-fill" />
                  </div>
               ))}
            </Carousel>
            {/* <Slider {...settings}>
               {[house1, house4, house5, house6].map((house) => (
                  <div key={house} className='rounded-2xl relative'>
                     <img src={house} alt="House" className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[950px] object-fill" />
                  </div>
               ))}
            </Slider> */}
            <div className=" lg:absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center">
               <div className="w-full xl:w-1/2 lg:ml-4 bg-black px-4 py-2 lg:rounded-2xl lg:bg-opacity-70">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase mb-2 text-white">
                     Let's Find Your <br />
                     <span className="text-purple-500">Dream Home</span>
                  </h1>
                  <p className="text-white text-xs md:text-lg">
                     Welcome to our real estate agency, where finding your dream home is our top priority.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};
