import React from 'react';
import styles from './destinations.module.css';
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { fetchAllPlaces } from '../../../components/utils/places/fetchPlaces';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";
import { useState } from 'react';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import Header from './header';
import {PlacesData} from "./Data"
import BottomBar from './Navi/bottomBar';

import friends_logo from "../../../assets/signs/friends.png"
import gift_logo from "../../../assets/signs/gifts.png"
import explore_logo from "../../../assets/signs/map_pin.png"
import TopBar from './Navi/topBar';
import { useNavigate } from 'react-router-dom';


const Destinations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currPlaceType, setCurrPlaceType] = useState("Abandoned places")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async() => {

      setIsLoading(true)
      
      const placesData = await fetchAllPlaces();
      setIsLoading(false);
      if(!placesData.status)notify("Website under maintenance ", "error")
    }


    fetchData();
  }, [])




  
  return (
    <div className={styles.container}>
      <TopBar />

      <div className={styles.header_block}></div>

      <div className={styles.content}>

        <div className={styles.header_wrapper}>
          <Header />
        </div>

        <div className={styles.places_list}>
          <BottomBar currPlaceType={currPlaceType} />

          <div className={styles.carousele}>
            <CarouseleList callback={(data)=>{setCurrPlaceType(data)}} data={PlacesData}/>
          </div>
        </div>
        
      </div>

      
    </div>
    
  )
}

export default Destinations

  