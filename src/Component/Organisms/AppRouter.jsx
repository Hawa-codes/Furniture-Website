import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Molecule/Navbar';
import LandingPage from '../../Pages/LandingPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>

            <Route path="/" element={<LandingPage />}>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter