import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import data from "../../../data.json"
import { useParams } from "react-router-dom";
import {X} from "lucide-react"
const EditProperty = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");
  const onSubmit = (data) => {
    console.log("Submitted:", { ...data, description, imageUrl: imageFile });
   
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };
 const {id}=useParams();
 const property=data[id]
 useEffect(()=>{
 if(id){
  setValue("name",property.name),
  setValue("price",property.price)
  setValue("description",setDescription(property.description))
  setValue("address",property.address)
  setValue("imageUrl",setImagePreview(property.imageUrl))
 }
 },[id])

  return (
    <>
      <form className="border-2 p-10 rounded-sm bg-slate-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <div className="border-b border-gray-900/10 pb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add Your Property
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please carefully enter your details
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Property Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Property name is required" })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="price"
                    min={10}
                    defaultValue={10}
                    {...register("price", { required: "Price is required", min: { value: 0, message: "Price must be a positive number" } })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.price ? 'border-red-500' : ''}`}
                  />
                  {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <ReactQuill
                    value={description}
                    onChange={setDescription}
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                    className="react-quill"
                    style={{ height: "250px" }} 
                  />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>
              </div>
              <div className="sm:col-span-4 mt-5">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="address"
                    {...register("address", { required: "Address is required" })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.address ? 'border-red-500' : ''}`}
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                  Image
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    {...register("imageUrl")}
                    onChange={handleImageUpload}
                    className=" border-dashed w-full rounded-md  h-14 p-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                {imagePreview && (
                  <div className="mt-4 relative">
                    <img src={imagePreview} alt="Preview" className="w-36 h-36 object-cover rounded-md" />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="mt-1 rounded-full absolute top-0 bg-shadow text-white px-0 py-0 text-sm"
                    >
                     <X color="#dd1d1d" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
            type="reset"
            className="rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          UPDATE
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProperty;
