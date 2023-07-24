import React, { useState } from 'react'
import styles from "./slideItem.module.css";
import Ripple from "../ripple"
import Location from "../map/location";
import Modal from '../Modal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';


const SlideItem = ({item, key}) => {
  const navigate = useNavigate();

  const [showMapModal, setShowMapModal] = useState(false);

  const onShowAllHandler = () => {
    if(!item.type)return
    let type_of_place=item.type;
    if(item.type==="Abandoned")type_of_place="Mystery places"
    if(item.type==="Mystery")type_of_place="Mystery places"
    if(item.type==="Roads")type_of_place="Road trip"

    
    return navigate(`/explore/${type_of_place}`)
  }

  const showOnMap = () => {
    setShowMapModal(true);
  }
  
  return (
    <div className={styles.slide_container}>

      <div className={styles.second_image} style={{ backgroundImage: `url(${item.image})`}}></div>

      <div className={styles.content}>
        
        <div className={styles.type_name} onClick={onShowAllHandler}>
          <img src={item.icon} alt='icon' />
          <h1>{item.type}</h1>
        </div>

        <button onClick={showOnMap} className={styles.map_btn}>
          <div className={styles.btn_icon}>
            <div className={styles.icon_ripple}>
              <Ripple bright={true} />
            </div>
          </div>
          <h1>Map</h1>
        </button>

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