import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../components/contextAPI/AuthContext';
import './NavLinks.css';
import Button from '../../components/shared/UI/button/Button';

const NavLinks = props => {

  const User = useContext(AuthContext);

  return <ul className="nav-links">

    <li className='hover_change-color'>
      <NavLink to="/explore" exact>Explore</NavLink>
    </li>

    <li className='hover_change-color'>
      <NavLink to="/places" exact>Places</NavLink>
    </li>

    <li className='hover_change-color'>
      <NavLink to="/about" exact>About us</NavLink>
    </li>

    <li className='hover_change-color'>
      <NavLink to="/contact" >Contact</NavLink>
    </li>
    
    <li className='nav-btn'>
      {!User.isLoggedIn ? 

      <Button CustomClassName="navButton">
        <NavLink to={"/auth/login"}>Login</NavLink>
      </Button>
      :
      <Button CustomClassName="navButton">
        <NavLink to={"/logout"}>Logout</NavLink>
      </Button>
      }
    </li>
  </ul>
};

export default NavLinks;