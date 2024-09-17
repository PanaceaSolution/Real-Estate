import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = ({
   register,
   onSubmit,
   errors,
   isSubmitting
}) => {
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState);
   };

   return (
      <form onSubmit={onSubmit} className='flex flex-col space-y-3 py-6'>
         <div className='py-2 flex flex-col'>
            <label htmlFor="email" className='text-lg font-medium ml-1'>Email*</label>
            <input
               type='text'
               {...register('email',
                  {
                     required: 'Email is required',
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address'
                     }
                  }
               )}
               placeholder='example@example.com'
               className='border-2 rounded-lg p-2'
            />
            {errors.email &&
               <p className='text-danger text-sm ml-1'>
                  {errors.email.message}
               </p>
            }
         </div>
         <div className='py-2 flex flex-col space-y-1'>
            <label htmlFor="password" className='text-lg font-medium ml-1'>Password*</label>
            <div className='relative'>
               <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password',
                     {
                        required: 'Password is required',
                        minLength: {
                           value: 6,
                           message: 'Password must be at least 6 characters long'
                        }
                     })}
                  placeholder='********'
                  className='border-2 rounded-lg p-2 w-full'
               />
               <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className='absolute right-3 top-3 text-sm text-gray '
               >
                  {showPassword ? 'Hide' : 'Show'}
               </button>
            </div>
            {errors.password &&
               <p className='text-danger text-sm ml-1'>
                  {errors.password.message}
               </p>
            }
            <Link to="/forgot-password" className='text-right text-sm font-medium hover:underline'>
               Forgot Password?
            </Link>
         </div>
         <button
            type="submit"
            className='bg-primary text-white rounded-md p-2'
            disabled={isSubmitting}
         >
            {isSubmitting ? 'Logging in...' : 'Login'}
         </button>
      </form>
   );
};

export default SignInForm;
