import React from 'react'
import HeroSection from '../Component/Atom/HeroSection'

const ProductPage = () => {
  return (
    <div className='productPage'>
        <HeroSection 
          pageName = {"Products"} paragraph = {`We display products based on the latest products we have, if you want
                                                to see our old products please enter the name of the item`}
        />
    </div>
  )
}

export default ProductPage