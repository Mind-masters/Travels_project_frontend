import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Body from "./body";
import UserPanel from './userPanel';
import hiddenIcon from "../../../assets/explore/hiden.png";
import vissibleIcon from "../../../assets/explore/visible.png";


const PlaceItem = (props) => {

  const [showMobDescription, setShowMobDescription] = useState(false);

  const clickOnEyeHandler = () => {
    setShowMobDescription(!showMobDescription);
  }

  if(!props.item.user_id)return
  
  return (
    <div className={`${styles.container} ${"box effect2"}`}>

      <div className={styles.mobile_user_panel}>
        <UserPanel user={props.item.user_id} place={props.item} />
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
        <Body item={props.item} />
      </div>
    </div>
  )
}

export default PlaceItem