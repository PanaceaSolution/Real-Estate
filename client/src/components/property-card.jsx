import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { FaKitchenSet, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PropertyCard = ({ ...p }) => {
   return (

      <Link to={`/property/${p.id}`}>
         <div className='bg-card rounded-lg shadow-xl hover:scale-105 duration-500 p-2'>
            <img src={p.image} alt="Property" className='w-full  object-cover rounded-lg h-60' />
            <div className='space-y-2 p-2'>
               <div>
                  <h1 className='flex justify-between items-center text-lg font-semibold'>
                     {p.title}
                     <p className='text-2xl font-bold text-primary'>${p.price}</p>
                  </h1>
                  <p className='text-sm text-primary/80 flex items-center gap-1'>
                     <FaLocationDot />
                     {p.address}
                  </p>
               </div>
               <p className='text-desc text-sm'>
                  {p.desc.substring(0, 30) + '...'}
               </p>
               <div className='flex justify-between items-center text-sm font-medium'>
                  <p>
                     <FaBed color='#A855F7' size={20} />
                     {p.bedroom}
                  </p>
                  <p>
                     <FaKitchenSet color='#A855F7' size={20} />
                     {p.kitchen}
                  </p>
                  <p>
                     <FaBath color='#A855F7' size={20} />
                     {p.bathroom}
                  </p>
                  <p>
                     <FaRulerCombined color='#A855F7' size={20} />
                     {p.area}
                  </p>
               </div>
            </div>
         </div>
      </Link>
   )
}
