import React from 'react'
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

const UsersDetailsModal = ({ u }) => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button>View details</Button>
         </DialogTrigger>
         <DialogContent className="w-[400px] md:w-full bg-card">
            <DialogHeader>
               <DialogTitle className="text-2xl font-bold">User Profile</DialogTitle>
               <DialogDescription className="mb-4">
                  Here you can view and edit the details of the selected user.
               </DialogDescription>
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

export default UsersDetailsModal
