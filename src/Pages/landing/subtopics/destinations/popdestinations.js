import React from 'react'
import './popdestinations.css'
import {FaStar} from 'react-icons/fa';

export const Popdestinations = () => {
  return (
    <>
    
      <h1 className='dest-title'>popular Destinations</h1>
    <div className='box'>
        <div className='container'>
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt='avatar'/>
          <p><span>Rubi Rose.</span></p>
          </div>
          <div className='stars'>
          <span><FaStar/></span>
          <span><FaStar/></span>
          <span><FaStar/></span>
          <span><FaStar/></span>
          <span><FaStar/></span>
          </div>
    </div>
    </>
  )
}
