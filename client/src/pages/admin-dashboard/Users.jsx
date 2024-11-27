import React, { useEffect, useState } from 'react';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from 'react-redux';
import {
   selectUsers,
   selectUserStatus,
   getAllUsersAsync,
   deleteUserByIdAsync,
   updateUserByIdAsync,
} from '../../redux/user/userSlices';
import UsersTable from '@/components/admin/users-table';

const Users = () => {
   const dispatch = useDispatch();
   const users = useSelector(selectUsers);
   const status = useSelector(selectUserStatus);

   const [searchQuery, setSearchQuery] = useState("");

   // Fetch users only when status is 'idle'
   useEffect(() => {
      if (status === "idle") {
         dispatch(getAllUsersAsync());
      }
   }, [status, dispatch]);

   const handleUpdate = (formData) => {
      dispatch(updateUserByIdAsync(formData));
   };

   const handleDelete = (id) => {
      dispatch(deleteUserByIdAsync(id));
   };

   const filteredUsers = users
      ?.filter((user) =>
         user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.id - a.id);

   return (
      <main className='w-full bg-base space-y-10'>
         <Card>
            <CardHeader>
               <CardTitle className="text-4xl font-bold">
                  User
                  <span className="text-primary ml-2">Table</span>
               </CardTitle>
               <CardDescription className="text-sm font-medium leading-none">
                  Total {users.length} Users Found
               </CardDescription>
               <CardDescription className="pt-6 w-full">
                  <Input
                     type="text"
                     placeholder="Search users..."
                     className="px-4 py-2 mb-4 border rounded-2xl w-full md:w-1/2"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </CardDescription>
            </CardHeader>
            <CardContent>
               <UsersTable
                  filteredUsers={filteredUsers}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
               />
            </CardContent>
         </Card>
      </main>
   );
};

export default Users;
