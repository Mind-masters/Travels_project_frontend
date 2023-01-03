import Routing from './routers';
import React from "react";
import {AuthContext} from "./contextAPI/AuthContext";
import { useState, useCallback } from 'react'
import MainNavigation from "./components/navigation";
import { ToastContainer } from 'react-toastify';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState();

  const login = useCallback((user) => {

    console.log("[app.js] login user: ", user)

    if(!user.status === "success"){
      setIsLoggedIn(false);
      return;
    }
    const {data, token} = user;

    setIsLoggedIn(true)
    setAuthenticatedUser({data, token})
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
    <AuthContext.Provider value={{ isLoggedIn, authenticatedUser, login, logout, update }}>
      <MainNavigation />
      <Routing />
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App
