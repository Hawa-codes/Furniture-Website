import React from 'react'
import HeroSection from '../Component/Atom/HeroSection'
import sketch from '../Component/Assets/Sketch-annotation-element-stroke-abstract-stars-plus-wink-filled.svg'
import arrow from '../Component/Assets/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.svg'
import Searchbnt from '../Component/Molecule/Searchbnt'
import rectangle from '../Component/Assets/Rectangle 2 (2).svg'

const LandingPage = () => {

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

    </div>

  )
}

export default LandingPage