import React, {useState, useEffect}from 'react';
import styles from './profileContent.module.css';
import MainHeader from "../../components/shared/UI/pagesHeaders/index";

import UserPanel from './userPanel';



const ProfileComponet = (props) => {

  console.log("user: ",props.Auth )

  if(!props.Auth)return

  return (
    <div className={styles.main_container}>
        
      <MainHeader header="Profile"/>
        
      <UserPanel user={props.Auth.data} />
           
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
