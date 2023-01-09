import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import PlaceItem from "../placeItem";
import { fetchAllPlaces } from '../../../components/utils/places/fetchPlaces';
import { notify } from "../../../components/shared/UI/toast";
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';

const PlaceList = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {

      setIsLoading(true)
      const placesData = await fetchAllPlaces();
      setIsLoading(false);
      if(!placesData.status)notify(placesData.message, "error")
      setData(placesData.data);
    }


    fetchData();
  }, [])


  const ListItemElement = () => (
    <div className={styles.list_container}>
      {
        data.map(item => <PlaceItem key={item._id} item={item} />)
      }
    </div>
  )

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data && 
        <div className={styles.container}>
          <h1 className={styles.container_header}>Explore Destination</h1>
          <ListItemElement />
        </div>
      }
    </>
  )
}

export default PlaceList