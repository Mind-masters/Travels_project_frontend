import React from 'react';
import styles from './destinations.module.css';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import cultureImage from '../../../../assets/culture.jpg';
import forestImage from '../../../../assets/forest.jpg';
import hillImage from '../../../../assets/hill.jpg';
import townImage from '../../../../assets/town.jpg';

const Destinations = () => {
  
  return (
    <div className='cont'>
      <div className={styles.title}>
      <h2>
        <span>...types of Destinations...</span>
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay={true}
        delay={3000}
        effect
        speed ={800}
        slidesPerView ={4}
        loop
        className='swiper'
        >
         <SwiperSlide>
          <div className={styles.slide_container}>
              <span className={styles.destination_name}>culture</span>
              <img className={styles.culture} src={cultureImage} alt='culture'></img>
            </div>
          </SwiperSlide>   

        <SwiperSlide>
          <div className={styles.slide_container}>
            <span className={styles.destination_name}>forest</span>
            <img className={styles.culture} src={forestImage} alt='forest'></img>
          </div>
        
        </SwiperSlide> 

        <SwiperSlide>
          <div className={styles.slide_container}>
            <span className={styles.destination_name}>hill</span>
            <img className={styles.culture} src={hillImage} alt='hill'></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slide_container}>
            <span className={styles.destination_name}>town</span>
            <img className={styles.culture} src={townImage} alt='town'></img>
          </div>
        </SwiperSlide>
        </Swiper>

</div>
    
  )
}

export default Destinations
