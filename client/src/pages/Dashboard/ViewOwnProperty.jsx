import React, { useEffect, useState } from "react";
import { ArrowRight, EditIcon, Trash } from "lucide-react";
import DeleteModal from "../../common/DeleteModal";
import { useNavigate } from "react-router-dom";
import data from "../../../data.json";
import {
  getOwnPropertyAsync,
  ownProperty,
  resetMessages,
  resetIsCreated,
  selectPropertyStatus,
} from "../../redux/property/propertySlices";
import { useDispatch, useSelector } from "react-redux";
import Loadding from "../../common/Loadding";
const ViewOwnProperty = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openDeleteModal = (index) => {
    setItemToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleDelete = () => {
    console.log(`Deleting item ${itemToDelete}`);
    closeDeleteModal();
  };
  useEffect(() => {
    dispatch(getOwnPropertyAsync());
    return () => {
      dispatch(getOwnPropertyAsync());
    };
  }, []);
  const property = useSelector(ownProperty);
  const loadding = useSelector(selectPropertyStatus);
  console.log(property);
  return (
    <>
      {loadding && <Loadding />}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto flex flex-col">
          <div className="flex justify-start flex-col mr-auto border-b-2">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Your Verified Listed Property!
            </h1>
            <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quam voluptatibus.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {property?.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    className="object-cover w-full h-52"
                    src={
                      item.imageUrl ||
                      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                    }
                    alt={item.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/Edit-Property/${index}`);
                      }}
                      className="text-white p-2 mx-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    >
                      <EditIcon size={24} />
                    </button>

                    <button
                      className="text-red-500 p-2 mx-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDeleteModal(index);
                      }}
                    >
                      <Trash size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm tracking-wider text-blue-500 dark:text-blue-400">
                    {item.description}
                  </p>
                  <button
                    onClick={() => navigate(`/viewOwn-Property/${index}`)}
                    type="button"
                    className="inline-flex items-center rounded-md mt-4 bg-blue-400 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    See more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Delete Modal */}
            <DeleteModal
              isOpen={isDeleteModalOpen}
              itemToDelete={itemToDelete}
              onClose={closeDeleteModal}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewOwnProperty;
