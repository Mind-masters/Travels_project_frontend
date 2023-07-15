import React, {useState, useContext} from 'react'
import Modal from '../Modal'
import AlertContainer from './alertContainer'
import Location from '../map/location'
import { AuthContext } from '../../../../contextAPI/AuthContext'
import { notify } from "../../../../components/shared/UI/toast";
import { Map } from '../../../utils/places/map'

const ViewOnMap = (props) => {

  const [showMap, setShowMap] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(null);
  const Auth = useContext(AuthContext);
  const token = Auth && Auth.authenticatedUser && Auth.authenticatedUser.token.access_token;

  const submitAlertHandler = async() => {
    if(!token)return;

    setShowMap(true)

    const showMapReq = await Map({pid: props.pid}, token);
    if(!showMapReq.status){
      notify(showMapReq.message || "Please contact us", "error")
      setShowMap(false);
    }

    const {user} = showMapReq.data;
    setUpdatedUser(user);
  }

  const onUpdateUserDelay = () => {

    if(!updatedUser)return props.onClose();

    Auth.update({
      data: updatedUser, 
      token: 
      {
        access_token: updatedUser.access_token,
        refresh_token: updatedUser.refresh_token
      } 
    })

    return props.onClose();
  }

  
  return (
    <div>
      <Modal 
        onClose={props.onClose}
        show={true} 
      >
        { !showMap && <AlertContainer onGo={submitAlertHandler} onClose={props.onClose} />}
        <>
          { showMap && Auth.authenticatedUser &&
            <Location 
              onClose={onUpdateUserDelay} 
              show_location={props.location}
            />
          }
        </>
        
      </Modal>

    </div>
  )
}

export default ViewOnMap