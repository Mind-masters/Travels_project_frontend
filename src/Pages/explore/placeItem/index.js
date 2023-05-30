import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Body from "./body";
import UserPanel from './userPanel';
import hiddenIcon from "../../../assets/explore/hiden.png";
import vissibleIcon from "../../../assets/explore/visible.png";
import ViewOnMap from '../../../components/shared/UI/viewOnMap';


const PlaceItem = (props) => {

  const [showMobDescription, setShowMobDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const clickOnEyeHandler = () => {
    setShowMobDescription(!showMobDescription);
  }

  const onShowMapHandler = () => {
    console.log("labutis. map will appear now")
    setShowMap(true)
  }

  if(!props.item.user_id)return
  
  return (
    <div className={`${styles.container} ${"box effect2"}`}>

      <div className={styles.mobile_user_panel}>
        <UserPanel user={props.item.user_id} place={props.item} onFilter={props.onFilter} onShowMap={onShowMapHandler} />
      </div>

      <div className={styles.image_container}>
        <img src={props.item.image} alt=""/>
        <div className={`${styles.mobile_description} ${showMobDescription && styles.visible_mobile_description}`}>
          <div onClick={clickOnEyeHandler} className={styles.mobile_description_icon}>
            <img src={ showMobDescription ? hiddenIcon : vissibleIcon} alt='eye'/>
          </div>
          {showMobDescription && <p>{props.item.description}</p>}
        </div>
      </div>

      <div className={styles.body_container}>
        <Body item={props.item} onFilter={props.onFilter} onShowMap={onShowMapHandler}/>
      </div>

      {showMap && <ViewOnMap location={props.item && props.item.location} onClose={()=>{setShowMap(false)}}/> }

    </div>
  )
}

export default PlaceItem