import { Button, Form, Input, Typography, message } from "antd";
import React, { useCallback, useRef } from "react";
import {
  useSendOtpAgainMutation,
  useVerifyEmailMutation,
} from "../../../redux/apiSlices/userApis";

import { useNavigate } from "react-router-dom";
import loginimg from "../../assets/forgetpass.png";

const Verify = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [emailVerified] = useVerifyEmailMutation();
  const [sendOtpAgain] = useSendOtpAgainMutation();

  const params = new URLSearchParams(window.location.search);
  const emailParam = params.get("email");
  const route = params.get("route");

  console.log(emailParam, route);

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInput = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const onFinish = useCallback(
    async (values) => {
      const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
      const requestBody = {
        email: emailParam,
        emailVerifyCode: otp,
      };

      try {
        console.log(requestBody);
        const response = await emailVerified(requestBody).unwrap();
        console.log(response);

        if (response?.success) {
          message.success(response?.message);
          form.resetFields();
          if (route == "forget") {
            navigate("/create-newPassword?email=" + emailParam);
          }
          if (route == "signup") {
            localStorage.setItem("token", response?.data?.token);
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
        message.error(error?.data?.message);
      }
    },
    [emailParam, emailVerified]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="lg:flex md:flex flex-row items-center justify-center space-x-8 container mx-auto min-h-screen">
      <div>
        <img src={loginimg} alt="Logo" />
      </div>

      <div className="w-full max-w-md">
        <div className="rounded-md text-[#6A6D7C] min-w-96">
          <div className="text-[#6A6D7C] text-center my-12">
            <Typography.Title
              style={{ color: "#6A6D7C" }}
              className="font-bold text-4xl"
            >
              <span className="text-secondary text-2xl font-bold">
                Verify email
              </span>
            </Typography.Title>
            <p className="text-tertiary">
              We sent a 4-digit code to your email
            </p>
          </div>
          <Form
            form={form}
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="flex justify-center gap-4">
              {[0, 1, 2, 3].map((index) => (
                <Form.Item
                  key={index}
                  name={`otp${index + 1}`}
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input
                    ref={inputRefs[index]}
                    maxLength={1}
                    className="text-center w-14 h-14 bg-[#FFE5ED4D] focus:bg-[#FFE5ED4D] text-xl font-bold text-[#6D6D6D]"
                    onChange={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                  />
                </Form.Item>
              ))}
            </div>

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
                Submit
              </Button>
            </Form.Item>
            <div className="flex items-end justify-end pr-20">
              <Button
                onClick={async () => {
                  try {
                    const response = await sendOtpAgain({
                      email: emailParam,
                    }).unwrap();
                    if (response?.success) {
                      message.success(response?.message);
                    }
                  } catch (error) {
                    message.error(error?.data?.message);
                  }
                }}
                className="text-[16px] font-semibold text-primary hover:text-primary pt-1 w-fit"
              >
                Send again
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
