import React from 'react'
import './Pages.css'
import HeroSection from '../Component/Atom/HeroSection'
import Rectangle24 from '../Component/Assets/Rectangle 24.svg'
import ServiceCard from '../Component/Molecule/ServiceCard'
import { servicesDetails } from '../data'

const Services = () => {
  return (
    <div className='Services'>
        <HeroSection
         pageName = {"Services"} paragraph = {`The product crafted by talented crafter and using high
                                                quality material with love inside`}
        />
        <img src={Rectangle24} alt="" className='Service-img' />
        <div className="ServiceCardsContainer">
            {servicesDetails.map((services, index) => (
                <ServiceCard key={index} {...services}/>
            ))}
        </div>
    </div>
  )
}

export default Services