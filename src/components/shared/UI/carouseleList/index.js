import React from 'react'
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from 'react';
import styles from "./carousele.module.css";



const CarouseleList = ({data, top_menu, children}) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        if(data  && data.length > 0) setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])



    return (
        <>
            
            { data ? 
                <motion.div className={styles.carousel} ref={carousel}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.inner_carousel}>
                        {data && data.map((trip, key) => 
                            {

                                const redBackground = key / 2 === 0;
                                console.log("kazkas: ", key)

                                return (
                                    <motion.div className={styles.item}>

                                        <div className={styles.item_image_container}>
                                            <div>
                                                {top_menu && children}
                                            </div>
                                            <img src={trip.image} alt="trip img" />
                                        </div>

                                        <div className={styles.item_header}>
                                            <h1 style={{ backgroundColor:`${redBackground ? "red" : "blue"}` }}>{trip.title}</h1>
                                        </div>

                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </motion.div>
                :

                <h2>No images to display</h2>
            }

        </>
    )
}

export default CarouseleList