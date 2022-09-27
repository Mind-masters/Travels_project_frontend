import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../components/shared/layouts/MainLayout";
import { useContext } from "react";
import {AuthContext} from "../components/contextAPI/AuthContext";

const PrivateRouter = () => {
  console.log("private route is called");

  const auth = true;
  return auth ? <MainLayout /> : <Navigate to="/auth/login" />;
};

export default PrivateRouter;
