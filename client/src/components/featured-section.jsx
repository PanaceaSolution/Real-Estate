
import { PropertyCard } from './property-card';
import { properties } from '../properties';

export const FeaturedSection = () => {
   return (
      <div id="feature" className="w-full min-h-screen rounded-2xl flex flex-col items-center justify-center bg-gradient-to-b from-white via-shadow to-white py-10 px-4 md:px-8 lg:py-24 lg:px-12">
         <h2 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-12">Featured <span className="text-primary">Properties</span></h2>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 mb-10">
            {properties.map((p) => (
               <PropertyCard
                  key={p.id}
                  {...p}
               />
            ))}
         </div>
         <button className='px-6 py-4 bg-primary rounded-lg font-semibold text-white text-xl'>View More</button>
      </div>
   )
}
