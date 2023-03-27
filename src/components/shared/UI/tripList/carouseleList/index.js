import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from './carousele.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import add_new_trip_logo from "../../../../../assets/your-trip/ad_new_trip_logo.png";
import AnimatedCircle from '../../circle';
import Ripple from '../../ripple';

const SwiperList = (props) => {


    const auth_places = props.auth_places ? true : false
  
    const [slidesCount, setSlidesCount] = useState(100);
    const container_ref = useRef(null);
    const image_ref = useRef(null);



    const carousel_slider_handler = () => {
        if(!props.data)return
        const plus_icon_width = image_ref.current ? image_ref.current.offsetWidth : 0;
        const swiper_width = container_ref.current ? container_ref.current.offsetWidth - plus_icon_width : 1;
        const number_of_slides = props.data.length >= Math.round(swiper_width / 420) ? Math.round(swiper_width / 420) : props.data.length;

        setSlidesCount(number_of_slides > 1 ? number_of_slides : 1.5);
    }

    useLayoutEffect(() => {
        carousel_slider_handler();
    });


    window.addEventListener("resize", () => {
        carousel_slider_handler();
    })

    const actionClickHandler = (arg) => {
        props.onStateClick(arg);
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
                            <img className={styles.culture} src={place.image} alt='culture'  />
                            <div className={styles.carousele_ripple}>
                                <Ripple />
                            </div>

                            <div className={styles.destination_name}>
                                Type of destiny..
                            </div>
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
                    effect={'coverflow'}
                    centeredSlides={true} // for seeing last slide
                    coverflowEffect={{
                        rotate: 2,
                        stretch: 10,
                        modifier: 5,
                    }}
                    loop
                    scrollbar={{ draggable: true }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    speed={700}
                    slidesPerView={slidesCount}
                    navigation={{
                        clickable: true,
                    }}
                    style={{
                        "--swiper-navigation-color": "#EE7D15",
                        "--swiper-navigation-size": "3rem",
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
