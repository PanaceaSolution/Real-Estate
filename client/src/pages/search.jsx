import React from 'react';
import { PropertyCard } from '../components/property-card';
import { properties } from '../properties';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const query = location.state?.query || '';
  
  // Filter properties based on the search query
  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(query.toLowerCase())
  );

  return (

    <div className='p-4'>
      {/* First rectangular box */}
      <div className="relative flex items-start justify-center mb-8">
  <div className="bg-green-400 p-8 md:p-10 shadow-lg rounded-lg w-full max-w-3xl text-center transition-transform transform hover:scale-105">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Find Your Dream <span className="text-purple-800">Property Here</span>
    </h2>

    {/* New rectangular box */}
    <div className="absolute inset-x-0 -bottom-10 flex justify-center">
      <div className="bg-teal-400 p-6 rounded-2xl shadow-lg max-w-md md:max-w-xl transition-shadow hover:shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-0">
          {filteredProperties.length} <span className="text-purple-800">Properties Found</span>
        </h2>
      </div>
    </div>
  </div>
</div>

<div className='mt-14'>
      {/* Featured Properties Section */}
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))
        ) : (
          <p>No properties found for your search.</p>
        )}
      </div>
      </div>
      </div>
  );
};

export default SearchPage;
