import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../component/sidebar";
import MobileNavbar from "../../../component/sidebarNavbar";


const UserDashboard = () => {
  
  return (
     <div className="flex h-screen bg-gray-100">
      
      <div className=" hidden md:block w-64 bg-white shadow-md fixed h-screen overflow-y-auto">
        {/* w-64 bg-white shadow-md fixed h-screen overflow-y-auto */}
        <Sidebar />
      </div>
      <div >
        <MobileNavbar/>
      </div>

     

        <div className="flex-1 overflow-y-auto p-6 mt-13 md:mt-0 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
