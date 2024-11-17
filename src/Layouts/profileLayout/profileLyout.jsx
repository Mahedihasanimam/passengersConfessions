import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from '../../components/share/Navbar';

const ProfileLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className="lg:flex md:flex flex-row container mx-auto">
      <Sidebar />
        <Outlet />
    
    </div>
    </div>
  );
};

export default ProfileLayout;
