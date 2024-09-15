import { Link, useNavigate } from 'react-router-dom'
import SignInForm from '../components/sign-in-form';
import { useForm } from 'react-hook-form'

const SignInPage = () => {
   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm()

   const onSubmit = (data) => {
      console.log(data)
      navigate('/')
   }

   return (
      <main className='flex items-center justify-center h-screen'>
         <div className='font-medium w-[400px] bg-white border-2 border-black rounded-2xl p-4 '>
            <h1 className='text-4xl text-primary font-bold'>Login</h1>
            <p>Sign in to your account</p>
            <div className='flex flex-col mt-8 space-y-3'>
               <button className='border border-black rounded-3xl p-2 mb-6 flex items-center justify-center gap-3 bg-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                     <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                  Sign in with Google
               </button>
               <div className="flex items-center">
                  <hr className="flex-grow border-desc" />
                  <span className="mx-4 text-sm text-desc">or Sign in with Email</span>
                  <hr className="flex-grow border-desc" />
               </div>
            </div>
            <SignInForm
               register={register}
               onSubmit={handleSubmit(onSubmit)}
               errors={errors}
               isSubmitting={isSubmitting}
            />
            <div className='text-center text-base text-desc'>
               Don't have an account?
               <Link to="/sign-up" className='text-black text-lg hover:underline'> Sign up</Link>
            </div>
         </div>
      </main>
   )
}

export default SignInPage;
