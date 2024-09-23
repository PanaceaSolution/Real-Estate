import React, { useEffect } from "react";
import {
   FaLocationDot,
   FaBed,
   FaKitchenSet,
   FaBath,
   FaRulerCombined,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { properties } from "../properties";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAsync, singleProperty } from "@/redux/property/propertySlices";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const PropertyDetail = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const property = useSelector(singleProperty);

   useEffect(() => {
      dispatch(getProductByIdAsync(id));
   }, [dispatch, id]);
   return (
      <div className="px-[1rem] md:px-[3rem] grid grid-cols-1fr lg:grid-cols-[1fr_450px] md:gap-16 mt-4">
         <div className="">
            <div className="max-h-[600px] max-w-full md:h-[600px] w-full p-2 rounded-md border">
               <img
                  src={property.imageUrl}
                  class="img-fluid rounded-top"
                  alt={property.title}
                  className="h-[100%] w-[100%] rounded-md"
               />
            </div>
            <div className="flex flex-col gap-2 my-2 md:flex-row md:justify-between md:m-4">
               <div>
                  <h3 className="md:text-3xl font-bold capitalize">
                     {property.name}
                  </h3>
                  <p className="text-sm md:text-xl text-primary/80 flex items-center gap-2 md:mt-3">
                     <FaLocationDot size={20} />
                     {property.address}
                  </p>
               </div>
               <p className="text-md">
                  <span className="me-2 font-medium md:text-xl">Price:</span>
                  <span className="font-bold text-primary md:text-2xl">
                     ${property.price}
                  </span>
               </p>
            </div>
            <div className="md:m-4">
               <h3 className="font-bold mb-2 md:text-2xl md:mb-4">Features:</h3>
               <div className="flex justify-between items-center text-sm font-medium md:text-lg">
                  <p>
                     <FaBed color="#A855F7" className="text-md md:text-3xl" />
                     3 Bedroom
                  </p>
                  <p>
                     <FaKitchenSet color="#A855F7" className="text-md md:text-3xl" />
                     1 Kitchen
                  </p>
                  <p>
                     <FaBath color="#A855F7" className="text-md md:text-3xl" />
                     4 Bathroom
                  </p>
                  <p>
                     <FaRulerCombined
                        color="#A855F7"
                        className="text-md md:text-3xl"
                     />
                     2200 Sqft
                  </p>
               </div>
            </div>
            <div className="my-4 md:m-4">
               <h3 className="font-bold md:text-2xl">Description:</h3>
               <div
                  className="text-text text-md md:text-xl"
                  dangerouslySetInnerHTML={{ __html: property.description }}
               />
            </div>
         </div>
         <div className="max-w-[500px]">
            <div className="mb-4 bg-white p-2 rounded-xl shadow-xl">
               <h4 className="text-2xl font-medium mb-2">About the Owner</h4>
               <div className="flex gap-4 py-2">
                  <Avatar>
                     <AvatarFallback className="font-semibold bg-primary text-white uppercase">
                        {property.createdby.name.charAt(0)}
                     </AvatarFallback>
                  </Avatar>
                  <h1 className="text-lg font-medium">{property.createdby.name}</h1>
               </div>
            </div>
            <div className="h-[70vh] md:w-full lg:w-[30rem]  lg:fixed lg:overflow-y-auto lg:overflow-x-hidden lg:px-6">
               <h4 className="text-2xl font-medium mb-2">Related Properties</h4>
               {properties.map((property) => (
                  <Link to={`/properties/${property.id}`}>
                     <div className="flex gap-[1rem] max-h-[120px] shadow-md my-4 hover:bg-shadow hover:cursor-pointer p-2">
                        <div className="h-[100px] w-[150px] rounded-lg">
                           <img
                              src={property.image}
                              class="img-fluid rounded-lg h-full w-full"
                              alt={property.title}
                           />
                        </div>
                        <div>
                           <h3 className="text-lg font-medium">{property.title}</h3>
                           <p className="text-text">{property.address}</p>
                           <p className="text-primary font-semibold">
                              ${property.price}
                           </p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default PropertyDetail;