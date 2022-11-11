import React, { useState } from 'react';
import MainHeader from '../NavHeader/NavHeader';
import StatusHeader from '../NavHeader/StatusHeader';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../shared/UI/Backdrop';
import styles from './index.module.css';
import {useLocation} from "react-router-dom"
import MobileNavButton from './mobileNavButton';
import { AuthContext } from '../../../contextAPI/AuthContext';
import { useContext } from 'react';


const MainNavigation = props => {
  const Auth = useContext(AuthContext);
  
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const location = useLocation();
  const authPath = props.home ? false : location.pathname === "/";

  const openDrawerHandler = () => {
    Auth.changeUserModalStatus(true);
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    Auth.changeUserModalStatus(false)
    setDrawerIsOpen(false);
  };

  return (
    <div className={styles.navContainer}>
      
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks  />
      </SideDrawer>

      {authPath && <StatusHeader />}

    
      { !authPath &&
        <MainHeader>
          <MobileNavButton onClick={openDrawerHandler} />
          <div className={styles.desktop_navigation}>
            <NavLinks  />
          </div>
        </MainHeader>
      }

    </div>
  );
};

export default MainNavigation;
