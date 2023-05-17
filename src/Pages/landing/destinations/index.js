import React from 'react';
import styles from './destinations.module.css';
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { fetchAllPlaces } from '../../../components/utils/places/fetchPlaces';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";
import { useState } from 'react';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import BGImage from "../../../assets/hero-section.png";
import Header from './header';
import {PlacesData} from "./Data"


const Destinations = () => {

  const [allPlaces, setAllPlaces] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

      <div className={styles.header_block}></div>

      {isLoading && <LoadingSpinner asOverlay/>}

      {!isLoading && allPlaces && 
        <div className={styles.content}>
          <Header />

          <div className={styles.places_list}>
            <CarouseleList data={PlacesData}/>
          </div>
          
        </div>
      }
      
    </div>
    
  )
}

export default Destinations

  
