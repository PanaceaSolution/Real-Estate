import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = ({
   handleSubmit,
   email,
   setEmail,
   password,
   setPassword,
   submitting,
   error
}) => {
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState);
   };

   return (
      <form onSubmit={handleSubmit} className='flex flex-col space-y-3 py-6'>
         <div className='py-2 flex flex-col'>
            <label htmlFor="email" className='text-lg font-medium'>Email*</label>
            <input
               id="email"
               type="text"
               placeholder='example@example.com'
               className='border-2 rounded-xl p-2'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            {error.email &&
               <p aria-live="assertive" className='text-red-500 text-sm'>
                  {error.email}
               </p>
            }
         </div>
         <div className='py-2 flex flex-col space-y-1'>
            <label htmlFor="password" className='text-lg font-medium'>Password*</label>
            <div className='relative'>
               <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder='********'
                  className='border-2 rounded-xl p-2 w-full'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className='absolute right-3 top-3 text-sm text-gray-600'
               >
                  {showPassword ? 'Hide' : 'Show'}
               </button>
            </div>
            {error.password &&
               <p aria-live="assertive" className='text-red-500 text-sm'>
                  {error.password}
               </p>
            }
            <Link to="/forgot-password" className='text-right text-sm font-medium'>
               Forgot Password?
            </Link>
         </div>
         <button
            type="submit"
            className='bg-black text-white rounded-md p-2'
            disabled={submitting}
         >
            {submitting ? 'Logging in...' : 'Login'}
         </button>
      </form>
   );
};

export default SignInForm;
