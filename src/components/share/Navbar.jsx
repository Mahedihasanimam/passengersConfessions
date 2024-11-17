import { Button, Dropdown, Menu, Drawer, Modal, Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import usericon from '../../assets/user.svg'
const Navbar = () => {
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const showLanguageModal = () => {
    setLanguageModalVisible(true);
  };

  const handleLanguageModalCancel = () => {
    setLanguageModalVisible(false);
  };

  const handleLogout = () => {
    navigate("/auth/login");
  };

  const profileMenu = (
    <Menu
      style={{
        width: 200,
        backgroundColor: "white",
        color: "#6D6D6D",
        
      }}
      
    >
      <Menu.Item key="1" style={{ color: "#6D6D6D",fontSize: "14px",fontWeight:"700" }}>
        <Link to="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "#6D6D6D",fontSize: "14px",fontWeight:"700" }}>
        <Link to="/auth/login">Log in</Link>
      </Menu.Item>
      <Menu.Item key="3" style={{ color: "#6D6D6D" ,fontSize: "14px",fontWeight:"700" }}>
        <Link to="/auth/signup">Sign Up</Link>
      </Menu.Item>
      <Menu.Item key="4" style={{ color: "#6D6D6D",fontSize: "14px",fontWeight:"700"  }}>
        <a href="/FAQ">FAQ</a>
      </Menu.Item>
      <Menu.Item key="5" style={{ color: "#6D6D6D",fontSize: "14px",fontWeight:"700"  }}>
        <a href="/termsAndConditions">Terms & Conditions</a>
      </Menu.Item>
      <Menu.Item key="6" style={{ color: "#6D6D6D",fontSize: "14px",fontWeight:"700"  }}>
        <a href="/aboutus">About Us</a>
      </Menu.Item>

      <Menu.Item key="7" style={{ color: "#EBCA7E",fontSize: "14px",fontWeight:"700"}}>
        <button onClick={handleLogout} className="text-red-500">
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-white">
      <nav className="w-full p-4 container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden w-full lg:flex items-center justify-start space-x-2 px-2">
          <ul className="space-x-2 list-none flex items-center justify-center mx-auto gap-6 text-[16px] font-medium  py-4">
            <li>
              <NavLink  className={({ isActive }) => isActive ? "text-[#262626] text-[16px]  font-bold" : "text-[#6D6D6D] text-[16px]  font-bold"} to="/" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Confession" className={({ isActive }) => isActive ? "text-[#262626] text-[16px]  font-bold" : "text-[#6D6D6D] text-[16px]  font-bold"}>
              Confession
              </NavLink>
            </li>
            <li>
              <NavLink to="/Podcast" className={({ isActive }) => isActive ? "text-[#262626] text-[16px]  font-bold" : "text-[#6D6D6D] text-[16px]  font-bold"}>
              Podcast
              </NavLink>
            </li>
            <li>
              <NavLink to="/Forum" className={({ isActive }) => isActive ? "text-[#262626] text-[16px]  font-bold" : "text-[#6D6D6D] text-[16px]  font-bold"}>
              Forum
              </NavLink>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Right Side: Profile/Drawer Button */}
        <div className="flex items-center">
          <Dropdown overlay={profileMenu} trigger={["click"]} placement="bottomRight">
       <div className="bg-[#FFE5ED66] p-2 rounded-full cursor-pointer">
       <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C10.8833 18 11.7167 17.8708 12.5 17.6125C13.2833 17.3542 14 16.9833 14.65 16.5C14 16.0167 13.2833 15.6458 12.5 15.3875C11.7167 15.1292 10.8833 15 10 15C9.11667 15 8.28333 15.1292 7.5 15.3875C6.71667 15.6458 6 16.0167 5.35 16.5C6 16.9833 6.71667 17.3542 7.5 17.6125C8.28333 17.8708 9.11667 18 10 18ZM10 9C10.4333 9 10.7917 8.85833 11.075 8.575C11.3583 8.29167 11.5 7.93333 11.5 7.5C11.5 7.06667 11.3583 6.70833 11.075 6.425C10.7917 6.14167 10.4333 6 10 6C9.56667 6 9.20833 6.14167 8.925 6.425C8.64167 6.70833 8.5 7.06667 8.5 7.5C8.5 7.93333 8.64167 8.29167 8.925 8.575C9.20833 8.85833 9.56667 9 10 9Z" fill="#FF4D7F"/>
</svg>

       </div>

          </Dropdown>
        </div>
      </nav>

      {/* Drawer Component */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        {/* Add content for the Drawer here */}
      </Drawer>

      {/* Language Modal */}
      <Modal
        title="Select Language"
        visible={languageModalVisible}
        onCancel={handleLanguageModalCancel}
        footer={null}
      >
        <Select style={{ width: "100%" }}>
          <Select.Option value="en">English</Select.Option>
          <Select.Option value="es">Spanish</Select.Option>
          {/* Add more languages as needed */}
        </Select>
      </Modal>
    </div>
  );
};

export default Navbar;