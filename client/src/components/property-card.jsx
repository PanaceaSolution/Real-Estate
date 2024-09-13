import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";

export const PropertyCard = ({ ...p }) => {
   return (
      <div className='shadow-xl rounded-2xl hover:scale-105 duration-500'>
         <div className='bg-white rounded-xl'>
            <img src={p.image} alt="Property" className='w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64' />
            <div className='p-4 space-y-2'>
               <div className='flex justify-between'>
                  <h1 className='text-lg font-semibold'>
                     {p.title}
                     <p className='text-sm text-purple-500'>{p.address}</p>
                  </h1>
                  <p className='text-2xl font-bold text-purple-700'>${p.price}</p>
               </div>
               <p className='text-gray-500 text-sm'>{p.desc}</p>
               <div className='flex justify-between items-center text-sm'>
                  <p>
                     <FaBed color='#A855F7' size={20} />
                     {p.bedroom} Bedroom
                  </p>
                  <p>
                     <FaKitchenSet color='#A855F7' size={20} />
                     {p.kitchen} Kitchen
                  </p>
                  <p>
                     <FaBath color='#A855F7' size={20} />
                     {p.bathroom} Bathroom
                  </p>
                  <p>
                     <FaRulerCombined color='#A855F7' size={20} />
                     {p.area} Sqft
                  </p>
               </div>
               <button className=' px-4 py-2 bg-purple-200 rounded-2xl font-medium'>View Details</button>
            </div>
         </div>
      </div>
   )
}
