import React from 'react'

const OurProduct = (props) => {
  return (
    <div className='our-product' style={{
        // margin: "5px 10px",
    }}>
        <img src={props.itemImage} alt="Item-Image" style={{
            width: "394px",
            height: '360px'
        }}/>
        <p style={{
            color: "#bcb9b9ff"
        }}>{props.item}</p>
        <h5>{props.itemType}</h5>
        <p style={{
            color: "#bcb9b9ff",
            marginTop: "-1rem"
        }}>{props.itemDescription}</p>
        <h5 className='price'>${props.price}</h5>
    </div>
  )
}

export default OurProduct