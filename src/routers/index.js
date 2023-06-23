import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/shared/UI/LoadingSpinner";
import AboutUS from "../Pages/About";

const LandingPage = lazy(()=>import("../Pages/landing"));
const ExplorePage = lazy(()=>import("../Pages/explore"));
const PrivateRouter = lazy(()=>import("./privateRouter"));
const Profile = lazy(()=>import("../Pages/profile"));
const Uploads = lazy(()=>import("../Pages/uploads"));
const Social = lazy(()=>import("../Pages/social"));
const Benefits = lazy(()=>import("../Pages/benefits/Benefits"));
const Blog = lazy(()=>import("../Pages/Blog"));
const About = lazy(()=>import("../Pages/About"));



const Routing = () => {
  return (
    <Suspense fallback={
      <LoadingSpinner asOverflow />
    }>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/profile/:uid" element={<Profile />} />
        
        <Route path="/new-member" element={<LandingPage extra={true} />}/>

        <Route path="/explore/" element={<ExplorePage />} />
        <Route path="/explore/:type" element={<ExplorePage />} />

        <Route path="/uploads" element={<Uploads />} />

        <Route path="/social" element={<Social />} />
        <Route path="/benefits" element={<Benefits/>}/>
        {/* <Route path="/blog" element={<Blog/>}/> */}
        <Route path="/aboutus" element={<About/>}/>

        <Route path="*" element={<LandingPage></LandingPage>}/>


      </Routes>
    </Suspense>
  );
};

export default Routing;
