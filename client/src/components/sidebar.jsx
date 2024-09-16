import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUsers } from "react-icons/fa";

const Sidebar = () => {
   const location = useLocation()

   // Define the links and their paths
   const links = [
      { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
      { name: 'Properties', path: '/admin/properties', icon: <FaHome /> },
   ]

   // Determine if the current path matches the link's path
   const isActive = (path) => {
      return location.pathname === path ? 'bg-primary text-white' : 'text-primary hover:bg-shadow'
   }

   return (
      <aside className="grid gap-4 text-sm">

         {links.map((li) => (
            <Link
               key={li.path}
               className={`${isActive(li.path)} text-lg font-medium px-4 py-2 rounded-2xl flex items-center gap-2`}
               to={li.path}
            >
               {li.icon}
               {li.name}
            </Link>
         ))}

      </aside>
   )
}

export default Sidebar