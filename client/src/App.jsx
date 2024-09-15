import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AboutUs from './pages/AboutUs';
import SignInPage from './pages/sign-in';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import Home from './pages/home';
import SecureRoute from './routes/SecureRoute';
import Users from './pages/admin-dashboard/Users';
import Properties from './pages/admin-dashboard/Properties';
import AdminRoute from './routes/AdminRoute';
import AdminLayout from './pages/admin-dashboard/AdminLayout';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUp />} />


            <Route element={<AdminRoute isAdmin="admin" />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/properties" element={<Properties />} />
              </Route>
            </Route>

            <Route element={<SecureRoute />}>
              <Route path="/profile" element={<AboutUs />} />
            </Route>

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
