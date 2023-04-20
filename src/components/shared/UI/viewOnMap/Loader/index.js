import React from 'react'
import styles from "./loader.module.css"
import logo from "../../../../../assets/map_icon.png"


const Map = () => {

    
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.marker} ></img>
      <div className={styles.pulse} ></div>
    </div>
  )
}

export default Map