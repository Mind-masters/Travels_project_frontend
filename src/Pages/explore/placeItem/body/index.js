import styles from "./body.module.css";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import UserPanel from "./user_panel";
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

        <div className={styles.description_comments_panel}>
          <div className={styles.description_comments_buttons}>
            <button onClick={()=>setShowDescription(true)}>description</button>
            <button onClick={()=>setShowDescription(false)}>comments</button>
          </div>

          { showDescription ?
            <Details item={item} />
            :
            <Comments item={item} />
          }
        </div>

        <div className={styles.controll_panel}>
          { showDescription && 
            <Controllers 
              pid={item._id}
              isLiked={isLiked} 
              onLike={onLikeClickHandler} 
              onComment={()=>setShowDescription(false)} 
              map={true} 
              padding={0}
            /> 
          }
        </div>

        <div className={styles.footer}>
          {
            showDescription ? 
            <Controllers 
              likes={likesCount} 
            /> : 
            <Controllers 
              pid={item._id} 
              isLiked={isLiked}
              onLike={onLikeClickHandler} 
              likes={likesCount} 
              map={true} 
              padding={0}
            />
          }
        </div>
        
      </div>


    </div>
  )
}

export default Body