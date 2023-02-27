import React from 'react'
import styles from './popDestinations.module.css'
import dummy_user_logo from "../../../../assets/landing/dummy_user.png"
import StarsRating from '../../../../components/shared/UI/Ratings/stars';
import HeartRating from '../../../../components/shared/UI/Ratings/heart';


import gallery_1 from "../../../../assets/hero-section.png";
import gallery_2 from "../../../../assets/kazkas_1.jpeg";
import gallery_3 from "../../../../assets/town.jpg";

const PopDestinations = () => {
  return (
    <section className={styles.container}>
    
      <h1 className={styles.dest_title}>popular Destinations</h1>

      <div className={styles.profile_content}>
        <div className={styles.user_avatar}>
          <img src={dummy_user_logo} alt='avatar'/>
          <p>
            <span>Rubi Rose.</span>
          </p>
        </div>

        <div className={styles.user_options}>
          <div className={styles.user_rating}>
            <StarsRating />
          </div>

          <div className={styles.client_dropdown}>
            <h1>...</h1>
          </div>
        </div>

        
      </div>

      <div className={styles.place_content} >

        <div className={styles.place_content_title}>
          <h2>Maldives</h2>
        </div>

        <div>
          <HeartRating />
        </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
          <div className={styles.place_content_gallery}>
            <div className={styles.parent_image}>
              <img src={gallery_3} alt=""/>
            </div>
            <div className={styles.child_image}>
              <img src={gallery_2} alt=""/>
              <img src={gallery_1} alt=""/>
            </div>
          </div>

          <div className={styles.place_content_description}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              . It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing passages, and more recently with desktop publishing software 
              like Aldu.  ...<span id='read_more'>See More</span>
            </p>
          </div>
        </div>
        
    
</div>

    </section>
    
  )
}


export default PopDestinations;