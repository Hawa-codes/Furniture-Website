import React from 'react'
import Frame from "../Assets/Frame 162681.png"
import icon from '../Assets/quote-up.svg'

const Card = (props) => {
  return (
    <div className='card' style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "26px 24px",
        width: "350px",
        height: "170px",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
    }}>
        <img src={icon} alt="icon" style={{
            width:"20px",
            height: '20px'
        }} />
        <p style={{
            color: "#bcb9b9ff",
            fontSize: "12px"
        }}>Pellentesque etiam blandit in tincidunt at donec. Eget <br />ipsum dignissim placerat nisi, adipiscing mauris non. </p>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5rem",
            marginTop: "2rem"
        }}>
            <span style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <img src={props.customerImage} alt="Customer-Report" />
                <p>{props.customerName}</p>
            </span>
            <img src={Frame} alt="Frame" style={{
                width: "30px",
                height: "20px"
            }} />
        </div>
    </div>
  )
}

export default Card