import React, { useState, useContext } from 'react';
import {useLocation} from "react-router-dom"
import { AuthContext } from '../../../contextAPI/AuthContext';
import styles from "./Headers.module.css";
import UserDropDown from '../NavLinks/dropDown';
import Authentication from '../../../Pages/PopUpPages/Authentication';
import MobileNavButton from '../Mobile';
import Button from '../../shared/UI/button/Button';
import NavLinks from '../NavLinks/NavLinks';

const NavHeader = props => {

  const User = useContext(AuthContext);
    
  const ActiveUser = User.authenticatedUser || null;
  const UserData = ActiveUser ? ActiveUser.data : null

  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);

  const openAuthenticationForm = () => {
      setAuthenticationIsOpen(true);
  };

  const closeAuthenticationForm = () => {
      setAuthenticationIsOpen(false);
  };
  const isModalOpen = useContext(AuthContext).isUserModalActive;
  const [fixedNavBar, setFixedNavBar] = useState(false);

  const changeFixedStatus = () => {
    if(window.scrollY > 75){
      setFixedNavBar(true)
    }
    else{
      setFixedNavBar(false)
    }

  }

  window.addEventListener("scroll", changeFixedStatus);


  const location = useLocation();
  const homePath = location.pathname === "/" || location.pathname === "/new-member";

  return <div 
    className= {`
      ${styles.mainHeader} 
      ${homePath && styles.custom_width}
      ${fixedNavBar && !isModalOpen && styles.mainHeaderFixed}
    `}
  >
    <div className={styles.mobile_navigation}>
      <MobileNavButton onClick={props.onMobile}/>
      <div className={`${styles.header_text}`}>
        <h1><span>Trip</span>Whoop<span>!</span></h1>
      </div>
    </div>

    <div className={styles.header_navigation}>
      <NavLinks />
    </div>

    <div className={styles.header_logo}>
      <div className={`${styles.header_text}`}>
        <h1><span>Trip</span>Whoop</h1>
      </div>
    </div>

    <div className={`${styles.header_login}`}>
      <div className={styles.login_btn}>
        {!User.isLoggedIn ? 

          <Button color={"#EE7D15"} height="auto" onSubmit={openAuthenticationForm}>
            <h1>Login</h1>
          </Button>
          :
          <UserDropDown />
        }
      </div>
    </div>

    <Authentication
      show={authenticationIsOpen}
      onClose={closeAuthenticationForm}
    />

  </div>;
};

export default NavHeader;
