import styles from "./body.module.css";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import UserPanel from "../userPanel";
import Details from "./details";
import Comments from "./comments";

// import ViewOnMap from "../../../../components/shared/UI/viewOnMap";
import map_icon from "../../../../assets/map_icon.png";
import Controllers from "./controllers";
import ViewOnMap from "../../../../components/shared/UI/viewOnMap";


const Body = ({item}) => {
  
  const User = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(User.authenticatedUser && (item.likes && item.likes.includes(User.authenticatedUser.data.id)));
  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);
  const [showDescription, setShowDescription] = useState(true);
  const [showMap, setShowMap] = useState(false);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }


  return (
    <div className={styles.container}>

      <div className={styles.big_screen}>
        <UserPanel url={item.user_id.avatar} />
      </div>


      <div className={styles.body}>

        <Details 
          item={item} 
          onLike={onLikeClickHandler} 
          isLiked={isLiked}
          likes={likesCount}
          onMap={()=>{setShowMap(true)}}
        />


        {showMap && <ViewOnMap location={item && item.location} onClose={()=>{setShowMap(false)}} />}

        <Comments item={item} />
      
        <div className={styles.big_screen}>
          <Controllers 
            pid={item._id} 
            isLiked={isLiked}
            onLike={onLikeClickHandler} 
            padding={0}
            likes={likesCount} 
            timeline={true}
          />
        </div>

      </div>


    </div>
  )
}

export default Body