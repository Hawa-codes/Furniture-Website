import React from 'react'
import Rectangle8 from '../Assets/Rectangle 8.png'
import './Molecule.css'
import Card2 from '../Atom/Card2'
import Rectangle1 from '../Assets/Rectangle 20 (1).png'
import Rectangle2 from '../Assets/Rectangle 20.png'
import Rectangle3 from "../Assets/Rectangle 20 (2).png"
import ellipse1 from '../Assets/Ellipse 25 (1).png'
import ellipse2 from '../Assets/Ellipse 25 (2).png'
import ellipse3 from '../Assets/Ellipse 25.png'

const Article = () => {

    const card = {
        card1: {
            image: Rectangle2,
            text1: "Tips and Trick",
            text2: "6 ways to give your home minimalistic vibes",
            consumerImage: ellipse3,
            consumerName: "By Jerremy Jean"
        },
        card2: {
            image: Rectangle1,
            text1: "Design Inspiration",
            text2: "How to make your interiors cooler and more stylish",
            consumerImage: ellipse2,
            consumerName: "By Michaela Augus"
        },
        card3: {
            image: Rectangle3,
            text1: "Tips and Trick",
            text2: "Elements to add character to your space",
            consumerImage: ellipse1,
            consumerName: "By Kim Gurameh"
        }
    }
    const cards = Object.values(card);


  return (
    <div className='article'>
      <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        }}>
        <h2 style={{
                    fontSize: "30px",
                    marginTop: "-1rem"
                }}>The best furniture comes <br /> from Lalasia</h2>
                <span style={{
                color: "#bcb9b9ff",
                lineHeight: "30px"
            }}>Pellentesque etiam blandit in tincidunt at donec. </span>
            <img src={Rectangle8} alt=""  style={{
                position: "relative",
                width: "582px",
                height: "565px"
            }}/>
            <div className="context">
                <p>Tips and Trick</p>
                <h2>Create Cozy Dinning Room Vibes</h2>
                <p style={{
                    marginTop: "-1rem"
                }}>Decorating with neutral brings balance to the dining room</p>
                <span>Read More</span>
            </div>
      </section>  
      <section style={{
        marginLeft: "2rem"
      }}>
         {cards.map((item, index) => (
                <Card2 key={index} {...item} />
            ))}
      </section>
    </div>
  )
}

export default Article