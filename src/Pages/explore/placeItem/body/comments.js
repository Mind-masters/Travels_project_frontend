import React,{ useContext, useState } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import FormInput from '../../../../components/shared/UI/formInput';
import submitCommentLogo from "../../../../assets/comments.png";
import styles from "./comments.module.css";
import commentsLogo from "../../../../assets/comments.png";


const Comments = ({item}) => {

  const item_author = item.user_id ? item.user_id : "Unknown user"
  const User = useContext(AuthContext);
  const token = User.isLoggedIn ? User.authenticatedUser.token.access_token : null
  const [commentValue, setCommentValue] = useState(null);
  const [commentsCount, setCommentsCount] = useState(item.comments ? item.comments.length : 0);


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
        comments...
      </div>

      <div className={styles.controll_panel}>
        <FormInput name="Add a comment..." value={commentValue} isValid={true} no_errors={true} onChange={(val)=>{setCommentValue(val)}} />
        <img src={commentsLogo} alt="" onClick={onCommentSubmitHandler} />
      </div>
    </div>
  )
}

export default Comments