import { MailFilled, PhoneOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-[#000000] text-decriptioncolor relative z-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 lg:justify-items-center">
            {/* left side menu */}
            <div className=" text-sm font-normal space-y-4">
              <div className="flex justify-start pl-2 lg:justify-start pb-4">
                <img src={logo} alt="Pantagonostis" />
              </div>
              {/* <div className="max-w-[120px] text-[16px] pl-2">
                <h4>
                  Street name, Area address <br /> goes here
                </h4>
              </div> */}
              <div className="text-decriptioncolor text-[16px] font-normal space-y-2 pt-2">
                <div>
                  <PhoneOutlined className="rotate-90 text-[16px] text-decriptioncolor pr-2" />
                  <span className="text-decriptioncolor">
                    +(00)-000-000-0000
                  </span>
                </div>
                <div className="pl-2">
                  <MailFilled className="text-[16px] text-decriptioncolor pr-2" />
                  <span className="text-decriptioncolor">
                    infoname@mail.com
                  </span>
                </div>
              </div>
            </div>

            {/* right side menu items */}

            <div className="space-y-3 text-start">
              <h3 className="font-semibold text-[18px] pb-3 text-white">
                Programs
              </h3>
              <div className="gap-6">
                <ul className="space-y-[12px] text-decriptioncolor font-medium text-sm">
                  <li>
                    <Link to={"/allBooksCollections"}>Books</Link>
                  </li>
                  <li>
                    <Link to={"/Confession"}>Confessions</Link>
                  </li>
                  <li>
                    <Link to={"/RideShareStories"}>
                      {" "}
                      RideShare Drivers Stories{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Forum"}>Forum</Link>
                  </li>
                  <li>
                    <Link to={"/auth/Becomeanaffiliate"}>
                      Become an affiliate
                    </Link>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={`${import.meta.env.VITE_DASHBOARD_URL}login`}
                    >
                      Admin Dashboard
                    </a>
                  </li>

                  {/* Add more menu items here */}
                </ul>
              </div>
            </div>

            <div className="space-y-3 text-start">
              <h3 className="font-semibold text-[18px] pb-3 text-white">
                Help & Support
              </h3>
              <div className="gap-6">
                <ul className="space-y-[12px] text-decriptioncolor font-medium text-sm">
                  <li>
                    <Link to={"/FAQ"}>FAQ</Link>
                  </li>
                  {/* <li>
                      <Link to={"/contact"}>Contact us</Link>
                    </li> */}
                  <li>
                    <Link to={"/termsAndConditions"}>Terms & conditions</Link>
                  </li>
                  <li>
                    <Link to={"/aboutus"}>About Us</Link>
                  </li>

                  {/* Add more menu items here */}
                </ul>
              </div>

              {/* <div className="space-y-[24px] text-start">
                <h3 className="font-semibold text-[18px] pb-3 text-white">
                  Social Media
                </h3>
                <div className="gap-6">
                  <ul className="space-y-[12px] text-decriptioncolor font-medium text-sm flex items-center space-x-4">
                    <li className="pt-4">
                      <Link to={"https://www.facebook.com"}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 12.0938C24 5.46638 18.6274 0.09375 12 0.09375C5.37262 0.09375 0 5.46638 0 12.0938C0 18.0833 4.38825 23.0478 10.125 23.948V15.5625H7.07812V12.0938H10.125V9.45C10.125 6.4425 11.9166 4.78125 14.6576 4.78125C15.9705 4.78125 17.3438 5.01563 17.3438 5.01563V7.96875H15.8306C14.3399 7.96875 13.875 8.89378 13.875 9.84281V12.0938H17.2031L16.6711 15.5625H13.875V23.948C19.6117 23.0478 24 18.0833 24 12.0938Z"
                            fill="#1877F2"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://www.google.com"}>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_58_299)">
                            <path
                              d="M8.36068 0.883183C5.9627 1.71506 3.89469 3.29399 2.46041 5.38806C1.02612 7.48213 0.30116 9.98095 0.392005 12.5175C0.482851 15.054 1.38472 17.4946 2.96513 19.4807C4.54555 21.4668 6.72121 22.8937 9.17255 23.5519C11.1599 24.0647 13.2421 24.0873 15.2401 23.6176C17.05 23.211 18.7234 22.3414 20.0963 21.0938C21.5252 19.7557 22.5624 18.0535 23.0963 16.1701C23.6767 14.1219 23.7799 11.9681 23.3982 9.87381H12.2382V14.5032H18.7013C18.5721 15.2415 18.2953 15.9462 17.8875 16.5751C17.4796 17.204 16.949 17.7441 16.3276 18.1632C15.5383 18.6852 14.6487 19.0365 13.7157 19.1944C12.7799 19.3684 11.8202 19.3684 10.8844 19.1944C9.93603 18.9984 9.03886 18.6069 8.25005 18.0451C6.98283 17.148 6.03132 15.8737 5.5313 14.4038C5.02283 12.9064 5.02283 11.2831 5.5313 9.78568C5.88722 8.73609 6.47561 7.78044 7.25255 6.99006C8.14166 6.06896 9.2673 5.41055 10.506 5.08708C11.7446 4.7636 13.0485 4.78755 14.2744 5.15631C15.2321 5.45029 16.1079 5.96394 16.8319 6.65631C17.5607 5.93131 18.2882 5.20443 19.0144 4.47568C19.3894 4.08381 19.7982 3.71068 20.1676 3.30943C19.0624 2.28095 17.7651 1.48066 16.35 0.954433C13.7732 0.0187884 10.9538 -0.00635611 8.36068 0.883183Z"
                              fill="white"
                            />
                            <path
                              d="M8.36058 0.883117C10.9535 -0.00702605 13.7729 0.0174566 16.35 0.952492C17.7652 1.4823 19.0619 2.28644 20.1656 3.31874C19.7906 3.71999 19.395 4.09499 19.0125 4.48499C18.285 5.21124 17.5581 5.93499 16.8318 6.65624C16.1078 5.96387 15.232 5.45023 14.2743 5.15624C13.0488 4.78619 11.745 4.76086 10.506 5.08301C9.26699 5.40516 8.14067 6.06236 7.25058 6.98249C6.47364 7.77287 5.88525 8.72852 5.52933 9.77812L1.64246 6.76874C3.03372 4.00979 5.44261 1.89941 8.36058 0.883117Z"
                              fill="#E33629"
                            />
                            <path
                              d="M0.611279 9.7498C0.820194 8.71442 1.16704 7.71173 1.64253 6.76855L5.5294 9.78543C5.02093 11.2828 5.02093 12.9062 5.5294 14.4036C4.2344 15.4036 2.93878 16.4086 1.64253 17.4186C0.452186 15.0491 0.0891526 12.3495 0.611279 9.7498Z"
                              fill="#F8BD00"
                            />
                            <path
                              d="M12.2381 9.87207H23.3981C23.7799 11.9663 23.6766 14.1202 23.0963 16.1683C22.5623 18.0517 21.5252 19.754 20.0963 21.0921C18.8419 20.1133 17.5819 19.1421 16.3275 18.1633C16.9494 17.7438 17.4802 17.2031 17.8881 16.5736C18.296 15.944 18.5726 15.2386 18.7013 14.4996H12.2381C12.2363 12.9583 12.2381 11.4152 12.2381 9.87207Z"
                              fill="#587DBD"
                            />
                            <path
                              d="M1.64062 17.4188C2.93687 16.4188 4.2325 15.4138 5.5275 14.4038C6.02851 15.8742 6.98138 17.1486 8.25 18.0451C9.04127 18.6043 9.94037 18.9926 10.89 19.1851C11.8257 19.359 12.7855 19.359 13.7213 19.1851C14.6542 19.0271 15.5439 18.6759 16.3331 18.1538C17.5875 19.1326 18.8475 20.1038 20.1019 21.0826C18.7292 22.3308 17.0558 23.2011 15.2456 23.6082C13.2476 24.0779 11.1655 24.0554 9.17813 23.5426C7.60632 23.1229 6.13814 22.383 4.86563 21.3694C3.51874 20.3001 2.41867 18.9525 1.64062 17.4188Z"
                              fill="#319F43"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_299">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.09375)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://whatsapp.com"}>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_58_305)">
                            <path
                              d="M0.512212 11.9491C0.511649 13.9813 1.04265 15.9656 2.05234 17.7146L0.415649 23.6905L6.53115 22.087C8.22262 23.0078 10.1178 23.4902 12.0436 23.4904H12.0487C18.4064 23.4904 23.5816 18.317 23.5844 11.9582C23.5856 8.87692 22.3867 5.97948 20.2085 3.79961C18.0307 1.61992 15.1343 0.418887 12.0482 0.41748C5.68984 0.41748 0.514931 5.59061 0.512306 11.9491"
                              fill="url(#paint0_linear_58_305)"
                            />
                            <path
                              d="M0.100313 11.9452C0.0996563 14.0506 0.649687 16.1059 1.69537 17.9175L0 24.1075L6.33478 22.4466C8.08022 23.3982 10.0454 23.9 12.0451 23.9007H12.0502C18.636 23.9007 23.9972 18.5412 24 11.9548C24.0011 8.76281 22.7591 5.76122 20.5031 3.50325C18.2468 1.24556 15.2468 0.0013125 12.0502 0C5.46337 0 0.102938 5.35875 0.100313 11.9452ZM3.87291 17.6055L3.63637 17.23C2.64206 15.649 2.11725 13.822 2.118 11.946C2.12006 6.47147 6.57544 2.0175 12.054 2.0175C14.7071 2.01863 17.2005 3.05288 19.0759 4.92938C20.9512 6.80606 21.9831 9.30075 21.9824 11.9541C21.98 17.4286 17.5245 21.8831 12.0502 21.8831H12.0463C10.2638 21.8822 8.51569 21.4035 6.99113 20.4989L6.62831 20.2838L2.86912 21.2693L3.87291 17.6055Z"
                              fill="url(#paint1_linear_58_305)"
                            />
                            <path
                              d="M9.06358 6.95156C8.8399 6.45441 8.60449 6.44438 8.39177 6.43566C8.21758 6.42816 8.01846 6.42872 7.81952 6.42872C7.6204 6.42872 7.29687 6.50363 7.0234 6.80222C6.74965 7.1011 5.97827 7.82335 5.97827 9.29231C5.97827 10.7613 7.04824 12.181 7.1974 12.3804C7.34674 12.5795 9.26299 15.6905 12.2979 16.8873C14.8201 17.8819 15.3334 17.6841 15.8808 17.6342C16.4283 17.5845 17.6474 16.9121 17.8961 16.2149C18.1451 15.5178 18.1451 14.9202 18.0704 14.7953C17.9958 14.6709 17.7967 14.5962 17.4981 14.447C17.1995 14.2977 15.7315 13.5753 15.4578 13.4756C15.1841 13.3761 14.985 13.3264 14.7859 13.6253C14.5868 13.9238 14.015 14.5962 13.8407 14.7953C13.6666 14.9949 13.4923 15.0198 13.1938 14.8704C12.8951 14.7206 11.9335 14.4057 10.7926 13.3886C9.90499 12.5972 9.30574 11.6198 9.13155 11.3209C8.95737 11.0224 9.1129 10.8606 9.26262 10.7118C9.39677 10.578 9.5613 10.3631 9.71074 10.1888C9.85962 10.0145 9.9093 9.89006 10.0089 9.69094C10.1085 9.49163 10.0586 9.31725 9.98412 9.16791C9.9093 9.01856 9.32908 7.54191 9.06358 6.95156Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_58_305"
                              x1="1158.85"
                              y1="2327.71"
                              x2="1158.85"
                              y2="0.41748"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#1FAF38" />
                              <stop offset="1" stop-color="#60D669" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_58_305"
                              x1="1200"
                              y1="2410.75"
                              x2="1200"
                              y2="0"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#F9F9F9" />
                              <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <clipPath id="clip0_58_305">
                              <rect width="24" height="24.1875" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
