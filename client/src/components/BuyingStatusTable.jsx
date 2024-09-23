import React from "react";
import { Trash2 } from "lucide-react";
import Pagination from "../common/Pagination";
import { ownProperty, selectPropertyStatus } from "../redux/property/propertySlices";
import Loadding from "../common/Loadding";
import { useSelector, useDispatch } from "react-redux";

const getStatusColor = (status) => {
  switch (status) {
    case "Rejected":
      return "bg-red-400 text-red-800";
    case "Verified":
      return "bg-green-400 text-green-800";
    case "Pending":
      return "bg-yellow-400 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const BuyingStatusTable = () => {
  const data = useSelector(ownProperty);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Dispatch your delete action here
    // e.g., dispatch(deleteProductAsync(id));
  };
  const loadding = useSelector(selectPropertyStatus)

  return (
    <>
      {loadding && <Loadding />}
      <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-white">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">View Your Status</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all your activities. You can edit or delete
              existing ones.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              {data.length > 0
                ? <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          <span>Property</span>
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-500">
                          Created At
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          Status
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {data?.map((item) => (
                        <tr key={item?._id} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={item.imageUrl}
                                  alt={item.name || "Property Image"}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">
                              {new Date(item.createdAt).toLocaleDateString()} {/* Format the date as needed */}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                                item.status || "Pending" // Default to "Pending"
                              )}`}
                            >
                              {item.status || "Pending"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium cursor-pointer">
                            <Trash2
                              size={24}
                              color="#e01010"
                              onClick={() => handleDelete(item._id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                : <p>Add Properties to show here</p>
              }
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default BuyingStatusTable;
