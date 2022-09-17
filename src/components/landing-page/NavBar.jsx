import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

const NavBar = () => {

    const [openNav, setOpenNav]=useState(false)
  return (
    <nav className='bg-black text-white'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 md:w-auto w-full'>
            <h1 className='md:cursor-pointer h-9 border-5% text-yellow'>Logo Here</h1>
        </div>
        <div className='z-50 text-3xl p-4 md:hidden' onClick={()=> setOpenNav(!openNav)}>
            {!openNav ? <AiOutlineMenu/>:  <AiOutlineClose className='text-black'/> }
            </div>
            <ul className='md:flex hidden capitalize items-center gap-8 font-[Poppins]'>
                <li>
                    <Link to="/" className='py-7 px-3 text-F3DE1B'>
                        Explore
                    </Link>
                </li>
                <li>
                    <Link to="places" className='py-7 px-3 inline-block'>
                        places
                    </Link>
                </li>
                <li>
                    <Link to="forum" className='py-7 px-3 inline-block'>
                        forum
                    </Link>
                </li>
                <li>
                <Link to="tourists" className='py-7 px-3 inline-block'>
                        tourists
                </Link>
                </li>
               </ul>
               <div className='md:block hidden'>
                 <SignIn/>
               </div>
                       
            {/*Mobile Navigation */}
            
            <ul className= {`md:hidden bg-white absolute w-full h-full bottom-10 py-20 pl-4 duration-500 ${openNav ? "left-0" : "left-[-100%]"} text-gray-dark`}>
                <li>
                    <Link to="/" className='py-8 px-3 inline-block'>
                        Explore
                    </Link>
                </li>
                <li>
                    <Link to="places" className='py-6 px-3 inline-block'>
                        places
                    </Link>
                </li>
                <li>
                    <Link to="forum" className='py-6 px-3 inline-block'>
                        forum
                    </Link>
                </li>
                <li>
                    <Link to="tourists" className='py-6 px-3 inline-block'>
                        tourists
                    </Link>
                </li>
              <SignIn/>
              </ul>
             </div>
            </nav>
  )
}

export default NavBar
