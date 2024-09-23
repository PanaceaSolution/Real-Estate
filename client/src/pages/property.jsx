import React, { useEffect } from "react";
import { PropertyCard } from "../components/property-card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync, selectAllProducts } from "@/redux/property/propertySlices";
const Property = () => {
   const dispatch = useDispatch();
   const properties = useSelector(selectAllProducts);

   useEffect(() => {
      dispatch(getAllProductsAsync());
   }, [dispatch]);
   return (
      <div className="px-12 py-6 min-h-screen">
         <div className="relative flex items-start justify-center mb-16">
            <div className="bg-white p-8 md:p-10 shadow-lg rounded-lg w-full max-w-3xl text-center">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Find Your Dream <span className="text-primary">Property</span>
               </h2>

               {/* New rectangular box */}
               <div className="absolute inset-x-0 -bottom-10 flex justify-center"> {/* Adjusted bottom spacing */}
                  <div className="bg-secondary p-4 rounded-md shadow-md max-w-md md:max-w-xl">
                     <h2 className="text-2xl md:text-3xl font-bold mb-0"> {/* Removed margin-bottom */}
                        {properties.length > 0 ? `Found ${properties.length} properties` : 'No properties found'}
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8 mb-10 py-8">
            {properties.map((p) => (
               <PropertyCard key={p._id} {...p} />
            ))}
         </div>
      </div>
   );
};
export default Property;