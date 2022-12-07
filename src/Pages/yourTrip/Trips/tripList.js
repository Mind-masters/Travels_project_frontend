import React, { useState, useContext } from 'react'

import Modal from "../../../components/shared/UI/Modal";
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { AuthContext } from '../../../contextAPI/AuthContext';


// importing modals: 
import DeleteTrip from "./modals/deleteTrip";
import UpdateTrip from "./modals/updateTrip";
import ReviewTrip from "./modals/reviewTrip";


const  YourTripList = ({data, user_places}) => {

  const Auth = useContext(AuthContext);


  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal,setShowUpdateModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState(false);
  const [showReviewModal,setShowReviewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const onHideModalHandler = () => {
    setShowModal(false);
    setShowUpdateModal(false);
    setShowReviewModal(false);
    setShowDeleteModal(false);
    setShowCreateModal(false);
    Auth.changeUserModalStatus(false);
  }

  const onOpenModalHandler = (state) => {

    console.log("state: ", state)

    onHideModalHandler();
    if(state === "create")setShowCreateModal(true);
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
            showUpdateModal && <UpdateTrip update={true} onClose={onHideModalHandler} onSubmit={onTripSubmit.bind(null,data)}/>
          }
          {
            showCreateModal && <UpdateTrip update={false} onClose={onHideModalHandler} onSubmit={onTripSubmit.bind(null,data)}/>
          }
          {
            showReviewModal && <ReviewTrip onClose={onHideModalHandler} />
          }
          {
            showDeleteModal && <DeleteTrip onClose={onHideModalHandler} onSubmit={onDeleteTripSubmit}/>
          }
        </Modal>
      }
      
      <CarouseleList auth_places={true} onStateClick={onOpenModalHandler} data={data}/>
    
    </>




  )
}

export default YourTripList