import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';

const initialUsers = [
   {
      id: 1,
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      role: 'Admin',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: 'Verified'
   },
   {
      id: 2,
      fullname: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'Verified'
   },
   {
      id: 3,
      fullname: 'Michael Johnson',
      email: 'michaeljohnson@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: 'Pending'
   },
   {
      id: 4,
      fullname: 'Emily Davis',
      email: 'emilydavis@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
      status: 'Rejected'
   },
   {
      id: 5,
      fullname: 'Chris Brown',
      email: 'chrisbrown@example.com',
      role: 'Admin',
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
      status: 'Verified'
   },
   {
      id: 6,
      fullname: 'Olivia Taylor',
      email: 'oliviataylor@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/6.jpg',
      status: 'Pending'
   },
   {
      id: 7,
      fullname: 'James Wilson',
      email: 'jameswilson@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
      status: 'Verified'
   },
   {
      id: 8,
      fullname: 'Sophia Martinez',
      email: 'sophiamartinez@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/8.jpg',
      status: 'Rejected'
   },
   {
      id: 9,
      fullname: 'David Lee',
      email: 'davidlee@example.com',
      role: 'Admin',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      status: 'Verified'
   },
   {
      id: 10,
      fullname: 'Isabella Thomas',
      email: 'isabellathomas@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
      status: 'Verified'
   },
];


const Users = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [statusFilter, setStatusFilter] = useState("");

   const filteredUsers = initialUsers
      .filter((u) => {
         // Apply search filter
         const matchesSearch = u.fullname.toLowerCase().includes(searchQuery.toLowerCase());

         // Apply status filter
         const matchesStatus = statusFilter === "all" || statusFilter === "" || u.status === statusFilter;

         return matchesSearch && matchesStatus;
      })
      .sort((a, b) => b.id - a.id); // Sort by biggest ID first




   return (
      <main className='w-full bg-base space-y-10'>

         <div className="grid grid-cols-4 xl:grid-cols-6 gap-4">
            <Card>
               <CardHeader>
                  <CardTitle className="text-primary">{initialUsers.length}</CardTitle>
               </CardHeader>
               <CardContent>Total Users</CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-green-700">{initialUsers.filter(user => user.status === 'Verified').length}</CardTitle>
               </CardHeader>
               <CardContent>Verified Users</CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-yellow-500">{initialUsers.filter(user => user.status === 'Pending').length}</CardTitle>
               </CardHeader>
               <CardContent> Pending Users</CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="text-destructive">{initialUsers.filter(user => user.status === 'Rejected').length}</CardTitle>
               </CardHeader>
               <CardContent> Rejected Users</CardContent>
            </Card>
         </div>

         <Card>
            <CardHeader>
               <CardTitle className="text-4xl font-bold">
                  User
                  <span className="text-primary ml-2">Table</span>
               </CardTitle>
               <CardDescription className="text-sm font-medium leading-none">
                  Total {initialUsers.length} Users Found
               </CardDescription>
               <CardDescription className="pt-6 w-full">
                  {/* Search input */}
                  <Input
                     type="text"
                     placeholder="Search users..."
                     className="px-4 py-2 mb-4 border rounded-2xl  w-full md:w-1/2"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {/* Status filter */}
                  <Select
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
                  </Select>
               </CardDescription>
            </CardHeader>
            <CardContent>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {filteredUsers.map((u) => (
                        <TableRow key={u.id}>
                           <TableCell>
                              <img className="h-10 md:h-20 w-20 rounded-xl" src={u.img} alt={u.fullname} />
                           </TableCell>
                           <TableCell className="font-medium text-lg">{u.fullname}</TableCell>
                           <TableCell className="font-medium">{u.email}</TableCell>
                           <TableCell>
                              <Button
                                 className={`${u.status === 'Verified'
                                    ? 'bg-green-300 '
                                    : u.status === 'Pending'
                                       ? 'bg-yellow-200 '
                                       : u.status === 'Rejected'
                                       && 'bg-red-400 '
                                    } uppercase text-black`}
                              >
                                 {u.status}
                              </Button>
                           </TableCell>
                           <TableCell>
                              <Modal u={u} />
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </CardContent>
         </Card>
      </main>
   );
};

export default Users;

const Modal = ({ u }) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button>View details</Button>
         </DialogTrigger>
         <DialogContent className="w-[400px] md:w-full bg-card">
            <DialogHeader>
               <DialogTitle className="text-2xl font-bold">
                  User Profile
               </DialogTitle>
            </DialogHeader>
            <div className="border-none shadow-none grid md:grid-cols-2 gap-4">
               <img className="h-40 w-40 rounded-2xl" src={u.img} alt={u.fullname} />
               <div className="space-y-4">
                  <div className='flex flex-col gap-1'>
                     <Label className="text-xl">Full Name</Label>
                     <Button variant="outline" disabled className="font-bold text-xl">{u.fullname}</Button>
                  </div>
                  <div className='flex flex-col gap-1'>
                     <Label className="text-xl">Email</Label>
                     <Button variant="outline" disabled className="font-bold w-full">{u.email}</Button>
                  </div>
                  <div className='flex flex-col gap-1'>
                     <Label className="text-xl">Status</Label>
                     <Select>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="Verified">Verified</SelectItem>
                           <SelectItem value="Pending">Pending</SelectItem>
                           <SelectItem value="Rejected">Rejected</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>
            </div>
            <DialogFooter>
               <Button type="submit">Save changes</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}
