import React, {useContext, useState} from 'react'
import Like from '../../../../../components/shared/UI/Ratings/like';
import styles from "./controllers.module.css";
import Ripple from '../../../../../components/shared/UI/ripple';
import ViewOnMap from "../../../../../components/shared/UI/viewOnMap";
import AuthRequired from '../../../../../components/shared/layouts/AuthRequired';
import { AuthContext } from '../../../../../contextAPI/AuthContext';


const Controllers = (props) => {
  const Auth = useContext(AuthContext);

  const item = props.item;
  const [showMap, setShowMap] = useState(false);

  const showOnMapHandler = () => {
    if(!Auth.authenticatedUser)return
    setShowMap(true)
  }

  return (
    <div className={styles.container}>
      <AuthRequired>
        <Like 
          item={item}
        />
      </AuthRequired>

      <div className={styles.map_btn_container} >
        <AuthRequired>
          <button onClick={showOnMapHandler} className={styles.map_btn}>
            <div className={styles.map_btn_content}>
              <div className={styles.btn_icon}>
                <div className={styles.icon_ripple}>
                  <Ripple bright={true} />
                </div>
              </div>
              <h1>Location</h1>
            </div>
          </button>
        </AuthRequired>
      </div>

      {showMap && <ViewOnMap location={props.item && props.item.location} onClose={()=>{setShowMap(false)}}/> }

    </div>
  )

}

export default Controllers