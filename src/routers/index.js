import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/landing";
import ExplorePage from "../Pages/explore";
import PrivateRouter from "./privateRouter";
import Profile from "../Pages/profile";
import MyPlaces from "../Pages/myPlaces";
import Social from "../Pages/social";
import Benefits from "../Pages/benefits/Benefits";

const Routing = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/profile/:uid" element={<Profile />} />

        {/* <Route path="/new-member" element={<PrivateRouter />}>
          <Route index element={<LandingPage extra={true} />} />
        </Route> */}
        
        <Route path="/new-member" element={<LandingPage extra={true} />}/>

        <Route path="/explore/" element={<ExplorePage />} />
        <Route path="/explore/:type" element={<ExplorePage />} />

        <Route path="/my-places" element={<MyPlaces />} />

        <Route path="/social" element={<Social />} />
        <Route path="/benefits" element={<Benefits/>}/>

        <Route path="*" element={<LandingPage></LandingPage>}/>


      </Routes>
    </Suspense>
  );
};

export default Routing;
