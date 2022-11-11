import React, { useState } from 'react'
import { createAvatar } from '@dicebear/avatars';

// Styles
import default_styles from "./default_modal_styles.module.css"
import * as style from '@dicebear/avatars-identicon-sprites';
import custom_styles from "./pickUserAvatar.module.css";


// Logos
import logo from "../../../assets/logo.PNG"
import skip_logo from "../../../assets/skip_logo.png"
import back_logo from "../../../assets/back_logo.png"

const PickUserAvatar = (props) => {

  const [imgURL, setImgURL] = useState(`https://avatars.dicebear.com/api/adventurer/avatar.svg`);


  const handleRandomizeChange = () => {

    const name = Math.random();
    setImgURL(
      `https://avatars.dicebear.com/api/adventurer/${name}.svg`
    );
  };

  return (
    <div className={default_styles.modal_content}>

      <div className={default_styles.top_menu_container}>
        <img className={default_styles.close_logo} src={back_logo} alt="back" />
        <img className={default_styles.logo} src={logo} alt="logo" />
        <div className={default_styles.close_logo}><h4>Skip</h4></div>
      </div>

      <div className={default_styles.about_container}>
          <h1>Style your avatar</h1>
          <p>This is how people will see you on TripMaster. You can change it later if you'd like</p>
      </div>

      <div className={custom_styles.avatar_container}>
        <img src={imgURL} alt="avatar" />
      </div>

      <div className={custom_styles.button_container}>
        <button className={custom_styles.randomize_btn} onClick={handleRandomizeChange}>Randomize</button>
        <button className={custom_styles.continue_btn} onClick={props.onSubmit.bind(null,imgURL)}>Continue</button>
      </div>
    </div>
  )
}

export default PickUserAvatar