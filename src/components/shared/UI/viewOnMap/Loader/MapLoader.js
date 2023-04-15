import React from 'react'
import styles from'./maploader.module.css'
import Mapicon from '../../../../../assets/map_icon.png'
export const MapLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map_icon}>
        <img src={Mapicon}></img>
      </div>
      </div>
  )
}
