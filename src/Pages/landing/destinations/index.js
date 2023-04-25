import React from 'react';
import styles from './destinations.module.css';
import CarouseleList from '../../../components/shared/UI/tripList/carouseleList';
import { fetchAllPlaces } from '../../../components/utils/places/fetchPlaces';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";
import { useState } from 'react';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import BGImage from "../../../assets/hero-section.png"



const Destinations = () => {

  const [allPlaces, setAllPlaces] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [autoCarouseleHeight, setAutoCarouseleHeight] = useState(true);

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

      {/* <div className={styles.title_container}>
        <h1>
          ...Choose your Destination...
        </h1>
      </div> */}
      <header className={styles.header_image}>image</header>

      <div className={styles.content}></div>

      <div className={styles.temp_carousele}>
      <CarouseleList onChangeHeight={(state)=>{setAutoCarouseleHeight(state)}} data={allPlaces}/>

      </div>

      {isLoading && <LoadingSpinner asOverlay/>}

      {!isLoading && allPlaces && 
        <div style={{ height: !autoCarouseleHeight && "70vh" }} className={styles.carousele_outsider} >
        </div>
      }

      
    </div>
    
  )
}

export default Destinations

  
