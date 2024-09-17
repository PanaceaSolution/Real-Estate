import React from "react";
import { Trash2 } from "lucide-react";
import Pagination from "../common/Pagination";

const people = [
  {
    name: "Nepal Tara Hotel",
    title: "Front-end Developer",
    department: "Engineering",
    email: "john@devui.com",
    role: "Developer",
    status: "Pending",
    image:
      "https://media.istockphoto.com/id/487042276/photo/hotel-sign.jpg?s=2048x2048&w=is&k=20&c=DN8vdPYnwDU_gy78HbaHVZfI0Ok7gyEJRgt8tiWpeM8=",
  },
  {
    name: "Jane Doe",
    title: "Back-end Developer",
    department: "Engineering",
    email: "jane@devui.com",
    role: "CTO",
    status: "Rejected",
    image:
      "https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=1024x1024&w=is&k=20&c=sL_DBf0mzXr42cuccoVJr1RT5Q4O1e_PEa_WG0OLIzk=",
  },
  {
    name: "Alice Smith",
    title: "Marketing Manager",
    department: "Marketing",
    email: "alice@devui.com",
    status: "Verified",
    role: "Manager",
    image:
      "https://media.istockphoto.com/id/964219572/photo/hotel-dining.jpg?s=1024x1024&w=is&k=20&c=ZJD2dX_xFPHbCV9N20pY0Z4wlG_dOzkf2n6jUEF7V-w=",
  },
  {
    name: "Robert Johnson",
    title: "Guest Relations Specialist",
    department: "Customer Service",
    email: "robert@devui.com",
    role: "Specialist",
    status: "Pending",
    image:
      "https://media.istockphoto.com/id/1062240104/photo/hotel-lobby.jpg?s=1024x1024&w=is&k=20&c=TI7LTnYJ6XsAHS0H0zNB1A7Yf72ipwFhYYwmN3NxY34=",
  },
  {
    name: "Emily Davis",
    title: "Operations Coordinator",
    department: "Operations",
    email: "emily@devui.com",
    role: "Coordinator",
    status: "Pending",
    image:
      "https://media.istockphoto.com/id/1174963018/photo/hotel-reception.jpg?s=1024x1024&w=is&k=20&c=8J3c1YYF4OwbsKZ6g9Ri1W6eWm8Wn8G3anld3PfOce0=",
  },
];

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
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
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
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Property</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr
                        key={person.name}
                        className="divide-x divide-gray-200"
                      >
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.department}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                              person.status
                            )}`}
                          >
                            {person.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium cursor-pointer">
                          <Trash2 size={24} color="#e01010" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </>
  );
};

export default BuyingStatusTable;
