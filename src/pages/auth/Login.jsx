import { Button, Form, Input, message } from "antd";
import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../../redux/apiSlices/userApis";
import logoimage from "../../assets/login.png";
import { DashboardUrl } from "../../main";

const Login = () => {
  const navigate = useNavigate();

  const [loginUser] = useLoginMutation();

  const onFinish = useCallback(
    async (values) => {
      try {
        const response = await loginUser(values).unwrap();
        message.success("Login successful!");
        localStorage.setItem("token", response?.data?.token);

        console.log(response?.data?.user?.role);

        if (
          response?.data?.user?.role == "admin" ||
          response?.data?.user?.role == "superadmin"
        ) {
          window.location.href =
            DashboardUrl + "?token=" + response?.data?.token;
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("Error logging in:", error);
        message.error(error.data.message);
      }
    },
    [loginUser, navigate]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const emailIcon = (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z"
        fill="#FF4D7F"
      />
    </svg>
  );

  const passwordIcon = (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9C6.83333 9 7.54167 8.70833 8.125 8.125C8.70833 7.54167 9 6.83333 9 6C9 5.16667 8.70833 4.45833 8.125 3.875C7.54167 3.29167 6.83333 3 6 3C5.16667 3 4.45833 3.29167 3.875 3.875C3.29167 4.45833 3 5.16667 3 6C3 6.83333 3.29167 7.54167 3.875 8.125C4.45833 8.70833 5.16667 9 6 9ZM6 12C4.33333 12 2.91667 11.4167 1.75 10.25C0.583333 9.08333 0 7.66667 0 6C0 4.33333 0.583333 2.91667 1.75 1.75C2.91667 0.583333 4.33333 0 6 0C7.35 0 8.52917 0.383333 9.5375 1.15C10.5458 1.91667 11.25 2.86667 11.65 4H20.025L22 5.975L18.5 9.975L16 8L14 10L12 8H11.65C11.2333 9.2 10.5083 10.1667 9.475 10.9C8.44167 11.6333 7.28333 12 6 12Z"
        fill="#FF4D7F"
      />
    </svg>
  );

  const passwordIcon2 = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_192_107"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_192_107)">
        <path
          d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z"
          fill="#FF4D7F"
        />
      </g>
    </svg>
  );

  const passwordIcon3 = (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1 11.3L13.65 9.84999C13.8 9.06666 13.575 8.33332 12.975 7.64999C12.375 6.96665 11.6 6.69999 10.65 6.84999L9.2 5.39999C9.48333 5.26665 9.77083 5.16665 10.0625 5.09999C10.3542 5.03332 10.6667 4.99999 11 4.99999C12.25 4.99999 13.3125 5.43749 14.1875 6.31249C15.0625 7.18749 15.5 8.24999 15.5 9.49999C15.5 9.83332 15.4667 10.1458 15.4 10.4375C15.3333 10.7292 15.2333 11.0167 15.1 11.3ZM18.3 14.45L16.85 13.05C17.4833 12.5667 18.0458 12.0375 18.5375 11.4625C19.0292 10.8875 19.45 10.2333 19.8 9.49999C18.9667 7.81666 17.7708 6.47916 16.2125 5.48749C14.6542 4.49582 12.9167 3.99999 11 3.99999C10.5167 3.99999 10.0417 4.03332 9.575 4.09999C9.10833 4.16665 8.65 4.26665 8.2 4.39999L6.65 2.84999C7.33333 2.56665 8.03333 2.35415 8.75 2.21249C9.46667 2.07082 10.2167 1.99999 11 1.99999C13.5167 1.99999 15.7583 2.69582 17.725 4.08749C19.6917 5.47916 21.1167 7.28332 22 9.49999C21.6167 10.4833 21.1125 11.3958 20.4875 12.2375C19.8625 13.0792 19.1333 13.8167 18.3 14.45ZM18.8 20.6L14.6 16.45C14.0167 16.6333 13.4292 16.7708 12.8375 16.8625C12.2458 16.9542 11.6333 17 11 17C8.48333 17 6.24167 16.3042 4.275 14.9125C2.30833 13.5208 0.883333 11.7167 0 9.49999C0.35 8.61666 0.791667 7.79582 1.325 7.03749C1.85833 6.27915 2.46667 5.59999 3.15 4.99999L0.4 2.19999L1.8 0.799988L20.2 19.2L18.8 20.6ZM4.55 6.39999C4.06667 6.83332 3.625 7.30832 3.225 7.82499C2.825 8.34166 2.48333 8.89999 2.2 9.49999C3.03333 11.1833 4.22917 12.5208 5.7875 13.5125C7.34583 14.5042 9.08333 15 11 15C11.3333 15 11.6583 14.9792 11.975 14.9375C12.2917 14.8958 12.6167 14.85 12.95 14.8L12.05 13.85C11.8667 13.9 11.6917 13.9375 11.525 13.9625C11.3583 13.9875 11.1833 14 11 14C9.75 14 8.6875 13.5625 7.8125 12.6875C6.9375 11.8125 6.5 10.75 6.5 9.49999C6.5 9.31666 6.5125 9.14166 6.5375 8.97499C6.5625 8.80832 6.6 8.63332 6.65 8.44999L4.55 6.39999Z"
        fill="#FF4D7F"
      />
    </svg>
  );

  return (
    <div className=" lg:flex md:flex flex-row items-center justify-between max-w-6xl mx-auto min-h-screen  ">
      <div className="">
        <div className="">
          <img src={logoimage} alt="Logo" />
        </div>
      </div>

      <div className="max-w-lg w-full  mx-auto px-4 ">
        <div className="text-center pb-[34px]">
          <h1 className="text-4xl font-bold mb-4 text-secondary">Log in</h1>
          <h3 className="text-tertiary text-[16px] max-w-sm mx-auto">
            Enter your email & password which had used to create Passenger
            confession account
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <Form
            name="signin"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={emailIcon}
                placeholder="Enter your email"
                className="border h-[44px] bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] focus:border-[#dde2eb]"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={passwordIcon}
                placeholder="Enter your password"
                className="border h-[44px] bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] focus:border-[#dde2eb]"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-full border-none text-white px-6 py-2 rounded-lg"
              >
                Log in
              </Button>
            </Form.Item>

            <p className="text-[16px] font-semibold text-secondary text-center ">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-[16px] font-semibold text-primary hover:text-primary pt-1 w-fit "
              >
                Sign up
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
