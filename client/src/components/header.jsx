import React, { useState } from 'react';
import logo1 from '../assets/logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import useSearch from './useSearch';
import { properties } from '../properties';

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Handle changes in the search input
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      // Filter properties based on the search query
      const filteredSuggestions = properties.filter(property =>
        property.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle the Enter key to navigate to the search page
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/search', { state: { query: searchQuery } });
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  return (
    <div className='relative bg-slate-300 p-4 flex items-center justify-between shadow-md'>
      <div className='flex items-center space-x-12'>
        <Link to="/">
          <img src={logo1} alt="Website logo" className='h-10 w-auto object-contain' />
        </Link>
        <div className='text-xl font-semibold text-indigo-600'>Hamro_Ghar_Jaga</div>
        <div className='flex space-x-6'>
          <Link to="/home" className='text-gray-800 font-medium hover:text-gray-600 transition-colors'>Home</Link>
          <Link to="/aboutUs" className='text-gray-800 font-medium hover:text-gray-600 transition-colors'>About Us</Link>
        </div>
      </div>

      <div className='relative flex-1 max-w-lg mx-8'>
        <input
          type="text"
          placeholder="Search ....."
          className='w-full px-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors'
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        
        {suggestions.length > 0 && (
          <div className='absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 max-h-60 overflow-y-auto z-10'>
            {suggestions.map((property) => (
              <div key={property.id} className='p-4 border-b border-gray-200'>
                <h3 className='text-lg font-semibold'>{property.title}</h3>
                <p>{property.description}</p>
                <p className='text-blue-600 font-semibold'>{property.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link to="/sign-in" className='text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-medium transition-colors'>Sign In</Link>
    </div>
  );
};

export default Header;
