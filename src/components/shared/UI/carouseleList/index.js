import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from './carousele.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import add_new_trip_logo from "../../../../assets/your-trip/ad_new_trip_logo.png";

const SwiperList = (props) => {


    const auth_places = props.auth_places ? true : false
  
    const [slidesCount, setSlidesCount] = useState(1);
    const container_ref = useRef(null);
    const image_ref = useRef(null);


    const carousel_slider_handler = () => {
        console.log("updating list size");
        if(!props.data)return
        
        const swiper_width = true ? container_ref.current.offsetWidth : container_ref.current.offsetWidth;
        const number_of_slides = props.data.length >= Math.round(swiper_width / 500) ? Math.round(swiper_width / 500) : props.data.length
        setSlidesCount(number_of_slides);
    }

    useLayoutEffect(() => {
        console.log("useLayoutEffect runs");
        carousel_slider_handler();
    }, []);

    window.addEventListener("resize", () => {
        carousel_slider_handler();
    })

    const actionClickHandler = (arg) => {
        props.onStateClick(arg);
        carousel_slider_handler();
    }

    const UserCRUD = ({id}) => {
        return auth_places ? (
            <ul className={styles.user_params}>
                <li onClick={actionClickHandler.bind(null,{state: "update", id: id})} style={{ color: "rgba(130, 236, 166, 1)" }}>Update</li>
                <li onClick={actionClickHandler.bind(null,{state: "delete", id: id})} style={{ color: "rgba(239, 101, 101, 1)" }}>Delete</li>
            </ul>
        ):
        null
    }

    

    const ItemContainer = (
        <>
            { props.data &&
                props.data.map((place, key) => 
                    <SwiperSlide key={key} className={styles.SwiperSlide}>
                        <div className={styles.slide_container}>
                            <UserCRUD id={place._id} />
                            <span className={styles.destination_name}>{place.title}</span>
                            <img className={styles.culture} src={place.image} alt='culture' />
                        </div>
                    </SwiperSlide>
                )
            }
        </>
    )

    return (
        <div className={styles.container} ref={container_ref}>
            { auth_places &&
                <div style={{ justifyContent: `${props.data && props.data.length===0}` ? "center" : "start" }} className={styles.add_logo} >
                    <img 
                        ref={image_ref}
                        src={add_new_trip_logo} 
                        alt="plus logo" 
                        onClick={actionClickHandler.bind(null,{state: "create", id: "not_implemented"})} 
                    />
                </div>
            }

            {
                props.data && props.data.length > 0 &&
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    autoplay={true}
                    delay={300}
                    effect
                    speed={700}
                    slidesPerView={slidesCount}
                    loop
                    navigation
                    style={{
                        "--swiper-navigation-color": "#707070",
                        "--swiper-navigation-size": "6rem",
                    }}
                    className={styles.Swiper}
                >
                    {ItemContainer}
                </Swiper>
            }

        </div>
    )
}

export default SwiperList
