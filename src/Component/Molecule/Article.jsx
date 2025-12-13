import React from 'react'

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
      </section>  
    </div>
  )
}

export default Article