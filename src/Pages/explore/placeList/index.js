import React from 'react'
import styles from "./index.module.css";
import PlaceItem from "../placeItem";

const index = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container_header}>Explore Destination</h1>

      <div className={styles.list_container}>
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
      </div>
    </div>
  )
}

export default index