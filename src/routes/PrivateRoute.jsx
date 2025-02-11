import { Navigate, useLocation } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.user?.user);
  const location = useLocation();
  console.log(user);
  if (!user._id) {
    return (
      <Navigate
        to={"/auth/login"}
        state={{ pathname: location.pathname }}
        replace
      />
    );
  }
  return children;
};

export default PrivateRoute;
