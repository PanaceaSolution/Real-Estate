import React from 'react';
import { Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation, } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import UserAvatar from '../user-avatar';

const AdminHeader = () => {
   const location = useLocation();

   // Define the links and their paths
   const links = [
      { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
      { name: 'Properties', path: '/admin/properties', icon: <FaHome /> },
   ];

   // Determine if the current path matches the link's path
   const isActive = (path) => {
      return location.pathname === path ? 'bg-primary text-white' : 'text-primary hover:bg-shadow';
   };

   return (
      <nav className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 justify-between">
         <div className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link to="/">
               <Home />
            </Link>
         </div>

         <Sheet>
            <SheetTrigger asChild>
               <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 lg:hidden"
               >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-4 text-lg font-medium">
                  <div className="mx-auto grid w-full gap-2 my-6">
                     <h1 className="text-3xl font-bold flex gap-2">
                        Admin
                        <span className="text-primary">Dashboard</span>
                     </h1>
                  </div>
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
               </nav>
            </SheetContent>
         </Sheet>

         <UserAvatar />
      </nav>
   );
};

export default AdminHeader;
