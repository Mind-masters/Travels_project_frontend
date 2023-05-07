import React, {useState, useContext} from 'react'
import Like from '../../../../../components/shared/UI/Ratings/like';
import styles from "./controllers.module.css";
import Ripple from '../../../../../components/shared/UI/ripple';
import ViewOnMap from "../../../../../components/shared/UI/viewOnMap";
import { AuthContext } from '../../../../../contextAPI/AuthContext';

const Controllers = (props) => {
  
  const item = props.item;
  const [showMap, setShowMap] = useState(false);

  const User = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(User.authenticatedUser && (item.likes && item.likes.includes(User.authenticatedUser.data.id)));
  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }


  return (
    <div className={styles.container}>
      <Like 
        onLike={onLikeClickHandler} 
        isLiked={isLiked}
        likes={likesCount}
      />

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

      {showMap && <ViewOnMap location={props.item && props.item.location} onClose={()=>{setShowMap(false)}} />}

    </div>
  )

}

export default Controllers