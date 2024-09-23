import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

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
      <form onSubmit={onSubmit} className='flex flex-col space-y-3 py-3 font-medium'>
         <div className='grid gap-1 py-2'>
            <Label htmlFor="email" className='text-base ml-1'>Email</Label>
            <Input
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
               <p className='text-destructive text-sm ml-1'>
                  {errors.email.message}
               </p>
            }
         </div>
         <div className='grid gap-1 py-2'>
            <div className="flex items-center">
               <Label htmlFor="password" className='text-base ml-1'>Password</Label>
               <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
               >
                  Forgot your password?
               </Link>
            </div>

            <div className='relative'>
               <Input
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
               <Button
                  type="button"
                  variant='ghost'
                  size='sm'
                  onClick={togglePasswordVisibility}
                  className='absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray hover:underline'
               >
                  {showPassword ? 'Hide' : 'Show'}
               </Button>
            </div>
            {errors.password &&
               <p className='text-destructive text-sm ml-1'>
                  {errors.password.message}
               </p>
            }
         </div>
         <Button
            type="submit"
            className='bg-primary text-white rounded-md p-2'
            disabled={isSubmitting}
         >
            {isSubmitting ? 'Logging in...' : 'Login'}
         </Button>
      </form>
   );
};

export default SignInForm;
