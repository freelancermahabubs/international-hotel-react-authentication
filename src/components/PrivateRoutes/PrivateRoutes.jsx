import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  console.log(location);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
