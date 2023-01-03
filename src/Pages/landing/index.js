import React from 'react'
import styles from "./landing.module.css";
import Destinations from "./subtopics/destinations/destinations"
import Button from '../../components/shared/UI/button/Button';
import { NavLink } from 'react-router-dom';
import PopDestinations from './subtopics/destinations/popdestinations';
import NewUser from './newUserModal';
import MainNavigation from '../../components/navigation';
import { useContext } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';


const LandingMain = (props) => {
  const Auth = useContext(AuthContext);


  console.log("auth :" , Auth)

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
              <h1>Unlimited travels, discounts, new friends!</h1>
              <h3>Enjoy every moment</h3>
            </div>

            <div className={styles.welcomePage_content_searchbar_wrapper}>
              <div className={styles.welcomePage_content_searchbar}>
                <input placeholder={`${Auth.isLoggedIn ? 'Enter your destination' : 'Email address'}`}></input>
                <div className={styles.explore_button}>
                  <Button>{Auth.isLoggedIn ? "Explore" : "Get Started"}</Button>
                </div>
              </div>
            </div>
            

          </div>

        </div>

        <div>
          {!props.extra && <Destinations/>}
          <PopDestinations/>
        </div>

    </div>
  )
}

export default LandingMain