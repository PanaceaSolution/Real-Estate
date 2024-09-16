import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SignInPage from './pages/sign-in';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import Search from './pages/search';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path='/search'  element={<Search/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}



export default App;
