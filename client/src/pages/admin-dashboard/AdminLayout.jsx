import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar'

const AdminLayout = () => {
   return (
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
         <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl lg:text-5xl font-bold flex gap-2">
               Admin
               <span className="text-primary">Dashboard</span>
            </h1>
         </div>
         <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <Sidebar />
            <div className="grid gap-6">
               <Outlet />
            </div>
         </div>
      </main>
   )
}

export default AdminLayout