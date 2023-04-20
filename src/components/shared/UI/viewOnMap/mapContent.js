import React from 'react'
import styles from "./mapContent.module.css"
import generalStyles from "./alertContainer.module.css";
import Location from '../../../../components/shared/UI/map/location';
import { useContext, useEffect, useState } from 'react';
import {AuthContext} from "../../../../contextAPI/AuthContext"
import StarRating from "../../../../components/shared/UI/Ratings/stars";
import earthLogo from "../../../../assets/earth.png";
import Button from '../button/Button';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Modal from '../Modal';
import Loader from './Loader';



const MapContent = (props) => {

  const handle = useFullScreenHandle();
  const Auth = useContext(AuthContext);
  const [showMaps, setShowMaps] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  // console.log("auth: ", Auth);

  const onViewMapsHandler = () => {
    setShowModal(true)
    setShowMaps(true)
    setShowLoader(true);
  }

  useEffect(() => {

    if(showLoader){
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 30000);
      handle.enter();

    }

  }, [showMaps, showLoader])



  return (
    <div className={generalStyles.alert}>
        
        <div className={generalStyles.alert_message}>
          <h1>Help us approve this location</h1>
        </div>

        <div className={styles.author_content}>
          <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hatColor=BrownDark&facialHairType=Auburn&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=EyeRoll&eyebrowType=SadConcerned&mouthType=Eating&skinColor=Brown' alt=''/>
          <h1>Tom Shelby</h1>
          <div>
            <StarRating />
          </div>
        </div>

        <div className={styles.view_map}>
          <h1>Preview</h1>
          <img onClick={onViewMapsHandler} src={earthLogo} alt='' />
        </div>

        {
          showMaps && 
          
          <Modal
            show={showModal}
            onClose={() => {setShowModal(false)}}
          >
              {/* <FullScreen handle={handle}> */}
            <>
              { showLoader &&
                <div className={styles.loading__}>
                  <Loader />
                </div>
              }
              
              <Location 
                onClose={() => {setShowMaps(false); setShowModal(false)}} 
                show_location={props.show_location}
              />
            </>
              {/* </FullScreen> */}
          </Modal>
        }
        

        <div className={styles.controllers}>
          <Button color="rgba(212, 30, 37, 1)"><h1 style={{ color: "white" }}>Incorrect</h1></Button>
          <Button color="rgba(238, 125, 21, 1)"><h1 style={{ color: "white" }}>Correct</h1></Button>
        </div>

    </div>
  )
}

export default MapContent