import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/header";
import Home from "../pages/home";
import Footer from "../components/footer";
const HomeLayout = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <div>
      {isRootPath && [<Header />, <Home />, <Footer />]}
      {!isRootPath && [<Header />, <Outlet />, <Footer />]}
    </div>
  );
};

export default HomeLayout;
