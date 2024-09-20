import React from "react";
import data from "../../../data.json"; 
import { useParams } from "react-router-dom";

const ViewSingleProperty = () => {
  const { id } = useParams();
  const property = data[id]; 
  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto flex justify-center items-center">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-2xl">
        <img
          alt={property.name} 
          src={property.imageUrl} 
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          {/* <time datetime={new Date(property.createdAt).toISOString()} className="block text-xs text-gray-500">
            {new Date(property.createdAt).toLocaleDateString()} 
          </time> */}

          <h3 className="mt-0.5 text-lg text-gray-900">
            {property.name}
          </h3>

          <p className="mt-2 text-lg text-gray-800 font-semibold">
            ${property.price.toFixed(2)}
          </p>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {property.description} 
          </p>
        </div>
      </article>
    </section>
  );
};

export default ViewSingleProperty;
