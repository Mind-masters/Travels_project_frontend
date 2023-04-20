import React,{ useContext, useState } from 'react';
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import FormInput from '../../../../../components/shared/UI/formInput';
import styles from "./comments.module.css";
import commentsLogo from "../../../../../assets/comments.png";
import Like from '../../../../../components/shared/UI/Ratings/like';
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
      <div className={styles.comments_list}>
        <div>
          {data.map((comment, key) => (
            <div key={key} className={styles.comment_item}>
              <img src={comment.avatar} alt="avatar" />
              {comment.content.substring(0, 5)}
            </div>
          ))}
        </div>
      </div>

      <div onClick={() => setShowCommentsPopUp(true)} className={styles.view_comments}>View all comments..</div>

      {showCommentsPopUp && <Popup data={data} onClose={()=>setShowCommentsPopUp(false)} />}


    </div>
  )
}

export default Comments