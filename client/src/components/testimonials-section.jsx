import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowAltCircleLeft } from "react-icons/fa";

const reviews = [
   {
      id: 1,
      name: 'Sujan Dcaprio',
      title: 'BBQ Restaurant Owner',
      review: "This service has been a game-changer for my business. The insurance coverage is comprehensive, and the customer support is top-notch. I feel confident knowing my restaurant is protected.",
      img: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHxwZXJzb258ZW58MHx8MHx8fDA%3D'
   },
   {
      id: 2,
      name: 'Emily Roberts',
      title: 'Freelance Graphic Designer',
      review: "The tax advancement service made filing my taxes so much easier. I was able to focus on my work, knowing that my taxes were being handled professionally and efficiently.",
      img: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
   },
   {
      id: 3,
      name: 'Rahul Sharma',
      title: 'Real Estate Investor',
      review: "I’ve been impressed with the low commission rates offered here. I’ve saved so much more compared to other services, and the transparency in pricing is greatly appreciated.",
      img: 'https://images.unsplash.com/photo-1541911087797-f89237bd95d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxwZXJzb258ZW58MHx8MHx8fDA%3D'
   },
   {
      id: 4,
      name: 'Lisa Kim',
      title: 'Tech Startup Founder',
      review: "The insurance options they provided were perfectly tailored for my business needs. Their team explained everything in detail, making it easy to choose the right coverage for my company.",
      img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww'
   },
   {
      id: 5,
      name: 'Michael Johnson',
      title: 'Financial Advisor',
      review: "I highly recommend their services for anyone looking to streamline their financial management. Their low commissions and expert tax services have been invaluable to my clients.",
      img: 'https://images.unsplash.com/photo-1485206283729-2ca7d035185e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ0fHxwZXJzb258ZW58MHx8MHx8fDA%3D'
   },
   {
      id: 6,
      name: 'Sophia Martinez',
      title: 'E-commerce Entrepreneur',
      review: "Their support team is incredibly responsive, and the services they provide have helped me protect my business. I couldn’t ask for a better partner in managing my business finances.",
      img: 'https://images.unsplash.com/photo-1506648601690-656a701b10b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyN3x8ZmVtYWxlfGVufDB8fDB8fHww'
   }
]

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


export const TestimonialsSection = () => {
   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };
   return (
      <div className="w-full flex flex-col items-center justify-center p-2 py-10 px-4 sm:px-6 lg:py-24 lg:px-8">
         <h2 className="text-6xl font-bold mb-12">Clients <span className="text-purple-800">Reviews</span></h2>

         <div className='w-full'>
            <Slider {...settings}>
               {reviews.map((s) => (
                  <div key={s.id} className='px-4 my-2'>
                     <div className="p-4 bg-white rounded-2xl shadow-lg shadow-purple-200 min-h-[200px] space-y-4">
                        <img src={s.img} alt="Customer" className="w-32 h-32 rounded-full" />
                        <div>
                           <h2 className="text-xl font-bold text-gray-800 ">{s.name}</h2>
                           <p className="text-sm text-purple-500 leading-relaxed">{s.title}</p>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.review}</p>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}
