import React, {useState} from 'react'
import Like from '../../../../../components/shared/UI/Ratings/like';
import styles from "./controllers.module.css";
import Ripple from '../../../../../components/shared/UI/ripple';
import ViewOnMap from "../../../../../components/shared/UI/viewOnMap";
import AuthRequired from '../../../../../components/shared/layouts/AuthRequired';


const Controllers = (props) => {
  
  const item = props.item;
  const [showMap, setShowMap] = useState(false);


  return (
    <div className={styles.container}>
      <AuthRequired>
        <Like 
          item={item}
        />
      </AuthRequired>

      <div className={styles.map_btn_container} onClick={()=>setShowMap(true)}>
        <button className={styles.map_btn}>
          <div className={styles.map_btn_content}>
            <div className={styles.btn_icon}>
              <div className={styles.icon_ripple}>
                <Ripple bright={true} />
              </div>
            </div>
            <h1>Location</h1>
          </div>
        </button>
      </div>

      {showMap && 
        <AuthRequired>
          <ViewOnMap location={props.item && props.item.location} onClose={()=>{setShowMap(false)}}/>
        </AuthRequired> 
      }

    </div>
  )

}

export default Controllers