import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";

import Body from "./body";
import UserPanel from './userPanel';

const PlaceItem = ({item}) => {

  
  return (
    <div className={styles.container}>

      <div className={styles.mobile_user_panel}>
        <UserPanel url={item.user_id.avatar} />
      </div>

      <div className={styles.image_container}>
        
        <img src={item.image} alt=""/>
      </div>

      <div className={styles.body_container}>
        <Body item={item} />
      </div>
    </div>
  )
}

export default PlaceItem