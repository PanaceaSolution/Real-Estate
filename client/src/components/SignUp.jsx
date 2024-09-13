import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.fullName) validationErrors.fullName = 'Full Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = 'Passwords do not match';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className='bg-slate-100'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
            <form action="#" method="POST" className="mt-4" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className={`flex h-10 w-full rounded-md border ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                        errors.fullName ? 'focus:ring-red-500' : 'focus:ring-gray-400'
                      }`}
                      type="text"
                      placeholder="Full Name"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className={`flex h-10 w-full rounded-md border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                        errors.email ? 'focus:ring-red-500' : 'focus:ring-gray-400'
                      }`}
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-sm text-gray-600 hover:underline"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      className={`flex h-10 w-full rounded-md border ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                        errors.password ? 'focus:ring-red-500' : 'focus:ring-gray-400'
                      }`}
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder="Password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900">
                      Confirm Password
                    </label>
                    <button
                      type="button"
                      className="text-sm text-gray-600 hover:underline"
                      onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    >
                      {confirmPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      className={`flex h-10 w-full rounded-md border ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      } bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                        errors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-gray-400'
                      }`}
                      type={confirmPasswordVisible ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>
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
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
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
        <div className="h-full w-full">
          <img
            loading="lazy"
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://img.freepik.com/free-photo/real-estate-housing-brokerage-concept_53876-120663.jpg?t=st=1725874120~exp=1725877720~hmac=ea75920a82c99bdd6d6e02b5f53e282c44b8e0cc7f6fd2bfe7e13dcfb5904e70&w=740"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
