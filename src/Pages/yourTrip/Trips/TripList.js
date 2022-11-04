import React from 'react'
import styles from "./styles/yourTripsList.module.css";
import add_new_trip_logo from "../../../assets/your-trip/ad_new_trip_logo.png";
import ListItem from "./ListItem";


const YourTripList = ({data}) => {



  return (

    <ul className={styles.list_container}>

      <div>
        <img src={add_new_trip_logo} alt="+"/>
      </div>

      {data && data.map(trip => 
        <ListItem element={trip} secured={false} />
      )}

    </ul>

  )
}

export default YourTripList