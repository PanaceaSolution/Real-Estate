import { properties } from "../../properties";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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



export default function Component() {
   const [searchQuery, setSearchQuery] = useState("");

   const handleEdit = (id) => {
      console.log(id);

   };

   // Handle search and sorting
   const filteredProperties = properties
      .filter((p) =>
         p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.id - a.id); // Sort by biggest ID first

   return (
      <main className='w-full bg-base'>
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
                        <TableRow key={p.id}>
                           <TableCell>
                              <img className="h-10 md:h-20 w-20 rounded-xl" src={p.image} alt={p.title} />
                           </TableCell>
                           <TableCell className="font-medium text-lg">{p.title}</TableCell>
                           <TableCell className="font-medium">{p.createdBy}</TableCell>
                           <TableCell>
                              <Button
                                 className={`${p.status === 'verified'
                                    ? 'bg-green-300 '
                                    : p.status === 'pending'
                                       ? 'bg-yellow-200 '
                                       : p.status === 'rejected'
                                       && 'bg-red-400 '
                                    } uppercase text-black`}
                              >
                                 {p.status}
                              </Button>
                           </TableCell>
                           <TableCell>
                              <Button
                                 onClick={() => handleEdit(p.id)}
                              >
                                 View Details
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </CardContent>
         </Card>

      </main>
   );
}
