import React, { useEffect } from 'react'
import Modal from '../Modal'
import AlertContainer from './alertContainer'
import { useState } from 'react'
import Location from '../map/location'
import { useContext } from 'react'
import { AuthContext } from '../../../../contextAPI/AuthContext'
import Ripple from '../ripple'

const ViewOnMap = (props) => {

  const [showMap, setShowMap] = useState(false);
  const Auth = useContext(AuthContext).authenticatedUser;




  return (
    <div>
      <Modal 
        onClose={props.onClose}
        show={true } 
      >
        { !showMap && <AlertContainer onGo={() => setShowMap(true)} onClose={props.onClose} />}
        <>
          { showMap &&  Auth &&
            <Location 
              onClose={props.onClose} 
              show_location={props.location}
            />
          }
        </>
        
      </Modal>

    </div>
  )
}

export default ViewOnMap