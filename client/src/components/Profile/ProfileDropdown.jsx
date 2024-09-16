import React, { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const profileDropdown = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileDropdown.current &&
        !profileDropdown.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        <p className="w-10 h-10 rounded-full flex justify-center items-center text-green-600 text-lg font-semibold">
          A
        </p>
      </button>

      {isDropdownOpen && (
        <div
          ref={profileDropdown}
          className="z-50 absolute top-12 right-0 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown-user"
        >
          <div className="px-4 py-3">
            <p className="text-sm text-gray-900 dark:text-white">Sukraj</p>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
              Sukraj Chaudhary
            </p>
          </div>
          <ul className="py-1">
            <li>
              <button
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
             
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
