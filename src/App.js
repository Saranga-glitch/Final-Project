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

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path ="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="store" element={<OurStore />} />
      <Route path="compare-product" element={<CompareProducts/>} />
      <Route path="wishlist" element={<Wishlist/>} />
      </Route>  
    </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
