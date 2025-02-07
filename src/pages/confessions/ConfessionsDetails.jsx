import "react-h5-audio-player/lib/styles.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Form, Input, Rate, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddNewReviewMutation,
  useGetAllReviewsQuery,
} from "../../../redux/apiSlices/reviewRatingApiSlice";

import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/baseApi";
import { useGetConfessionByIdQuery } from "../../../redux/apiSlices/confessionApiSlice";
import detailimg from "../../assets/bookDetails.png";
import AudioImage from "../../assets/confession.webp";

const SubscriptionModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" rounded-lg p-6 h-full w-full ">
        <div className="space-x-[40px] flex items-center justify-center mt-20  ">
          {/* Basic Plan */}
          <div className="border rounded-lg p-4 bg-white w-full max-w-[330px]">
            <h3 className="text-2xl font-bold text-center">Basic Plan</h3>
            <p className="text-tertiary mb-2 py-4 font-semibold ">
              Dive into exclusive monthly stories &enjoy discounts on your
              favorite reads.
            </p>
            <ul className=" pl-5  text-[#262626] space-y-4">
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>
                <span>Exclusive monthly story access</span>
              </li>

              <li className="flex items-center space-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2C18.03 2 22.5 6.47 22.5 12C22.5 17.53 18.03 22 12.5 22C6.97 22 2.5 17.53 2.5 12C2.5 6.47 6.97 2 12.5 2ZM16.09 7L12.5 10.59L8.91 7L7.5 8.41L11.09 12L7.5 15.59L8.91 17L12.5 13.41L16.09 17L17.5 15.59L13.91 12L17.5 8.41L16.09 7Z"
                    fill="#6D6D6D"
                  />
                </svg>
                <span> 10% discount for all products</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>{" "}
                <span>Early access to new release</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2C18.03 2 22.5 6.47 22.5 12C22.5 17.53 18.03 22 12.5 22C6.97 22 2.5 17.53 2.5 12C2.5 6.47 6.97 2 12.5 2ZM16.09 7L12.5 10.59L8.91 7L7.5 8.41L11.09 12L7.5 15.59L8.91 17L12.5 13.41L16.09 17L17.5 15.59L13.91 12L17.5 8.41L16.09 7Z"
                    fill="#6D6D6D"
                  />
                </svg>
                <span>Member only newsletter</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>{" "}
                <span>Access to All- Exclusive Polls</span>
              </li>
            </ul>
            <div className="flex items-center justify-center pt-[32px] pb-[20px]">
              <p className="text-5xl font-bold mt-4 ">$50</p>
              <span className="text-xs font-bold text-[#262626]">/month</span>
            </div>
            <Link to={`/ConfessionsDetails/6/payment`}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-full border-none text-white px-6 py-2 rounded-lg"
              >
                Subscribe
              </Button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg p-4 bg-white w-full max-w-[330px]">
            <h3 className="text-2xl font-bold text-center">Premium</h3>
            <p className="text-tertiary mb-2 py-4 font-semibold ">
              Dive into exclusive monthly stories &enjoy discounts on your
              favorite reads.
            </p>
            <ul className=" pl-5  text-[#262626] space-y-4">
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>
                <span>Exclusive monthly story access</span>
              </li>

              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>
                <span> 10% discount for all products</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>{" "}
                <span>Early access to new release</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>
                <span>Member only newsletter</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                    fill="#FF0048"
                  />
                </svg>{" "}
                <span>Access to All- Exclusive Polls</span>
              </li>
            </ul>
            <div className="flex items-center justify-center pt-[32px] pb-[20px]">
              <p className="text-5xl font-bold mt-4 ">$150</p>
              <span className="text-xs font-bold text-[#262626]">/month</span>
            </div>
            <Link to={`/ConfessionsDetails/6/payment`}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-full border-none text-white px-6 py-2 rounded-lg"
              >
                Subscribe
              </Button>
            </Link>
          </div>
        </div>
        <p
          onClick={onClose}
          className="mt-6 cursor-pointer text-white absolute top-0 right-8"
        >
          <CloseOutlined style={{ fontSize: "24px" }} />
        </p>
      </div>
    </div>
  );
};
const ConfessionsDetails = () => {
  const navigate = useNavigate();

  const params = useParams();

  const { data: Confession } = useGetConfessionByIdQuery(params.id);

  const { data: allReview } = useGetAllReviewsQuery(params.id);
  const [addReview] = useAddNewReviewMutation();

  const user = useSelector((state) => state.user.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(Confession);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      setSubmitting(true);
      values.userId = user?._id;
      await addReview(values).unwrap();
      message.success("Review submitted successfully!");
      form.resetFields();
    } catch (error) {
      message.error(error.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-6  rounded-lg">
      <div className="flex items-center py-4 pb-6">
        <LeftOutlined
          onClick={() => navigate(-1)}
          className="text-2xl font-bold pr-1"
        />
        <h1 className="text-3xl font-bold mb-1">{Confession?.data?.title}</h1>
      </div>
      <div className="lg:flex  flex-row items-center justify-between gap-4">
        <div className=" lg:max-w-sm w-full mx-auto">
          <img
            src={AudioImage} // Replace with actual image
            alt="Immortal Chase"
            className="w-full  rounded-lg mb-4"
          />
        </div>

        <div className="w-full ">
          <div className="flex-1 pl-6 gap-4 ">
            <h1 className="text-3xl font-bold mb-2">
              {Confession?.data?.title}
            </h1>
            <h2 className="text-gray-600 mb-4">
              {Confession?.data?.authorName}
            </h2>
            <p className="mb-4">{Confession?.data?.description}</p>

            <Button
              onClick={handleSubscribeClick}
              type="primary"
              style={{
                backgroundColor: "#FF0048",
                color: "white",
                height: "35px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="w-full mt-2 border-none text-white px-6 py-2 rounded-lg"
            >
              <span className="">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5.63989V19.6399L19 12.6399L8 5.63989Z"
                    fill="white"
                  />
                </svg>
              </span>
              play
            </Button>
            <div className="w-full mt-3 ">
              <AudioPlayer
                autoPlay
                src={Confession?.data?.audio}
                onPlay={(e) => console.log("onPlay")}
                // other props here
              />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-fit   ">
          <h3 className="text-lg font-semibold mb-2">Language Option</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md lg:max-w-[100px] md:max-w-[100px] w-full bg-gray-100 border border-[#F6F6F6] p-2">
              <img src={detailimg} alt="flag" />
              <div className="flex items-center justify-center space-x-2 pt-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_41_113)">
                    <path
                      d="M16 2.5H2C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H16C16.5304 15.5 17.0391 15.2893 17.4142 14.9142C17.7893 14.5391 18 14.0304 18 13.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M10.5 2.5H7.5V7.5H0V10.5H7.5V15.5H10.5V10.5H18V7.5H10.5V2.5Z"
                      fill="#CE1124"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_113">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="ml-2">English</p>
              </div>
            </div>

            <div className="rounded-md lg:max-w-[100px] md:max-w-[100px] w-full bg-gray-100 border border-[#F6F6F6] p-2">
              <img src={detailimg} alt="flag" />
              <div className="flex items-center justify-center space-x-2 pt-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13.5C18 14.0304 17.7893 14.5391 17.4142 14.9142C17.0391 15.2893 16.5304 15.5 16 15.5H2C1.46957 15.5 0.960859 15.2893 0.585786 14.9142C0.210714 14.5391 0 14.0304 0 13.5V4.5C0 3.96957 0.210714 3.46086 0.585786 3.08579C0.960859 2.71071 1.46957 2.5 2 2.5H16C16.5304 2.5 17.0391 2.71071 17.4142 3.08579C17.7893 3.46086 18 3.96957 18 4.5V13.5Z"
                    fill="#C60A1D"
                  />
                  <path d="M0 6H18V12H0V6Z" fill="#FFC400" />
                  <path
                    d="M4.5 8.5V10C4.5 10.3978 4.65804 10.7794 4.93934 11.0607C5.22064 11.342 5.60218 11.5 6 11.5C6.39782 11.5 6.77936 11.342 7.06066 11.0607C7.34196 10.7794 7.5 10.3978 7.5 10V8.5H4.5Z"
                    fill="#EA596E"
                  />
                  <path d="M6 8H7.5V9.5H6V8Z" fill="#F4A2B2" />
                  <path d="M4.5 8H6V9.5H4.5V8Z" fill="#DD2E44" />
                  <path
                    d="M6 8C6.82843 8 7.5 7.66421 7.5 7.25C7.5 6.83579 6.82843 6.5 6 6.5C5.17157 6.5 4.5 6.83579 4.5 7.25C4.5 7.66421 5.17157 8 6 8Z"
                    fill="#EA596E"
                  />
                  <path
                    d="M6 7.25C6.82843 7.25 7.5 7.08211 7.5 6.875C7.5 6.66789 6.82843 6.5 6 6.5C5.17157 6.5 4.5 6.66789 4.5 6.875C4.5 7.08211 5.17157 7.25 6 7.25Z"
                    fill="#FFAC33"
                  />
                  <path
                    d="M3.5 8H4V11.5H3.5V8ZM8 8H8.5V11.5H8V8Z"
                    fill="#99AAB5"
                  />
                  <path
                    d="M3 11H4.5V11.5H3V11ZM7.5 11H9V11.5H7.5V11ZM3.5 7.5H4V8H3.5V7.5ZM8 7.5H8.5V8H8V7.5Z"
                    fill="#66757F"
                  />
                </svg>

                <p className="ml-2">Spanish</p>
              </div>
            </div>

            <div className="rounded-md lg:max-w-[100px] md:max-w-[100px] w-full bg-gray-100 border border-[#F6F6F6] p-2">
              <img src={detailimg} alt="flag" />
              <div className="flex items-center justify-center space-x-2 pt-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_41_113)">
                    <path
                      d="M16 2.5H2C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H16C16.5304 15.5 17.0391 15.2893 17.4142 14.9142C17.7893 14.5391 18 14.0304 18 13.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M10.5 2.5H7.5V7.5H0V10.5H7.5V15.5H10.5V10.5H18V7.5H10.5V2.5Z"
                      fill="#CE1124"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_113">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="ml-2">English</p>
              </div>
            </div>

            <div className="rounded-md lg:max-w-[100px] md:max-w-[100px] w-full bg-gray-100 border border-[#F6F6F6] p-2">
              <img src={detailimg} alt="flag" />
              <div className="flex items-center justify-center space-x-2 pt-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13.5C18 14.0304 17.7893 14.5391 17.4142 14.9142C17.0391 15.2893 16.5304 15.5 16 15.5H2C1.46957 15.5 0.960859 15.2893 0.585786 14.9142C0.210714 14.5391 0 14.0304 0 13.5V4.5C0 3.96957 0.210714 3.46086 0.585786 3.08579C0.960859 2.71071 1.46957 2.5 2 2.5H16C16.5304 2.5 17.0391 2.71071 17.4142 3.08579C17.7893 3.46086 18 3.96957 18 4.5V13.5Z"
                    fill="#DE2910"
                  />
                  <path
                    d="M5.56757 4.48848L5.93557 4.66648L6.23007 4.38348L6.17457 4.78848L6.53457 4.98148L6.13257 5.05348L6.06057 5.45548L5.86757 5.09548L5.46257 5.15098L5.74557 4.85648L5.56757 4.48848ZM7.90007 5.95898L7.72207 6.32648L8.00507 6.62148L7.60057 6.56548L7.40757 6.92598L7.33557 6.52348L6.93307 6.45148L7.29357 6.25848L7.23757 5.85398L7.53257 6.13698L7.90007 5.95898ZM7.42157 7.84848L7.55557 8.23448L7.96407 8.24298L7.63857 8.48948L7.75707 8.88098L7.42157 8.64748L7.08607 8.88098L7.20407 8.48948L6.87857 8.24298L7.28707 8.23448L7.42157 7.84848ZM5.56757 9.48848L5.93557 9.66648L6.23007 9.38348L6.17457 9.78848L6.53457 9.98148L6.13257 10.0535L6.06057 10.4555L5.86757 10.0955L5.46257 10.151L5.74557 9.85648L5.56757 9.48848ZM3.49957 5.47548L3.96407 6.81098L5.37707 6.83998L4.25057 7.69398L4.66007 9.04698L3.49957 8.23948L2.33907 9.04698L2.74857 7.69398L1.62207 6.83998L3.03507 6.81098L3.49957 5.47548Z"
                    fill="#FFDE02"
                  />
                </svg>

                <p className="ml-2">Chineses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Customer Review</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {allReview?.data?.map((review) => (
            <div
              key={review?._id}
              className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex"
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                {/* Placeholder for the profile image */}
                <img
                  src={imageUrl + review?.userId?.image} // Replace with actual image URL or asset path
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="font-semibold text-secondary">
                  {review?.userId?.name}
                </h2>
                <div className="flex items-center mt-2">
                  <Rate
                    disabled
                    allowHalf
                    style={{ fontSize: "16px" }}
                    value={review?.rating}
                  />
                </div>
                <p className="text-tertiary mt-2">{review?.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="review"
              label="Your Review"
              rules={[{ required: true, message: "Please enter your review!" }]}
            >
              <Input.TextArea
                style={{
                  border: "none",
                  outline: "none",
                }}
                rows={4}
                placeholder="Write your review here..."
              />
            </Form.Item>

            <Form.Item
              name="rating"
              label="Your Rating"
              rules={[{ required: true, message: "Please give a rating!" }]}
            >
              <Rate />
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  backgroundColor: "#FF0048",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                type="primary"
                htmlType="submit"
                loading={submitting}
              >
                Submit Review
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {isModalOpen && <SubscriptionModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ConfessionsDetails;
