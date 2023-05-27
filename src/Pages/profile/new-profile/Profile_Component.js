import React, {useState, useEffect}from 'react';
import styles from './profile_component.module.css';
import { BiCoinStack } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';

import ProfileImage from '../../../assets/profile/profile.png';



const ProfileComponet = () => {



  return (
    <div className={styles.main_container}>
        
      <h1 className={styles.profileBox}>Profile</h1>
        
      <div className={styles.container} >
        
        <img src={ProfileImage} alt='Profile'/>
        <div className={styles.profile_name_email}>
          <h2>William Jones</h2>
          <p>jones23@gmail.com</p>
        </div>
        
        <div className={styles.points}>
          <span className={styles.coin}> <BiCoinStack/></span>
          <h3>Active Points </h3>
          <h3>30</h3>
        </div>

        <div className={styles.edit_profile}>
          <span ><BsPencil/></span>
        </div>   
      </div>

      <div className={styles.about_section}>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Iaculis purus proin a blandit arcu condimentum. Risus varius in diam risus sed nullam penatibus tempus sed. Sit a elementum ut p
          haretra dictum malesuada gravida lectus nibh. Aliquam lectus. onsectetur. Iaculis purus proin a blandit arcu condimentum. Risus varius in diam risus sed nullam penatibus tempus sed. Sit a elementum ut pharetra dictum malesuada gravida lectus nibh. Aliquam lectus.
        </p>
      </div>

      {/**Hobbies */}
      <div className={styles.hobbies_section}>
        <h1>Hobbies</h1>

        <div className={styles.interest}>
          <p>Travelling</p>
          <p>Nature</p>
          <p>Exploration</p>
        </div>
      </div>
     
    </div>
  )
}

export default ProfileComponet
