import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../../components/shared/UI/Backdrop';
import navLogo from "../../assets/logo.PNG"
import styles from './MainNavigation.module.css';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={styles.drawerNav}>
          <NavLinks extra={true} />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className={styles.navigationMenuBtn} onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles.navigationTitle}>
          <Link to="/">
            <img className={styles.linkImage} alt="" src={navLogo} />
          </Link>
        </h1>


        <nav className={styles.headerNav}>
          <NavLinks extra={false}/>
        </nav>
        
      </MainHeader>

    </React.Fragment>
  );
};

export default MainNavigation;
