import React from 'react'
import HeroSection from '../Component/Atom/HeroSection'
import Product2 from '../Component/Molecule/Product2'
import Searchbnt from '../Component/Molecule/Searchbnt'

import OurProduct from '../Component/Molecule/OurProduct'
import './Pages.css'
import { productItem } from '../data'


const ProductPage = () => {

    
        // const productItems = Object.values(productItem);



  return (
    <div className='productPage'>
        <HeroSection 
          pageName = {"Products"} paragraph = {`We display products based on the latest products we have, if you want
                                                to see our old products please enter the name of the item`}
        />
        <Product2/>
        <div className="search-btn-wrapper">
            <Searchbnt btnName="Find Now" className="product-search" />
        </div>
        <section className='Card-section'>
            {productItem.map((item, index) => (
                <OurProduct key={index} {...item} />
            ))}
        </section>
    </div>
  )
}

export default ProductPage