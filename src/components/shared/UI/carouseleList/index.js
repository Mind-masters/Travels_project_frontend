import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from './carousele.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import cultureImage from '../../../../assets/culture.jpg';
import forestImage from '../../../../assets/forest.jpg';
import hillImage from '../../../../assets/hill.jpg';
import townImage from '../../../../assets/town.jpg';

const SwiperList = () => {
  
    const [slidesCount, setSlidesCount] = useState(1);
    const ref = useRef(null);

    useLayoutEffect(() => {
        setSlidesCount(Math.round(ref.current.offsetWidth / 350))
    }, []);

    return (
        <div className={styles.container} ref={ref}>

            <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation
            autoplay={true}
            delay={300}
            effect
            speed={700}
            slidesPerView={slidesCount}
            loop
            >
                <SwiperSlide>
                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>culture</span>
                        <img className={styles.culture} src={cultureImage} alt='culture' />
                    </div>
                </SwiperSlide>   

                <SwiperSlide>
                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>forest</span>
                        <img className={styles.culture} src={forestImage} alt='forest' />
                    </div>
                </SwiperSlide> 

                <SwiperSlide>
                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>hill</span>
                        <img className={styles.culture} src={hillImage} alt='hill' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>town</span>
                        <img className={styles.culture} src={townImage} alt='town' />
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default SwiperList
