import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Body from "./body";
import UserPanel from './userPanel';
import ViewOnMap from '../../../components/shared/UI/viewOnMap';
import PlaceImage from './placeImage';


const PlaceItem = (props) => {

  const [showMap, setShowMap] = useState(false);

  const onShowMapHandler = () => {
    setShowMap(true)
  }

  if(!props.item.user_id)return
  
  return (
    <div className={`${styles.container} ${"box effect2"}`}>

      <div className={styles.mobile_user_panel}>
        <UserPanel user={props.item.user_id} place={props.item} onFilter={props.onFilter} onShowMap={onShowMapHandler} />
      </div>

      <PlaceImage item={props.item} />

      <div className={styles.body_container}>
        <Body item={props.item} onFilter={props.onFilter} onShowMap={onShowMapHandler}/>
      </div>

      {showMap && <ViewOnMap location={props.item && props.item.location} onClose={()=>{setShowMap(false)}}/> }

    </div>
  )
}

export default PlaceItem