import React from 'react'
import styles from "./index.module.css";
import Destinations from "./subtopics/destinations/destinations"
import Button from '../../components/shared/UI/button/Button';
import { NavLink } from 'react-router-dom';
import { Popdestinations } from './subtopics/destinations/popdestinations';
import NewUser from './newUserModal';


const LandingMain = (props) => {

  console.log("parent url? ", props)
  return (

    <div>

        {
          props.extra &&
          <NewUser />
        }
        <div className={styles.welcomePage}>
          <div className={styles.customDetails}>
            <h1 className={styles.customHeader}>Life is Traveling so enjoy every moment</h1>

            <div className={styles.customButton}>
              <Button>
                <NavLink to={"/explore"}>Explore</NavLink>
              </Button>
            </div>
            
          </div>
        </div>


        
        {/* <div className="text-2xl p-4">
          <Explore/>
        </div> */}

        {/* <div className="text-2xl p-4">
          <Destinations/>
          <Popdestinations/>
        </div> */}


        {/* all other sekctions like Destinations, Explore and so on... */}
    </div>
  )
}

export default LandingMain