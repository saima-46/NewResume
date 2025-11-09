import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slice/authSlice";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  If no user is logged in, redirect to login
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      {user && (
        <>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Welcome, {user.name}! 
          </h1>

          {/* Show role-based content */}
          {user.role === "admin" ? (
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Admin Dashboard
              </h2>
              <p className="text-gray-600 mb-4">
                You have full control over users and settings.
              </p>
              <button
                onClick={() => navigate("/admin/settings")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Go to Admin Panel
              </button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                User Dashboard
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome back! Explore your account and updates.
              </p>
              <button
                onClick={() => navigate("/profile")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Profile
              </button>
            </div>
          )}

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
