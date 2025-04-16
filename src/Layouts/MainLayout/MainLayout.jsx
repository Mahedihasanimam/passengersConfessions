import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/share/Footer";
import Navbar from "../../components/share/Navbar";

const MainLayout = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      {/* Add floating button for scroll to top */}
      {isVisible && (
        <div onClick={scrollToTop} className="fixed z-50 bottom-4 right-4">
          <Button
            size="large"
            type="default"
            className="bg-primary text-white"
            shape="circle"
            icon={<ArrowUpOutlined />}
          />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
