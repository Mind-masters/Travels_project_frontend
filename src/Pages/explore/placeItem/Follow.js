import React from 'react'
import { useState } from 'react'
import styles from "./index.module.css";

const Follow = () => {
    const[follow,setFollow] = useState('Follow');
    const[followactive,setFollowactive] = useState(false);
    function followFun(){
        if(followactive){
            setFollowactive(false);
            setFollow('Following')
        }else{
            setFollowactive(true);
            setFollow('Follow')
        }
    }
  return (
    <button onClick={followFun} className={styles.btnFollow}>{follow}</button>
  )
}

export default Follow