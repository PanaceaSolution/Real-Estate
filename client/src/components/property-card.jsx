import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { FaKitchenSet, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PropertyCard = ({ ...p }) => {
  return (
    <div className="shadow-xl rounded-2xl hover:scale-105 duration-500">
      <div className="bg-white rounded-xl">
        <img
          src={p.image}
          alt="Property"
          className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
        />
        <div className="p-4 space-y-4">
          <div>
            <h1 className="flex justify-between items-center text-lg font-semibold">
              {p.title}
              <p className="text-2xl font-bold text-primary">${p.price}</p>
            </h1>
            <p className="text-sm text-primary/80 flex items-center gap-1">
              <FaLocationDot />
              {p.address}
            </p>
          </div>
          <p className="text-desc text-sm">{p.desc}</p>
          <div className="flex justify-between items-center text-sm font-medium">
            <p>
              <FaBed color="#A855F7" size={20} />
              {p.bedroom} Bedroom
            </p>
            <p>
              <FaKitchenSet color="#A855F7" size={20} />
              {p.kitchen} Kitchen
            </p>
            <p>
              <FaBath color="#A855F7" size={20} />
              {p.bathroom} Bathroom
            </p>
            <p>
              <FaRulerCombined color="#A855F7" size={20} />
              {p.area} Sqft
            </p>
          </div>
          <div>
            <Link
              to={`/properties/${p.id}`}
              className=" px-4 py-2 bg-shadow rounded-2xl font-medium my-100"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
