import { Image } from "antd";
import React from "react";
import { useGetAllNotificationsByUserQuery } from "../../../../redux/apiSlices/notificaitonApiSlice";
import { useSelector } from "react-redux";

const Notifications = () => {
  const user = useSelector((state) => state.user.user);
  const {
    data: notifications,
    isLoading,
    isFetching,
  } = useGetAllNotificationsByUserQuery(user?._id);

  console.log(user?._id);

  console.log(notifications);
  return (
    <div className="min-h-screen text-secondary  p-4 z-50">
      <div className="modal-content w-full ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl flex text-secondary space-x-2 items-center font-semibold mb-6 ">
            {/* <Link to={"/"}>
          <button className="focus:outline-none pt-2">
            <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
          </button>
        </Link> */}
            Notifications{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="10" fill="#EC474F" />
              <path
                d="M9.42234 16V15.076L12.2423 12.052C12.5063 11.764 12.7183 11.5 12.8783 11.26C13.0383 11.012 13.1543 10.776 13.2263 10.552C13.3063 10.32 13.3463 10.088 13.3463 9.856C13.3463 9.408 13.2103 9.068 12.9383 8.836C12.6663 8.604 12.2663 8.488 11.7383 8.488C11.3303 8.488 10.9423 8.564 10.5743 8.716C10.2143 8.868 9.87034 9.1 9.54234 9.412L9.09834 8.464C9.41834 8.152 9.82634 7.904 10.3223 7.72C10.8183 7.528 11.3343 7.432 11.8703 7.432C12.4543 7.432 12.9463 7.524 13.3463 7.708C13.7543 7.884 14.0623 8.144 14.2703 8.488C14.4783 8.832 14.5823 9.252 14.5823 9.748C14.5823 10.004 14.5503 10.256 14.4863 10.504C14.4303 10.744 14.3383 10.984 14.2103 11.224C14.0903 11.464 13.9343 11.712 13.7423 11.968C13.5583 12.224 13.3343 12.488 13.0703 12.76L10.6583 15.304V14.956H14.9183V16H9.42234Z"
                fill="white"
              />
            </svg>
          </h2>
        </div>
        {notifications?.notifications?.length > 0 ? (
          <ul className="space-y-4">
            {notifications?.notifications?.map((notification, index) => (
              <li
                className="flex items-center space-x-4 border-2 border-[#24242411] rounded-lg cursor-pointer p-1"
                key={index}
              >
                <Image
                  className="rounded-full"
                  height={40}
                  width={40}
                  src={notification?.image}
                  alt="User avatar"
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center  space-x-2">
                    <strong className="text-[18px] font-normal">
                      {notification.name}
                    </strong>
                    : <p className="text-secondary">{notification.message}</p>
                  </div>
                  <div>
                    {!notification?.isRead && (
                      <p className="timestamp text-[#FFFFFFB2] fl010ex items-center">
                        <p className="pr-2">{notification.timestamp}</p>{" "}
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="6" height="6" rx="3" fill="#F42829" />
                        </svg>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No new notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
