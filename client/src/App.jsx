import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Aboutus from './components/aboutUs';
import SignUp from './components/signUp';


const App = () => {
  return (
  
      <Router>
      <Header/>
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutUs" element={<Aboutus />}/>
        <Route path="/signUp" element={<SignUp />}/>
        



      </Routes>
      </Router>

 

  )
}

export default App