import React from 'react'
import styles from './popDestinations.module.css'
import {FaStar} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FcLike} from 'react-icons/fc';
import {BsPen} from 'react-icons/bs';

const PopDestinations = () => {
  return (
    <section className={styles.container}>
    
      <h1 className={styles.dest_title}>popular Destinations</h1>
      
      <div className={styles.profile_container}>
        
        <div className={styles.profile_content}>
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt='avatar'/>
          <p>
            <span>Rubi Rose.</span>
          </p>
        </div>
        

        <div className={styles.rate_content}>
          <div className={styles.stars}>
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaStar/></span>
          </div>

          <div>
            <span>...</span>
          </div>
        </div>

        
      </div>
        
        {/*landing Gallery */}
        <div className={styles.first_gallery}>
          <img src='https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
          <div className='second_gallery'>
            <img src='https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
            <img src='https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
          </div>
        </div>
      
        <div className={styles.parent_box}>
          <div className={styles.clearfix}>
            <div className={styles.dest_name}>
              <h2>Green Hills, Gujarat</h2>
            </div>
            <div className={styles.menu_div}>
              <nav>
                <ul>
                <li><FaMapMarkerAlt className={styles.map_icon}/></li>
                    <li>View on Map</li>
                    
                </ul>
              </nav>
            </div>
        </div>
      </div>

      <div className={styles.description}>  
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
          . It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing passages, and more recently with desktop publishing software 
          like Aldu.  ...<span id='read_more'>See More</span>
        </p>
      </div>

      <div className={styles.likes_comment}>
        <span><FcLike className={styles.likes}/></span><h3>23 likes</h3>
        <span><BsPen className={styles.comment}/></span><h3>8 comments</h3>
      </div>

    </section>
    
  )
}


export default PopDestinations;