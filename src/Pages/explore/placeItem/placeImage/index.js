import React from 'react'
import styles from "./placeImage.module.css"
import more_logo from "../../../../assets/signs/about.png";

const PlaceImage = (props) => {


    const place_image = props.item.image
  
    return (
    <>
        { place_image &&
            <div className={`${styles.image_container} ${props.hovered !== undefined && (props.hovered ? styles.hidden : styles.visible)}`}>
                {   
                    !props.hovered &&
                    <img  
                        className={styles.more_icon}
                        src={more_logo}
                        alt=''
                    />
                }
                <img 
                    className={styles.item_image} 
                    src={place_image} 
                    alt="" 
                />
            </div>
        }
    </>
    )
}

export default PlaceImage