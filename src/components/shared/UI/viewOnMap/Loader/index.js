import React from 'react'
import styles from "./loader.module.css"



const Map = () => {

    
  return (
    <div className={styles.container}>
      <div className={styles.marker} ></div>
      <div className={styles.pulse} ></div>
    </div>
  )
}

export default Map