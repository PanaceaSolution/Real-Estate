import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminRoute = ({ isAdmin }) => {
   const user = JSON.parse(sessionStorage.getItem('user'));
   const location = useLocation();

   return (
      user && user?.role === isAdmin
         ? <Outlet />
         : <Navigate to="/sign-in" state={{ from: location }} replace />
   )
};

export default AdminRoute