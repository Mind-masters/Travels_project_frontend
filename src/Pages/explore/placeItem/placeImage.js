import React, {useState} from 'react'
import styles from "./placeImage.module.css"
import Modal from '../../../components/shared/UI/Modal';
import vissibleIcon from "../../../assets/explore/visible.png";
import hiddenIcon from "../../../assets/explore/hiden.png";


const PlaceImage = (props) => {

    const [showMobDescription, setShowMobDescription] = useState(false);
    const [expandedImage, setExpandedImage] = useState(false);

    const place_image = props.item.image // && `https://mind-master-backend-production.up.railway.app/${props.item.image}`
  
    const clickOnEyeHandler = () => {
      setShowMobDescription(!showMobDescription);
    }
  

    return (
    <>
        { place_image &&
        <>
            <div className={styles.image_container}>
                <img className={styles.item_image} onClick={()=>setExpandedImage(true)} src={place_image} alt="" loading='lazy'/>
                <div className={`${styles.mobile_description} ${showMobDescription && styles.visible_mobile_description}`}>
                    <div onClick={clickOnEyeHandler} className={styles.mobile_description_icon}>
                        <img src={ showMobDescription ? hiddenIcon : vissibleIcon} alt='eye'/>
                    </div>
                    {showMobDescription && <p>{props.item.description}</p>}
                </div>
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