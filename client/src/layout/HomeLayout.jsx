import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";

const HomeLayout = () => {
  const location = useLocation();

  // Check if the current path is one of the specified paths
  const isRootPath = ['/', '/aboutUs', '/search'].includes(location.pathname);

  return (
    <div>
      {/* Render different content based on the route */}
      {isRootPath && (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeLayout;
