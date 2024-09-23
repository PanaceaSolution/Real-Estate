import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import PropertyDetailsModal from "./properties-details-modal";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const PropertiesTable = ({ filteredProperties, handleUpdate, handleDelete }) => {
   const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
   const [propertyToDelete, setPropertyToDelete] = useState(null);

   const openDeleteConfirmation = (property) => {
      setPropertyToDelete(property);
      setIsDeleteConfirmationOpen(true);
   };

   const confirmDelete = () => {
      if (propertyToDelete) {
         handleDelete({
            id: propertyToDelete._id,
            public_id: propertyToDelete.imagePublicId
         });
         setPropertyToDelete(null);
      }
      setIsDeleteConfirmationOpen(false);
   };


   // Utility function to get status class
   const getStatusClass = (status) => {
      switch (status) {
         case "verified":
            return "bg-green-300";
         case "pending":
            return "bg-yellow-200";
         case "rejected":
            return "bg-red-400";
         default:
            return "text-white";
      }
   };

   return (
      <>
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Created By</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {filteredProperties.map((p) => (
                  <TableRow key={p._id}>
                     <TableCell>
                        <img
                           className="h-10 md:h-20 w-20 rounded-xl"
                           src={p.imageUrl}
                           alt={p.name}
                        />
                     </TableCell>
                     <TableCell className="font-medium text-lg capitalize">
                        {p.name}
                     </TableCell>
                     <TableCell className="font-medium capitalize">
                        {p.createdby?.name}
                     </TableCell>
                     <TableCell>
                        <Button
                           className={`${getStatusClass(p.status)} uppercase`}
                        >
                           {p.status === "verified" ? "verified" : "pending"}
                        </Button>
                     </TableCell>
                     <TableCell className="flex items-center gap-2">
                        <PropertyDetailsModal
                           property={p}
                           handleUpdate={handleUpdate}
                        />
                        <Button
                           variant="destructive"
                           onClick={() => openDeleteConfirmation(p)}
                        >
                           <MdDelete size={20} />
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>

         {/* Confirmation Dialog */}
         {isDeleteConfirmationOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
               <div className="bg-white p-5 rounded shadow-md">
                  <h2 className="text-lg font-bold">Confirm Deletion</h2>
                  <p>Are you sure you want to delete this property?</p>
                  <div className="flex justify-end mt-4">
                     <Button onClick={() => setIsDeleteConfirmationOpen(false)}>Cancel</Button>
                     <Button variant="destructive" onClick={confirmDelete} className="ml-2">Delete</Button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default PropertiesTable;
