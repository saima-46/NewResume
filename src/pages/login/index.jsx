import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slice/authSlice";
import loginImage from "../../assets/img/login.png"; 

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await dispatch(login(data));
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      if (user.role === "admin") navigate("/admin/dashboard");
      else navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 px-4 py-8 md:py-0">
      {/* LEFT SIDE - IMAGE SECTION */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-4/5 lg:w-3/5 xl:w-1/2 max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* RIGHT SIDE - FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-600">
            Login
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm sm:text-base mt-4 text-gray-700">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-indigo-600 hover:underline cursor-pointer font-semibold"
            >
              Sign up here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
