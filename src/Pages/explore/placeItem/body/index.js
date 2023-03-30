import styles from "./body.module.css";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import UserPanel from "../userPanel";
import Details from "./details";
import Comments from "./comments";

// import ViewOnMap from "../../../../components/shared/UI/viewOnMap";
import map_icon from "../../../../assets/map_icon.png";
import Controllers from "./controllers";


const Body = ({item}) => {
  
  const User = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(User.authenticatedUser && (item.likes && item.likes.includes(User.authenticatedUser.data.id)));
  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);
  const [showDescription, setShowDescription] = useState(true);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }


  return (
    <div className={styles.container}>

      <UserPanel url={item.user_id.avatar} />

      <div className={styles.body}>

        <Details item={item} />

        <Comments item={item} />

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
  )
}

export default Body