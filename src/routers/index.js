import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../components/shared/layouts/AuthLayout";
import LandingPage from "../Pages/landing";
import ExplorePage from "../Pages/explore";
import PrivateRouter from "./privateRouter";
import Login from "../Pages/authenticate/Login";
import SignUp from "../Pages/authenticate/SignUp";
import Profile from "../Pages/profile";

const Routing = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<PrivateRouter />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path="/new-member" element={<PrivateRouter />}>
          <Route index element={<LandingPage extra={true} />} />
        </Route>
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/place" element={<AuthLayout />}>
          <Route path="new" element={<h1>Login</h1>} />
          <Route path="update" element={<h1>Register</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
