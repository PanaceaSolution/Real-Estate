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
import { selectUsers, selectUsersStatus, getAllUsersAsync, } from '@/redux/auth/authSlices';
import UsersTable from '@/components/admin/users-table';
import Cookies from 'js-cookie';

const Users = () => {
   const dispatch = useDispatch();
   const users = useSelector(selectUsers);
   const status = useSelector(selectUsersStatus);

   const [searchQuery, setSearchQuery] = useState("");
   // const [statusFilter, setStatusFilter] = useState("");

   const storedToken = Cookies.get('token');

   useEffect(() => {
      if (storedToken && status === "idle") {
         dispatch(getAllUsersAsync(storedToken));
      }
   }, [storedToken, dispatch]);

   const filteredUsers = users
      .filter((u) => {
         const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase());
         // const matchesStatus = statusFilter === "all" || statusFilter === "" || u.status === statusFilter;
         return matchesSearch;
      })
      .sort((a, b) => b.id - a.id);

   return (
      <main className='w-full bg-base space-y-10'>
         {/* <div className="grid grid-cols-4 xl:grid-cols-6 gap-4">
            <Card>
               <CardHeader>
                  <CardTitle className="text-primary">{users.length}</CardTitle>
               </CardHeader>
               <CardContent>Total Users</CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-green-700">
                     {users.filter(user => user.status === 'Verified').length}
                  </CardTitle>
               </CardHeader>
               <CardContent>Verified Users</CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-yellow-500">
                     {users.filter(user => user.status === 'Pending').length}
                  </CardTitle>
               </CardHeader>
               <CardContent>Pending Users</CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-destructive">
                     {users.filter(user => user.status === 'Rejected').length}
                  </CardTitle>
               </CardHeader>
               <CardContent>Rejected Users</CardContent>
            </Card>
         </div> */}

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
               />
            </CardContent>
         </Card>
      </main>
   );
};

export default Users;
