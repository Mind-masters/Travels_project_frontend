import React from 'react';
import styles from './Avatar.module.css';
import default_logo from "../assets/1.jpg"

const Avatar = props => {

  return (
    <div className={styles.avatar} style={props.style}>
      <img
        src={default_logo}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
