import React from 'react';
import { NavLink } from 'react-router-dom';
import homeLinkLogo from "../../../assets/home-link-logo.png"
import styles from './NavLinks.module.css';
import "./onFocusStyles.css"


const NavLinks = () => {

  return <ul className={styles.nav_links_container}>

    <li className="onFocus">
      <NavLink to="/explore" >Explore</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/your-trip" >Your trip</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/" >
        <img alt='home-logo' src={homeLinkLogo} />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/about" >About us</NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/contact" >Contact</NavLink>
    </li>

  </ul>
};

export default NavLinks;