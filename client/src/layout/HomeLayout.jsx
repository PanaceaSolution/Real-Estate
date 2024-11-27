import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
import Home from "@/pages/home";

const HomeLayout = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const isAdmin = location.pathname.startsWith("/admin");
  console.log(isAdmin)
  return (
    <div>

      {isRootPath && [<Navbar />, <Home />, <Footer />]}
      {!isRootPath && [<Navbar />, <Outlet />, <Footer />]}
    </div>
  );
};

export default HomeLayout;
