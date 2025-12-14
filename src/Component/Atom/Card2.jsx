import React from 'react'

const Card2 = (props) => {
  return (
    <div className='card2' style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "0.7rem"
    }}>
        <span>
            <img src={props.image} alt="product-image" style={{
            width: "200px",
            height: "200px",
            paddingRight: "2rem"
        }} />
        </span>
        <span>
            <p style={{
                fontSize: "16px",
                color: "#bcb9b9ff",
            }}>{props.text1}</p>
            <h3 style={{
                fontSize: "21px"
            }}>{props.text2}</h3>
            <p style={{
                color: "#bcb9b9ff",
                fontSize: "16px"
            }}>Pellentesque etiam blandit in </p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                flexDirection: "row",
                }}>
                    <img src={props.consumerImage} alt="Consumer-Image"  style={{
                        width: "28px",
                        height: "28px",
                        paddingRight: "10px"
                    }}/>
                    <p style={{
                        fontSize: "10px",
                        fontWeight: "600"
                    }}>{props.consumerName}</p>
                </div>
                <p style={{
                color: "#bcb9b9ff",
                fontSize: "10px",
                fontWeight: "600"
                }}>Friday, 1 April 2022</p>
            </div>
        </span>
    </div>
  )
}

export default Card2