import React from 'react'
import Frame1 from '../Assets/Frame 162631.png'
import Frame2 from '../Assets/Frame 162691.png'
import './Molecule.css'

const TotalProduct = () => {
  return (
    <div className='Total-product'>
        <span>
            <p>Total Product</p>
            <img src={Frame2} alt="Frame-1" />
        </span>
        <img src={Frame1} alt="Frame-2" />
    </div>
  )
}

export default TotalProduct