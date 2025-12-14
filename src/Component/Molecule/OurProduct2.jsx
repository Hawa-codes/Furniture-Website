import React from 'react'
import unsplash from '../Assets/unsplash_mpN7xjKQ_Ns.svg'
import unsplash2 from '../Assets/unsplash_376KN_ISplE.svg'
import './Molecule.css'
import Button1 from '../Atom/Button1'

const OurProduct2 = () => {
  return (
    <div className='OurProduct2' style={{
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-45px",
        gap: '2rem'
    }}>
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between" 
        }}>
            <h2 style={{
                    fontSize: "30px",
                    marginTop: "-1rem"
                }}>Crafted by talented and <br />high quality material</h2>
                <span style={{
                color: "#bcb9b9ff",
                lineHeight: "30px"
            }}>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum <br />dignissim placerat nisi, adipiscing mauris non purus parturient. <br /> morbi fermentum, vivamus et accumsan dui tincidunt pulvinar</span>
            <Button1 word = {"Learn More"}/>
            <img src={unsplash} alt="unsplash" style={{
                width: "595px",
                height: "260px",
                marginTop: "2rem"
            }}/>
        </section>
        <section style={{
            
        }}>
            <div className="addition" style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <span>
                    <h4>20+</h4>
                    <p>Years Experience</p>
                </span>
                <span>
                    <h4>480</h4>
                    <p>Happy Client</p>
                </span>
                <span>
                    <h4>150+</h4>
                    <p>Project Finished</p>
                </span>
            </div>
            <div>
                <img src={unsplash2} alt="unsplash2" style={{
                    width: "540px",
                    height: "510px"
                }} />
            </div>
        </section>
    </div>
  )
}

export default OurProduct2