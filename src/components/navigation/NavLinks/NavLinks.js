import React from 'react';
import { NavLink } from 'react-router-dom';
import homeLinkLogo from "../../../assets/home-link-logo.png"
import styles from './NavLinks.module.css';
import "./onFocusStyles.css"


const NavLinks = () => {

  return <ul className={styles.nav_links_container}>

    <li className="onFocus">
      <NavLink to="/explore" >
        Explore
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/your-trip" >
        Your trip
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/" >
        <img alt='home-logo' src={homeLinkLogo} />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/notifications" >
        Discounts
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/more" >
        Notifications
        <hr />
      </NavLink>
    </li>


  </ul>
};

export default NavLinks;