import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import NavBar from './NavBar'


const Header = () => {
return(
  <section
      className="h-screen bg-Hero bg-cover 
      font-[san-serif] md:bg-top bg-center object-center h-22"
    >
      <NavBar/>
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h1 className="text-white text-2xl font-medium text-transform: uppercase">Life is Traveling so enjoy every moment</h1>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
         
        </h1>
        <div className="text-xl">
          
        </div>
      </div>
    </section>
)
}

export default Header
