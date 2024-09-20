import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(null);

   useEffect(() => {
      const storedToken = Cookies.get('token');
      if (storedToken) {
         setToken(storedToken);
      }
   }, []);

   const logout = () => {
      Cookies.remove('token');
      setToken(null);
   }

   return (
      <AuthContext.Provider value={{ token, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
   return useContext(AuthContext);
};
