import React from 'react';

import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/house3.png';
import house4 from '../assets/house4.png';
import house5 from '../assets/house5.png';
import house6 from '../assets/house6.png';
import { PropertyCard } from '../components/property-card';

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

const Search = () => {
  return (
    <div className="bg-gray-100">
      {/* Search Box Section */}
      <div className="relative flex items-start justify-center p-6">
        {/* Original Box */}
        <div className="bg-green-300 p-6 md:p-8 shadow-md rounded-lg w-full max-w-3xl text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Dream <span className="text-purple-800">Property Here</span>
          </h2>

          {/* New rectangular box */}
          <div className="absolute inset-x-0 -bottom-10 flex justify-center"> {/* Adjusted bottom spacing */}
            <div className="bg-teal-300 p-4 rounded-md shadow-md max-w-md md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-0"> {/* Removed margin-bottom */}
                {properties.length} <span className="text-purple-800">Properties Found</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
    <div className='px-6'>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 lg:grid-cols-3 gap-8 md:gap-10  md:px-10 mb-10">
            {properties.map((p) => (
               <PropertyCard
                  key={p.id}
                  {...p}
               />
            ))}
         </div>

      </div>
   </div>
  );
};

export default Search;
