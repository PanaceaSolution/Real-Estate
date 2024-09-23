import React from 'react'
import { FaArrowRight, FaHome } from 'react-icons/fa'
import { TbReceiptTax } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";

const whyus = [
   {
      id: 1,
      title: 'Property Insurance',
      desc: 'Our Property Insurance offers comprehensive protection for your home or commercial property, ensuring that your assets are safeguarded against unforeseen risks. Whether it’s natural disasters, theft, or other damages, we provide reliable coverage tailored to meet your specific needs.',
      icon: <FaHome size={30} color="#A855F7" />
   },
   {
      id: 2,
      title: 'Tax Advancement',
      desc: "Our Tax Advancement service streamlines your tax obligations, making payments easier and less stressful. We provide expert guidance to help you take full advantage of tax deductions and credits, ensuring that you meet your legal requirements while maximizing your financial benefits.",
      icon: <TbReceiptTax size={30} color="#A855F7" />
   },
   {
      id: 3,
      title: 'Lowest Commission',
      desc: "We offer some of the lowest commission rates in the industry, allowing you to save more on every transaction. Whether you're dealing with investments or insurance policies, our transparent and fair pricing ensures that you keep more of your hard- earned money.",
      icon: <TbMoneybag size={30} color="#A855F7" />
   }
]


export const WhyUsSection = () => {
   return (
      <div className="w-full flex flex-col items-center justify-center p-2 py-14 lg:py-24 px-4 sm:px-6 lg:px-8">
         <h2 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-12">Why <span className="text-primary">Choose Us?</span></h2>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-14 lg:px-10">
            {whyus.map((s) => (
               <div key={s.id} className="w-full h-[400px] px-8 py-4 mb-8 bg-white rounded-2xl shadow-lg shadow-shadow space-y-4 relative">
                  <div className='bg-shadow rounded-full w-16 h-16 flex items-center justify-center '>
                     {s.icon}
                  </div>
                  <h2 className="text-lg font-bold mb-2">{s.title}</h2>
                  <p className="text-sm text-desc font-medium leading-relaxed mb-4">{s.desc}</p>
                  <button className='absolute bottom-4 flex items-center gap-2 text-primary font-bold hover:scale-110 duration-500 transition-all'>
                     Read More <FaArrowRight />
                  </button>
               </div>
            ))}
         </div>
      </div>
   )
}
