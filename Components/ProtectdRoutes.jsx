import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
  let token = sessionStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;