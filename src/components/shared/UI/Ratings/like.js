import React, { useState } from 'react'
import Heart from "react-animated-heart";
import { Like_ } from '../../../utils/places/like.js';

import { notify } from '../toast.js';
import "react-toastify/dist/ReactToastify.css";


const Like = (props) => {

  // const [isHeartIconClicked, setIsHeartIconClicked] = useState(props.isLiked);


  const onClickHandler = async() => {

    // setIsHeartIconClicked(!isHeartIconClicked)
    props.onClick && props.onClick();

    if(!props.user){
      return notify("We don't know who you are", "warning");
    }


    const fetch_like = await Like_(props.pid, props.user.token.access_token);

    if(!fetch_like.status)notify(fetch_like.message, "error");

    // if(props.onClick && (props.count === 0 || props.count)){
    //   console.log("props.isLiked: ", props.isLiked, " | count : ", props.count)
    //   props.onClick(fetch_like.data.isLiked)//props.isLiked ? props.count - 1 : props.count + 1)
    // }
  }

  return (
    <div>
      <Heart isClick={props.isLiked} onClick={onClickHandler} />
    </div>
  )
}

export default Like;