import { Button, Form, Image, Input, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../../redux/apiSlices/userApis";

import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../redux/api/baseApi";

const ProfileForm = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const { data } = useGetUserProfileQuery();
  const [updateProfile] = useUpdateUserProfileMutation();

  const [form] = Form.useForm();

  // console.log(data);

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone,
      });
      if (data.data.image) {
        setFileList([
          {
            uid: "-1",
            name: "profile_image",
            status: "done",
            url: imageUrl + data.data.image,
          },
        ]);
      }
    }
  }, [data?.data, form]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    const validFiles = newFileList.map((file) => {
      if (file.status === "error") {
        // message.error(`Error uploading: ${file.name}`);
        console.log(`Error uploading: ${file.name}`);
      }
      return {
        ...file,
        status: file.status === "error" ? "done" : file.status,
      };
    });
    setFileList(validFiles);
  };

  const onFinish = (values) => {
    console.log("Form Values:", values, fileList);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj);
    }
    // console.log("Form Data:", formData);

    // Handle form submission
    updateProfile(formData)
      .unwrap()
      .then((res) => {
        // console.log(res);
        message.success("Profile updated successfully");
      })
      .catch((error) => {
        // console.error("Error updating profile:", error);
        message.error("Failed to update profile");
      });
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md w-full">
      {/* 1st Box: Plan Purchased Status */}

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Profile Image" name="image">
          <div className="flex items-center justify-center">
            <Upload
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleUploadChange}
              maxCount={1}
            >
              {fileList.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </div>
          <Image
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
            }}
            src={previewImage}
          />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_57_130"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_57_130)">
                  <path
                    d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
                    fill="#FF4D7F"
                  />
                </g>
              </svg>
            }
            style={{
              backgroundColor: "#FFE5ED4D",
              color: "#6D6D6D",
              fontSize: "16px",
              fontWeight: "500",
            }}
            className="border border-[#D0D5DD] h-[44px] border-none  p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
            placeholder="Enter your name"
          />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="phone"
          rules={[
            { required: true, message: "Please input your mobile number!" },
            // { pattern: /^[0-9]{10}$/, message: "Enter a valid phone number!" },
          ]}
        >
          <Input
            style={{
              backgroundColor: "#FFE5ED4D",
              color: "#6D6D6D",
              fontSize: "16px",
              fontWeight: "500",
            }}
            className="border border-[#D0D5DD] h-[44px] border-none  p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_58_186"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_58_186)">
                  <path
                    d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z"
                    fill="#FF4D7F"
                  />
                </g>
              </svg>
            }
            placeholder="88018-56325894"
          />
        </Form.Item>

        <div className="flex items-end justify-end pt-1 pb-4 ">
          <Link
            className="text-[16px] font-semibold text-primary hover:text-primary  w-fit "
            to="/profile/change-password"
          >
            Change password
          </Link>
        </div>

        <Form.Item>
          <div className="w-1/2 mx-auto">
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
              Update
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
