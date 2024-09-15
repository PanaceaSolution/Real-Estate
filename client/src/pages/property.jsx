import React from "react";
import { PropertyCard } from "../components/property-card";
import { properties } from "../properties";

const Property = () => {
  return (
    <div className="m-12">
      <h2 className="text-4xl text-center lg:text-6xl font-bold mb-6 lg:mb-12">
        All <span className="text-primary">Properties</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 mb-10">
        {properties.map((p) => (
          <PropertyCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Property;
