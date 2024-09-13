import { useState, useEffect } from 'react'
import { searchData } from './searchData'


const useSearch = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [properties, setProperties]= useState([]);
    const [filteredProperties, setFilteredProperties]= useState([]);

    // uding useEffect for fetching data 

    useEffect(()=>{
        const fetchProperties = () =>{
            setProperties(searchData); 
        };
        fetchProperties();


    },[]);

    //using useEffect for filter peoperties based on the search query

    useEffect(() => {
        
        setFilteredProperties(
          properties.filter(property =>
            property.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, [searchQuery, properties]);

      const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };




  return {
   searchQuery,
   filteredProperties,
   handleSearchChange



  };
};

export default useSearch;
