import React from 'react'
import Faq from './FAQ';
import styles from "./aboutUs.module.css";
import AboutUs from '../landing/aboutUs';

const About = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
      <Faq />
    </div>
  )
}

export default About