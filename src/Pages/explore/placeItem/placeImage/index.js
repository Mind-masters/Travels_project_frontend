import React, {useState} from 'react'
import styles from "./placeImage.module.css"
import Modal from '../../../../components/shared/UI/Modal';
import hiddenIcon from "../../../../assets/signs/no_description.png";
import HoveredImage from './HoveredImage';


const PlaceImage = (props) => {

    const [showMobDescription, setShowMobDescription] = useState(false);
    const [expandedImage, setExpandedImage] = useState(false);
    const [isHoveredImage, setIsHoveredImage] = useState(false);

    const place_image = props.item.image // && `https://mind-master-backend-production.up.railway.app/${props.item.image}`
  
    const clickOnEyeHandler = () => {
      setShowMobDescription(!showMobDescription);
    }
  

    return (
    <>
        { place_image &&
        <>
            <div className={styles.image_container}
                onMouseEnter={() => setIsHoveredImage(true)}
                onMouseLeave={() => setIsHoveredImage(false)}
            >
                <img className={styles.item_image} onClick={()=>setExpandedImage(true)} src={place_image} alt="" loading='lazy'/>
                {/* <div className={`${styles.mobile_description} ${showMobDescription && styles.visible_mobile_description}`}>
                    <div onClick={clickOnEyeHandler} className={styles.mobile_description_icon}>
                        <img src={vissibleIcon} alt='eye'/>
                    </div>
                </div> */}
                <HoveredImage hovered={isHoveredImage} />
            </div>

            <Modal
                show={expandedImage}
                onClose={()=>setExpandedImage(false)}
                bgColor="rgba(237, 235, 235, 0.8)"
            >
             <div className={styles.expanded_image}>
                <img src={place_image} alt='' loading='lazy' />
                <div className={styles.expanded_btn} onClick={()=>setExpandedImage(false)}>
                    <div>
                        <h1>Close</h1>
                    </div>
                </div>
             </div>
            </Modal>
        </>  
        }
    </>
    )
}

export default PlaceImage