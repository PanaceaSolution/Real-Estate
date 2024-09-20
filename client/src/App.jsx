import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AboutUs from "./pages/AboutUs";
import SignInPage from "./pages/sign-in";
import Footer from "./components/footer";
import SignUp from "./components/SignUp";
import Home from "./pages/home";
import SecureRoute from "./routes/SecureRoute";
import Users from "./pages/admin-dashboard/Users";
import Properties from "./pages/admin-dashboard/Properties";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./pages/admin-dashboard/AdminLayout";
import AddProperty from "./pages/add-property";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import DefaultLayout from "./layout/DefaultLayout";
import UserStats from "./components/UserStats";
import Search from "./pages/search";
import AddUserOwnProperty from "./pages/Dashboard/AddProperty";
import ViewOwnProperty from "./pages/Dashboard/ViewOwnProperty";
import ViewSingleProperty from "./pages/Dashboard/ViewSingleProperty";
import EditProperty from "./pages/Dashboard/EditProperty";
import HomeLayout from "./layout/HomeLayout";
import ISAdminLayout from "./layout/ISAdminLayout";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base">
        {/* <Header /> */}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/search" element={<Search />} />
            </Route>
            
            <Route element={<AdminRoute isAdmin="admin" />}>
              <Route element={<ISAdminLayout />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin/users" element={<Users />} />
                  <Route path="/admin/properties" element={<Properties />} />
                  <Route path="/admin/add-property" element={<AddProperty />} />
                  <Route
                    path="/admin/edit-property"
                    element={<AddProperty />}
                  />
                </Route>
              </Route>
            </Route>

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
          </Routes>
        </main>
       <Toaster/>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
