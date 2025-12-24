import React from 'react'
import Rectangle38 from '../Assets/Rectangle 38.png'
import './Molecule.css'

const Product2 = () => {
  return (
    <div className='product2'>
        <img src={Rectangle38} alt="Product-image" />
        <span>
            <button className='product2-btn'>Discount</button>
            <h4>Ramadhan Sale Offer</h4>
            <p>Get 40% off for the first transaction <br /> on Lalasia</p>
        </span>
    </div>
  )
}

export default Product2