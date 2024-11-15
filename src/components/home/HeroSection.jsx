
import React from "react";
import heroimg from "../../assets/heroimg.png";

import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-t from-[#10242D] to-[#10242D] py-8  min-h-[571px]">
      <section className="">
        <div 
          className="container mx-auto lg:flex flex-row items-center justify-between ">
            {/* LEFT HERO SECTION */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm w-full lg:max-w-[650px] xl:max-w-[650px] lg:text-left">
           
            <h1 className="lg:text-[80px] md:text-[80px] text-4xl font-black leading-none sm:text-6xl text-primary font-roboto ">
            <span>Passenger </span>
            </h1>
            <h1 className="text-white lg:text-[80px] md:text-[80px] text-4xl font-black leading-none sm:text-6xl pt-4 ">Confessions</h1>
            <p className="mt-6 mb-8 text-[16px] font-normal sm:mb-12 text-[#ffffffb0] leading-8">
            Whether you're here for the thrill, the taboo, or just curious, this book dives deep into the world of spontaneous connections and unapologetic fantasies. Ready to get in the driver's seat of your own desires? Let the confessions begin.
            </p>
            <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/browseCourse">
                <Button
                  className="text-[#FFFFFF] text-[16px] font-semibold p-6 bg-primary hover:bg-primary "
                  
                  type="primary"
                  style={{backgroundColor: "#FF0048",height:'35px'}}
                >
                 Browse more
                  <span>
                    <ArrowUpOutlined className="rotate-45 text-xl" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* RIGHT HERO SECTION */}
          <div  className="w-full lg:max-w-[600px] mx-auto md:max-w-[600px]    ">
            <div>
              <img className="w-full min-h-[516px] "  src={heroimg} alt="heroimg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
