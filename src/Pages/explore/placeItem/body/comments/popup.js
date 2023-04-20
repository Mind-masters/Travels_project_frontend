import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import Loader from './loader';
import styles from "./popup.module.css";
import commentsLogo from "../../../../../assets/comments.png";
import FormInput from '../../../../../components/shared/UI/formInput';


const Popup = (props) => {

  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className={`${styles.container} ${styles.active}`} >
      <h1 className={styles.close_btn} onClick={props.onClose}>Close</h1>

      <div className={styles.comments_list}>
        {props.data.map((comment, key) => (
          <div key={key} className={styles.comment_item}>
            <img src={comment.avatar} alt="avatar" />
            {comment.content.substring(0, 5)}
          </div>
        ))}
      </div>

      <div className={styles.controll_panel}>
        <FormInput name="Add a comment..." value={props.commentValue} isValid={true} no_errors={true} onChange={(val)=>{props.setCommentValue(val)}} />
        <img src={commentsLogo} alt="" onClick={props.onCommentSubmitHandler} />
      </div>

      {isLoading && <Loader />}

    </div>
  )
}

export default Popup