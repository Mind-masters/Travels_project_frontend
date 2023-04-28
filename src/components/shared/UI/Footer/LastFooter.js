import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import styles from './lastFooter.module.css';
import Logo from '../../../../assets/footerSection/code.jpg';

const LastFooter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.column_about}>
            <img src={Logo} alt=''></img>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                voluptatem corporis error non,
            </p>
                            
            <div className={styles.social}>
                <div className=""><FaFacebookF/></div>
                <div className=""><BsTwitter/></div>
                <div className=""><AiFillYoutube/></div>
            </div>
        </div>

        <div className={styles.link_box}>
            <div className={styles.column_links}>
                <h3 className={styles.quick}>Quick Links</h3>
                                
                <ul className={styles.links}>
                    <li><a href=''>How it works</a></li>
                    <li><a href=''>Why choose Us</a></li>
                </ul>
            </div>
    
            <div className={styles.column_links}>
                <h3 className={styles.quick}>About</h3>
                                
                <ul className={styles.links}>
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href='/'>Terms & Conditions</a></li>
                </ul>
            </div>
        </div>

    </div>
    
  )
}

export default LastFooter
