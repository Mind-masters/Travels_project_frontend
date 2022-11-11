import React from 'react'
import styles from "./index.module.css";
import Destinations from "./subtopics/destinations/destinations"
import Button from '../../components/shared/UI/button/Button';
import { NavLink } from 'react-router-dom';
import { Popdestinations } from './subtopics/destinations/popdestinations';
import NewUser from './newUserModal';
import MainNavigation from '../../components/navigation/Container';


const LandingMain = (props) => {

  return (

    <div>

        {
          props.extra &&
          <NewUser />
        }
        <div className={styles.welcomePage}>

          <div className={styles.welcomePage_section1}></div>
          <div className={styles.welcomePage_section2}></div>

          <div className={styles.welcomePage_menu}>

            <div className={styles.welcomePage_menu_navigation}>
              <MainNavigation home={true} />
            </div>

            <div className={styles.welcomePage_menu_header}>
              <h1>Life is traveling</h1>
              <h3>So enjoy every moment</h3>
            </div>

            <div className={styles.welcomePage_menu_searchbar_container}>
              <div className={styles.welcomePage_menu_searchbar}>
                <input placeholder='Enter your destination'></input>
                <button>Explore</button>
              </div>
            </div>
            

          </div>

        </div>


        
        {/* <div className="text-2xl p-4">
          <Explore/>
        </div> */}

        <div>
          <Destinations/>
          <Popdestinations/>
        </div>


        {/* all other sekctions like Destinations, Explore and so on... */}
    </div>
  )
}

export default LandingMain