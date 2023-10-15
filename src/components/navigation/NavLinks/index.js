import React from 'react';
import { NavLink } from 'react-router-dom';
import homeLinkLogo from "../../../assets/home-link-logo.png"
import styles from './NavLinks.module.css';
import {BsCart4} from 'react-icons/bs';
import "./onFocusStyles.css"


const NavLinks = (props) => {

  return <ul className={styles.nav_links_container}>

    <li className={`onFocus ${styles.home_start}`}>
      <NavLink to="/" >
        <img alt='home-logo' src={homeLinkLogo} />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/explore" >
        Places
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/shop" >
        Products
        <hr />
      </NavLink>
    </li>

    <li className={`onFocus ${styles.home_middle}`}>
      <NavLink to="/" >
        <img alt='home-logo' src={homeLinkLogo} />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/social" >
        Social
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/about" >
        AboutUs
        <hr />
      </NavLink>
    </li>

    <li className="onFocus">
      <NavLink  to="/shopcart" >
        {BsCart4}
      </NavLink>
    </li>


  </ul>
};

export default NavLinks;