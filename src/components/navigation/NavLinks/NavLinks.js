import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import styles from './NavLinks.module.css';
import Button from '../../shared/UI/button/Button';
import "./index.css"

const NavLinks = props => {

  const User = useContext(AuthContext);

  return <ul className={styles.navLinks}>

    <li className="onFocus">
      <NavLink to="/explore" exact>Explore</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/places" exact>Places</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/about" exact>About us</NavLink>
    </li>

    <li className="onFocus">
      <NavLink to="/contact" >Contact</NavLink>
    </li>
    
    <li className={styles.navButton}>
      {!User.isLoggedIn ? 

      <Button CustomClassName="navButton">
        <NavLink className={"btn"} to={"/auth/login"}>Login</NavLink>
      </Button>
      :
      <Button CustomClassName="navButton">
        <NavLink className={"btn"} to={"/logout"}>Logout</NavLink>
      </Button>
      }
    </li>
  </ul>
};

export default NavLinks;