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
import add_new_trip_logo from "../../../../assets/your-trip/ad_new_trip_logo.png";

const SwiperList = (props) => {

    const auth_places = props.auth_places ? true : false
  
    const [slidesCount, setSlidesCount] = useState(1);
    const container_ref = useRef(null);
    const image_ref = useRef(null);

    useLayoutEffect(() => {
        const swiper_width = !auth_places ? container_ref.current.offsetWidth : container_ref.current.offsetWidth - image_ref.current.offsetWidth;
        setSlidesCount(Math.round(swiper_width / 400))
    }, []);

    const UserMethodsList = () => {
        return auth_places ? (
            <ul className={styles.user_params}>
                <li onClick={props.onStateClick.bind(null,"update")} style={{ color: "rgba(130, 236, 166, 1)" }}>Update</li>
                <li onClick={props.onStateClick.bind(null,"delete")} style={{ color: "rgba(239, 101, 101, 1)" }}>Delete</li>
            </ul>
        ):
        null
    }

    return (
        <div className={styles.container} ref={container_ref}>
            { auth_places &&
                <img 
                    ref={image_ref}
                    className={styles.add_logo} 
                    src={add_new_trip_logo} 
                    onClick={props.onStateClick.bind(null,"create")} 
                    alt="plus logo" 
                />
            }

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
                    <UserMethodsList />

                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>culture</span>
                        <img className={styles.culture} src={cultureImage} alt='culture' />
                    </div>
                </SwiperSlide>   

                <SwiperSlide>
                    <UserMethodsList />

                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>forest</span>
                        <img className={styles.culture} src={forestImage} alt='forest' />
                    </div>
                </SwiperSlide> 

                <SwiperSlide>
                    <UserMethodsList />

                    <div className={styles.slide_container}>
                        <span className={styles.destination_name}>hill</span>
                        <img className={styles.culture} src={hillImage} alt='hill' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <UserMethodsList />

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
