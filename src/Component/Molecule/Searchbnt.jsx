import React from 'react'
import './Molecule.css'
import search_icon from '../Assets/search-normal.svg'

const Searchbnt = (props) => {
  return (
    <div className='inputs'>
        <span className='input'>
            <img src={search_icon} alt="search-icon" />
            <input type="text" placeholder='Search property'/>
        </span>
        <button>{props.btnName}</button>
    </div>
  )
}

export default Searchbnt