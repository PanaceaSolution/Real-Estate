import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import UsersDetailsModal from "./users-details-modal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UsersTable = ({ filteredUsers }) => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead>Image</TableHead>
               <TableHead>First Name</TableHead>
               <TableHead>Last Name</TableHead>
               <TableHead>Email</TableHead>
               <TableHead>Status</TableHead>
               <TableHead>Action</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {filteredUsers.map((u) => (
               <TableRow key={u._id}>
                  <TableCell>
                     <Avatar>
                        {u.img && <AvatarImage src={u.img} alt={u.name} />}
                        <AvatarFallback className="font-semibold bg-primary text-white uppercase">
                           {u.name.charAt(0) + u.lastName.charAt(0)}
                        </AvatarFallback>
                     </Avatar>
                  </TableCell>
                  <TableCell className="font-medium text-lg capitalize">
                     {u.name}
                  </TableCell>
                  <TableCell className="font-medium text-lg capitalize">
                     {u.lastName}
                  </TableCell>
                  <TableCell className="font-medium">
                     {u.email}
                  </TableCell>
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
                        Verified
                     </Button>
                  </TableCell>
                  <TableCell>
                     <UsersDetailsModal u={u} />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}

export default UsersTable