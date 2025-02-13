import React from "react";
import { BiLoader } from "react-icons/bi";

const GLoading = () => {
  return (
    <div className="inset-0 fixed flex justify-center items-center h-screen">
      <span className="animate-spin">
        <BiLoader color="#FF0048" size={50} />
      </span>
    </div>
  );
};

export default GLoading;
