import React from 'react'
import { useState } from 'react'
import styles from "./index.module.css";
import { FcLike } from "react-icons/fc";

const like = () => {
    const [like,setLike] = useState(0);
    const [likeactive,setLikeactive] = useState(false);
    function likeFun(){
        if(likeactive){
            setLikeactive(false);
            setLike(like-1);
        }else{
            setLikeactive(true);
            setLike(like+1);
        }
    }
  return (
    <div>
        <button onClick={likeFun}><FcLike/></button>
        <span className={styles.like}>{like}&nbsp; Likes</span>
    </div>
  )
}

export default like