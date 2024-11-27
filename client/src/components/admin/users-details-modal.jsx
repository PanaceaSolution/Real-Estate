import React, { useState } from 'react';
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   DialogDescription
} from "../ui/dialog";
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FaEdit } from 'react-icons/fa';
import { Avatar, AvatarFallback } from '../ui/avatar';

const UsersDetailsModal = ({ u, handleUpdate }) => {
   const [status, setStatus] = useState(u.status || "Verified");

   const handleStatusChange = (value) => {
      setStatus(value);
   };

   const handleSave = () => {
      // Create a new FormData object
      const formData = new FormData();

      // Append form data fields
      formData.append('id', u._id);
      formData.append('name', u.name);
      formData.append('lastName', u.lastName);
      formData.append('email', u.email);
      formData.append('role', u.role);
      formData.append('status', status);

      handleUpdate(formData);
   };

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button><FaEdit size={20} /></Button>
         </DialogTrigger>
         <DialogContent className="w-[400px] bg-card">
            <DialogHeader>
               <DialogTitle className="text-2xl font-bold">User Profile</DialogTitle>
               <DialogDescription className="mb-4">
                  Here you can view and edit the details of the selected user.
               </DialogDescription>
            </DialogHeader>
            <div className="border-none shadow-none grid gap-4">
               {u.img
                  ? <img className="h-40 w-40 rounded-2xl" src={u.img} alt={u.name} />
                  : <Avatar className="h-40 w-40">
                     <AvatarFallback className="font-semibold bg-primary text-white uppercase text-4xl">
                        {u.name.charAt(0) + u.lastName.charAt(0)}
                     </AvatarFallback>
                  </Avatar>
               }
               <div className="space-y-4">
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>First Name</Label>
                     <Button variant="outline" disabled className="font-bold text-xl capitalize col-span-3 border-black border-2">
                        {u.name}
                     </Button>
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Last Name</Label>
                     <Button variant="outline" disabled className="font-bold text-xl capitalize col-span-3 border-black border-2">
                        {u.lastName}
                     </Button>
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Email</Label>
                     <Button variant="outline" disabled className="font-bold text-xl col-span-3 border-black border-2">
                        {u.email}
                     </Button>
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Status</Label>
                     <Select value={status} onValueChange={handleStatusChange}>
                        <SelectTrigger className="col-span-3 border-2">
                           <SelectValue placeholder={status} />
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
               <Button size="lg" onClick={handleSave}>
                  Save
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default UsersDetailsModal;
