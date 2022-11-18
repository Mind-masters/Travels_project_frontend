import React from 'react';
import styles from './destinations.module.css';
import SwiperList from '../../../../components/shared/UI/carouseleList';

const Destinations = () => {
  
  return (
    <div className={styles.container}>

      <div className={styles.title_container}>
        <h2>
          <span>...Choose your Destinations...</span>
        </h2>
      </div>

      <SwiperList />

      
    </div>
    
  )
}

export default Destinations
