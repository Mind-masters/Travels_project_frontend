import React, { useState } from 'react'
import styles from "./slideItem.module.css";
import Ripple from "../ripple"
import Button from "../button/Button"
import Location from "../map/location";
import Modal from '../Modal';
import { useEffect } from 'react';


const SlideItem = ({item, key}) => {

  const [showMapModal, setShowMapModal] = useState(false);
  const [showLoader, setShowLoader] = useState(true);


  useEffect(() => {

    if(showLoader){
      setTimeout(() => {
        setShowLoader(false);
      }, 3000);

    }

  }, [showLoader])

  const showOnMap = () => {
    setShowMapModal(true);
    setShowLoader(true);

  }

  return (
    <div className={styles.slide_container}>
      <div className={styles.filter}></div>
      <div className={styles.content}>
        <div style={{ backgroundImage: `url(${item.image})` }} className={styles.content_image} ></div>

        <div className={styles.content_body}>
          <div className={styles.content_body_text}>
            <h1>{item.type}</h1>
          </div>

          <div className={styles.content_body_map}>
            <Button onSubmit={showOnMap} color="rgba(68, 68, 68, 0.48)" border="2px solid #F7E1CE">
              <div className={styles.content_body_button}>
                <div className={styles.content_body_button_icon}>
                  <div className={styles.icon_ripple}>
                    <Ripple />
                  </div>
                </div>
                <h1>Map view</h1>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <Modal
        show={showMapModal}
        onClose={() => {setShowMapModal(false)}}
      >
        <>
          { showLoader &&
            <div className={styles.loading__}>
              <div className={styles.loading__icon}>
                <Ripple bright={true} />
              </div>
            </div>
          }
          
          <Location 
            onClose={() => {setShowMapModal(false); setShowLoader(false)}}
            show_location={item.location}
          />
        </>
      </Modal>

      
    </div>
  )
}

export default SlideItem