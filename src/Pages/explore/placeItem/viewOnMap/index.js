import React from 'react'
import Modal from '../../../../components/shared/UI/Modal'
import AlertContainer from './alertContainer'
import Location from '../../../yourTrip/Trips/modals/subModals/location'
import { useState } from 'react'

const ViewOnMap = (props) => {

  const [showMap, setShowMap] = useState(false);


  return (
    <div>
        <Modal 
            onClose={props.onClose}
            show={true} 
        >
            { !showMap && <AlertContainer onGo={() => setShowMap(true)} onClose={props.onClose} />}
            { showMap && <Location onClose={props.onClose} />}
        </Modal>
    </div>
  )
}

export default ViewOnMap