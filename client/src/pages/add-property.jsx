import React, { useEffect, useState } from 'react';
import AddPropertyForm from '../components/add-property-form';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import house1 from '../assets/house1.png';

const AddProperty = () => {
   const { search } = useLocation();
   const params = new URLSearchParams(search);
   const propertyId = params.get('id');

   const [initialData, setInitialData] = useState({
      id: 1,
      title: 'Cedar Creek Ranch',
      address: 'Austin, United States',
      price: 265000,
      desc: 'Ranch-style house with wide open spaces.',
      bedroom: 4,
      kitchen: 1,
      bathroom: 2,
      area: 2800,
      image: house1
   });
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting }
   } = useForm();

   useEffect(() => {
      if (propertyId) {
         // Fetch property data from an API or other source based on the ID
         const fetchPropertyData = async () => {
            try {
               const response = await fetch(`/api/properties/${propertyId}`);
               const data = await response.json();
               setInitialData(data);
               reset(data);
            } catch (error) {
               console.log("An error occurred while fetching property data", error);
            }
         };

         fetchPropertyData();
      }
   }, [propertyId, reset]);

   const onSubmit = async (data) => {
      try {
         if (propertyId) {
            // Update existing property
            await fetch(`/api/properties/${propertyId}`, {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
            });
         } else {
            // Add new property
            await fetch('/api/properties', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
            });
         }
         reset();
      } catch (error) {
         console.log("An error occurred while submitting data", error);
      }
   };

   return (
      <main className='flex items-center justify-center'>
         <div className="font-medium w-[800px] bg-white shadow-md shadow-shadow rounded-2xl p-4">
            <h1 className="text-3xl font-bold mb-4 flex justify-center gap-2">
               {propertyId ? 'Edit' : 'Add'}
               <span className="text-primary">Property</span>
            </h1>

            <AddPropertyForm
               handleSubmit={handleSubmit(onSubmit)}
               register={register}
               errors={errors}
               isSubmitting={isSubmitting}
               initialData={initialData}
            />
         </div>
      </main>
   );
};

export default AddProperty;
