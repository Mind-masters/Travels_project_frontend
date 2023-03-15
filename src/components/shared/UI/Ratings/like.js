import React, { useState } from 'react'
import Heart from "react-animated-heart";
import { Like_ } from '../../../utils/places/like.js';

import { notify } from '../toast.js';
import "react-toastify/dist/ReactToastify.css";


const Like = (props) => {

  const onClickHandler = async() => {

    props.onClick && props.onClick();

    if(!props.user){
      return notify("We don't know who you are", "warning");
    }

    const fetch_like = await Like_(props.pid, props.user.token.access_token);

    if(!fetch_like.status)notify(fetch_like.message, "error");

  }

  return (
    <Heart isClick={props.isLiked} onClick={onClickHandler} />
  )
}

export default Like;