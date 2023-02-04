import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/shared/layouts/MainLayout";
import { useContext } from "react";
import {AuthContext} from "../contextAPI/AuthContext";
import Authentication from "../Pages/PopUpPages/Authentication";

const PrivateRouter = () => {
  const User = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = User.isLoggedIn;
  const [showAuthentication, setShowAuthentication] = useState(true);
  const closeAuthenticationForm = () => {
    setShowAuthentication(false);
    navigate("/")
  }


  return (
    auth ? 
      <MainLayout /> 
      : 
      <Authentication
        show={showAuthentication}
        onClose={closeAuthenticationForm}
        width={"25%"}
      />
  )
};

export default PrivateRouter;
