import React from 'react'
import HeroSection from '../Component/Atom/HeroSection'
import sketch from '../Component/Assets/Sketch-annotation-element-stroke-abstract-stars-plus-wink-filled.svg'
import arrow from '../Component/Assets/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.svg'
import Searchbnt from '../Component/Molecule/Searchbnt'
import rectangle from '../Component/Assets/Rectangle 2 (2).svg'
import WhatWeOffer from '../Component/Molecule/WhatWeOffer'
import group4 from "../Component/Assets/Group 4.jpg"
import group5 from "../Component/Assets/Group 5.svg"
import group6 from "../Component/Assets/Group 4.svg"
import Rectangle1 from '../Component/Assets/Rectangle 23.png'
import Rectangle2 from '../Component/Assets/Rectangle 23.svg'
import Rectangle3 from '../Component/Assets/Rectangle 23 (1).svg'
import Rectangle4 from '../Component/Assets/Rectangle 23 (1).png'
import ProductSlider from '../Component/Molecule/ProductSlider'
import OurProduct2 from '../Component/Molecule/OurProduct2'
import Pic1 from "../Component/Assets/Ellipse 1.svg"
import Pic2 from "../Component/Assets/Ellipse 1 (1).svg"
import Card from '../Component/Molecule/Card'
import Article from '../Component/Molecule/Article'

const LandingPage = () => {

    const customer ={
        card1: {
            customerImage: Pic1,
            customerName: "Jane Johnson"
        },
        card2: {
            customerImage: Pic2,
            customerName: "Thomas Johnson"
        },
        card3: {
            customerImage: Pic1,
            customerName: "Janet Johnson"
        }
    }

    const customers = Object.values(customer);

    const offer = {
        card1: {
           icon: group4,
           heading: "Many Choices",
           description: `Pellentesque etiam blandit in tincidunt
                         at donec. Eget ipsum dignissim placerat 
                         nisi, adipiscing mauris non. `
        },
        card2: {
            icon: group5,
            heading: "Fast and On Time",
            description: `Pellentesque etiam blandit in tincidunt
                          at donec. Eget ipsum dignissim placerat
                          nisi, adipiscing mauris non.` 
        },
        card3: {
            icon: group6,
            heading: "Affordable Price",
            description: `Pellentesque etiam blandit in tincidunt
                          at donec. Eget ipsum dignissim placerat
                          nisi, adipiscing mauris non.` 
        }
    }

    const offers = Object.values(offer);

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
        }
    }


  return (
    <div className='landingPage'>
        <section>
            <HeroSection 
           pageName = {
                        <>
                        Discover Furniture With <br/>
                        High Quality Wood
                        <img src={sketch} alt="star" />
                        </>
                        }
            paragraph = {`Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,
                         adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt
                         aliquam adipiscing tempor.`}
            />
            <img 
                src={arrow} 
                alt="arrow-icon" 
                style={{
                    width: "240px",
                    height: "240px",
                    position: "relative",
                    bottom: "10rem",
                    left: "13rem"
                }}
            />
        </section>
        <section style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: "10rem"
                }}>
            <div
                style={{
                position: "absolute",
                top: "-1.5rem",    
                zIndex: 2
                }}
            >
                <Searchbnt btnName={"Search"} />
            </div>
            <img
                src={rectangle}
                alt="Rectangle"
                style={{
                width: "55rem",
                height: "500px",
                borderRadius: "10px",
                marginTop: "-5rem"
                }}
            />
        </section>
        <section style={{
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            marginTop: "-50px",
            marginLeft: "100px",
            marginRight: "100px"
        }}>
            <div className="benefit">
                <p style={{
                    color: "#ffb23f",
                    fontWeight: "600",
                    fontSize: "20px"
                }}>Benefit</p>
                <h2 style={{
                    fontSize: "30px"
                }}>Benefits when using <br />our services</h2>
            </div>
            <span style={{
                color: "#bcb9b9ff",
            }}>Pellentesque etiam blandit in tincidunt at donec. Eget <br /> ipsum dignissim placerat nisi, adipiscing mauris non purus <br /> parturient.</span>
        </section>
        <section
            style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 90px",
            }}
            >
            {offers.map((item, index) => (
                <WhatWeOffer key={index} {...item} />
            ))}
        </section>
        <section>
            <div className="words" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "5rem",
                marginBottom: "2rem"
            }}>
                <p style={{
                    color: "#ffb23f",
                    fontWeight: "600",
                    fontSize: "20px"
                }}>Product</p>
                <h2 style={{
                    fontSize: "30px",
                    marginTop: "-1rem"
                }}>Our popular product</h2>
                <span style={{
                color: "#bcb9b9ff",
                textAlign: "center",
                lineHeight: "30px"
            }}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim <br/> placerat nisi, adipiscing mauris non purus parturient.</span>
            </div>
            <div className="products" >
                <ProductSlider
                    items={[
                        productItem.card1,
                        productItem.card2,
                        productItem.card3,
                        productItem.card4,
                        productItem.card1,
                        productItem.card2,
                        productItem.card4,
                        productItem.card1,
                        productItem.card2
                    ]}
                />
            </div>
        </section>
        <section style={{
            margin: "20px 52px",
            display: "flex",
            flexDirection: "column",
        }}>
            <p style={{
                    color: "#ffb23f",
                    fontWeight: "600",
                    fontSize: "20px",
                    paddingBottom: "20px",
                }}>Our Product</p>
            <OurProduct2/>
        </section>
        <section>
            <div className="words" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "5rem",
                marginBottom: "2rem"
            }}>
                <p style={{
                    color: "#ffb23f",
                    fontWeight: "600",
                    fontSize: "20px"
                }}>Testimonials</p>
                <h2 style={{
                    fontSize: "30px",
                    marginTop: "-1rem"
                }}>What our customer say</h2>
                <span style={{
                color: "#bcb9b9ff",
                textAlign: "center",
                lineHeight: "30px"
            }}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim <br/> placerat nisi, adipiscing mauris non purus parturient.</span>
            </div>
            <span style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 90px",
                gap: "1rem"
            }}>
                {customers.map((item, index) => (
                <Card key={index} {...item} />
            ))}
            </span>
        </section>
        <section style={{
            margin: "20px 52px",
            display: "flex",
            flexDirection: "column",
        }}>
            <p style={{
                    color: "#ffb23f",
                    fontWeight: "600",
                    fontSize: "20px",
                    paddingBottom: "20px",
                }}>Articles</p>
            <Article/>
        </section>
    </div>
  )
}

export default LandingPage