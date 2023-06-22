import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import PlaceItem from "../placeItem";
import { useNavigate } from 'react-router-dom';

const PlaceList = ({data}) => {

  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(data) 

  const onFilterHandler = (pid) => {

    if(!pid)return;
    setFilteredData(
      filteredData.filter(place => {
        return place._id !== pid
      } )
    )


  }

  const ListItemElement = () => (
    <div className={styles.list_container}>
      {
        filteredData && filteredData.length > 0?
        filteredData.map(item => <PlaceItem onFilter={onFilterHandler} key={item._id} item={item} />)
        :
        <div className={styles.no_places}>
          {/* <h1>Ready to bring your placelist to life? Add your cherished places and let the magic unfold before your eyes.</h1> */}
          <h1>Share your places, earn bonus points, and inspire fellow travelers!</h1>
          <p onClick={()=>navigate("/uploads")}>Create place</p>
        </div>
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