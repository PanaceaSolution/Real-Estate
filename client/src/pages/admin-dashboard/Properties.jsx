import { useEffect, useState } from "react";

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
   DeletedStatus,
   deleteProductAsync,
   editProductAsync,
   getAllProductsAsync,
   resetIsDeleted,
   selectAllProducts,
   selectPropertyStatus,
} from "@/redux/property/propertySlices";
import PropertiesTable from "@/components/admin/properties-table";
import Loadding from "@/common/Loadding";
import toast from "react-hot-toast";

export default function Component() {
   const [searchQuery, setSearchQuery] = useState("");

   const dispatch = useDispatch();
   const properties = useSelector(selectAllProducts);
   const loading = useSelector(selectPropertyStatus);
   const isDeleted = useSelector(DeletedStatus);

   useEffect(() => {
      dispatch(getAllProductsAsync());
   }, [dispatch]);


   const handleUpdate = (formData, id) => {
      dispatch(editProductAsync(formData, id));
   };

   const handleDelete = ({ id, public_id }) => {
      dispatch(deleteProductAsync({ id, public_id }));
   }

   useEffect(() => {
      if (isDeleted) {
         toast.success("Deleted Successfully!");
         dispatch(resetIsDeleted());
      }
   }, [isDeleted, dispatch]);

   // Handle search and sorting
   const filteredProperties = properties
      .filter((p) =>
         p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.id - a.id); // Sort by biggest ID first

   // Loading and error handling

   return (
      <>
         {loading && <Loadding />}
         <main className="w-full bg-base">
            <Card>
               <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                     Property
                     <span className="text-primary ml-2">Table</span>
                  </CardTitle>
                  <CardDescription className="pt-6 w-[300px]">
                     {/* Search input */}
                     <Input
                        type="text"
                        placeholder="Search properties..."
                        className="px-4 py-2 mb-4 border rounded-2xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <PropertiesTable
                     filteredProperties={filteredProperties}
                     handleUpdate={handleUpdate}
                     handleDelete={handleDelete}
                  />
               </CardContent>
            </Card>
         </main>
      </>
   );
}
