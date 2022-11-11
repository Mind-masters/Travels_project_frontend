import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import {AuthContext} from "../../../contextAPI/AuthContext";

import styles from './Backdrop.module.css';



const Backdrop = props => {

  const Auth = useContext(AuthContext);
  
  const onClickHandler = () => {
    Auth.changeUserModalStatus(false);
    props.onClick();
  }

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClickHandler}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
