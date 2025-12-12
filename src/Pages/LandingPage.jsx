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

const LandingPage = () => {

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
        <section style={{
            display: "flex",
            flexDirection: "row",
            margin: "0px 90px",
        }}>
            <WhatWeOffer {...offer.card1}/>
            <WhatWeOffer {...offer.card2}/>
            <WhatWeOffer {...offer.card3}/>
        </section>
    </div>

  )
}

export default LandingPage