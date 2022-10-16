import React from 'react';
import {useLocation} from "react-router-dom"
import styles from "./Headers.module.css";

const MainHeader = props => {

  const location = useLocation();
  const homePath = location.pathname === "/";

  return <header className={`${styles.mainHeader} ${homePath && styles.transparent}`}>{props.children}</header>;
};

export default MainHeader;
