import Routing from './routers';
import React from "react";
import {AuthContext} from "./contextAPI/AuthContext";
import { useState, useCallback } from 'react'
import MainNavigation from "./components/navigation";
import { ToastContainer } from 'react-toastify';
import Location from './components/shared/UI/map/location';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from 'react';
import Ripple from './components/shared/UI/ripple';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState();

  const login = useCallback((user) => {
    if(!user.status === "success"){
      setIsLoggedIn(false);
      return;
    }
    const {response, token} = user.data;

    setIsLoggedIn(true)
    setAuthenticatedUser({data: response, token: token})
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


// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import "./kazkas.css"
// SwiperCore.use([Autoplay]);


// const App = () => {
  
  
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={3}
//       loop={true}
//       autoplay={{ delay: 5000 }}
//       slideVisibleClass="my-swiper-slide-visible"
//       slideActiveClass="my-swiper-slide-active"
//       onActiveIndexChange={(index) => {console.log("kazkas: ", index.activeIndex)}}
//     >
//       {/* Slides here */}
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//     </Swiper>
//   );
// }

// export default App