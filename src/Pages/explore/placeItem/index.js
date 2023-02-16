import React from 'react'
import { useState } from 'react';
import styles from "./placeItem.module.css";
import Comments from "./comments/Comments";
import StarsRating from '../../../components/shared/UI/Ratings/stars';
import images2 from '../../../assets/travel-background.jpg'
import Button from '../../../components/shared/UI/button/Button';
import HeartRating from '../../../components/shared/UI/Ratings/heart';

import map_icon from "../../../assets/map_icon.png";
import pencil_icon from "../../../assets/pencil.png";
import Modal from '../../../components/shared/UI/Modal';
import ViewOnMap from './viewOnMap';

const PlaceItem = ({item}) => {
  console.log("iem: ", item )
  const [showComments, setShowComments] = useState(false)
  const onClick = () => setShowComments(true)
  const [showMapModal, setShowMapModal] = useState(false);
  const item_author = item.user_id ? item.user_id : "Unknown user"

  const CloseMapModal = () => {
    setShowMapModal(false);
  }
  
  return (
    <div className={styles.container}>

      
      {showMapModal && <ViewOnMap onClose={CloseMapModal} />}
      <div className={styles.author_line}>

        <div className={styles.author_image}>
          <img src={item_author.avatar} alt=''/>
          <p>{item_author.name}</p>
        </div>

        <div className={styles.user_menu_big_screens}>
          <div className={styles.button}>
            <Button><p>Profile</p></Button>
          </div>
          <div className={styles.starRating}>
            <StarsRating/>
          </div>
          <div className={styles.client_dropdown}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>

      <div className={styles.imageField}>
        
        <img src={item.image} className={styles.imageFieldPicture} alt=""/>

        <div className={styles.imageFieldContent}>
          <div className={styles.imageFieldContentHeader}>
            <div>
              <h1>{item.title}</h1>
            </div>

            <div className={styles.button}>
              <Button onSubmit={() => {setShowMapModal(true)}} color="#96F974">
                <img src={map_icon} alt="" />
                View on map
              </Button>
            </div>
          </div>
          
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra mauris vel  dolor consequat, dignissim tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra mauris vel  dolor consequat, dignissim tempor 
            </p>
          </div>
          
        </div>

      </div>
      
      <div className={styles.like_comm_controllers}>
        <div className={styles.like}>
          <HeartRating />
        </div>

        <>
          <div className={styles.button}>
            <Button color="#F7F6F0">
              <img src={pencil_icon} alt="" />
              Comments
            </Button>
          </div>
          { showComments ? 
            <Comments /> : null 
          }
        </>

      </div>

    </div>
  )
}

export default PlaceItem