import { Button, Form, Input, message } from "antd";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../../redux/apiSlices/userApis";
import logoimage from "../../assets/login.png";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();

  const onFinish = async (values) => {
    // console.log("Success:", values);
    if (values) {
      try {
        const res = await forgotPassword(values).unwrap();

        if (res?.success) {
          message.open({
            type: "success",
            content: "Send 4 digit code to your email, please check your email",
          });
          navigate("/auth/verify-email?route=forget&email=" + values.email);
        }
      } catch (error) {
        message.error(error.data.message);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.warn("Failed:", errorInfo);
  };

  return (
    <div className=" lg:flex md:flex flex-row items-center justify-between max-w-6xl mx-auto min-h-screen  ">
      <div className="">
        <div className="">
          <img src={logoimage} alt="Logo" />
        </div>
      </div>

      <div className="max-w-lg w-full  mx-auto px-4 ">
        <div className="text-center pb-[34px]">
          <h1 className="text-4xl font-bold mb-4 text-secondary">
            Forget password
          </h1>
          <h3 className="text-tertiary text-[16px] max-w-sm mx-auto">
            Enter your email which was used to create this account
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
              label={
                <label
                  htmlFor="email"
                  className="text-[16px] text-secondary font-semibold"
                >
                  Email
                </label>
              }
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
              required={false}
            >
              <Input
                prefix={
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
                }
                className="border border-[#D0D5DD] h-[44px] border-none bg-[#FFE5ED4D] hover:bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
                placeholder="Enter your email"
              />
            </Form.Item>

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
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
