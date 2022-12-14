import React, { useState, useContext } from 'react'

import Modal from "../../../components/shared/UI/Modal";
import CarouseleList from '../../../components/shared/UI/carouseleList';
import { AuthContext } from '../../../contextAPI/AuthContext';


// importing modals: 
import DeleteTrip from "./modals/deleteTrip";
import UpdateTrip from "./modals/updateTrip";
import ReviewTrip from "./modals/reviewTrip";


const  YourTripList = ({data, onRefresh, user_places}) => {

  const Auth = useContext(AuthContext);

  const [activatedPlaceItemId, setActivatedPlaceItemId] = useState(null);
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
    onRefresh();

  }

  const onOpenModalHandler = (body) => {
    onHideModalHandler();
    if(body.state === "create")setShowCreateModal(true);
    if(body.state === "update")setShowUpdateModal(true);
    if(body.state === "delete")setShowDeleteModal(true);
    if(body.state === "review")setShowReviewModal(true);
    setActivatedPlaceItemId(body.id)
    setShowModal(true); 
    Auth.changeUserModalStatus(true);
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
            showUpdateModal && <UpdateTrip update={true} onClose={onHideModalHandler}/>
          }
          {
            showCreateModal && <UpdateTrip update={false} onClose={onHideModalHandler}/>
          }
          {
            showReviewModal && <ReviewTrip onClose={onHideModalHandler} />
          }
          {
            showDeleteModal && <DeleteTrip place_id={activatedPlaceItemId} onClose={onHideModalHandler} />
          }
        </Modal>
      }

      <div style={{ padding: 15, height: "55vh", width: "100%" }} >
        <CarouseleList auth_places={user_places} onStateClick={onOpenModalHandler} data={data}/>
      </div>
    
    </>

  )
}

export default YourTripList