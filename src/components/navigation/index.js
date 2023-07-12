import React, { useEffect, useState, useContext } from 'react';
import MainHeader from './NavHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../shared/UI/Backdrop';
import styles from './navigation.module.css';
import {AuthContext} from "../../contextAPI/AuthContext"
import { io } from 'socket.io-client';
import { notify } from '../shared/UI/toast';


const MainNavigation = props => {

  const updateUser = useContext(AuthContext);
  const Auth = updateUser.authenticatedUser;

  const socket = io('https://mind-master-backend-production.up.railway.app/', {transports: ['websocket', 'polling', 'flashsocket']});
  // const socket = io('http://localhost:5000/', {transports: ['websocket', 'polling', 'flashsocket']});

  const [notifications, setNotifications] = useState(null);

  useEffect(() => {

    socket.on('notifications', (data) => {

      if(Auth && Auth.data._id === data.uid){
        console.log("[New notification] updated_user: ", data.updated_user);
        if(data.updated_user){
          updateUser.update({
            data: data.updated_user, 
            token: 
            {
              access_token: data.updated_user.access_token,
              refresh_token: data.updated_user.refresh_token
            } 
          });
        }
        setNotifications(data.notifications.messages)
        notify("New notification", "success")
      }
    });

    // // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('notifications');
    };
  
  });
  
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className={styles.navContainer}>
      
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks />
      </SideDrawer>

      <MainHeader notifications={notifications || (Auth && Auth.data.notifications.messages)} onMobile={openDrawerHandler} />

    </div>
  );
};

export default MainNavigation;
