import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slice/authSlice";

const MobileNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Create Resume", path: "/dashboard" },
    { name: "Resume Template", path: "/dashboard/resumeTemplate" },
    { name: "My Resumes", path: "/dashboard/resumes" },
    { name: "Profile", path: "/dashboard/profile" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="md:hidden bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-indigo-600">Dashboard</h2>
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu items */}
      {menuOpen && (
        <nav className="flex flex-col space-y-2 px-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded hover:bg-indigo-100 transition ${
                location.pathname === item.path
                  ? "bg-indigo-200 font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {item.name}
            </Link>
          ))}

          {/* Logout button */}
          {user && (
            <button
              onClick={handleLogout}
              className="mt-2 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
