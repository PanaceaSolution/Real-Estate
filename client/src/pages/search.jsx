import React from 'react';
import { PropertyCard } from '../components/property-card';
import { properties } from '../properties';
import { useLocation } from 'react-router-dom';


const Search = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchName = params.get('q')

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchName.toLowerCase())
  );

  return (

    <div className='p-4 min-h-screen'>
      {/* First rectangular box */}
      <div className="relative flex items-start justify-center mb-8">
        <div className="bg-white p-8 md:p-10 shadow-lg rounded-lg w-full max-w-3xl text-center transition-transform transform hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Dream <span className="text-primary">Property Here</span>
          </h2>

          {/* New rectangular box */}
          <div className="absolute inset-x-0 -bottom-10 flex justify-center"> {/* Adjusted bottom spacing */}
            <div className="bg-secondary p-4 rounded-md shadow-md max-w-md md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-0"> {/* Removed margin-bottom */}
                {filteredProperties.length + " "}
                <span className="text-primary">
                  {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found for "{searchName}"
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        {/* Featured Properties Section */}
        <div className='px-6'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10 mb-10 py-8">
            {filteredProperties.map((p) => (
              <PropertyCard
                key={p.id}
                {...p}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;