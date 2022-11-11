import React from 'react'
import styles from "./tripList.module.css";
import add_new_trip_logo from "../../../assets/your-trip/ad_new_trip_logo.png";

import Modal from "../../../components/shared/UI/Modal";
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';


// importing modals: 
import DeleteTrip from "./modals/deleteTrip";
import UpdateTrip from "./modals/updateTrip";
import ReviewTrip from "./modals/reviewTrip";

const YourTripList = ({data, user_places}) => {

  const Auth = useContext(AuthContext);


  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal,setShowUpdateModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState(false);
  const [showReviewModal,setShowReviewModal] = useState(false);


  const onHideModalHandler = () => {
    setShowModal(false);
    setShowUpdateModal(false);
    setShowReviewModal(false);
    setShowDeleteModal(false);
    Auth.changeUserModalStatus(false);
  }

  const onOpenModalHandler = (state) => {

    onHideModalHandler();
    if(state === "update")setShowUpdateModal(true);
    if(state === "delete")setShowDeleteModal(true);
    if(state === "review")setShowReviewModal(true);

    setShowModal(true);
    Auth.changeUserModalStatus(true);
  }

  const onTripSubmit = (data) => {
    console.log("submiting update modal");
  }

  const onDeleteTripSubmit = () => {
    console.log("submiting delete modal");
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
            showUpdateModal && <UpdateTrip new={false} onClose={onHideModalHandler} onSubmit={onTripSubmit.bind(null,data)}/>
          }
          {
            showReviewModal && <ReviewTrip onClose={onHideModalHandler} />
          }
          {
            showDeleteModal && <DeleteTrip onClose={onHideModalHandler} onSubmit={onDeleteTripSubmit}/>
          }
        </Modal>
      }
      
      <div className={styles.trip_list_container}>

        { user_places &&
          <img 
            className={styles.add_logo} 
            src={add_new_trip_logo} 
            onClick={() => {}} 
            alt="plus logo" 
          />
        }

        <CarouseleList data={data} top_menu={true}>
          <ul className={styles.top_menu_container}>
            {user_places && <li className={styles.top_menu_update} onClick={onOpenModalHandler.bind(null,"update")} >Update</li>}
            <li className={styles.top_menu_review} onClick={onOpenModalHandler.bind(null,"review")} >Review</li>
            {user_places && <li className={styles.top_menu_delete} onClick={onOpenModalHandler.bind(null,"delete")} >Delete</li>}
          </ul>
        </CarouseleList>
  
      </div>
      

    </>




  )
}

export default YourTripList