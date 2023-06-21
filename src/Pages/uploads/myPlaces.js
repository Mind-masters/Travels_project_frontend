import React, { useState } from 'react'
import styles from "./myPlaces.module.css";

import plus_logo from "../../assets/plus.png";
import view_places_logo from "../../assets/your-trip/places_view_icon.png"
import view_count_logo from "../../assets/your-trip/places_count_icon.png"

import Modal from "../../components/shared/UI/Modal";

// importing modals: 
import CreateTrip from "./modals/createTrip";


const  ClientTrips = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const onHideModalHandler = () => {
    setShowModal(false);
    setShowCreateModal(false);
  }

  const onOpenModalHandler = () => {
    setShowCreateModal(true);
    setShowModal(true); 
  }

  return (

    <>      
      
        <Modal        
          onClose={onHideModalHandler.bind(false, true)}
          show={showModal} 
        >
          {
            showCreateModal && <CreateTrip onRefresh={props.onRefresh} onClose={onHideModalHandler} />
          }
        </Modal>
      

      <div className={styles.container}>
        <div className={styles.wrapper}>


          <h1 className={styles.main_header}>Share places with others</h1>

          <div className={styles.box_content}>
            <div onClick={onOpenModalHandler} className={styles.box}>
              <img src={plus_logo} alt='' />
              <h1>Click to add</h1>
            </div>

          </div>

          <div className={styles.details}>
            
            <div className={styles.details_content}>
              <img src={view_count_logo} alt='' />
              <p>{`${props.numberOfPlaces > 0 ? `You are shared ${props.numberOfPlaces} places` : `Share interesting place`}`}</p>
            </div>
            
            <div className={styles.details_previev}>
              <img src={view_places_logo} alt='' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ClientTrips