import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddNewBookReviewMutation,
  useGetReviewByBookIdQuery,
} from "../../../../redux/apiSlices/reviewRatingApiSlice";

import { useSelector } from "react-redux";
import { imageUrl } from "../../../../redux/api/baseApi";
import { useGetBookByIdQuery } from "../../../../redux/apiSlices/bookApiSlice";

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
            <Link to={`/booksDetails/6/payment`}>
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
            <Link to={`/booksDetails/6/payment`}>
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

const BookDetails = () => {
  const navigate = useNavigate();

  const params = useParams();

  const { data: Book, isLoading } = useGetBookByIdQuery(params.id);

  const { data: allReview } = useGetReviewByBookIdQuery(params.id);

  const [addReview] = useAddNewBookReviewMutation({});

  const user = useSelector((state) => state.user.user);

  // console.log(Book);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true); // Start loading
    try {
      await navigator.clipboard.writeText(
        "http:/search?sca_esv=3c7b9bf68f65825c&sxsrf=ADLYWIIaNaXmb4fX8Tf1hMWZ"
      );
      message.success("URL copied to clipboard!");
    } catch (err) {
      message.error("Failed to copy URL");
    } finally {
      setConfirmLoading(false); // Stop loading
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      setSubmitting(true);

      await addReview({
        ...values,
        bookId: params.id,
      }).unwrap();
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

  console.log(Book);

  if (isLoading) {
    return (
      <div className="container mx-auto p-6  rounded-lg">
        <div className="flex items-center py-4 pb-6">
          <LeftOutlined
            onClick={() => navigate(-1)}
            className="text-2xl font-bold pr-1"
          />
          <h1 className="text-3xl font-bold mb-1">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6  rounded-lg">
      <div className="flex items-center py-4 pb-6">
        <LeftOutlined
          onClick={() => navigate(-1)}
          className="text-2xl font-bold pr-1"
        />
        <h1 className="text-3xl font-bold mb-1">{Book?.data?.bookName}</h1>
      </div>
      <div className="lg:flex  flex-row items-center justify-between gap-4">
        <div className=" lg:max-w-sm w-full mx-auto">
          <img
            src={imageUrl + Book?.data?.bookCoverImage} // Replace with actual image
            alt="Immortal Chase"
            className="w-full  rounded-lg mb-4"
          />
        </div>

        <div className="w-full ">
          <div className="flex-1 pl-6 ">
            <div className="flex flex-wrap gap-4  mb-3">
              {Book?.data?.pdfUrls?.map((pdf) => (
                <a
                  key={pdf}
                  href={imageUrl + pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-red-400 p-2 rounded-md"
                >
                  <img
                    src={"/public/pdf.svg"} // Replace with actual image
                    className="w-20 aspect-square rounded-md"
                  />
                </a>
              ))}
            </div>
            <h1 className="text-3xl font-bold mb-2">{Book?.data?.bookName}</h1>
            <h2 className="text-gray-600 mb-4">{Book?.data?.authorName}</h2>
            <p className="mb-4">{Book?.data?.description}</p>

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
              className="w-full border-none text-white px-6 py-2 rounded-lg"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 w-fit   ">
          <h3 className="text-lg font-semibold mb-2">Language Option</h3>
          <div className="grid grid-cols-2 gap-2">
            {Book?.data?.languages?.length > 0 &&
              Book?.data?.languages?.map((language) => {
                if (language === "english") {
                  return (
                    <div
                      key={language}
                      className="flex items-center p-2  bg-gray-100 rounded-md gap-2"
                    >
                      <img
                        src={"/public/english.svg"} // Replace with actual image
                        className="w-6 h-6"
                      />
                      <span className="text-sm ">English</span>
                    </div>
                  );
                }
                if (language === "chinese") {
                  return (
                    <div
                      key={language}
                      className="flex items-center p-2  bg-gray-100 rounded-md gap-2"
                    >
                      <img
                        src={"/public/chinaa.svg"} // Replace with actual image
                        className="w-6 h-6"
                      />
                      <span className="text-sm ">China</span>
                    </div>
                  );
                }
                if (language === "spanish") {
                  return (
                    <div
                      key={language}
                      className="flex items-center p-2  bg-gray-100 rounded-md gap-2"
                    >
                      <img
                        src={"/public/spania.svg"} // Replace with actual image
                        className="w-6 h-6"
                      />
                      <span className="text-sm ">Spanish</span>
                    </div>
                  );
                }
                if (language === "french") {
                  return (
                    <div
                      key={language}
                      className="flex items-center p-2  bg-gray-100 rounded-md gap-2"
                    >
                      <img
                        src={"/public/france.svg"} // Replace with actual image
                        className="w-6 h-6"
                      />
                      <span className="text-sm ">France</span>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>

      <>
        <Modal
          width="40%"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={
            <div className="w-full flex items-center justify-center space-x-6 ">
              <Button
                style={{
                  backgroundColor: "#F6F6F6",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#FF0048",
                }}
                className="w-full rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                style={{
                  backgroundColor: "#FF0048",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
                className="w-full rounded-lg "
                type="primary"
                onClick={handleOk}
                loading={confirmLoading}
              >
                Copy
              </Button>
            </div>
          }
        >
          <p className="p-2 border border-primary w-fit rounded-lg text-[16px] font-semibold ">
            http:/search?sca_esv=3c7b9bf68f65825c&sxsrf=ADLYWIIaNaXmb4fX8Tf1hMWZ
          </p>
        </Modal>
      </>

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
                  src={imageUrl + review?.user?.image} // Replace with actual image URL or asset path
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="font-semibold text-secondary">
                  {review?.user?.name}
                </h2>

                <p className="text-tertiary mt-2">{review?.review}</p>
              </div>
            </div>
          ))}
        </div>

        {allReview?.data?.find((review) => review?.user?._id === user?._id) ? (
          <i className="text-tertiary mt-2 text-xs">
            You have reviewed this book
          </i>
        ) : (
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>

            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="review"
                label="Your Review"
                rules={[
                  { required: true, message: "Please enter your review!" },
                ]}
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
        )}
      </div>

      {isModalOpen && <SubscriptionModal onClose={handleCloseModal} />}
    </div>
  );
};

export default BookDetails;
