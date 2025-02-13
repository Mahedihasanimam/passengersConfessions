import React from "react";
import { BiLoader } from "react-icons/bi";

const GLoading = () => {
  return (
    <div className=" flex justify-center items-center h-[40vh]">
      <span className="animate-spin">
        <BiLoader color="#FF0048" size={50} />
      </span>
    </div>
  );
};

export default GLoading;
