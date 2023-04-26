import React from 'react'
import styles from "./slideItem.module.css";
import Ripple from "../../ripple"
import Button from "../../button/Button"

const SlideItem = ({item, key}) => {

  return (
    <div className={styles.slide_container}>
      <div className={styles.filter}></div>
      <div className={styles.content}>
        <div style={{ backgroundImage: `url(${item.image})` }} className={styles.content_image} ></div>

        <div className={styles.content_body}>
          <div className={styles.body_text}>
            <h1>China</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
          </div>

          <div className={styles.body_map}>
            <Button color="rgba(68, 68, 68, 0.48)" border="2px solid #F7E1CE">
              <div className={styles.body_button}>
                <div className={styles.body_button_icon}>
                  <div className={styles.icon_ripple}>
                    <Ripple />
                  </div>
                </div>
                <h1>Map view</h1>
              </div>
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SlideItem