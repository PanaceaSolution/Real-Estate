import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

//Public pages
import AboutUs from "./pages/AboutUs";
import SignInPage from "./pages/sign-in";
import SignUp from "./components/SignUp";
import Home from "./pages/home";
import Search from "./pages/search";
import PageNotFound from "./pages/page-not-found";

//Private routes
import SecureRoute from "./routes/SecureRoute";
import AdminRoute from "./routes/AdminRoute";

//Admin Pages
import Users from "./pages/admin-dashboard/Users";
import Properties from "./pages/admin-dashboard/Properties";

//User Pages
import UserDashboard from "./pages/Dashboard/UserDashboard";
import DefaultLayout from "./layout/DefaultLayout";
import UserStats from "./components/UserStats";
import AddUserOwnProperty from "./pages/Dashboard/AddProperty";
import ViewOwnProperty from "./pages/Dashboard/ViewOwnProperty";
import ViewSingleProperty from "./pages/Dashboard/ViewSingleProperty";
import EditProperty from "./pages/Dashboard/EditProperty";

//Home Layout & Admin Layout
import HomeLayout from "./layout/HomeLayout";
import AdminLayout from "./layout/AdminLayout";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-base">
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/search" element={<Search />} />
            </Route>

            {/* Login & Signup Routes */}
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Admin Routes */}
            <Route element={<AdminRoute isAdmin="admin" />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/properties" element={<Properties />} />
              </Route>
            </Route>

            {/* User Routes */}
            <Route element={<SecureRoute />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route
                path="/user-stats"
                element={
                  <DefaultLayout>
                    <UserStats></UserStats>
                  </DefaultLayout>
                }
              />
              <Route
                path="/add-property"
                element={
                  <DefaultLayout>
                    <AddUserOwnProperty></AddUserOwnProperty>
                  </DefaultLayout>
                }
              />
              <Route
                path="/view-property"
                element={
                  <DefaultLayout>
                    <ViewOwnProperty></ViewOwnProperty>
                  </DefaultLayout>
                }
              />
              <Route
                path="/viewOwn-Property/:id"
                element={
                  <DefaultLayout>
                    <ViewSingleProperty></ViewSingleProperty>
                  </DefaultLayout>
                }
              />
              <Route
                path="/Edit-Property/:id"
                element={
                  <DefaultLayout>
                    <EditProperty />
                  </DefaultLayout>
                }
              />
            </Route>


            {/* Catch-All Route for 404 */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Toaster />
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
