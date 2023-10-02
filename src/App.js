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



function App() {

  const TRACKING_ID = 'G-TRX7W3GVTH';
  const location = useLocation();
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");
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
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App
