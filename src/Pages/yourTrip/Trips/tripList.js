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

  const params = user_places && {
    create_: true,
    read_: true,
    update_: true,
    delete_: true,

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
      
      <CarouseleList params={params} data={data} top_menu={true} />
    
    </>




  )
}

export default YourTripList