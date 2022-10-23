import React from 'react'
import { useState } from 'react';
import styles from "./index.module.css";
import Like from './Like';
import Comments from "./comments/Comments";
import Follow from './Follow';
import Rating from './Rating';
import { TfiPencil } from "react-icons/tfi";
import { FaMapMarkerAlt } from "react-icons/fa";

const index = () => {
  const [showComments, setShowComments] = useState(false)
  const onClick = () => setShowComments(true)
  return (
    <div className={styles.main}>
      <div className={styles.postHead}>

        <div className={styles.image}><img src='../../travel.jpg'/></div>

        <div className={styles.tittle}>Jeson Derulo</div>

        <div className={styles.follow}>
            <Follow/>
        </div>
        <div className={styles.Starrating}>
          <Rating/>
        </div>

        <div className={styles.menu}>
          <h4>...</h4>
        </div>

      </div>

      <div className={styles.imageField}>
        image
      </div>
      <div className={styles.bottomHead}>
        <div className={styles.placeName}>Aravallis, island</div>
        <div className={styles.map}>
          <span><FaMapMarkerAlt className={styles.icon}/></span>
          <span>view on map</span>
        </div>
      </div>
      <div className={styles.discription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. 
        <button className={styles.desbtn}> ...See more</button>
        <br></br>
        It has survived not only five centuries, but also the leap 
        into electronic typesetting, remaining essentially unchanged.
      </div>
      <br></br>
      <div className={styles.likeComm}>
        <Like/> 
        <button onClick={onClick} className={styles.btncomm}>
        <span><TfiPencil/></span>
          Comments
          </button>
        { showComments ? <Comments /> : null }
      </div>
    </div>
  )
}

export default index