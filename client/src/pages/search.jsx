import React from 'react';
import { PropertyCard } from '../components/property-card';
import { properties } from '../properties';


const Search = () => {
  return (
    <div>
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
