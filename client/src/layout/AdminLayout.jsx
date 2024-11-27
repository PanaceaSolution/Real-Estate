import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import AdminHeader from '@/components/admin/admin-header'

const AdminLayout = () => {
   return (
      <main>
         <AdminHeader />
         <div className="flex flex-1 flex-col gap-4">
            <div className="mx-auto grid w-full items-start grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 ">
               <div className='w-full col-span-1 min-h-screen hidden lg:block'>
                  <Sidebar />
               </div>

               <div className='px-2 py-4 md:p-8 lg:col-span-3 xl:col-span-4'>
                  <Outlet />
               </div>
            </div>
         </div>
      </main>
   )
}

export default AdminLayout