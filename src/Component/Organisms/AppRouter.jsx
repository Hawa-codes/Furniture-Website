import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Molecule/Navbar';
import LandingPage from '../../Pages/LandingPage';
import Footer from '../Molecule/Footer';
import ProductPage from '../../Pages/ProductPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>

            <Route path="/" element={<LandingPage />}>
            <Route path='/furniturewebsite/src/Pages/ProductPage.jsx' element={<ProductPage />}/>
            </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter