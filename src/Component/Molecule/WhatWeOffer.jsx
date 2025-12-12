import React from 'react'

const WhatWeOffer = (props) => {
  return (
    <div className='offer' style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "26px 24px",
        width: "350px",
        height: "190px",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        // marginLeft: "10px",
        // marginRight: "10px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
    }}>
        <img src={props.icon} alt="offers-icon" />
        <h4>{props.heading}</h4>
        <p style={{
            color: "#bcb9b9ff",
            fontSize: "15px"
        }}>{props.description}</p>
    </div>
  )
}

export default WhatWeOffer