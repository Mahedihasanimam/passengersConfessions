import { CloseOutlined, LeftOutlined, MenuOutlined } from "@ant-design/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  // console.log(user);

  return (
    <div>
      <button
        className="absolute md:hidden p-2 bg-[#FF6691] text-white rounded-md"
        onClick={toggleSidebar}
      >
        <MenuOutlined />
      </button>

      <div
        className={`fixed top-0 md:top-20 h-[85vh] w-64 bg-[#F6F6F6] p-4 rounded-[16px] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <p className="text-sm text-gray-400">
          Your current plan:{" "}
          <span className="text-base font-semibold text-primary">
            {user?.isBasicSubscribed
              ? "Basic"
              : user?.isPremiumSubscribed
              ? "Premium"
              : "Visit"}
          </span>
        </p>
        <Link to={"/"} className="flex items-center mb-6 cursor-pointer">
          <LeftOutlined className="text-[18px] pr-2" />
          <span className="text-[18px] font-semibold">Back</span>
        </Link>

        <div className="absolute md:hidden top-4 right-2">
          <button onClick={toggleSidebar}>
            <CloseOutlined />
          </button>{" "}
        </div>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-[#FF6691] font-bold bg-white shadow-xl px-4 py-1 rounded-[20px] transition-all ease-out duration-300"
                  : "flex items-center text-[#B0B0B0] font-bold"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="mr-2">
                    {isActive ? (
                      // SVG icon when active
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333496 14.9997V12.333H13.6668V14.9997H0.333496ZM3.00016 9.66634H3.9335L9.1335 4.48301L8.1835 3.53301L3.00016 8.73301V9.66634ZM1.66683 10.9997V8.16634L9.1335 0.716341C9.25572 0.594119 9.39738 0.499674 9.5585 0.433008C9.71961 0.366341 9.88905 0.333008 10.0668 0.333008C10.2446 0.333008 10.4168 0.366341 10.5835 0.433008C10.7502 0.499674 10.9002 0.599674 11.0335 0.733008L11.9502 1.66634C12.0835 1.78856 12.1807 1.93301 12.2418 2.09967C12.3029 2.26634 12.3335 2.43856 12.3335 2.61634C12.3335 2.78301 12.3029 2.9469 12.2418 3.10801C12.1807 3.26912 12.0835 3.41634 11.9502 3.54967L4.50016 10.9997H1.66683Z"
                          fill="#FF6691"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333496 14.9997V12.333H13.6668V14.9997H0.333496ZM3.00016 9.66634H3.9335L9.1335 4.48301L8.1835 3.53301L3.00016 8.73301V9.66634ZM1.66683 10.9997V8.16634L9.1335 0.716341C9.25572 0.594119 9.39738 0.499674 9.5585 0.433008C9.71961 0.366341 9.88905 0.333008 10.0668 0.333008C10.2446 0.333008 10.4168 0.366341 10.5835 0.433008C10.7502 0.499674 10.9002 0.599674 11.0335 0.733008L11.9502 1.66634C12.0835 1.78856 12.1807 1.93301 12.2418 2.09967C12.3029 2.26634 12.3335 2.43856 12.3335 2.61634C12.3335 2.78301 12.3029 2.9469 12.2418 3.10801C12.1807 3.26912 12.0835 3.41634 11.9502 3.54967L4.50016 10.9997H1.66683Z"
                          fill="#B0B0B0"
                        />
                      </svg>
                    )}
                  </span>
                  Edit profile
                </>
              )}
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="/profile/confessionsList"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-[#FF6691] font-bold bg-white shadow-xl px-4 py-1 rounded-[20px] transition-all ease-out duration-300"
                  : "flex items-center text-[#B0B0B0] font-bold"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="mr-2">
                    {isActive ? (
                      // SVG icon when active
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_74_1594"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_74_1594)">
                          <path
                            d="M10.6667 13.3333C10.1111 13.3333 9.63889 13.1389 9.25 12.75C8.86111 12.3611 8.66667 11.8889 8.66667 11.3333C8.66667 10.7778 8.86111 10.3056 9.25 9.91667C9.63889 9.52778 10.1111 9.33333 10.6667 9.33333C10.7889 9.33333 10.9056 9.34167 11.0167 9.35833C11.1278 9.375 11.2333 9.41111 11.3333 9.46667V4H14.6667V5.33333H12.6667V11.3333C12.6667 11.8889 12.4722 12.3611 12.0833 12.75C11.6944 13.1389 11.2222 13.3333 10.6667 13.3333ZM2 10.6667V9.33333H7.33333V10.6667H2ZM2 8V6.66667H10V8H2ZM2 5.33333V4H10V5.33333H2Z"
                            fill="#FF6691"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_74_1594"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_74_1594)">
                          <path
                            d="M10.6667 13.3333C10.1111 13.3333 9.63889 13.1389 9.25 12.75C8.86111 12.3611 8.66667 11.8889 8.66667 11.3333C8.66667 10.7778 8.86111 10.3056 9.25 9.91667C9.63889 9.52778 10.1111 9.33333 10.6667 9.33333C10.7889 9.33333 10.9056 9.34167 11.0167 9.35833C11.1278 9.375 11.2333 9.41111 11.3333 9.46667V4H14.6667V5.33333H12.6667V11.3333C12.6667 11.8889 12.4722 12.3611 12.0833 12.75C11.6944 13.1389 11.2222 13.3333 10.6667 13.3333ZM2 10.6667V9.33333H7.33333V10.6667H2ZM2 8V6.66667H10V8H2ZM2 5.33333V4H10V5.33333H2Z"
                            fill="#B0B0B0"
                          />
                        </g>
                      </svg>
                    )}
                  </span>
                  confessions List
                </>
              )}
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="/profile/myfoums-list"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-[#FF6691] font-bold bg-white shadow-xl px-4 py-1 rounded-[20px] transition-all ease-out duration-300"
                  : "flex items-center text-[#B0B0B0] font-bold"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="mr-2">
                    {isActive ? (
                      // SVG icon when active
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 9.33333C3.52222 9.33333 3.68056 9.26945 3.80833 9.14167C3.93611 9.01389 4 8.85556 4 8.66667C4 8.47778 3.93611 8.31944 3.80833 8.19167C3.68056 8.06389 3.52222 8 3.33333 8C3.14444 8 2.98611 8.06389 2.85833 8.19167C2.73056 8.31944 2.66667 8.47778 2.66667 8.66667C2.66667 8.85556 2.73056 9.01389 2.85833 9.14167C2.98611 9.26945 3.14444 9.33333 3.33333 9.33333ZM3.33333 6.66667C3.52222 6.66667 3.68056 6.60278 3.80833 6.475C3.93611 6.34722 4 6.18889 4 6C4 5.81111 3.93611 5.65278 3.80833 5.525C3.68056 5.39722 3.52222 5.33333 3.33333 5.33333C3.14444 5.33333 2.98611 5.39722 2.85833 5.525C2.73056 5.65278 2.66667 5.81111 2.66667 6C2.66667 6.18889 2.73056 6.34722 2.85833 6.475C2.98611 6.60278 3.14444 6.66667 3.33333 6.66667ZM3.33333 4C3.52222 4 3.68056 3.93611 3.80833 3.80833C3.93611 3.68056 4 3.52222 4 3.33333C4 3.14444 3.93611 2.98611 3.80833 2.85833C3.68056 2.73056 3.52222 2.66667 3.33333 2.66667C3.14444 2.66667 2.98611 2.73056 2.85833 2.85833C2.73056 2.98611 2.66667 3.14444 2.66667 3.33333C2.66667 3.52222 2.73056 3.68056 2.85833 3.80833C2.98611 3.93611 3.14444 4 3.33333 4ZM5.33333 9.33333H9.33333V8H5.33333V9.33333ZM5.33333 6.66667H9.33333V5.33333H5.33333V6.66667ZM5.33333 4H9.33333V2.66667H5.33333V4ZM1.33333 12C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H10.6667C11.0333 0 11.3472 0.130556 11.6083 0.391667C11.8694 0.652778 12 0.966667 12 1.33333V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H1.33333ZM1.33333 10.6667H10.6667V1.33333H1.33333V10.6667Z"
                          fill="#FF6691"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 9.33333C3.52222 9.33333 3.68056 9.26945 3.80833 9.14167C3.93611 9.01389 4 8.85556 4 8.66667C4 8.47778 3.93611 8.31944 3.80833 8.19167C3.68056 8.06389 3.52222 8 3.33333 8C3.14444 8 2.98611 8.06389 2.85833 8.19167C2.73056 8.31944 2.66667 8.47778 2.66667 8.66667C2.66667 8.85556 2.73056 9.01389 2.85833 9.14167C2.98611 9.26945 3.14444 9.33333 3.33333 9.33333ZM3.33333 6.66667C3.52222 6.66667 3.68056 6.60278 3.80833 6.475C3.93611 6.34722 4 6.18889 4 6C4 5.81111 3.93611 5.65278 3.80833 5.525C3.68056 5.39722 3.52222 5.33333 3.33333 5.33333C3.14444 5.33333 2.98611 5.39722 2.85833 5.525C2.73056 5.65278 2.66667 5.81111 2.66667 6C2.66667 6.18889 2.73056 6.34722 2.85833 6.475C2.98611 6.60278 3.14444 6.66667 3.33333 6.66667ZM3.33333 4C3.52222 4 3.68056 3.93611 3.80833 3.80833C3.93611 3.68056 4 3.52222 4 3.33333C4 3.14444 3.93611 2.98611 3.80833 2.85833C3.68056 2.73056 3.52222 2.66667 3.33333 2.66667C3.14444 2.66667 2.98611 2.73056 2.85833 2.85833C2.73056 2.98611 2.66667 3.14444 2.66667 3.33333C2.66667 3.52222 2.73056 3.68056 2.85833 3.80833C2.98611 3.93611 3.14444 4 3.33333 4ZM5.33333 9.33333H9.33333V8H5.33333V9.33333ZM5.33333 6.66667H9.33333V5.33333H5.33333V6.66667ZM5.33333 4H9.33333V2.66667H5.33333V4ZM1.33333 12C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H10.6667C11.0333 0 11.3472 0.130556 11.6083 0.391667C11.8694 0.652778 12 0.966667 12 1.33333V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H1.33333ZM1.33333 10.6667H10.6667V1.33333H1.33333V10.6667Z"
                          fill="#B0B0B0"
                        />
                      </svg>
                    )}
                  </span>
                  Forums List
                </>
              )}
            </NavLink>
          </li>
          {user?.isAffiliate &&
            user?.affiliateApplicationStatus === "approved" && (
              <li className="mb-4">
                <NavLink
                  to="/profile/affiliates"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[#FF6691] font-bold bg-white shadow-xl px-4 py-1 rounded-[20px] transition-all ease-out duration-300"
                      : "flex items-center text-[#B0B0B0] font-bold"
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="mr-2">
                        {isActive ? (
                          // SVG icon when active
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.95384 4.62433L4.80384 7.45699M8.54184 11.1963L11.3758 12.0463M7.7885 8.21166L11.6278 4.37233M2.6665 3.66699C2.6665 3.79831 2.69237 3.92835 2.74262 4.04968C2.79288 4.171 2.86654 4.28124 2.9594 4.3741C3.05226 4.46696 3.16249 4.54062 3.28382 4.59087C3.40515 4.64113 3.53518 4.66699 3.6665 4.66699C3.79783 4.66699 3.92786 4.64113 4.04919 4.59087C4.17051 4.54062 4.28075 4.46696 4.37361 4.3741C4.46647 4.28124 4.54013 4.171 4.59038 4.04968C4.64064 3.92835 4.6665 3.79831 4.6665 3.66699C4.6665 3.53567 4.64064 3.40563 4.59038 3.28431C4.54013 3.16298 4.46647 3.05274 4.37361 2.95989C4.28075 2.86703 4.17051 2.79337 4.04919 2.74311C3.92786 2.69286 3.79783 2.66699 3.6665 2.66699C3.53518 2.66699 3.40515 2.69286 3.28382 2.74311C3.16249 2.79337 3.05226 2.86703 2.9594 2.95989C2.86654 3.05274 2.79288 3.16298 2.74262 3.28431C2.69237 3.40563 2.6665 3.53567 2.6665 3.66699ZM11.3332 3.66699C11.3332 3.93221 11.4385 4.18656 11.6261 4.3741C11.8136 4.56164 12.068 4.66699 12.3332 4.66699C12.5984 4.66699 12.8527 4.56164 13.0403 4.3741C13.2278 4.18656 13.3332 3.93221 13.3332 3.66699C13.3332 3.40178 13.2278 3.14742 13.0403 2.95989C12.8527 2.77235 12.5984 2.66699 12.3332 2.66699C12.068 2.66699 11.8136 2.77235 11.6261 2.95989C11.4385 3.14742 11.3332 3.40178 11.3332 3.66699ZM11.3332 12.3337C11.3332 12.5989 11.4385 12.8532 11.6261 13.0408C11.8136 13.2283 12.068 13.3337 12.3332 13.3337C12.5984 13.3337 12.8527 13.2283 13.0403 13.0408C13.2278 12.8532 13.3332 12.5989 13.3332 12.3337C13.3332 12.0684 13.2278 11.8141 13.0403 11.6266C12.8527 11.439 12.5984 11.3337 12.3332 11.3337C12.068 11.3337 11.8136 11.439 11.6261 11.6266C11.4385 11.8141 11.3332 12.0684 11.3332 12.3337ZM2.6665 10.3337C2.6665 11.1293 2.98257 11.8924 3.54518 12.455C4.10779 13.0176 4.87085 13.3337 5.6665 13.3337C6.46215 13.3337 7.22522 13.0176 7.78782 12.455C8.35043 11.8924 8.6665 11.1293 8.6665 10.3337C8.6665 9.53801 8.35043 8.77495 7.78782 8.21234C7.22522 7.64973 6.46215 7.33366 5.6665 7.33366C4.87085 7.33366 4.10779 7.64973 3.54518 8.21234C2.98257 8.77495 2.6665 9.53801 2.6665 10.3337Z"
                              stroke="#B0B0B0"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.95384 4.62433L4.80384 7.45699M8.54184 11.1963L11.3758 12.0463M7.7885 8.21166L11.6278 4.37233M2.6665 3.66699C2.6665 3.79831 2.69237 3.92835 2.74262 4.04968C2.79288 4.171 2.86654 4.28124 2.9594 4.3741C3.05226 4.46696 3.16249 4.54062 3.28382 4.59087C3.40515 4.64113 3.53518 4.66699 3.6665 4.66699C3.79783 4.66699 3.92786 4.64113 4.04919 4.59087C4.17051 4.54062 4.28075 4.46696 4.37361 4.3741C4.46647 4.28124 4.54013 4.171 4.59038 4.04968C4.64064 3.92835 4.6665 3.79831 4.6665 3.66699C4.6665 3.53567 4.64064 3.40563 4.59038 3.28431C4.54013 3.16298 4.46647 3.05274 4.37361 2.95989C4.28075 2.86703 4.17051 2.79337 4.04919 2.74311C3.92786 2.69286 3.79783 2.66699 3.6665 2.66699C3.53518 2.66699 3.40515 2.69286 3.28382 2.74311C3.16249 2.79337 3.05226 2.86703 2.9594 2.95989C2.86654 3.05274 2.79288 3.16298 2.74262 3.28431C2.69237 3.40563 2.6665 3.53567 2.6665 3.66699ZM11.3332 3.66699C11.3332 3.93221 11.4385 4.18656 11.6261 4.3741C11.8136 4.56164 12.068 4.66699 12.3332 4.66699C12.5984 4.66699 12.8527 4.56164 13.0403 4.3741C13.2278 4.18656 13.3332 3.93221 13.3332 3.66699C13.3332 3.40178 13.2278 3.14742 13.0403 2.95989C12.8527 2.77235 12.5984 2.66699 12.3332 2.66699C12.068 2.66699 11.8136 2.77235 11.6261 2.95989C11.4385 3.14742 11.3332 3.40178 11.3332 3.66699ZM11.3332 12.3337C11.3332 12.5989 11.4385 12.8532 11.6261 13.0408C11.8136 13.2283 12.068 13.3337 12.3332 13.3337C12.5984 13.3337 12.8527 13.2283 13.0403 13.0408C13.2278 12.8532 13.3332 12.5989 13.3332 12.3337C13.3332 12.0684 13.2278 11.8141 13.0403 11.6266C12.8527 11.439 12.5984 11.3337 12.3332 11.3337C12.068 11.3337 11.8136 11.439 11.6261 11.6266C11.4385 11.8141 11.3332 12.0684 11.3332 12.3337ZM2.6665 10.3337C2.6665 11.1293 2.98257 11.8924 3.54518 12.455C4.10779 13.0176 4.87085 13.3337 5.6665 13.3337C6.46215 13.3337 7.22522 13.0176 7.78782 12.455C8.35043 11.8924 8.6665 11.1293 8.6665 10.3337C8.6665 9.53801 8.35043 8.77495 7.78782 8.21234C7.22522 7.64973 6.46215 7.33366 5.6665 7.33366C4.87085 7.33366 4.10779 7.64973 3.54518 8.21234C2.98257 8.77495 2.6665 9.53801 2.6665 10.3337Z"
                              stroke="#B0B0B0"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      My Affiliate
                    </>
                  )}
                </NavLink>
              </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
