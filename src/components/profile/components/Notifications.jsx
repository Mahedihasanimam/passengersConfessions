import React, { useEffect } from "react";

import { Image } from "antd";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../../redux/api/baseApi";
import { useGetAllNotificationsByUserQuery } from "../../../../redux/apiSlices/notificaitonApiSlice";
import { useGetSubscriptionTimeLeftQuery } from "../../../../redux/apiSlices/subscription";

const Notifications = () => {
  const user = useSelector((state) => state.user.user);
  const { data: notifications } = useGetAllNotificationsByUserQuery(user?._id);

  const { data: timeLeft, refetch } = useGetSubscriptionTimeLeftQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }
  );

  // Set up state for the subscription time

  useEffect(() => {
    const interval = setInterval(() => {
      refetch(); // This will refetch the data every 1 second
    }, 1000); // 1000ms = 1 second

    // Cleanup the interval when the component unmounts or when refetch is no longer needed
    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <div className="min-h-screen text-secondary p-4 z-50">
      <div className="modal-content w-full">
        {/* Display the formatted subscription time in boxes */}
        <div className="flex space-x-4 mb-4 items-center border border-primary p-4 rounded-lg">
          <span>Subscription Time Left</span>
          {/* {timeLeft?.yearsLeft > 0 && (
            <div className="flex items-center justify-center p-4 bg-[#FF0048] text-white rounded-md">
              {Math.floor(timeLeft.yearsLeft)} Year
            </div>
          )}
          {timeLeft?.monthsLeft > 0 && (
            <div className="flex items-center justify-center p-4 bg-[#FF0048] text-white rounded-md">
              {timeLeft.monthsLeft} Months
            </div>
          )}
          {timeLeft?.daysLeft > 0 && (
            <div className="flex items-center justify-center p-4 bg-[#FF0048] text-white rounded-md">
              {timeLeft.daysLeft} Days
            </div>
          )} */}
          {timeLeft?.hoursLeft > 0 && (
            <div className="flex items-center justify-center p-3 bg-[#FF0048] text-white rounded-md">
              {timeLeft?.hoursLeft} Hours
            </div>
          )}
          {timeLeft?.timeLeft > 0 && (
            <div className="flex items-center justify-center p-3 bg-[#FF0048] text-white rounded-md">
              {new Date(timeLeft?.timeLeft).getMinutes()} Minutes
            </div>
          )}
          {timeLeft?.timeLeft > 0 && (
            <div className="flex items-center justify-center p-3 bg-[#FF0048] text-white rounded-md">
              {new Date(timeLeft?.timeLeft).getSeconds()} Second
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl flex text-secondary space-x-2 items-center font-semibold mb-6 ">
            Notifications
          </h2>
        </div>
        {notifications?.notifications?.length > 0 ? (
          <ul className="space-y-4 ">
            {notifications?.notifications?.map((notification, index) => (
              <li
                className="flex items-center space-x-4 border-2 border-[#24242411] rounded-lg cursor-pointer p-1 justify-between"
                key={index}
              >
                <Image
                  className="rounded-full"
                  height={40}
                  width={40}
                  src={imageUrl + notification?.admin?.image}
                  alt="User avatar"
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <strong className="text-[18px] font-normal text-gray-500">
                      {notification.name}
                    </strong>
                    : <p className="">{notification.message}</p>
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
