import React, { useState } from 'react';
import {useLocation} from "react-router-dom"
import styles from "./Headers.module.css";

const NavHeader = props => {

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
  const homePath = location.pathname === "/";

  return <header className={`${styles.mainHeader} ${!homePath && styles.colorful} ${fixedNavBar && styles.mainHeaderFixed}`}>
    {props.children}
  </header>;
};

export default NavHeader;
