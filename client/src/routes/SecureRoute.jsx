import { selectLoggedInUser } from '@/redux/auth/authSlices';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const SecureRoute = () => {
   const user = useSelector(selectLoggedInUser);
   const { token } = useAuth()
   const location = useLocation();

   if (!user || !token) {
      // User is not logged in, redirect to sign-in page
      return <Navigate to="/sign-in" state={{ from: location }} replace />;
   }

   // User is logged in and is an admin, render the child components
   return <Outlet />;
};

export default SecureRoute