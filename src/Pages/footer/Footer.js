import React from "react";
import './footer.module.css'
import styles from "./footer.module.css";
import { useContext } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';


const Footer = () => {
    const Auth = useContext(AuthContext);
  return (
    <div className={styles.main_container}>
      <footer className={styles.footer_container}>

        <div className={styles.info_container}>
      <div className={styles.info_section}>
                <h2 className={styles.logo}>TripMaster</h2>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
            </div>

      <div className={styles.footer_mail}>
          <div className={styles.inputbox}>
          <i className={styles.uiluilsearch}></i>
          <input type={styles.text} placeholder={`${Auth.isLoggedIn ? 'Enter your destination' : 'Email address'}`} />
          <button className={styles.button}>{Auth.isLoggedIn ? "Explore" : "Newsletter"}</button>
      </div>
      </div>
        </div>
            <div className={styles.footer_note}>
            <span >All Rights are reserved by TripMaster</span>
            </div>
      </footer>
    </div>
  )
}

export default Footer
