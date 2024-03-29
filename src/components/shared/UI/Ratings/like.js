import { AuthContext } from '../../../../contextAPI/AuthContext.js';
import { Like_ } from '../../../utils/places/like.js';
import React, { useState, useContext, useEffect } from 'react'
import "./like.css"
import { notify } from '../toast.js';
import { useNavigate } from 'react-router-dom';

const Like = (props) => {

  const Auth = useContext(AuthContext);
  const [likes, setLikes] = useState(props.item.likes.length);
  const [liked, setLiked] = useState(props.item.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data._id));
  const navigate = useNavigate();
  const onLikeHandler = async() => {

    if(!Auth.authenticatedUser)return
    setLikes(!liked ? likes + 1 : likes - 1);
    setLiked(!liked)

    try {
      const fetch_like = await Like_(props.item._id, Auth.authenticatedUser.token.access_token);

      if(fetch_like.message === "Unauthorized")return Auth.logout();
      if(!fetch_like.status)return navigate("/");

      if(fetch_like.data.likes)setLikes(fetch_like.data.likes.length)

      setLiked(fetch_like.data.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data._id));
    } catch (err) {
      return notify(err.message || "Please try again")
    }

  }

  return (
    <p onClick={onLikeHandler} className={`like-button ${liked && 'liked'}`}>
      <span className='like-icon'>
        <span className='heart-animation-1'></span>
        <span className='heart-animation-2'></span>
      </span>
      {likes | 0}
    </p>
)
}

export default Like;