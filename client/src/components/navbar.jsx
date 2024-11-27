import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from '../assets/logo1.png'
import { useState } from "react"
import UserAvatar from "./user-avatar"

const Navbar = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const [searchQuery, setSearchQuery] = useState('');

   const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
   };

   const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
   };

   const links = [
      { name: 'Home', path: '/' },
      { name: 'Properties', path: '/properties' },
      { name: 'AboutUs', path: '/aboutUs' },
   ];

   const isActive = (path) => {
      return location.pathname === path ? 'text-foreground' : 'text-muted-foreground hover:text-foreground';
   };

   return (
      <nav className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-20">
         <div className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-8">
            <Link
               href="/"
            >
               {/* <FaHome /> */}
               <img src={logo} alt="logo" className=" lg:h-80 w-auto object-contain" />
            </Link>
            {links.map((li) => (
               <Link
                  key={li.path}
                  className={`${isActive(li.path)} transition-colors`}
                  to={li.path}
               >
                  {li.name}
               </Link>
            ))}
         </div>
         <Sheet>
            <SheetTrigger asChild>
               <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
               >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-6 text-lg font-medium">
                  <Link
                     href="/"
                     className="flex items-center justify-center gap-2 text-lg font-semibold"
                  >
                     {/* <FaHome /> */}
                     <img src={logo} alt="logo" className=" h-60 w-auto object-contain" />
                  </Link>
                  {links.map((li) => (
                     <Link
                        key={li.path}
                        className={`${isActive(li.path)} transition-colors`}
                        to={li.path}
                     >
                        {li.name}
                     </Link>
                  ))}
               </nav>
            </SheetContent>
         </Sheet>
         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial" onSubmit={handleSearch}>
               <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                     type="search"
                     placeholder="Search products..."
                     className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                     value={searchQuery}
                     onChange={handleSearchChange}
                  />
               </div>
            </form>
            <UserAvatar />
         </div>
      </nav>
   )
}

export default Navbar