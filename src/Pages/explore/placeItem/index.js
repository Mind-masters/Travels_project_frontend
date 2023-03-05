import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Comments from "./comments/Comments";
import StarsRating from '../../../components/shared/UI/Ratings/stars';
import Button from '../../../components/shared/UI/button/Button';
import Like from "../../../components/shared/UI/Ratings/like";
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';

import map_icon from "../../../assets/map_icon.png";
import ViewOnMap from './viewOnMap';

const PlaceItem = ({item}) => {

  const [showComments, setShowComments] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false);
  const item_author = item.user_id ? item.user_id : "Unknown user"
  const User = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(User.authenticatedUser && (item.likes && item.likes.includes(User.authenticatedUser.data.id)));

  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }

  const CloseMapModal = () => {
    setShowMapModal(false);
  }
  
  return (
    <div className={styles.container}>

      
      {showMapModal && <ViewOnMap location={[item.location.lng, item.location.lat]} onClose={CloseMapModal} />}
      <div className={styles.author_line}>

        <div className={styles.author_image}>
          <img src={item_author.avatar} alt=''/>
          <p>{item_author.name}</p>
        </div>

        <div className={styles.user_menu_big_screens}>
          <div className={styles.button}>
            <Button><p>Profile</p></Button>
          </div>
          <div className={styles.starRating}>
            <StarsRating/>
          </div>
          <div className={styles.client_dropdown}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>

      <div className={styles.imageField}>
        
        <img src={item.image} className={styles.imageFieldPicture} alt=""/>

        <div className={styles.imageFieldContent}>
          <div className={styles.imageFieldContentHeader}>
            <div>
              <h1>{item.title}</h1>
            </div>

            
          </div>
          
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra mauris vel  dolor consequat, dignissim tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra mauris vel  dolor consequat, dignissim tempor 
            </p>
          </div>
          
        </div>

      </div>
      
      <div className={styles.controllers}>
        <div className={styles.like}>
          <Like pid={item._id} count={likesCount} onClick={onLikeClickHandler} user={User.authenticatedUser} isLiked={isLiked}/>
          {likesCount > 0 && <p>{likesCount} {likesCount.length > 1 ? "likes" : "like"}</p>}
        </div>

        {/* <div className={styles.like}>
          cooment
        </div>

        <div className={styles.button}>
          <Button onSubmit={() => {setShowMapModal(true)}} color="#96F974">
            <img src={map_icon} alt="" />
            View on map
          </Button>
        </div> */}

      </div>

      

    </div>
  )
}

export default PlaceItem