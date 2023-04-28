import React, { useState, useRef, useLayoutEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
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

    const carousel_slider_handler = () => {
        if(!props.data)return
        
        const currentWidth = container_ref.current ? container_ref.current.offsetWidth : 1;

        let number_of_slides = 4;
        if(currentWidth >= 1400 && currentWidth <= 1550)number_of_slides = 3.5;
        if(currentWidth >= 1100 && currentWidth <= 1400)number_of_slides = 3;
        if(currentWidth >= 850 && currentWidth <= 1100)number_of_slides = 2.5;
        if(currentWidth >= 650 && currentWidth <= 850)number_of_slides = 2;
        if(currentWidth <= 650 && currentWidth > 350)number_of_slides = 1.5;
        if(currentWidth <= 350) number_of_slides = 1;
        setSlidesCount(number_of_slides);
        // else if(!showOneSlide)setSlidesCount(number_of_slides > 1 ? number_of_slides : (currentWidth > 240 ? 1.5 : 1));
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
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 100,
                        modifier: 3.5,
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
