import { Button, Modal } from "antd";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllSubscriptionsQuery } from "../../../redux/apiSlices/subscription";

export const SubscriptionModal = ({ visible, onCancel }) => {
  const navigate = useNavigate();

  const { data: subscriptions } = useGetAllSubscriptionsQuery({});
  const user = useSelector((state) => state?.user?.user);

  // console.log(subscriptions);

  const handleSubscription = async (plan) => {
    navigate(`/payment`, { state: plan });
  };
  // console.log(user)
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      centered
      footer={null}
      className="lg:!w-[50vw] sm:!w=full "
      // width={800}
    >
      <div className=" rounded-lg lg:!p-6 p-0 h-full w-full ">
        <div className=" gap-4 flex lg:flex-row flex-col  justify-center mt-8  ">
          {subscriptions?.data?.result?.map((item, index) => {
            return (
              <div
                key={index}
                className="border  flex-1 flex flex-col justify-between rounded-lg p-4 bg-white w-full "
              >
                <div>
                  <h3 className="text-2xl font-bold text-center capitalize">
                    {item?.name} Plan
                  </h3>

                  <p className="text-tertiary mb-2 py-4 font-semibold ">
                    Dive into exclusive monthly stories &enjoy discounts on your
                    favorite reads.
                  </p>
                  <ul className=" pl-5  text-[#262626] space-y-4">
                    {item?.features?.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                            fill="#FF0048"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}

                    {/* <li className="flex items-center space-x-2">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 2C18.03 2 22.5 6.47 22.5 12C22.5 17.53 18.03 22 12.5 22C6.97 22 2.5 17.53 2.5 12C2.5 6.47 6.97 2 12.5 2ZM16.09 7L12.5 10.59L8.91 7L7.5 8.41L11.09 12L7.5 15.59L8.91 17L12.5 13.41L16.09 17L17.5 15.59L13.91 12L17.5 8.41L16.09 7Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                    <span> 10% discount for all products</span>
                  </li> */}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center justify-center pt-[32px]  flex-1">
                    <p className="text-5xl font-bold mt-4 ">${item?.price}</p>
                    <span className="text-xs font-bold text-[#262626]">
                      /{item?.duration === 180 && "Monthly"}
                      {item?.duration === 365 && "Yearly"}
                    </span>
                  </div>

                  <Button
                    onClick={() => handleSubscription(item)}
                    type="primary"
                    style={{
                      backgroundColor: "#FF0048",
                      color: "white",
                      height: "44px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    className="w-full border-none text-white px-6 py-2 rounded-lg flex-1"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
