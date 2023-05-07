import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Body from "./body";
import UserPanel from './userPanel';
import hiddenIcon from "../../../assets/explore/hiden.png";
import vissibleIcon from "../../../assets/explore/visible.png";


const PlaceItem = ({item}) => {

  const [showMobDescription, setShowMobDescription] = useState(false);

  const clickOnEyeHandler = () => {
    setShowMobDescription(!showMobDescription);
  }
  
  return (
    <div className={`${styles.container} ${"box effect2"}`}>

      <div className={styles.mobile_user_panel}>
        <UserPanel url={item.user_id.avatar} />
      </div>

      <div className={styles.image_container}>
        <img src={item.image} alt=""/>
        <div className={`${styles.mobile_description} ${showMobDescription && styles.visible_mobile_description}`}>
          <div onClick={clickOnEyeHandler} className={styles.mobile_description_icon}>
            <img src={ showMobDescription ? hiddenIcon : vissibleIcon} alt='eye'/>
          </div>
          {showMobDescription && <p>{item.description}</p>}
        </div>
      </div>

      <div className={styles.body_container}>
        <Body item={item} />
      </div>
    </div>
  )
}

export default PlaceItem