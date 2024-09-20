import React, { useEffect, useState } from 'react';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, selectUsersStatus, getAllUsersAsync, deleteUserByIdAsync, updateUserByIdAsync, } from '@/redux/auth/authSlices';
import UsersTable from '@/components/admin/users-table';

const Users = () => {
   const dispatch = useDispatch();
   const users = useSelector(selectUsers);
   const status = useSelector(selectUsersStatus);

   const [searchQuery, setSearchQuery] = useState("");
   // const [statusFilter, setStatusFilter] = useState("");

   useEffect(() => {
      if (status === "idle") {
         dispatch(getAllUsersAsync());
      }
   }, [dispatch]);

   const handleUpdate = (formData) => {
      dispatch(updateUserByIdAsync(formData));
   };


   const handleDelete = (id) => {
      dispatch(deleteUserByIdAsync(id));
   }

   const filteredUsers = users
      .filter((u) => {
         const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase());
         // const matchesStatus = statusFilter === "all" || statusFilter === "" || u.status === statusFilter;
         return matchesSearch;
      })
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
                  {/* <Select
                     value={statusFilter}
                     onValueChange={(value) => setStatusFilter(value)}
                  >
                     <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Verified">Verified</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                     </SelectContent>
                  </Select> */}
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
