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
import Modal from './components/shared/UI/Modal';
import Congratulations from './components/shared/UI/Popups/Congratulations';
function App() {
const location = useLocation();
ReactGA.send("pageview");
const [showPopUp, setShowPopUp] = useState(false);
const [isMobile, setIsMobile] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [authenticatedUser, setAuthenticatedUser] = useState();
const [registrationData, setRegistrationData] = useState();
useEffect(() => {
const checkScreenSize = () => {
setIsMobile(window.innerWidth < 600); // Adjust the breakpoint as needed
};
checkScreenSize();
window.addEventListener('resize', checkScreenSize);
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
const update = useCallback(() => {}, [])
const logout = useCallback(() => {}, [])
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
{authenticatedUser && authenticatedUser.data.popups.length > 0 &&
<Modal 
show={showPopUp}
>
<Congratulations onClose={()=>setShowPopUp(false)} message={authenticatedUser.data.popups[0]} />
</Modal>
}
<ToastContainer />
</AuthContext.Provider>
)
}

export default App
