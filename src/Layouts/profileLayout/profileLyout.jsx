import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from '../../components/share/Navbar';

const ProfileLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar  />
      <div className="flex container mx-auto">
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <div className='pl-72 w-full'>
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
