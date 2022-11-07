import React from 'react'
import styles from "./tripList.module.css";
import add_new_trip_logo from "../../../assets/your-trip/ad_new_trip_logo.png";

import Modal from "../../../components/shared/UI/Modal";
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { useState } from 'react';


// importing modals: 
import DeleteTrip from "./modals/deleteTrip";
import UpdateTrip from "./modals/updateTrip";
import ReviewTrip from "./modals/reviewTrip";

const YourTripList = ({data, user_places}) => {

  const [showModal, setShowModal] = useState(false);

  const [showUpdateModal,setShowUpdateModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState(false);
  const [showReviewModal,setShowReviewModal] = useState(false);

  const UpdateTripModal = (isNewTrip) => {
    setShowModal(!showModal)
    setShowUpdateModal(!showUpdateModal);
  }

  const DeleteTripModal = () => {
    setShowModal(!showModal)
    setShowDeleteModal(!showDeleteModal);
  }

  const ReviewTripModal = () => {
    setShowModal(!showModal)
    setShowReviewModal(!showReviewModal);
  }
  

  return (

    <>

      
      {
      showModal && 
        <Modal        
          onCancel={onclose}
          show={showModal} 
        >
          {
            showUpdateModal && <UpdateTrip onClick={UpdateTripModal} />
          }
          {
            showReviewModal && <ReviewTrip onClick={ReviewTripModal} />
          }
          {
            showDeleteModal && <DeleteTrip onClose={DeleteTripModal} />
          }
        </Modal>
      }
      
      <div className={styles.trip_list_container}>

        { user_places &&
          <img 
            className={styles.add_logo} 
            src={add_new_trip_logo} 
            onClick={UpdateTripModal.bind(null,true)} 
            alt="plus logo" 
          />
        }

        <CarouseleList data={data} top_menu={true}>
          <ul className={styles.top_menu_container}>
            {user_places && <li className={styles.top_menu_update} onClick={UpdateTripModal.bind(false)} >Update</li>}
            <li className={styles.top_menu_review} onClick={ReviewTripModal} >Review</li>
            {user_places && <li className={styles.top_menu_delete} onClick={DeleteTripModal} >Delete</li>}
          </ul>
        </CarouseleList>
  
      </div>
      

    </>




  )
}

export default YourTripList