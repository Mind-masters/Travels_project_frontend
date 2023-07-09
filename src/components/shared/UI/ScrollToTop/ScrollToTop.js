import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import Button from '../button/Button';
import styles from "./scrolltotop.module.css";
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
  return (
    <div className={styles.scrollbutton}>
        
            <FaArrowCircleUp className= {styles.scrolbtn} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
        
    </div>
  )
}

export default ScrollToTop