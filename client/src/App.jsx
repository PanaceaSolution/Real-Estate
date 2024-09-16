import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AboutUs from "./pages/AboutUs";
import SignInPage from "./pages/sign-in";
import Footer from "./components/footer";
import SignUp from "./components/SignUp";
import Home from "./pages/home";
import UserStats from "./components/UserStats";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import DefaultLayout from "./layout/DefaultLayout";
import HomeLayout from "./layout/HomeLayout";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base">
        {/* <Header /> */}

        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            {/* <Route path="/aboutUs" element={<AboutUs /> } />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route
              path="/user-stats"
              element={
                <DefaultLayout>
                  <UserStats></UserStats>
                </DefaultLayout>
              }
            />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
