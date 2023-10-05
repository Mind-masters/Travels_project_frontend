import Routing from './routers';
import React from "react";
import {AuthContext} from "./contextAPI/AuthContext";
import { useState, useCallback } from 'react'
import MainNavigation from "./components/navigation";
import { ToastContainer } from 'react-toastify';
import Footer from './components/shared/UI/Footer';
import ReactGA from "react-ga4";



function App() {

  const TRACKING_ID = 'G-E4QLGDLHF8'; 
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send("pageview");

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState();
  const [registrationData, setRegistrationData] = useState();

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
      <MainNavigation />
      <Routing />
      <Footer />
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App
