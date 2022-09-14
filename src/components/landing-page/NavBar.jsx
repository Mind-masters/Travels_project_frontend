import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'>
        <div>
            <h1 className='md:cursor-pointer h-9'>Logo Here</h1>
        </div>
            <ul className='flex capitalize items-center gap-8 font-[Poppins]'>
                <li>
                    <Link to="/" className='py-7 px-3 inline-block'>
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
      </div>
    </nav>
  )
}

export default NavBar
