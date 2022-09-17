import React from 'react'
import NavBar from './NavBar'
import 'tw-elements';
import SignIn from './SignIn';
import Explore from '../../Pages/Explore';

const Header = () => {
return(
  <section
      className="h-screen bg-Hero bg-cover 
      font-[san-serif] md:bg-top bg-center object-center h-22"
    >
      <NavBar/>
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h1 className="text-4xl font-medium text-transform: uppercase text-yellow">Life is Traveling so enjoy every moment</h1>
        
        <div className="text-2xl p-4">
          <Explore/>
        </div>
      </div>
    </section>
)
}

export default Header
