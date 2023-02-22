import React from 'react'
import styles from "./footer.module.css";


const PlaceItem = ({item}) => {

  return (
    <img className={styles.list_item} src={item.image} alt="" />
  )
}

export default PlaceItem