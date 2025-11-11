import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../component/sidebar";


const UserDashboard = () => {
  
  return (
     <div className="flex h-screen bg-gray-100">
      
      <div className="w-64 bg-white shadow-md fixed h-screen overflow-y-auto">
        <Sidebar />
      </div>

     
      <div className="flex-1 ml-64 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
