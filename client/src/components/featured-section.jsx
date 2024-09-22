
import { PropertyCard } from './property-card';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAsync, selectAllProducts } from '@/redux/property/propertySlices';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FeaturedSection = () => {
   const dispatch = useDispatch();
   const properties = useSelector(selectAllProducts);

   useEffect(() => {
      dispatch(getAllProductsAsync());
   }, [dispatch]);
   return (
      <div id="feature" className="w-full min-h-screen rounded-2xl flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:py-24 lg:px-12">
         <h2 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-12">
            Latest
            <span className="text-primary"> Properties</span>
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10 mb-10">
            {properties.slice(0, 4).map((p) => (
               <PropertyCard
                  key={p.id}
                  {...p}
               />
            ))}
         </div>
         <Link to="/properties">
            <Button size="lg">
               View More
            </Button>
         </Link>
      </div>
   )
}
