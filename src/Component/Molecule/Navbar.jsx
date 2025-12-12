/* eslint-disable array-callback-return */
import React from 'react'
import Logo from '../Atom/Logo'
import bag_icon from '../Assets/bag-2.svg'
import user_icon from '../Assets/user.svg'
import './Molecule.css'


const Navbar = () => {

  return (
      <section className='navbar'>
       <Logo />
       <div className="link">
        <p>Product</p>
        <p>Services</p>
        <p>Article</p>
        <p>AboutUs</p>
          
       </div>
       <div className="icon">
        <img src={bag_icon} alt="bag-icon" />
        <img src={user_icon} alt="user-icon" />
       </div>
    </section>
  )
}

export default Navbar