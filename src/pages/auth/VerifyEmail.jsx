import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import loginimg from '../../assets/forgetpass.png'
const Verify = () => {
    const navigate=useNavigate()
    const [form] = Form.useForm();
    const [regemail, setEmail] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const emailParam = params.get('email');
        setEmail(emailParam || '');
    }, []);

    const onFinish = async (values) => {
        const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
        const requestBody = {
            email: regemail,
            code: otp,
        };

        console.log("OTP as a number:", requestBody);

        // Simulate the API response without integration
        setTimeout(() => {
            const success = true; // Change this flag to simulate success/failure

            if (success) {
                message.success("Verification successful!");
                navigate('/')
                form.resetFields();
            } else {
                message.error("Verification failed: Invalid OTP");
            }
        }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className=" lg:flex md:flex flex-row items-center justify-center space-x-8  container mx-auto min-h-screen  ">
            <div className="">
                <img src={loginimg} alt="Logo" />
            </div>

            <div className="w-full max-w-md">
            <div className=" rounded-md text-[#6A6D7C] min-w-96 ">
                <div className="text-[#6A6D7C] text-center my-12">
                    <Typography.Title
                        style={{ color: "#6A6D7C" }}
                        className="font-bold text-4xl"
                    >
                        <span className="text-secondary text-2xl font-bold">Verify email</span>
                    </Typography.Title>
                    <p className="text-tertiary">
                    We sent 4 digits code on your email
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
                        <Form.Item
                            name="otp1"
                            rules={[{ required: true, message: "Required" }]}
                        >
                            <Input maxLength={1} className="text-center w-14 h-14 bg-[#FFE5ED4D] focus:bg-[#FFE5ED4D] text-xl font-bold text-[#6D6D6D]" />
                        </Form.Item>
                        <Form.Item
                            name="otp2"
                            rules={[{ required: true, message: "Required" }]}
                        >
                            <Input maxLength={1} className="text-center w-14 h-14 bg-[#FFE5ED4D] focus:bg-[#FFE5ED4D] text-xl font-bold text-[#6D6D6D]" />
                        </Form.Item>
                        <Form.Item
                            name="otp3"
                            rules={[{ required: true, message: "Required" }]}
                        >
                            <Input maxLength={1} className="text-center w-14 h-14 bg-[#FFE5ED4D] focus:bg-[#FFE5ED4D] text-xl font-bold text-[#6D6D6D]" />
                        </Form.Item>
                        <Form.Item
                            name="otp4"
                            rules={[{ required: true, message: "Required" }]}
                        >
                            <Input maxLength={1} className="text-center w-14 h-14 bg-[#FFE5ED4D] focus:bg-[#FFE5ED4D] text-xl font-bold text-[#6D6D6D]" />
                        </Form.Item>
                        
                    </div>
              
                 
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: "#FF0048", color: "white", height: "44px", fontSize: '16px', fontWeight: 'bold' }} className="w-full border-none text-white px-6 py-2 rounded-lg">
                            Submit
                        </Button>
                    </Form.Item>
                    <div className="flex items-end justify-end pr-20">
                                <Link className="text-[16px] font-semibold text-primary hover:text-primary pt-1 w-fit " >Send again</Link>
                            </div>
                </Form>
            </div>
        </div>


       
    </div>
    );
};

export default Verify;
