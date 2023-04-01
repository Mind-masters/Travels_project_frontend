import React from 'react'
import MapIcon from '../../../../assets/map_icon.png';
import styles from "./mapripple.module.css";

const RippleMap = () => {
  return (
    <div>
      <div className={styles.map_icon}>
        <img src={MapIcon} alt='map_icon'/>
      </div>
      <div className={styles.pulse}></div>
    </div>
  )
}

export default RippleMap
