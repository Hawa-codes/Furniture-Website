import React from 'react'

const Button1 = (props) => {
  return (
    <div>
        <button style={{
                width: "170px",
                height: "54px",
                color: "white",
                backgroundColor: "#518581",
                border: "none",
                marginTop: "3rem"
            }}>{props.word}</button>
    </div>
  )
}

export default Button1