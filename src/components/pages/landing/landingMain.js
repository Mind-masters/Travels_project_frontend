import React from 'react'
import "./landingMain.css";
import Destinations from "./landingDestinations"
import Button from '../../shared/UI/button/Button';
import { NavLink } from 'react-router-dom';

const LandingMain = () => {
  return (
    <div className="container">

        <div className='welcome-page'>
          <div className='custom-details'>
            <h1 className="custom-header">Life is Traveling so enjoy every moment</h1>

            <div className='custom-button'>
              <Button>
                <NavLink to={"/explore"}>Explore</NavLink>
              </Button>
            </div>
            
          </div>
        </div>
        
        {/* <div className="text-2xl p-4">
          <Explore/>
        </div> */}

        <div className="text-2xl p-4">
          <Destinations/>
        </div>

        {/* all other sekctions like Destinations, Explore and so on... */}
    </div>
  )
}

export default LandingMain