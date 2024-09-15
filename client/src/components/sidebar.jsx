import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
   const location = useLocation()

   // Define the links and their paths
   const links = [
      { name: 'Users', path: '/admin/users' },
      { name: 'Properties', path: '/admin/properties' },
   ]

   // Determine if the current path matches the link's path
   const isActive = (path) => location.pathname === path ? 'text-primary' : 'text-black'

   return (
      <aside className="grid gap-4 text-sm">
         {links.map(({ name, path }) => (
            <Link
               key={path}
               className={`${isActive(path)} text-lg font-medium bg-shadow px-4 py-2 rounded-2xl hover:bg-primary hover:text-white`}
               to={path}
            >
               {name}
            </Link>
         ))}
      </aside>
   )
}

export default Sidebar
