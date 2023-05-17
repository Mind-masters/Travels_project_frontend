import React, { useState } from 'react'
import styles from "./clientTrips.module.css";
import { motion } from "framer-motion"
import plus_logo from "../../../assets/plus.png";
import scroll_logo from "../../../assets/scroll_logo.png";
import view_places_logo from "../../../assets/your-trip/places_view_icon.png"
import view_count_logo from "../../../assets/your-trip/places_count_icon.png"


// import Modal from "../../../components/shared/UI/Modal";
// import CarouseleList from '../../../components/shared/UI/tripList/carouseleList';


// importing modals: 
// import DeleteTrip from "./modals/deleteTrip";
// import UpdateTrip from "./modals/updateTrip";
// import ReviewTrip from "./modals/reviewTrip";


const  ClientTrips = () => {

  // const [activatedPlaceItemId, setActivatedPlaceItemId] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const [showUpdateModal,setShowUpdateModal] = useState(false);
  // const [showDeleteModal,setShowDeleteModal] = useState(false);
  // const [showReviewModal,setShowReviewModal] = useState(false);
  // const [showCreateModal, setShowCreateModal] = useState(false);
  
  // const onHideModalHandler = (isCanceled) => {
  //   setShowModal(false);
  //   setShowUpdateModal(false);
  //   setShowReviewModal(false);
  //   setShowDeleteModal(false);
  //   setShowCreateModal(false);
  //   if(!isCanceled)onRefresh();

  // }

  // const onOpenModalHandler = (body) => {
  //   if(body.state === "create")setShowCreateModal(true);
  //   if(body.state === "update")setShowUpdateModal(true);
  //   if(body.state === "delete")setShowDeleteModal(true);
  //   if(body.state === "review")setShowReviewModal(true);
  //   setActivatedPlaceItemId(body.id)
  //   setShowModal(true); 
  // }

  return (

    // <>      
    //   {
    //   showModal && 
    //     <Modal        
    //       onClose={onHideModalHandler.bind(false, true)}
    //       show={showModal} 
    //     >
    //       {
    //         showUpdateModal && <UpdateTrip update={true} onClose={onHideModalHandler} />
    //       }
    //       {
    //         showCreateModal && <UpdateTrip update={false} onClose={onHideModalHandler} />
    //       }
    //       {
    //         showReviewModal && <ReviewTrip onClose={onHideModalHandler} />
    //       }
    //       {
    //         showDeleteModal && <DeleteTrip place_id={activatedPlaceItemId} onClose={onHideModalHandler} />
    //       }
    //     </Modal>
    //   }

    // </>

    <div className={styles.wrapper}>
      <h1 className={styles.main_header}>Share places with others</h1>

      <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className={styles.box_content}>
        <div className={styles.box}>
          <img src={plus_logo} alt='' />
          <h1>Click to add</h1>
        </div>

        <img className={styles.scroll_logo} src={scroll_logo} alt='' />
      </motion.div>

      <div className={styles.details}>
        
        <div className={styles.details_content}>
          <img src={view_count_logo} alt='' />
          <p>You are shared 0 places</p>
        </div>
        
        <div className={styles.details_previev}>
          <img src={view_places_logo} alt='' />
        </div>
      </div>

    </div>

  )
}

export default ClientTrips