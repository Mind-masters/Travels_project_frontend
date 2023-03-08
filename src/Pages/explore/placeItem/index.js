import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import {Comment} from "../../../components/utils/places/comment";
import StarsRating from '../../../components/shared/UI/Ratings/stars';
import Button from '../../../components/shared/UI/button/Button';
import Like from "../../../components/shared/UI/Ratings/like";
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import Input from "../../../components/shared/UI/formInput";
import commentsLogo from "../../../assets/comments.png";
import map_icon from "../../../assets/map_icon.png";
import ViewOnMap from './viewOnMap';

const PlaceItem = ({item}) => {

  // const [showComments, setShowComments] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false);
  const item_author = item.user_id ? item.user_id : "Unknown user"
  const User = useContext(AuthContext);
  const token = User.isLoggedIn ? User.authenticatedUser.token.access_token : null

  const [isLiked, setIsLiked] = useState(User.authenticatedUser && (item.likes && item.likes.includes(User.authenticatedUser.data.id)));

  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);
  const [commentsCount, setCommentsCount] = useState(item.comments ? item.comments.length : 0);

  const [commentValue, setCommentValue] = useState(null);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }

  const onCommentSubmitHandler = async() => {

    if(!commentValue)return

    setCommentsCount(commentsCount + 1);

    const create_new_comment = await Comment(
      {
        text: commentValue,
        pid: item._id
      },
      token
    )

    setCommentValue(null)

    console.log("create_new_comment: ", create_new_comment)

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

            <div className={styles.button}>
          <Button onSubmit={() => {setShowMapModal(true)}} color="#96F974">
            <img src={map_icon} alt="" />
            View on map
          </Button>
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
        </div>

        <div className={styles.comments}>
          
          <Input name="Add a comment..." value={commentValue} isValid={true} no_errors={true} onChange={(val)=>{setCommentValue(val)}} />
          <img src={commentsLogo} alt="" onClick={onCommentSubmitHandler} />
        </div>

        

      </div>

      <div className={styles.controllers_messages}>
        {likesCount > 0 && <p>{likesCount} {likesCount.length > 1 ? "likes" : "like"}</p>}
        {commentsCount > 0 && <p>{commentsCount} {commentsCount.length > 1 ? "comments" : "comment"}</p>}
      </div>

      

    </div>
  )
}

export default PlaceItem