import React from 'react'
import './Molecule.css'

const ServiceCard = (props) => {
  return (
    <div className='ServiceCard'>
        <p className='firsts'>{props.number}</p>
        <p className='seconds'>{props.title}</p>
        <p className='thirds'>{props.desc}</p>
    </div>
  )
}

export default ServiceCard