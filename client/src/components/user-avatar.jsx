import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logoutAsync, selectLoggedInUser } from "@/redux/auth/authSlices"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"


const UserAvatar = () => {
   const user = useSelector(selectLoggedInUser)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { token, logout } = useAuth();

   const handleLogout = async () => {
      if (token) {
         try {
            await dispatch(logoutAsync(token));
            logout()
            navigate('/sign-in', { replace: true });
         } catch (error) {
            console.error('Logout failed:', error);
         }
      }
   };
   return (
      <>
         {user
            ? <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                     <AvatarImage src={user?.image} alt={user?.name} />
                     <AvatarFallback className="font-semibold bg-primary text-white uppercase">
                        {user.name.charAt(0)}
                     </AvatarFallback>
                  </Avatar>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="capitalize">
                     {user.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                     <Link to='/dashboard'>
                        Profile
                     </Link>
                  </DropdownMenuItem>
                  {user?.role === 'admin' &&
                     <DropdownMenuItem asChild>
                        <Link to="/admin/users">
                           Admin Dashboard
                        </Link>
                     </DropdownMenuItem>
                  }
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <Button
                        variant="destructive"
                        className="w-full"
                        onClick={handleLogout}
                     >
                        Logout
                     </Button>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
            : <Link to="/sign-in">
               <Button size="sm">
                  Sign In
               </Button>
            </Link>
         }
      </>
   )
}

export default UserAvatar