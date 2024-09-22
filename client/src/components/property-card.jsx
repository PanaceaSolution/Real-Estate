import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { FaKitchenSet, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "./ui/avatar";

export const PropertyCard = ({ ...p }) => {
   return (

      <Link to={`/property/${p._id}`}>
         <div className='bg-card rounded-lg shadow-xl hover:scale-105 duration-500 p-2'>
            <img src={p.imageUrl} alt="Property" className='w-full  object-cover rounded-lg h-60' />
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
               <div
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: p.description.substring(0, 40) + "..." }}
               />
               <div className='flex justify-between items-center text-sm font-medium'>
                  <p>
                     <FaBed color='#A855F7' size={20} />
                     3
                  </p>
                  <p>
                     <FaKitchenSet color='#A855F7' size={20} />
                     1
                  </p>
                  <p>
                     <FaBath color='#A855F7' size={20} />
                     3
                  </p>
                  <p>
                     <FaRulerCombined color='#A855F7' size={20} />
                     2200
                  </p>
               </div>
            </div>
            <hr className="border-1 border-black my-2" />
            <div className="flex items-center gap-3 py-2">
               <Avatar>
                  <AvatarFallback className="font-semibold bg-primary text-white uppercase">
                     {p.createdby.name.charAt(0)}
                  </AvatarFallback>
               </Avatar>
               <h1 className="text-lg font-medium">{p.createdby.name}</h1>
            </div>
         </div>
      </Link>
   )
}
