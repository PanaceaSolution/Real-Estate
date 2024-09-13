import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Aboutus from './pages/aboutUs';
import SignIn from './pages/signIn';


const App = () => {
  return (
  
      <Router>
      <Header/>
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutUs" element={<Aboutus />}/>
        <Route path="/signIn" element={<SignIn />}/>
        {/* <Route path ="*" element={<NotFound/>} />  */}


        



      </Routes>
      </Router>

 

  )
}

// const NotFound = ()=> <h2> 404 - page Not Found </h2>

export default App