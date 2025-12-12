import React from 'react'
import logo_icon from '../Assets/Frame.png'
import './Atom.css'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo_icon} alt="logo-icon" />
        <p>Lalasia</p>
    </div>
  )
}

export default Logo