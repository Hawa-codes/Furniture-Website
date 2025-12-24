import React from 'react'
import HeroSection from '../Component/Atom/HeroSection'
import Product2 from '../Component/Molecule/Product2'
import Searchbnt from '../Component/Molecule/Searchbnt'
import Rectangle1 from '../Component/Assets/Rectangle 23.png'
import Rectangle2 from '../Component/Assets/Rectangle 23.svg'
import Rectangle3 from '../Component/Assets/Rectangle 23 (1).svg'
import Rectangle4 from '../Component/Assets/Rectangle 23 (1).png'
import Rectangle5 from '../Component/Assets/Rectangle 23 (2).svg'
import Rectangle6 from '../Component/Assets/Rectangle 23 (4).svg'
import Rectangle7 from '../Component/Assets/Rectangle 23 (5).svg'
import Rectangle8 from '../Component/Assets/Rectangle 23 (6).svg'
import Rectangle9 from '../Component/Assets/Rectangle 23 (7).svg'
import OurProduct from '../Component/Molecule/OurProduct'
import './Pages.css'


const ProductPage = () => {

    const productItem = {
            card1: {
              item: "Shelf",
              itemImage: Rectangle1,
              itemType: "Wooden Bookshelf",
              itemDescription: "Combination of wood and wool",
              price: "61.25"
            },
            card2: {
              item: "Chair",
              itemImage: Rectangle2,
              itemType: "White Aesthetic Chair",
              itemDescription: "Combination of wood and wool",
              price: "63.47"
            },
            card3: {
              item: "Lamp",
              itemImage: Rectangle3,
              itemType: "Bardono Smart Lamp",
              itemDescription: "Easy to use with bluetooth connection",
              price: "62.23"
            },
            card4: {
              item: "Sofa",
              itemImage: Rectangle4,
              itemType: "Sofa Empuk Banget",
              itemDescription: "Using kapuk randu material",
              price: "58.39"
            },
            card5: {
              item: "Sofa",
              itemImage: Rectangle5,
              itemType: "Sofa Empuk Banget",
              itemDescription: "Using kapuk randu material",
              price: "58.39"
            },
            card6: {
              item: "Sofa",
              itemImage: Rectangle6,
              itemType: "Sofa Empuk Banget",
              itemDescription: "Using kapuk randu material",
              price: "58.39"
            },
            card7: {
              item: "Sofa",
              itemImage: Rectangle7,
              itemType: "Sofa Empuk Banget",
              itemDescription: "Using kapuk randu material",
              price: "58.39"
            },
            card8: {
              item: "Sofa",
              itemImage: Rectangle8,
              itemType: "Sofa Empuk Banget",
              itemDescription: "Using kapuk randu material",
              price: "58.39"
            },
            card9: {
              item: "Sofa",
              itemImage: Rectangle9,
              itemType: "Sofa Empuk Banget",
              itemDescription: "Using kapuk randu material",
              price: "58.39"
            },
        }
        const productItems = Object.values(productItem);



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
            {productItems.map((item, index) => (
                <OurProduct key={index} {...item} />
            ))}
        </section>
    </div>
  )
}

export default ProductPage