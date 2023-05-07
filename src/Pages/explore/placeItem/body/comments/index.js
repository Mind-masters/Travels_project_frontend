import React,{ useContext, useState } from 'react';
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import FormInput from '../../../../../components/shared/UI/formInput';
import styles from "./comments.module.css";
import commentsLogo from "../../../../../assets/explore/send_vector.png";
import Popup from './popup';
import data from './data.js';


const Comments = ({item}) => {

  const item_author = item.user_id ? item.user_id : "Unknown user"
  const User = useContext(AuthContext);
  const token = User.isLoggedIn ? User.authenticatedUser.token.access_token : null
  const [commentValue, setCommentValue] = useState(null);
  const [commentsCount, setCommentsCount] = useState(item.comments ? item.comments.length : 0);
  const [showCommentsPopUp, setShowCommentsPopUp] = useState(false);

  const onCommentSubmitHandler = async() => {

    if(!commentValue)return
    setCommentValue("")

    setCommentsCount(commentsCount + 1);

    const create_new_comment = await Comment(
      {
        text: commentValue,
        pid: item._id
      },
      token
    )

    if(!create_new_comment.status){
      return
    }


    console.log("create_new_comment: ", create_new_comment)
  
  }

  
  return (
    <div className={styles.container}>
      <h1>View all 13 comments</h1>
      <div className={styles.input_container}>
        <input className={styles.input} placeholder='Write your comment' />
        <img src={commentsLogo} alt='' />
      </div>
    </div>
  )
}

export default Comments