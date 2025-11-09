import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slice/authSlice";

const Admin = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redirect logic
  useEffect(() => {
    if (!user) {
      navigate("/"); // go home if logged out
    } else if (user.role !== "admin") {
      navigate("/login"); // redirect non-admin
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout()); // just logout; effect handles navigation
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Admin Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center space-y-4">
        <p>Welcome, {user?.username}!</p>
        <p>You have full access to manage users and settings.</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Admin;
