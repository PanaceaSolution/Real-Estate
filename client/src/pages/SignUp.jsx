import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from '@/redux/auth/authSlices';
import { signupAsync } from '@/redux/auth/authSlices';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector(selectAuthStatus);

  // Initialize the useForm hook with validation rules
  const { register, 
    handleSubmit, 
    formState: { errors },
     watch } = useForm({

    defaultValues: {
      name: '',
      lastName:'',
      email: '',
      password: '',
      
    }
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    console.log(data);
    try {
       await dispatch(signupAsync(data)).unwrap();
       navigate("/");
    } catch (error) {
       console.log("signup failed", error);
    }
 };

  return (
    <div>
      <section className="rounded-md">
        <div className="flex items-center justify-center bg-white px-4 py-2 sm:px-6 sm:py-2 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border-2 rounded-md p-5">
            <h2 className="text-2xl font-bold leading-tight text-black">Sign up to create an account</h2>
            <p className="mt-1 text-base text-gray-600">
              Already have an account?{' '}
              <Link
                to="/sign-in"
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">First Name</label>
                  <div className="mt-2">
                    <input
                      {...register('name', { required: 'First Name is required' })}
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      type="text"
                      placeholder="First Name"
                      id="name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">Last Name</label>
                  <div className="mt-2">
                    <input
                      {...register('lastName', { required: 'Last Name is required' })}
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      type="text"
                      placeholder="Last Name"
                      id="name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      type="email"
                      placeholder="Email"
                      id="email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">Password</label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      {...register('password', {
                        required: 'Password is required',
                        pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                          message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
                        }
                      })}
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      id="password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                  </div>
                </div>
                {/* <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900">Confirm Password</label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value => value === watch('password') || 'Passwords do not match'
                      })}
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      id="confirmPassword"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                  </div>
                </div> */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
