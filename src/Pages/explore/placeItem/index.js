import React from 'react'
import { useState } from 'react';
import styles from "./index.module.css";
import Like from './Like';
import Comments from "./comments/Comments";
import SeeMoreContent from "./SeeMoreContent"
import Follow from './Follow';
import Rating from './Rating';
import { TfiPencil } from "react-icons/tfi";
import { FaMapMarkerAlt } from "react-icons/fa";
import images1 from '../../../assets/travel.jpg'
import images2 from '../../../assets/travel-background.jpg'

const PlaceItem = () => {
  const [showComments, setShowComments] = useState(false)
  const onClick = () => setShowComments(true)
  return (
    <div className={styles.main}>
      <div className={styles.postHead}>

        <div className={styles.image}><img src='https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/></div>
        <div className={styles.image}><img src={images1} className={styles.child} /></div>


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
        <img src={images2} className={styles.imageFieldChild}/>
      </div>
      <br></br>
      <div className={styles.bottomHead}>
        <div className={styles.placeName}>Aravallis, island</div>
        <div className={styles.map}>
          <span><FaMapMarkerAlt className={styles.icon}/></span>
          <span>view on map</span>
        </div>
      </div>
      <div className={styles.discription}>
        {/* <SeeMoreContent/> */}
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

export default PlaceItem