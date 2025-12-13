import React, { useRef } from 'react'
import OurProduct from './OurProduct'
import Arrow1 from '../Assets/Frame 162640.svg'
import Arrow2 from '../Assets/Frame 162690.svg'


const ProductSlider = ({items = []}) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div style={{ position: "relative", width: "100%", marginTop: "2rem" }}>
      <img
        src={Arrow1}
        alt="arrow-left"
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "45px",
          height: "45px",
          cursor: "pointer",
          zIndex: 5
        }}
      />
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "40px",
          padding: "0 70px",
          scrollbarWidth: "none" 
        }}
      >
        {items.map((item, index) => (
          <OurProduct key={index} {...item} />
        ))}
      </div>

      <img
        src={Arrow2}
        alt="arrow-right"
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "45px",
          height: "45px",
          cursor: "pointer",
          zIndex: 5
        }}
      />
    </div>
  )
}

export default ProductSlider