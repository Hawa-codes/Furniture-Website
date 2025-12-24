import React from 'react'
import Logo from '../Atom/Logo'
import bag_icon from '../Assets/bag-2.svg'
import user_icon from '../Assets/user.svg'
import './Molecule.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
      <section className='navbar'>
       <Logo />
      <nav>
        <NavLink 
          to="/products" 
          className="nav-link"
        >
          Product
        </NavLink>

        <NavLink 
          to="/services" 
          className="nav-link"
        >
          Services
        </NavLink>

        <NavLink 
          to="/article" 
          className="nav-link"
        >
          Article
        </NavLink>
        <NavLink 
          to="/aboutUs" 
          className="nav-link"
        >
          About Us
        </NavLink>
    </nav>
      <div className="icon">
        <img src={bag_icon} alt="bag-icon" />
        <img src={user_icon} alt="user-icon" />
      </div>
    </section>
  )
}

export default Navbar