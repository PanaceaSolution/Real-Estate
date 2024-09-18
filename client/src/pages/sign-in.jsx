import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import logo from '../assets/logo1.png';
import { loginAsync, selectUsersStatus, selectUserError } from '../redux/auth/authSlices'; // Import from your slice
import SignInForm from '../components/sign-in-form';
import { Button } from '@/components/ui/button';

const SignInPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const status = useSelector(selectUsersStatus); // Fetch status from Redux
   const error = useSelector(selectUserError); // Fetch any errors from Redux

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm();

   const onSubmit = async (data) => {
      console.log(data);

      try {
         const res = await dispatch(loginAsync(data)).unwrap();
         console.log("Login successful", res);

         sessionStorage.setItem('user', JSON.stringify(res));
         navigate(from, { replace: true });
      } catch (error) {
         console.log("Login failed", error);
      }
   };

   return (
      <main className='flex items-center justify-center min-h-screen'>
         <div className="w-full lg:h-screen lg:grid lg:min-h-[600px] lg:grid-cols-3 xl:min-h-[800px]">

            <div className="col-span-1 flex items-center justify-center py-12 relative">
               <Link to="/">
                  <img src={logo} alt="Logo" className="absolute top-0 left-0 w-48 h-48" />
               </Link>
               <div className="mx-auto grid w-[350px] gap-6">
                  <div className="grid gap-2">
                     <h1 className='text-4xl text-primary font-bold'>Login</h1>
                     <p className="text-gray-500">Sign in to your account</p>
                  </div>
                  <div>
                     <SignInForm
                        register={register}
                        onSubmit={handleSubmit(onSubmit)}
                        errors={errors}
                        isSubmitting={isSubmitting || status === 'loading'} // Disable submit if loading
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
            <div className="col-span-2 hidden bg-muted lg:block">
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
