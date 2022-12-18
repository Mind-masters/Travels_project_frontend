import React from 'react';
import styles from './destinations.module.css';
import YourTripWrapper from "../../../../components/shared/UI/tripList/wrapper";
import CarouseleList from '../../../../components/shared/UI/tripList/carouseleList';
import { fetchAllPlaces } from '../../../../components/utils/places/fetchPlaces';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../../components/shared/UI/toast";
import { useState } from 'react';
import LoadingSpinner from '../../../../components/shared/UI/LoadingSpinner';

const Destinations = () => {

  const [allPlaces, setAllPlaces] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async() => {

      setIsLoading(true)
      const placesData = await fetchAllPlaces();
      setIsLoading(false);
      if(!placesData.status)notify(placesData.message, "error")
      setAllPlaces(placesData.data);
    }


    fetchData();
  }, [])
  
  return (
    <div className={styles.container}>

      <YourTripWrapper inherit header={"CHOOSE YOUR DESTINATION"}>
        {isLoading && <LoadingSpinner />}
        {!isLoading && allPlaces && <CarouseleList data={allPlaces} />}
      </YourTripWrapper>

      
    </div>
    
  )
}

export default Destinations
