import React, { useState } from 'react';
import MainHeader from './NavHeader/NavHeader';
import StatusHeader from './NavHeader/StatusHeader';
import NavLinks from './NavLinks/NavLinks';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../shared/UI/Backdrop';
import styles from './navigation.module.css';
import {useLocation} from "react-router-dom"


const MainNavigation = props => {
  
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // const location = useLocation();
  
  // const home_path = location.pathname === "/" || location.pathname === "/new-member";
  // const authPath = props.home ? false : home_path;

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className={styles.navContainer}>
      
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks  />
      </SideDrawer>

      {/* <StatusHeader /> */}

      <MainHeader onMobile={openDrawerHandler} />

    </div>
  );
};

export default MainNavigation;
