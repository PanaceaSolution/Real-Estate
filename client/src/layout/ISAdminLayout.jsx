import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
const ISAdminLayout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return <div>{isAdmin && [<Header />, <Outlet />, <Footer />]}</div>;
};

export default ISAdminLayout;
