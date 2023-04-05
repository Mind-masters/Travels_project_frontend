import React from 'react'
import MapIcon from '../../../../assets/map_pin.png';
import styles from "./ripple.module.css";

const Ripple = () => {

  return (
    <div className={styles.container}>
      <div className={styles.map_icon}>
        <img src={MapIcon} alt='map_icon'/>
      </div>
      <div className={styles.pulse}></div>
    </div>
  )
}

export default Ripple