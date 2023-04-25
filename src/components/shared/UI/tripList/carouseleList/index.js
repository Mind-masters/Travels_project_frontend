import React, { useState, useRef, useLayoutEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import add_new_trip_logo from "../../../../../assets/your-trip/ad_new_trip_logo.png";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styles from "./carousele.module.css"
import SlideItem from './SlideItem';


SwiperCore.use([EffectCoverflow, Autoplay, Pagination,Navigation]);

const SwiperList = (props) => {

    const swiperRef = useRef(null);

    const [showOneSlide, setShowOneSlide] = useState(false);
  
    const [slidesCount, setSlidesCount] = useState(4);
    const container_ref = useRef(null);
    const image_ref = useRef(null);



    const carousel_slider_handler = () => {
        if(!props.data)return
        const plus_icon_width = image_ref.current ? image_ref.current.offsetWidth : 0;
        const swiper_width = container_ref.current ? container_ref.current.offsetWidth - plus_icon_width : 1;
        const number_of_slides = props.data.length >= Math.round(swiper_width / 420) ? Math.round(swiper_width / 420) : props.data.length;

        if(showOneSlide)setSlidesCount(number_of_slides);
        else if(!showOneSlide)setSlidesCount(number_of_slides > 1 ? number_of_slides : 1.5);
    }

    useLayoutEffect(() => {
        carousel_slider_handler();
    });


    window.addEventListener("resize", () => {
        carousel_slider_handler();
    })



    return (
        <div className={styles.container} ref={container_ref}>

            { props.data && props.data.length > 0 &&
                <Swiper
                
                    ref={swiperRef}
                    effect={'coverflow'}
                    centeredSlides={true} // for seeing last slide
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 100,
                        modifier: 4,
                        slideShadows: false,
                    }}
                    spaceBetween={70}
                    loop
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    slidesPerView={slidesCount}
                    navigation
                    style={{
                        "--swiper-navigation-color": "#EE7D15",
                        "--swiper-navigation-size": "3rem",
                    }}
                    className={styles.Swiper}
                >

                    <>
                        { props.data &&
                            props.data.map((place, key) => 
                                {
                                    return (
                                    <SwiperSlide 
                                        key={key} 
                                        style={{ backgroundImage: `url(${place.image})`, backgroundPosition: "center" }}
                                        className={styles.SwiperSlide}
                                    >
                                        <SlideItem item={place}/>
                                    </SwiperSlide>
                                    
                                    )
                                }
                            )
                        }
                    </>
                </Swiper>
            }
        </div>
    )

}

export default SwiperList
