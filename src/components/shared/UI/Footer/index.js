import React from 'react'
import styles from './footer.module.css';
import Background from '../../../../assets/footerSection/Vector.png'
import Modal from "../Modal";
import { useState } from 'react';
import Faq from './FAQ';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HowItWorks from './HowItWorks';


const Footer = () => {

  const [showFAQ, setShowFAQ] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const onCloseModal = () => {
    setShowFAQ(false);
    setShowAbout(false);
    setShowHow(false);
    setShowContactForm(false);
  }


  return (
  <>
    <>
      <Modal
        show={showFAQ || showAbout || showHow || showContactForm}
        onClose={onCloseModal}
      >
        <div className={styles.modal_wrapper}>
          <div className={styles.modal_wrapper_header} onClick={onCloseModal}>
            Close
          </div>
          {showFAQ && <Faq />}
          {showAbout && <AboutUs />}
          {showContactForm && <ContactUs />}
          {showHow && <HowItWorks />}
        </div>
      </Modal>
    </>
    <img className={styles.top_background_image} src={Background} alt=''/>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.column_about}>
          <div className={`${styles.header_text}`}>
              <h1><span>Trip</span>Whoop<span>!</span></h1>
          </div>
          <p>
            Discover the world with ease, connect with fellow travelers,and create
            unforgettable memories. Start your extraordinary adventure today!
              {/* Welcome to TripWhoop, the ultimate platform for passionate travelers to connect, share their experiences, and embark on exciting journeys together. */}
          </p>
        </div>
        <div className={styles.links_box}>
          <div className={styles.column_links}>
            <h1>Quick Links</h1>
                            
            <ul className={styles.links}>
              <li onClick={()=>setShowHow(true)}>How it works</li>
              <li onClick={()=>setShowContactForm(true)}>Contact Us</li>
            </ul>
          </div>

          <div className={styles.column_links}>
            <h1>About</h1>
                            
            <ul className={styles.links}>
              <li onClick={()=>setShowFAQ(true)}>frequently asked questions</li>
              <li onClick={()=>setShowAbout(true)}>About us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>  
  )
}

export default Footer