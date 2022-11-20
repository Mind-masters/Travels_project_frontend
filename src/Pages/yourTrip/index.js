import React from 'react'
import Card from "../../components/shared/UI/Card";

import TripList from './Trips/tripList';
import YourTripWrapper from "./Trips/wrapper";

import DUMMY_DATA from '../../components/utils/fetchUserPlaces';
import styles from "./main.module.css";

// importing logos
import life_is_good_logo from "../../assets/your-trip/life_is_good.png";
import fellow_travelers_logo from "../../assets/your-trip/fellow_travellers.png";


const YoutTrip = () => {
  return (
    <Card>

      <div className={styles.container}>
        <div className={styles.life_is_good_image}>
          <img src={life_is_good_logo} alt="life is good" />
        </div>

        <YourTripWrapper header={"Your places"}>
          <TripList data={DUMMY_DATA} user_places={true} />
        </YourTripWrapper>

        {/* <YourTripWrapper header={"Matches your interests"}>
          <TripList data={DUMMY_DATA} user_places={false} />
        </YourTripWrapper> */}


        <div className={styles.fellow_friends_image}>

          <h1>
            Looking for fellow traveller?
          </h1>
          
          <img src={fellow_travelers_logo} alt="fellow travelers" />

        </div>
      </div>
      
      
    </Card>
  )
}

export default YoutTrip