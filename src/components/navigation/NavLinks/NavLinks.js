import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import styles from './NavLinks.module.css';
import "./index.css"
import UserDropDown from './dropDown';

const NavLinks = props => {

  const User = useContext(AuthContext);

  return <ul className={styles.navLinks}>

    <li className="onFocus">
      <NavLink to="/explore" exact>Explore</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/places" exact>Your trip</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/places" exact>Your trip</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/about" exact>About us</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/contact" >Contact</NavLink>
    </li>
    
    {/* <li className='onAuth'>

    </li> */}
  </ul>
};

export default NavLinks;