import React, { useState, useEffect } from 'react';

const AddPropertyForm = ({
   handleSubmit,
   register,
   errors,
   isSubmitting,
   initialData
}) => {
   const [imagePreview, setImagePreview] = useState(initialData?.image || '');

   useEffect(() => {
      if (initialData?.image) {
         setImagePreview(initialData.image);
      }
   }, [initialData]);

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImagePreview(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="space-y-4">
         {Object.keys(errors).length > 0 && (
            <p className="text-danger text-lg ml-1">
               Please fill in all required fields
            </p>
         )}

         <div className='py-2 flex flex-col'>
            <label htmlFor="title" className='text-lg font-medium ml-1'>Title</label>
            <input
               id="title"
               type="text"
               name="title"
               className={`border-2 rounded-lg p-2 ${errors.title ? 'border-red-500' : ''}`}
               placeholder='Greenwood Estate'
               {...register('title', { required: true })}
               defaultValue={initialData?.title || ''}
            />
         </div>

         <div className='py-2 flex flex-col'>
            <label htmlFor="address" className='text-lg font-medium ml-1'>Address</label>
            <input
               id="address"
               type="text"
               name="address"
               className={`border-2 rounded-lg p-2 ${errors.address ? 'border-red-500' : ''}`}
               placeholder='123 Main St, Anytown USA'
               {...register('address', { required: true })}
               defaultValue={initialData?.address || ''}
            />
         </div>

         <div className='py-2 flex flex-col'>
            <label htmlFor="price" className='text-lg font-medium ml-1'>Price</label>
            <input
               id="price"
               type="number"
               name="price"
               className={`border-2 rounded-lg p-2 ${errors.price ? 'border-red-500' : ''}`}
               placeholder='$350,000'
               {...register('price', { required: true })}
               defaultValue={initialData?.price || ''}
            />
         </div>

         <div className='py-2 flex flex-col'>
            <label htmlFor="desc" className='text-lg font-medium ml-1'>Description</label>
            <textarea
               id="desc"
               name="desc"
               className={`border-2 rounded-lg p-2 ${errors.desc ? 'border-red-500' : ''}`}
               placeholder='A beautiful house located in a quiet neighborhood.'
               {...register('desc', { required: true })}
               defaultValue={initialData?.desc || ''}
            />
         </div>

         <div className="grid grid-cols-2 gap-4">
            <div className='py-2 flex flex-col'>
               <label htmlFor="bedroom" className='text-lg font-medium ml-1'>Bedrooms</label>
               <input
                  id="bedroom"
                  type="number"
                  name="bedroom"
                  className={`border-2 rounded-lg p-2 ${errors.bedroom ? 'border-red-500' : ''}`}
                  placeholder='3'
                  {...register('bedroom', { required: true })}
                  defaultValue={initialData?.bedroom || ''}
               />
            </div>

            <div className='py-2 flex flex-col'>
               <label htmlFor="kitchen" className='text-lg font-medium ml-1'>Kitchens</label>
               <input
                  id="kitchen"
                  type="number"
                  name="kitchen"
                  className={`border-2 rounded-lg p-2 ${errors.kitchen ? 'border-red-500' : ''}`}
                  placeholder='2'
                  {...register('kitchen', { required: true })}
                  defaultValue={initialData?.kitchen || ''}
               />
            </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            <div className='py-2 flex flex-col'>
               <label htmlFor="bathroom" className='text-lg font-medium ml-1'>Bathrooms</label>
               <input
                  id="bathroom"
                  type="number"
                  name="bathroom"
                  className={`border-2 rounded-lg p-2 ${errors.bathroom ? 'border-red-500' : ''}`}
                  placeholder='2'
                  {...register('bathroom', { required: true })}
                  defaultValue={initialData?.bathroom || ''}
               />
            </div>

            <div className='py-2 flex flex-col'>
               <label htmlFor="area" className='text-lg font-medium ml-1'>Area (sq ft)</label>
               <input
                  id="area"
                  type="number"
                  name="area"
                  className={`border-2 rounded-lg p-2 ${errors.area ? 'border-red-500' : ''}`}
                  placeholder='1200'
                  {...register('area', { required: true })}
                  defaultValue={initialData?.area || ''}
               />
            </div>
         </div>

         <div className='py-2 flex flex-col'>
            <label htmlFor="image" className='text-lg font-medium ml-1'>Image</label>
            <input
               id="image"
               type="file"
               name="image"
               accept="image/*"
               className={`border-2 rounded-lg p-2 ${errors.image ? 'border-red-500' : ''}`}
               {...register('image', { required: !initialData })}
               onChange={handleImageChange}
            />
         </div>

         {imagePreview && (
            <>
               <h3 className='text-lg font-medium ml-1'>Image Preview</h3>
               <img src={imagePreview} alt="Property" className="w-[300px] h-[300px] mt-1 p-2 border-2 rounded-lg shadow-sm" />
            </>
         )}

         <button
            type="submit"
            className='w-full bg-primary text-white rounded-md p-2 hover:bg-primary/90'
            disabled={isSubmitting}
         >
            {isSubmitting
               ? 'Saving...'
               : initialData
                  ? 'Update'
                  : 'Add'
            }
         </button>
      </form>
   )
}

export default AddPropertyForm;
