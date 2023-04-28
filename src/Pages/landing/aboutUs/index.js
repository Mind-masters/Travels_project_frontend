import React from 'react'
import styles from "./aboutUs.module.css";
import mainLogo from "../../../assets/landing/about_us_logo.png"
import header_logo from "../../../assets/landing/about_us_text_decoration.png";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>

        <div className={styles.container}>
            <div className={styles.header_container}>
                <div className={styles.header_wrapper}>
                    <img src={header_logo} alt='' />
                    <div>
                        <h1>Explore About Us</h1>
                        <hr />
                    </div>
                </div>
            </div>

            <div className={styles.main_image_mobile}>
                <img src={mainLogo} alt='' />
            </div>

            <div className={styles.paragraph_container}>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Cras id pharetra auctor suspendisse. Ornare vel metus ipsum iaculis aenean urna venenatis tortor interdum. Bibendum neque orci metus tincidunt vitae vitae etiam quam feugiat. Nunc ultricies morbi ultricies massa blandit adipiscing sit. Varius purus eros vitae velit consectetur. Tristique nibh sagittis at a. Nisl a.
                </p>
            </div>
        </div>

        <div className={styles.main_image}>
            <img src={mainLogo} alt='' />
        </div>
    </div>
  )
}

export default AboutUs