import React, { useRef, useState, useEffect } from "react";
import { ChartNoAxesColumnIncreasing, Eye, LayoutDashboard, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const useSidebar = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (useSidebar.current && !useSidebar.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [useSidebar, setSidebarOpen]);

  return (
    <aside
      ref={useSidebar}
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-all ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/dashboard"
              className={`${location.pathname === "/dashboard"
                  ? "bg-red-300 hover:bg-red-500"
                  : ""
                }group flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
            >
              <LayoutDashboard className="w-5 h-5 group-hover:animate-bounce text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Profile</span>
            </Link>
          </li>

          <li>
            <Link
              to="/user-stats"
              className={`${location.pathname.startsWith("/user-stats")
                  ? "bg-red-300 hover:bg-red-500"
                  : ""
                } flex items-center group p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
            >

              <ChartNoAxesColumnIncreasing className="flex-shrink-0 group-hover:animate-bounce w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">
                View Your Details
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`${location.pathname.startsWith("/setting")
                  ? "bg-red-600 hover:bg-red-500"
                  : ""
                } flex items-center group p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
            >

              <Settings className="flex-shrink-0 group-hover:animate-bounce w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Setting
              </span>
            </Link>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default SidebarMenu;