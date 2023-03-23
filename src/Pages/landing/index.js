import React from 'react'
import styles from "./landing.module.css";
import Destinations from "./subtopics/destinations/destinations"
import Button from '../../components/shared/UI/button/Button';
import PopDestinations from './subtopics/destinations/popdestinations';
import NewUser from '../PopUpPages/newUserModal';
import MainNavigation from '../../components/navigation';
import { useContext } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';
import Footer from '../footer/Footer';


const LandingMain = (props) => {
  const Auth = useContext(AuthContext);

  return (

    <div>

      {
        props.extra &&
        <NewUser />
      }
      
      <div className={styles.welcomePage}>

        <div className={styles.welcomePage_section1}></div>
        <div className={styles.welcomePage_section2}></div>

        <div className={styles.welcomePage_content}>

          <div className={styles.welcomePage_content_navigation}>
            <MainNavigation home={true} />
          </div>

          <div className={styles.welcomePage_content_header}>
            <h1 className={styles.ulimited}>Unlimited travels, Discounts, new friends and more!</h1>
          </div>
          
          <div className={styles.inputbox}>
            {/* <input type={styles.text} placeholder={`${Auth.isLoggedIn ? 'Enter your destination' : 'Email address'}`} /> */}
            <button className={styles.button}>{Auth.isLoggedIn ? "Explore" : "Get Started"}</button>
          </div>
          
        </div>

      </div>

      {/* <div>
        {!props.extra && <Destinations/>}
        <PopDestinations/>
        <Footer/>
      </div> */}

    </div>
  )
}

export default LandingMain