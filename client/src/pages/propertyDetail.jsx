import React from "react";
import {
  FaLocationDot,
  FaBed,
  FaKitchenSet,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { properties } from "../properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));
  return (
    <div className="px-[1rem] md:px-[3rem] grid grid-cols-1fr lg:grid-cols-[1fr_500px] md:gap-16 mt-4">
      <div className="">
        <div className="max-h-[600px] max-w-full md:h-[600px] w-full p-2 rounded-md border">
          <img
            src={property.image}
            class="img-fluid rounded-top"
            alt={property.title}
            className="h-[100%] w-[100%] rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 my-2 md:flex-row md:justify-between md:m-4">
          <div>
            <h3 className="md:text-3xl font-bold uppercase">
              {property.title}
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
              {property.bedroom} Bedroom
            </p>
            <p>
              <FaKitchenSet color="#A855F7" className="text-md md:text-3xl" />
              {property.kitchen} Kitchen
            </p>
            <p>
              <FaBath color="#A855F7" className="text-md md:text-3xl" />
              {property.bathroom} Bathroom
            </p>
            <p>
              <FaRulerCombined
                color="#A855F7"
                className="text-md md:text-3xl"
              />
              {property.area} Sqft
            </p>
          </div>
        </div>
        <div className="my-4 md:m-4">
          <h3 className="font-bold md:text-2xl">Description:</h3>
          <p className="text-text text-md md:text-xl">{property.desc}</p>
        </div>
      </div>
      <div className="md:border rounded-md">
        product listing page
      </div>
    </div>
  );
};

export default PropertyDetail;
