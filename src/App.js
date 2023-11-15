import Routing from './routers';
import React from "react";
import {AuthContext} from "./contextAPI/AuthContext";
import { useState, useCallback } from 'react'
import MainNavigation from "./components/navigation";
import { ToastContainer } from 'react-toastify';
import Footer from './components/shared/UI/Footer';
import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import socket from './components/utils/SocketService';
import Modal from './components/shared/UI/Modal';
import Congratulations from './components/shared/UI/Popups/Congratulations';



function App() {

  // const TRACKING_ID = 'G-E4QLGDLHF8'; 
  const location = useLocation();

  // ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");
  const [showPopUp, setShowPopUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState();
  const [registrationData, setRegistrationData] = useState();

  useEffect(() => {
    // Add an event listener to check the screen size when the component mounts
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    // Initial check
    checkScreenSize();

    // Add a listener for screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const login = useCallback((user) => {
    if(!user.status === "success"){
      setIsLoggedIn(false);
      return;
    }
    const {response, token} = user.data;
    setIsLoggedIn(true)
    if(response.popups)setShowPopUp(true)
    setAuthenticatedUser({data: response, token: token})
  }, [])

  const signup = useCallback((user) => {
    if(!user.status === "success"){
      setIsLoggedIn(false);
      return;
    }
    const {response, token} = user.data;

    setRegistrationData({data: response, token: token})
  }, [])

  const update = useCallback(user => {
    const {data, token} = user;
    if(!data || !token){
      setIsLoggedIn(false);
      return;
    }
    setAuthenticatedUser({data, token})
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
    setIsLoggedIn(false)
  }, [])


  useEffect(() => {

    if(!isLoggedIn || !authenticatedUser.data)return
    console.log("Popups: ", authenticatedUser.data.popups)
    socket.on('donations', (data) => {
      console.log("Donating... ", data);
    });

    // // Clean up the socket event listeners when the component unmounts
    return () => {
      socket.off('notifications');
    };
  
  }, [isLoggedIn]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, authenticatedUser, registrationData, login, signup, logout, update }}>
      {
        isMobile?
        <MainNavigation />
        :
        location.pathname!=="/" && <MainNavigation />
      }
      <Routing />
      <Footer />
      <Modal 
        show={showPopUp && authenticatedUser}
        onClose={()=>setShowPopUp(false)}
      >
        <Congratulations message={authenticatedUser.data.popups[0]} />
      </Modal>
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App
