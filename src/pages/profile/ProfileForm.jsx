import React from 'react';
import profileimg from '../../assets/profile.png';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const ProfileForm = () => {
  // Form submission handler
  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md w-full">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <img src={profileimg} alt="Profile" className="w-[154px] h-[154px] rounded-full" />
          <button className="absolute bottom-0 right-2 rounded-full">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
              <rect width="34" height="34" rx="17" fill="#FFE6ED" />
              <path
                d="M7 29V25H27V29H7ZM11 21H12.4L20.2 13.225L18.775 11.8L11 19.6V21ZM9 23V18.75L20.2 7.575C20.3833 7.39167 20.5958 7.25 20.8375 7.15C21.0792 7.05 21.3333 7 21.6 7C21.8667 7 22.125 7.05 22.375 7.15C22.625 7.25 22.85 7.4 23.05 7.6L24.425 9C24.625 9.18333 24.7708 9.4 24.8625 9.65C24.9542 9.9 25 10.1667 25 10.45C25 10.7333 24.9542 11 24.8625 11.25C24.7708 11.5 24.625 11.7167 24.425 11.9L13.25 23H9Z"
                fill="#F64C72"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Ant Design Form */}
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label={
            <label className="block text-secondary text-[16px] font-semibold ">Name</label>
          }
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
          required={false}
        >
          <Input

            prefix={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_57_130" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_57_130)">
                  <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="#FF4D7F" />
                </g>
              </svg>


            }
            style={{ backgroundColor: '#FFE5ED4D', color: "#6D6D6D", fontSize: '16px', fontWeight: '500' }} className="border border-[#D0D5DD] h-[44px] border-none  p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]" placeholder="Kennedy" />
        </Form.Item>

        <Form.Item

          label={
            <label className="block text-secondary text-[16px] font-semibold ">Mobile Number</label>
          }
          name="mobileNumber"
          rules={[{ required: true, message: 'Please input your mobile number!' }]}
          required={false}
        >
          <Input style={{ backgroundColor: '#FFE5ED4D', color: "#6D6D6D", fontSize: '16px', fontWeight: '500' }} className="border border-[#D0D5DD] h-[44px] border-none  p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]" prefix={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_58_186" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_58_186)">
                <path d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z" fill="#FF4D7F" />
              </g>
            </svg>

          } placeholder="88018-56325894" />
        </Form.Item>

        <Form.Item
          label={
            <label className="block text-secondary text-[16px] font-semibold ">Date Of Birth</label>
          }

          name="date"
          rules={[{ required: true, message: 'Please input your date of birth!' }]}
          required={false}
        >
          <Input prefix={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_57_160" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_57_160)">
                <path d="M4 22C3.71667 22 3.47917 21.9042 3.2875 21.7125C3.09583 21.5208 3 21.2833 3 21V16C3 15.45 3.19583 14.9792 3.5875 14.5875C3.97917 14.1958 4.45 14 5 14V10C5 9.45 5.19583 8.97917 5.5875 8.5875C5.97917 8.19583 6.45 8 7 8H11V6.55C10.7 6.35 10.4583 6.10833 10.275 5.825C10.0917 5.54167 10 5.2 10 4.8C10 4.55 10.05 4.30417 10.15 4.0625C10.25 3.82083 10.4 3.6 10.6 3.4L12 2L13.4 3.4C13.6 3.6 13.75 3.82083 13.85 4.0625C13.95 4.30417 14 4.55 14 4.8C14 5.2 13.9083 5.54167 13.725 5.825C13.5417 6.10833 13.3 6.35 13 6.55V8H17C17.55 8 18.0208 8.19583 18.4125 8.5875C18.8042 8.97917 19 9.45 19 10V14C19.55 14 20.0208 14.1958 20.4125 14.5875C20.8042 14.9792 21 15.45 21 16V21C21 21.2833 20.9042 21.5208 20.7125 21.7125C20.5208 21.9042 20.2833 22 20 22H4ZM7 14H17V10H7V14ZM5 20H19V16H5V20Z" fill="#FF4D7F" />
              </g>
            </svg>


          } style={{ backgroundColor: '#FFE5ED4D', color: "#6D6D6D", fontSize: '16px', fontWeight: '500' }} className="border border-[#D0D5DD] h-[44px] border-none  p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]" placeholder="03/16/1999" />
        </Form.Item>

        <Form.Item
          label={
            <label
              htmlFor="password"
              className="text-[16px] text-secondary font-semibold"
            >
              Password
            </label>
          }
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          required={false}
        >
          <Input.Password
            prefix={
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9C6.83333 9 7.54167 8.70833 8.125 8.125C8.70833 7.54167 9 6.83333 9 6C9 5.16667 8.70833 4.45833 8.125 3.875C7.54167 3.29167 6.83333 3 6 3C5.16667 3 4.45833 3.29167 3.875 3.875C3.29167 4.45833 3 5.16667 3 6C3 6.83333 3.29167 7.54167 3.875 8.125C4.45833 8.70833 5.16667 9 6 9ZM6 12C4.33333 12 2.91667 11.4167 1.75 10.25C0.583333 9.08333 0 7.66667 0 6C0 4.33333 0.583333 2.91667 1.75 1.75C2.91667 0.583333 4.33333 0 6 0C7.35 0 8.52917 0.383333 9.5375 1.15C10.5458 1.91667 11.25 2.86667 11.65 4H20.025L22 5.975L18.5 9.975L16 8L14 10L12 8H11.65C11.2333 9.2 10.5083 10.1667 9.475 10.9C8.44167 11.6333 7.28333 12 6 12Z" fill="#FF4D7F" />
              </svg>
            }
            iconRender={(visible) =>
              visible ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_192_107" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_192_107)">
                    <path d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z" fill="#FF4D7F" />
                  </g>
                </svg>

              ) : (

                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1 11.3L13.65 9.84999C13.8 9.06666 13.575 8.33332 12.975 7.64999C12.375 6.96665 11.6 6.69999 10.65 6.84999L9.2 5.39999C9.48333 5.26665 9.77083 5.16665 10.0625 5.09999C10.3542 5.03332 10.6667 4.99999 11 4.99999C12.25 4.99999 13.3125 5.43749 14.1875 6.31249C15.0625 7.18749 15.5 8.24999 15.5 9.49999C15.5 9.83332 15.4667 10.1458 15.4 10.4375C15.3333 10.7292 15.2333 11.0167 15.1 11.3ZM18.3 14.45L16.85 13.05C17.4833 12.5667 18.0458 12.0375 18.5375 11.4625C19.0292 10.8875 19.45 10.2333 19.8 9.49999C18.9667 7.81666 17.7708 6.47916 16.2125 5.48749C14.6542 4.49582 12.9167 3.99999 11 3.99999C10.5167 3.99999 10.0417 4.03332 9.575 4.09999C9.10833 4.16665 8.65 4.26665 8.2 4.39999L6.65 2.84999C7.33333 2.56665 8.03333 2.35415 8.75 2.21249C9.46667 2.07082 10.2167 1.99999 11 1.99999C13.5167 1.99999 15.7583 2.69582 17.725 4.08749C19.6917 5.47916 21.1167 7.28332 22 9.49999C21.6167 10.4833 21.1125 11.3958 20.4875 12.2375C19.8625 13.0792 19.1333 13.8167 18.3 14.45ZM18.8 20.6L14.6 16.45C14.0167 16.6333 13.4292 16.7708 12.8375 16.8625C12.2458 16.9542 11.6333 17 11 17C8.48333 17 6.24167 16.3042 4.275 14.9125C2.30833 13.5208 0.883333 11.7167 0 9.49999C0.35 8.61666 0.791667 7.79582 1.325 7.03749C1.85833 6.27915 2.46667 5.59999 3.15 4.99999L0.4 2.19999L1.8 0.799988L20.2 19.2L18.8 20.6ZM4.55 6.39999C4.06667 6.83332 3.625 7.30832 3.225 7.82499C2.825 8.34166 2.48333 8.89999 2.2 9.49999C3.03333 11.1833 4.22917 12.5208 5.7875 13.5125C7.34583 14.5042 9.08333 15 11 15C11.3333 15 11.6583 14.9792 11.975 14.9375C12.2917 14.8958 12.6167 14.85 12.95 14.8L12.05 13.85C11.8667 13.9 11.6917 13.9375 11.525 13.9625C11.3583 13.9875 11.1833 14 11 14C9.75 14 8.6875 13.5625 7.8125 12.6875C6.9375 11.8125 6.5 10.75 6.5 9.49999C6.5 9.31666 6.5125 9.14166 6.5375 8.97499C6.5625 8.80832 6.6 8.63332 6.65 8.44999L4.55 6.39999Z" fill="#FF4D7F" />
                </svg>



              )
            }
            className="border border-[#D0D5DD] h-[44px] border-none bg-[#FFE5ED4D] hover:bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] font-normal hover:border-[#D0D5DD] focus:border-[#dde2eb]"
            placeholder="Enter your password"
          />


          <div className="flex items-end justify-end pt-1 pb-4 ">
            <Link className="text-[16px] font-semibold text-primary hover:text-primary  w-fit " to="/change-password">Change password</Link>
          </div>


        </Form.Item>

        <Form.Item>

          <Button type="primary" htmlType="submit" style={{ backgroundColor: "#FF0048", color: "white", height: "44px", fontSize: '16px', fontWeight: 'bold' }} className="w-full border-none text-white px-6 py-2 rounded-lg">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
