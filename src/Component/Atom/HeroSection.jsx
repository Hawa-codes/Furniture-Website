import React from 'react'
import './Atom.css'

const HeroSection = (props) => {
  return (
    <div className='heroSection'>
        <h2>{props.pageName}</h2>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default HeroSection