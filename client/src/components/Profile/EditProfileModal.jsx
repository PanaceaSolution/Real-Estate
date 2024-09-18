import React from "react";
import { useForm } from "react-hook-form";

const EditProfileModal = ({ closeModal }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Sukraj Chaudhary",
      gender: "",
      country: "Nepal",
      language: "English",
      timeZone: "(GMT+05:45) Nepal Time (Asia/Kathmandu)",
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    // You can also perform other actions here, such as sending data to a server
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className={`mt-1 block w-full border h-10 border-gray-300 rounded-md shadow-sm ${
                errors.fullName ? "border-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <input
              type="text"
              {...register("gender", { required: "Gender is required" })}
              className={`mt-1 block w-full border h-10 border-gray-300 rounded-md shadow-sm ${
                errors.gender ? "border-red-500" : ""
              }`}
            />
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country/Region</label>
            <input
              type="text"
              {...register("country", {
                required: "Country/Region is required",
              })}
              className={`mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm ${
                errors.country ? "border-red-500" : ""
              }`}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Language</label>
            <input
              type="text"
              {...register("language", { required: "Language is required" })}
              className={`mt-1 block w-full border h-10 border-gray-300 rounded-md shadow-sm ${
                errors.language ? "border-red-500" : ""
              }`}
            />
            {errors.language && (
              <p className="text-red-500 text-sm mt-1">
                {errors.language.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time Zone</label>
            <input
              type="text"
              {...register("timeZone", { required: "Time Zone is required" })}
              className={`mt-1 block h-10 w-full border border-gray-300 rounded-md shadow-sm ${
                errors.timeZone ? "border-red-500" : ""
              }`}
            />
            {errors.timeZone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.timeZone.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md mr-2"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
