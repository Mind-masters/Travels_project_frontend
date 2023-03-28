import React, { useState, useContext } from 'react';
import {useLocation} from "react-router-dom"
import { AuthContext } from '../../../contextAPI/AuthContext';
import styles from "./Headers.module.css";

const NavHeader = props => {
  const isModalOpen = useContext(AuthContext).isUserModalActive;
  const [fixedNavBar, setFixedNavBar] = useState(false);

  const changeFixedStatus = () => {
    if(window.scrollY > 73){
      setFixedNavBar(true)
    }
    else{
      setFixedNavBar(false)
    }

  }

  window.addEventListener("scroll", changeFixedStatus);


  const location = useLocation();
  const homePath = location.pathname === "/" || location.pathname === "/new-member";

  return <header 
    className= {`
      ${styles.mainHeader} 
      ${homePath && styles.custom_width}
      ${fixedNavBar && !isModalOpen && styles.mainHeaderFixed}
    `}
  >
    {props.children}
  </header>;
};

export default NavHeader;
