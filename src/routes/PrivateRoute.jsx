import { Navigate, useLocation } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.user?.user);
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!user?._id && !token) {
    return (
      <Navigate
        to={"/auth/login"}
        state={{ pathname: location.pathname, state: location?.state }}
        replace
      />
    );
  }
  return children;
};

export default PrivateRoute;
