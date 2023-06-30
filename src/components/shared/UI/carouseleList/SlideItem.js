import React, { useState } from 'react'
import styles from "./slideItem.module.css";
import Ripple from "../ripple"
import Location from "../map/location";
import Modal from '../Modal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SlideItem = ({item, key}) => {
  const navigate = useNavigate();

  const [showMapModal, setShowMapModal] = useState(false);

  const onShowAllHandler = () => {
    if(!item.type)return
    
    return navigate(`/explore/${item.type}`, )
  }



  const showOnMap = () => {
    setShowMapModal(true);
  }
  
  return (
    <div className={styles.slide_container}>

      <div className={styles.second_image} style={{ backgroundImage: `url(${item.image})`}}></div>

      <div className={styles.content}>
        <div className={styles.top_bar}>
          <div className={styles.type_name}>
            {item.type}
          </div>

          <div className={styles.type_all} onClick={onShowAllHandler}>
            See All
          </div>
        </div>

        <div className={styles.bottom_bar} onClick={showOnMap}>
          <div className={styles.location_icon}>
            <Ripple />
          </div>
          <h1 style={{ color: "white" }}>Location</h1>
        </div>
      </div>

      <Modal
        show={showMapModal}
        onClose={() => {setShowMapModal(false)}}
      >
        <>
          <Location 
            onClose={() => {setShowMapModal(false)}}
            show_location={item.location}
          />
        </>
      </Modal>

      
    </div>
  )
}

export default SlideItem