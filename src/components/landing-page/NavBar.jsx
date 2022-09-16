import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [openNav, setOpenNav]=useState(false)
  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 md:w-auto w-full'>
            <h1 className='md:cursor-pointer h-9'>Logo Here</h1>
        </div>
        <div className='z-50 text-3xl p-4 md:hidden' onClick={()=> setOpenNav(!openNav)}>
            {!openNav ? <AiOutlineMenu/>:  <AiOutlineClose/> }
            </div>
            <ul className='md:flex hidden capitalize items-center gap-8 font-[Poppins]'>
                <li>
                    <Link to="/" className='py-7 px-3'>
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
                <li>
                    <Link to="signin" className='py-7 px-3 inline-block'>
                        signin
                    </Link>
                </li>
            </ul>
            
            {/*Mobile Navigation */}
            
            <ul className= {`md:hidden bg-white absolute w-full h-full bottom-10 py-20 pl-4 duration-500 ${openNav ? "left-0" : "left-[-100%]"}`}>
                <li>
                    <Link to="/" className='py-6 px-3 inline-block'>
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
                <li>
                    <Link to="signin" className='py-6 px-3 inline-block'>
                        signin
                    </Link>
                </li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
