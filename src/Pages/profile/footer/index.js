import React from 'react'
import styles from "./footer.module.css";
import PlaceList from './placeList';


const Footer = ({Places}) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.header}> Places you shared: </h1>

      <div className={styles.content}>
        <PlaceList Places={Places} />
      </div>
    </div>
  )
}

export default Footer