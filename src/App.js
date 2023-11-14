import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import CompareProducts from './Pages/CompareProducts';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import Singleproduct from './Pages/Singleproduct';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path ="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<OurStore />} />
      <Route path="product/:id" element={<Singleproduct/>} />
      <Route path="compare-product" element={<CompareProducts/>} />
      <Route path="wishlist" element={<Wishlist/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="forgot-password" element={<Forgotpassword/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="reset-password" element={<Resetpassword/>} />
      </Route>  
    </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
