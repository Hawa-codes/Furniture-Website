import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Molecule/Navbar';
import LandingPage from '../../Pages/LandingPage';
import Footer from '../Molecule/Footer';
import ProductPage from '../../Pages/ProductPage'
import Services from '../../Pages/Services';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter