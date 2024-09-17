import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const SecureRoute = () => {
   const user = JSON.parse(sessionStorage.getItem('user'));
   const location = useLocation();

   return (
      user
         ? <Outlet />
         : <Navigate to="/sign-in" state={{ from: location }} replace />
   )
};

export default SecureRoute