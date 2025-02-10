import { Alert, Button, Checkbox, Form, Input, message } from "antd";
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSingUpUserMutation } from "../../../redux/apiSlices/userApis";
import logoimage from "../../assets/signup.png";

const Signup = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const [signUp] = useSingUpUserMutation();

  const onFinish = useCallback(
    async (values) => {
      try {
        const response = await signUp(values).unwrap();
        console.log(response);
        message.success("Signup successful");
        navigate("/auth/verify-email/?route=signup&email=" + values.email);
      } catch (error) {
        console.error("Error signing up:", error);
        message.error(error.data.message);
      }
    },
    [signUp, navigate]
  );
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    if (errorInfo.errorFields.some((field) => field.name[0] === "agreement")) {
      setShowAlert(true);
    }
  };
  const userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FF4D7F"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
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

  return (
    <div className=" lg:flex md:flex flex-row items-center justify-between max-w-6xl mx-auto min-h-screen  ">
      <div className="">
        <div className="">
          <img src={logoimage} alt="Logo" />
        </div>
      </div>

      <div className="max-w-lg w-full  mx-auto px-4 ">
        <div className="text-center pb-[34px]">
          <h1 className="text-4xl font-bold mb-4 text-secondary">Sign up</h1>
          <h3 className="text-tertiary text-[16px] max-w-sm mx-auto">
            Fill up some information to create a new account in Passenger
            Confession
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
              label="Name"
              name="user"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  type: "name",
                },
              ]}
            >
              <Input
                prefix={userIcon}
                placeholder="Enter your name"
                className="border h-[44px] bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] focus:border-[#dde2eb]"
              />
            </Form.Item>
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

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Please accept the terms and conditions")
                        ),
                },
              ]}
            >
              <Checkbox>i'm 18+</Checkbox>
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
                Sign up
              </Button>
            </Form.Item>

            <p className="text-[16px] font-semibold text-secondary text-center ">
              Have an account?{" "}
              <Link
                to="/auth/login"
                className="text-[16px] font-semibold text-primary hover:text-primary pt-1 w-fit "
              >
                {" "}
                Sign in
              </Link>
            </p>
          </Form>
        </div>
        {showAlert && (
          <Alert
            style={{ marginTop: "10px" }}
            message={
              <div>
                <h3 className="font-semibold">Age Consent Required</h3>
                <p>
                  Accessing this content requires age verification and consent.
                  You are not allowed to register If you are under 18.
                </p>
              </div>
            }
            type="error"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
            className="mb-4"
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
