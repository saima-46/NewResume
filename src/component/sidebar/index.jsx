import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slice/authSlice";

const Sidebar = () => {
  const location = useLocation(); // to highlight active link
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const menuItems = [
   { name: "Create Resume", path: "/dashboard" },
    { name: "Resume Template", path: "/dashboard/resumeTemplate" },
    
     { name: "My Resumes", path: "/dashboard/resumes" },
    { name: "Profile", path: "/dashboard/profile" },
   
  ];

  const handleLogout = () => {
    dispatch(logout());       // clears user from redux store
    navigate("/");            // redirect to home or login page
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4 hidden md:flex flex-col justify-between fixed left-0 top-0">
      <div>
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded hover:bg-indigo-100 transition ${
                location.pathname === item.path ? "bg-indigo-200 font-semibold" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout Button at the bottom */}
      {user && (
        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Sidebar;
