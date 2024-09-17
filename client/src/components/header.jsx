import React from 'react';
import logo1 from '../assets/logo1.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import useSearch from './useSearch';

const Header = () => {
  const { searchQuery, filteredProperties, handleSearchChange, setSearchQuery } = useSearch(); // Add setSearchQuery to reset query
  const navigate = useNavigate();  // Use the navigate hook for redirection

  // Function to handle search result click and redirect to the /search page
  const handlePropertyClick = (property) => {
    // Reset search query before navigating to the /search page
    setSearchQuery(''); // Clear the search query

    navigate('/search', { state: { property } }); // Pass the clicked property as state
  };

  return (
    <div className='relative bg-slate-300 p-4 flex items-center justify-between shadow-md'>
      
      {/* First section for logo and navigation links */}
      <div className='flex items-center space-x-12'>

        {/* Website logo */}
        <Link to="/">
          <img src={logo1} alt="Website logo" className='h-10 w-auto object-contain' /></Link>

        <div className=' text-xl font-semibold text-indigo-600'>Hamro_Ghar_Jaga</div>


        {/* Navigation links */}
        <div className='flex space-x-6'>
          <Link to="/home" className='text-gray-800 font-medium hover:text-gray-600 transition-colors'>Home</Link>
          <Link to="/aboutUs" className='text-gray-800 font-medium hover:text-gray-600 transition-colors'>About Us</Link>
        </div>
      </div>

      {/* Central section for search */}
      <div className='relative flex-1 max-w-lg mx-8'>
        <input
          type="text"
          placeholder="Search ....."
          className='w-full px-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors'
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Conditionally display search results */}
        {searchQuery && (
          <div className='absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 max-h-60 overflow-y-auto z-10'>
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className='p-4 border-b border-gray-200 cursor-pointer'
                  onClick={() => handlePropertyClick(property)} // Redirect on property click
                >
                  <h3 className='text-lg font-semibold'>{property.title}</h3>
                  <p>{property.description}</p>
                  <p className='text-blue-600 font-semibold'>{property.price}</p>
                </div>
              ))
            ) : (
              <p className='p-4 text-gray-600'>No properties found.</p>
            )}
          </div>
        )}
      </div>

      {/* Right side Sign In */}
      <Link to="/sign-in" className='text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-medium transition-colors'>Sign In</Link>

    </div>
  );
};

export default Header;
