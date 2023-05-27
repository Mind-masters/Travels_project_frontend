import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import PlaceItem from "../placeItem";

const PlaceList = ({data}) => {



  const ListItemElement = () => (
    <div className={styles.list_container}>
      {
        data.map(item => <PlaceItem key={item._id} item={item} />)
      }
    </div>
  )

  return (
    <>
      <div className={styles.places_list_container}>
        <ListItemElement />
      </div>
    </>
  )
}

export default PlaceList