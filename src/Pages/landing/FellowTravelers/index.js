import React from 'react'
import styles from "./fellowTravelers.module.css";
import card_image_1 from "../../../assets/your-trip/card_image_1.png";
import card_image_2 from "../../../assets/your-trip/card_image_2.png";
import Header from './header';

const FellowTravelers = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.representing_cards}>

        <div className={styles.child_card}>
          <img src={card_image_1} alt='' />
          <h1>Join a group</h1>
          <p>
            Do what you love, meet others who love it, find your community. The rest is history
          </p>
        </div>

        <div className={styles.child_card}>
          <img src={card_image_2} alt='' />
          <h1>Start a group</h1>
          <p>
            You don’t have to be an expert to gather people together and explore shared interests                    
          </p>
        </div>                

      </div>
    </div>
  )
}

export default FellowTravelers