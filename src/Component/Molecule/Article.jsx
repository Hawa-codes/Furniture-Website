import React from 'react'
import Rectangle8 from '../Assets/Rectangle 8.png'

const Article = () => {
  return (
    <div className='article'>
      <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between" 
        }}>
        <h2 style={{
                    fontSize: "30px",
                    marginTop: "-1rem"
                }}>The best furniture comes <br /> from Lalasia</h2>
                <span style={{
                color: "#bcb9b9ff",
                lineHeight: "30px"
            }}>Pellentesque etiam blandit in tincidunt at donec. </span>
            <img src={Rectangle8} alt="" />
      </section>  
    </div>
  )
}

export default Article