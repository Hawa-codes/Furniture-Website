import React from 'react'
import Logo from '../Atom/Logo'
import './Molecule.css'

const Footer = () => {
  return (
    <div className='footers'>
        <span>
            <Logo/>
            <p>Lalasia is digital agency that help you make better <br /> experience iaculis cras in.</p>
        </span>
        <span className='Footer'>
            <div>
                <p><strong>Product</strong></p>
                <p>New Arrivals</p>
                <p>Best Selling</p>
                <p>Home Decor</p>
                <p>Kitchen Set</p>
            </div>
            <div>
                <p><strong>Services</strong></p>
                <p>Catalog</p>
                <p>Blog</p>
                <p>FaQ</p>
                <p>Pricing</p>
            </div>
            <div>
                <p><strong>Follow Us</strong></p>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </span>
    </div>
  )
}

export default Footer