import { AuthContext } from '../../../../contextAPI/AuthContext.js';
import { Like_ } from '../../../utils/places/like.js';
import React, { useState, useContext, useEffect } from 'react'
import io from 'socket.io-client';
import "./like.css"
import Authentication from '../../../../Pages/PopUpPages/Authentication/index.js';

const Like = (props) => {

  const socket = io('https://mind-master-backend-production.up.railway.app/', {transports: ['websocket', 'polling', 'flashsocket']});

  const Auth = useContext(AuthContext);

  const [likes, setLikes] = useState(props.item.likes.length);
  const [liked, setLiked] = useState(props.item.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data.id));

  useEffect(() => {

    // Listen for 'like' and 'unlike' events from the server
    socket.on('place_like_unlike', (data) => {
      setLikes(data.likes.length)
      setLiked(data.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data.id))
    });

    // // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('place_like_unlike');
    };


  }, [liked]);

  const onLikeHandler = async() => {

    if(!Auth.authenticatedUser)return

    setLikes(!liked ? likes + 1 : likes - 1);
    setLiked(!liked)

    try {
      const fetch_like = await Like_(props.item._id, Auth.authenticatedUser.token.access_token);

      if(fetch_like.message === "Unauthorized")return Auth.logout();
      if(!fetch_like.status)return

      if(fetch_like.data.likes)setLikes(fetch_like.data.likes.length)
      setLiked(fetch_like.data.likes.includes(Auth.authenticatedUser && Auth.authenticatedUser.data.id));
    } catch (err) {
      console.log(err);
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