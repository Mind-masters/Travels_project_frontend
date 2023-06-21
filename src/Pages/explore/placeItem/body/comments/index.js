import React,{ useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import styles from "./comments.module.css";
import commentsLogo from "../../../../../assets/explore/send_vector.png";
import Popup from './popup';
import Modal from '../../../../../components/shared/UI/Modal';
import AuthRequired from '../../../../../components/shared/layouts/AuthRequired';
import { OnComment } from '../../../../../components/utils/places/comment';
import io from 'socket.io-client';

const Comments = ({item}) => {
  const socket = io('https://mind-master-backend-production.up.railway.app/', {transports: ['websocket', 'polling', 'flashsocket']});

  const User = useContext(AuthContext);
  const token = User.authenticatedUser ? User.authenticatedUser.token.access_token : null
  const [commentValue, setCommentValue] = useState("");
  const [commentsCount, setCommentsCount] = useState(item.comments ? item.comments.length : 0);
  const [expandComments, setExpandComments] = useState(false);
  const [commentsData, setCommentsData] = useState(item.comments);
  const [placeLikesCount, setPlaceLikesCount] = useState(item.likes.length)

  useEffect(() => {

    socket.on('place_comments', (data) => {
      
      if(item._id === data.savedPlace._id){
        setCommentsData(data.savedPlace.comments)
        setCommentsCount(data.savedPlace.comments.length);
        setPlaceLikesCount(data.savedPlace.likes.length)
      }
      
    });

    // // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('place_comments');
    };


  });

  const onChangeInputValue = (e) => {
    if(!token)return 
    setCommentValue(e.target.value);
  }

  const onCommentSubmitHandler = async(pid) => {

    if(!commentValue | token)return

    const comment_reference = commentValue;
    setCommentValue("");
    
    if(item._id === pid) {
      setCommentsCount(commentsCount + 1);
      const newCommentObj = {
        user_avatar: User.authenticatedUser.data.avatar,
        username: User.authenticatedUser.data.name,
        text: comment_reference
      }
  
      setCommentsData([...commentsData, newCommentObj])
    }

    const create_new_comment = await OnComment(
      {
        text: comment_reference,
        pid: item._id
      },
      token
    )

    if(!create_new_comment.status){
      return
    }  

  }

  const expandCommentsHandler = () => {
    setExpandComments(true)
  }

  const collapseCommentsHandler = () => {
    setExpandComments(false);
  }

  
  return (
    <div className={styles.container}>
      <h1 className={styles.comm_info_header} onClick={expandCommentsHandler}>{`${commentsCount ? `View ${commentsCount} comments` : "No Comments Yet"}`}</h1>
      
      <AuthRequired>
        <div className={styles.input_container}>
          <input value={commentValue} onChange={onChangeInputValue} className={styles.input} placeholder='Write your comment' />
          <img onClick={()=>{onCommentSubmitHandler(item._id)}} src={commentsLogo} alt='' />
        </div>
      </AuthRequired>

      <Modal 
        show={expandComments}
        onClose={collapseCommentsHandler}
      >
        <Popup 
          item={item}
          likes={placeLikesCount}
          comments={commentsCount}
          onClose={collapseCommentsHandler} 
          onChange={onChangeInputValue} 
          data={commentsData} 
          onSubmit={onCommentSubmitHandler}
          currCommentValue={commentValue} 
        />
      </Modal>
    </div>
  )
}

export default Comments