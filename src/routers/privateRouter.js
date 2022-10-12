import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../components/shared/layouts/MainLayout";
import { useContext } from "react";
import {AuthContext} from "../contextAPI/AuthContext";

const PrivateRouter = () => {
  const User = useContext(AuthContext);

  const auth = User.isLoggedIn;
  return auth ? <MainLayout /> : <Navigate to="/auth/login" />;
};

export default PrivateRouter;
