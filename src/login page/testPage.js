import React from 'react';
//import {Container} from 'react-bootstrap'
import LoginFroms from './Components/LoginFroms';
import SignUp from './Components/SignUpFroms';
import Home from './Components/home';
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';


function TestPage(){

  return (
    <BrowserRouter>
    {/* <Link to="/login">Login</Link> */}
    {/* <Link to="/SignUp">Sign Up</Link> */}
  
    <Routes>
    <Route path="/" element={<LoginFroms/>} />
      <Route path="/login" element={<LoginFroms/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
   
    </BrowserRouter>
  )
};
export default TestPage;