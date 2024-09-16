import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

const initialUsers = [
   {
      id: 1,
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      role: 'Admin',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
   },
   {
      id: 2,
      fullname: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
   },
   {
      id: 3,
      fullname: 'Michael Johnson',
      email: 'michaeljohnson@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
   },
   {
      id: 4,
      fullname: 'Emily Davis',
      email: 'emilydavis@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
   },
   {
      id: 5,
      fullname: 'Chris Brown',
      email: 'chrisbrown@example.com',
      role: 'Admin',
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
   },
   {
      id: 6,
      fullname: 'Olivia Taylor',
      email: 'oliviataylor@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/6.jpg',
   },
   {
      id: 7,
      fullname: 'James Wilson',
      email: 'jameswilson@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
   },
   {
      id: 8,
      fullname: 'Sophia Martinez',
      email: 'sophiamartinez@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/8.jpg',
   },
   {
      id: 9,
      fullname: 'David Lee',
      email: 'davidlee@example.com',
      role: 'Admin',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
   },
   {
      id: 10,
      fullname: 'Isabella Thomas',
      email: 'isabellathomas@example.com',
      role: 'User',
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
   },
];


const Users = () => {

   const [userList, setUserList] = useState(initialUsers);

   const handleRoleChange = (userId, newRole) => {
      setUserList(prevUsers =>
         prevUsers.map(user =>
            user.id === userId ? { ...user, role: newRole } : user
         )
      );
   };

   const handleDelete = (userId) => {
      setUserList(prevUsers => prevUsers.filter(user => user.id !== userId));
   };

   return (
      <main className='w-full bg-base space-y-10'>

         <div className='w-[15%] bg-white p-4 rounded-2xl shadow-md shadow-shadow space-y-2'>
            <div className='bg-shadow rounded-full w-16 h-16 flex items-center justify-center '>
               <FaUsers className="text-3xl text-primary" />
            </div>
            <h2 className="text-lg font-medium mb-2">
               Total Users:
               <span className='font-bold text-xl text-primary'>{userList.length}</span>
            </h2>

         </div>

         <div className='bg-white p-4 rounded-2xl shadow-md shadow-shadow'>
            <h1 className="text-3xl font-bold mb-4 flex justify-center gap-2">
               Users
               <span className="text-primary">Table</span>
            </h1>

            <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-primary">
                  <thead>
                     <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Full Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-primary">
                     {userList.map((user) => (
                        <tr key={user.id}>
                           <td className="p-4 whitespace-nowrap">
                              <img className="h-14 w-14 rounded-full" src={user.img} alt={user.fullname} />
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              {user.fullname}
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              {user.email}
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              <select
                                 className="bg-white select select-md select-primary"
                                 value={user.role}
                                 onChange={(e) => handleRoleChange(user.id, e.target.value)}
                              >
                                 <option value="Admin">Admin</option>
                                 <option value="User">User</option>
                              </select>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              <button className="px-4 py-2 font-medium text-white bg-primary rounded-2xl hover:bg-primary/80">Save</button>
                              <button
                                 className="ml-2 px-4 py-2 font-medium text-white bg-danger rounded-2xl hover:bg-danger/80"
                                 onClick={() => handleDelete(user.id)}
                              >
                                 <MdDelete className="inline-block" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </main>
   );
};

export default Users;
