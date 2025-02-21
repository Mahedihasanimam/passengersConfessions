import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const PaySuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-[460px] w-full"
      >
        <div className="text-2xl font-bold mb-4 max-w-xs text-center mx-auto">
          <motion.h1
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
            }}
            className="flex justify-center items-center my-5 pb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100"
              height="100"
              x="0"
              y="0"
              viewBox="0 0 21 21"
              xmlSpace="preserve"
              fillRule="evenodd"
              className=""
            >
              <g>
                <path
                  fill="#00ba00"
                  d="M10.504 1.318a9.189 9.189 0 0 1 0 18.375 9.189 9.189 0 0 1 0-18.375zM8.596 13.49l-2.25-2.252a.986.986 0 0 1 0-1.392.988.988 0 0 1 1.393 0l1.585 1.587 3.945-3.945a.986.986 0 0 1 1.392 0 .987.987 0 0 1 0 1.392l-4.642 4.642a.987.987 0 0 1-1.423-.032z"
                  opacity="1"
                  data-original="#00ba00"
                  className=""
                ></path>
              </g>
            </svg>
          </motion.h1>
          <p className="text-2xl font-bold">Congratulations!</p>
          <p className="text-2xl font-bold">Your purchase is done</p>
        </div>
        <p className="text-[16px] text-[#A8A8A8] text-center">
          Your payment was completed successfully.
        </p>
        <Link to={"/"} className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full !h-12 rounded-md self-center mt-[40px]"
            style={{
              backgroundColor: "#FF0048",
              color: "white",

              fontSize: "16px",
              fontWeight: "bold",
            }}
            onClick={onClose}
          >
            Done
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PaySuccessModal;
