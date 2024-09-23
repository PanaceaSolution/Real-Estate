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
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const PropertyDetailsModal = ({ property, handleUpdate }) => {
   const [status, setStatus] = useState(property.status || "Pending");

   const handleStatusChange = (value) => {
      setStatus(value);
   };

   const handleSave = () => {
      // Create a new FormData object
      const formData = new FormData();

      // Append form data fields
      formData.append('title', property.name);
      formData.append('address', property.address);
      formData.append('description', property.description);
      formData.append('price', property.price);
      formData.append('imagePublicId', property.imagePublicId);
      formData.append('imageUrl', property.imageUrl);
      // formData.append('status', status);

      handleUpdate({ formData, id: property._id });
   };

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button><FaEdit size={20} /></Button>
         </DialogTrigger>
         <DialogContent className="w-[400px] rounded-xl md:min-w-[800px] bg-card">
            <DialogHeader>
               <DialogTitle className="text-2xl font-bold">Property Details</DialogTitle>
               <DialogDescription className="mb-4">
                  Here you can view and edit the details of the selected property.
               </DialogDescription>
            </DialogHeader>
            <div className="border-none shadow-none grid gap-4">
               <div className='grid place-items-center'>
                  <img className="h-40 w-40 rounded-2xl" src={property.imageUrl} alt={property.name} />
               </div>

               <div className="space-y-4">
                  {/* Property Name */}
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Title</Label>
                     <Input
                        variant="outline"
                        disabled
                        className="font-bold text-lg capitalize col-span-3 border-black border"
                        defaultValue={property.name}
                     />
                  </div>
                  {/* Property Address */}
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Address</Label>
                     <Input
                        variant="outline"
                        disabled
                        className="font-bold text-lg capitalize col-span-3 border-black border"
                        defaultValue={property.address}
                     />
                  </div>
                  {/* Property Description */}
                  <div className='grid grid-cols-4 items-start gap-4'>
                     <Label>Description</Label>
                     <Textarea
                        variant="outline"
                        disabled
                        className="font-medium text-lg col-span-3 border-black border min-h-[200px]"
                        defaultValue={property.description}
                     />
                  </div>
                  {/* Property Price */}
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Price</Label>
                     <Input
                        variant="outline"
                        disabled
                        className="font-bold text-lg  col-span-3 border-black border"
                        defaultValue={`$${property.price}`}
                     />
                  </div>
                  {/* Property Created By */}
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Created By</Label>
                     <Input
                        variant="outline"
                        disabled
                        className="font-bold text-lg  col-span-3 border-black border capitalize"
                        defaultValue={property.createdby.name}
                     />
                  </div>
                  {/* Property Status */}
                  <div className='grid grid-cols-4 items-center gap-4'>
                     <Label>Status</Label>
                     <Select value={status} onValueChange={handleStatusChange}>
                        <SelectTrigger className="font-bold text-lg  col-span-3 border border-muted-foreground text-muted-foreground">
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

export default PropertyDetailsModal;
