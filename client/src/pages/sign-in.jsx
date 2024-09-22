import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { loginAsync, selectUsersStatus } from '../redux/auth/authSlices';
import SignInForm from '../components/sign-in-form';
import { Button } from '@/components/ui/button';
import { IoMdArrowRoundBack } from "react-icons/io";

const SignInPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const status = useSelector(selectUsersStatus);

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm();

   const onSubmit = async (data) => {
      try {
         await dispatch(loginAsync(data)).unwrap();
         navigate(from || "/", { replace: true });
      } catch (error) {
         console.log("Login failed", error);
      }
   };


   return (
      <main className='flex items-center justify-center min-h-screen'>
         <div className="w-full h-screen lg:grid lg:grid-cols-3">

            <div className="col-span-1 flex items-center justify-center py-12 relative h-full">
               <div className="mx-auto grid w-[350px] gap-6">
                  <Button className='w-28 flex items-center gap-1' size="sm" variant="outline" onClick={() => navigate(-1)}>
                     <IoMdArrowRoundBack size={20} />
                     Go Back
                  </Button>
                  <div className="grid gap-2">
                     <h1 className='text-4xl text-primary font-bold'>Login</h1>
                     <p className="text-gray-500">Sign in to your account</p>
                  </div>
                  <div>
                     <SignInForm
                        register={register}
                        onSubmit={handleSubmit(onSubmit)}
                        errors={errors}
                        isSubmitting={isSubmitting}
                     />
                     <Button
                        variant="outline"
                        className="w-full bg-white flex items-center gap-2"
                        disabled={status === 'loading'}
                     >
                        <FcGoogle size={20} />Login with Google
                     </Button>
                     <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to="/sign-up" className="underline">
                           Sign up
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-span-2 hidden lg:block">
               <img
                  src="https://images.unsplash.com/photo-1631821938164-9383abac340c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image"
                  width="1920"
                  height="1080"
                  className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
               />
            </div>
         </div>
      </main>
   );
}

export default SignInPage;
