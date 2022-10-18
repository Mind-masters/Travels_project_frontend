import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './NavHeader/NavHeader';
import StatusHeader from './NavHeader/StatusHeader';
import NavLinks from './NavLinks/NavLinks';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../shared/UI/Backdrop';
import navLogo from "../../assets/logo.PNG"
import styles from './index.module.css';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className={styles.kazkas}>
      
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={styles.drawerNav}>
          <NavLinks extra={true} />
        </nav>
      </SideDrawer>
      <StatusHeader />

      <MainHeader>
        <button className={styles.navigationMenuBtn} onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>

        {/* <h1 className={styles.navigationTitle}>
          <Link to="/">
            <img className={styles.linkImage} alt="" src={navLogo} />
          </Link>
        </h1> */}


        <nav className={styles.headerNav}>
          <NavLinks/>
        </nav>
        
      </MainHeader>

    </div>
  );
};

export default MainNavigation;
