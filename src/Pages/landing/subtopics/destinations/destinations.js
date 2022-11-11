import React from 'react';
import './destinations.css';
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
      <div className='title'>
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
        
            <span className='destination-name'>culture</span>
            <img className='culture' src={cultureImage} alt=''></img>
        </SwiperSlide>   

        <SwiperSlide>
        <span className='destination-name'>forest</span>
            <img className='culture' src={forestImage} alt=''></img>
        </SwiperSlide> 

        <SwiperSlide>
             <span className='destination-name'>Hill</span>
            <img className='culture' src={hillImage} alt=''></img>
        </SwiperSlide>

        <SwiperSlide>
            <span className='destination-name'>town</span>
            <img className='culture' src={townImage} alt=''></img>
        </SwiperSlide>
        </Swiper>

</div>
    
  )
}

export default Destinations
