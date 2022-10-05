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

    if(!user.id){
      setIsLoggedIn(false);
      return;
    }

    setIsLoggedIn(true)
    setAuthenticatedUser(user)
  }, [])

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
    setIsLoggedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authenticatedUser }}>
      <MainNavigation />
      <Routing />
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App
