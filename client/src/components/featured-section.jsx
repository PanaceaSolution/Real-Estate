
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/house3.png';
import house4 from '../assets/house4.png';
import house5 from '../assets/house5.png';
import house6 from '../assets/house6.png';
import { PropertyCard } from './property-card';


const properties = [
   {
      id: 1,
      title: 'Cedar Creek Ranch',
      address: 'Austin, United States',
      price: 265000,
      desc: 'Ranch-style house with wide open spaces.',
      bedroom: 4,
      kitchen: 1,
      bathroom: 2,
      area: 2800,
      image: house1
   },
   {
      id: 2,
      title: 'Greenwood Estate',
      address: 'New York, United States',
      price: 310000,
      desc: 'A beautiful house located in a quiet neighborhood.',
      bedroom: 5,
      kitchen: 2,
      bathroom: 3,
      area: 3200,
      image: house2
   },
   {
      id: 3,
      title: 'Sunset Villa',
      address: 'Miami, United States',
      price: 450000,
      desc: 'A luxurious villa with stunning ocean views.',
      bedroom: 6,
      kitchen: 1,
      bathroom: 4,
      area: 4000,
      image: house3
   },
   {
      id: 4,
      title: 'Palm Tree Cottage',
      address: 'Orlando, United States',
      price: 198000,
      desc: 'Cozy cottage in the heart of the city.',
      bedroom: 3,
      kitchen: 1,
      bathroom: 2,
      area: 1500,
      image: house4
   },
   {
      id: 5,
      title: 'Maplewood Manor',
      address: 'Chicago, United States',
      price: 290000,
      desc: 'Spacious manor with a large garden.',
      bedroom: 4,
      kitchen: 2,
      bathroom: 3,
      area: 3000,
      image: house5
   },
   {
      id: 6,
      title: 'Blue Ridge Villa',
      address: 'San Francisco, United States',
      price: 380000,
      desc: 'Modern villa with panoramic city views.',
      bedroom: 5,
      kitchen: 2,
      bathroom: 3,
      area: 3500,
      image: house6
   },
]

export const FeaturedSection = () => {
   return (
      <div id="feature" className="w-full min-h-screen rounded-2xl flex flex-col items-center justify-center p-2 bg-gradient-to-b from-white via-purple-200 to-white py-10 px-10 lg:py-24 lg:px-12">
         <h2 className="text-6xl font-bold mb-12">Featured <span className="text-purple-800">Properties</span></h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10  md:px-10 mb-10">
            {properties.map((p) => (
               <PropertyCard
                  key={p.id}
                  {...p}
               />
            ))}
         </div>
         <button className='px-6 py-4 bg-purple-800 rounded-lg font-semibold text-white text-xl'>View More</button>
      </div>
   )
}
