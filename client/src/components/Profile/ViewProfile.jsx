import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserError,
  getAllUsersAsync,
  selectUsers,
  selectUsersStatus,
} from "../../redux/auth/authSlices";
import Loadding from "../../common/Loadding";

const ViewProfile = memo(() => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const status = useSelector(selectUsersStatus);
  const error = useSelector(selectUserError);

  useEffect(() => {
    dispatch(getAllUsersAsync());

    
  }, [dispatch]); 

  if (status === "loading") {
    return <Loadding/>
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  console.log(users)

  return (
    <section>
      <div className="max-w-7xl mx-auto p-4 rounded-md grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-auto">
        {/* Profile Section */}
        <div className="col-span-1 lg:col-span-3 p-4 bg-gray-100 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-black-and-white-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
              />
              <div>
                <p className="font-semibold">Sukraj Chaudhary</p>
              </div>
            </div>
            <button className="bg-green-500 h-9 w-24 border-2 border-black rounded text-white">
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Full Name</p>
              <p>Sukraj Chaudhary</p>
            </div>
            <div>
              <p className="font-semibold">Gender</p>
              <p>I’d prefer not to say</p>
            </div>
            <div>
              <p className="font-semibold">Country/Region</p>
              <p>Nepal</p>
            </div>
            <div>
              <p className="font-semibold">Language</p>
              <p>English</p>
            </div>
            <div>
              <p className="font-semibold">Time Zone</p>
              <p>(GMT+05:45) Nepal Time (Asia/Kathmandu)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ViewProfile;
