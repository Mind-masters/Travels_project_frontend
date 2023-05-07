import React, { useState } from 'react'
import { Like_ } from '../../../utils/places/like.js';
import "./like.css"
import { notify } from '../toast.js';
import "react-toastify/dist/ReactToastify.css";


const Like = (props) => {

  const [isLiked, setIsLiked] = useState(false);


  const onLikeHandler = async() => {

    setIsLiked(!isLiked);


    // props.onClick && props.onClick();

    // if(!props.user){
    //   return notify("We don't know who you are", "warning");
    // }

    // const fetch_like = await Like_(props.pid, props.user.token.access_token);

    // if(!fetch_like.status)notify(fetch_like.message, "error");

  }

  return (
    <p onClick={onLikeHandler} className={`like-button ${isLiked && 'liked'}`}>
      <span className='like-icon'>
          <span className='heart-animation-1'></span>
          <span className='heart-animation-2'></span>
      </span>
      523
    </p>
)
}

export default Like;