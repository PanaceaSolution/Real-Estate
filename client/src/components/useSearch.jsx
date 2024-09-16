import { useState } from 'react';
 // Assuming this is your search data source

import {searchData} from '../components/searchData';

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProperties = searchData.filter(property =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return {
    searchQuery,
    setSearchQuery, // Expose setSearchQuery to allow clearing the search
    filteredProperties,
    handleSearchChange,
  };
};

export default useSearch;
