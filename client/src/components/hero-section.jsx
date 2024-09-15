// Import images and the Slider component from react-slick
import house1 from '../assets/house1.png';
import house4 from '../assets/house4.png';
import house5 from '../assets/house5.png';
import house6 from '../assets/house6.png';
import Slider from 'react-slick';

// Define a custom Next Arrow component for the slider
function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={className}
         style={{ ...style, display: "block", background: "#A855F7", borderRadius: "50%", marginRight: "50px", zIndex: "10" }}
         onClick={onClick}
      />
   );
}

// Define a custom Previous Arrow component for the slider
function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={className}
         style={{ ...style, display: "block", background: "#A855F7", borderRadius: "50%", marginLeft: "50px", zIndex: "10" }}
         onClick={onClick}
      />
   );
}

export const HeroSection = () => {
   const settings = {
      dots: true, // Enable dots for slide indicators
      infinite: true, // Loop through slides infinitely
      speed: 1500, // Transition speed between slides
      slidesToShow: 1, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 5000, // Time duration for autoplay between slides
      pauseOnHover: true, // Pause autoplay on hover
      pauseOnFocus: true, // Pause autoplay when the slider is focused
      cssEase: 'linear', // Animation easing effect for sliding
      nextArrow: <SampleNextArrow />, // Use custom next arrow
      prevArrow: <SamplePrevArrow />, // Use custom previous arrow
   };

   return (
      <section className="w-full flex justify-center items-center lg:gap-10">
         <div className='grid grid-cols-1 xl:grid-cols-2 items-center justify-center '>
            {/* Left section with the title */}
            <div className="w-full py-2 rounded-2xl ">
               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold uppercase mb-2">
                  Let's Find Your <br />
                  <span className="text-primary">Dream Home</span>
               </h1>
            </div>

            {/* Right section with the image slider */}
            <div className="relative w-full">
               <Slider {...settings} className="rounded-2xl overflow-hidden">
                  {[house1, house4, house5, house6].map((house) => (
                     <div key={house} className='rounded-2xl relative'>
                        <img src={house} alt="House" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-fill" />
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   );
};
