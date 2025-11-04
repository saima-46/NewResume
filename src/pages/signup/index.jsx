import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../store/slice/authSlice";
import signupImage from "../../assets/img/signup1.png"; 

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(signup(data));
    alert("Signup successful! Please log in.");
    reset();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 px-4 py-8 md:py-0">
      {/* LEFT SIDE - FORM SECTION */}
      <div className="order-2 md:order-1 w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-600">
            Create an Account
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-700">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Enter your email"
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold text-gray-700">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              type="password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Hidden Default Role */}
          <input type="hidden" {...register("role")} value="user" />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm sm:text-base mt-4 text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE - IMAGE SECTION */}
      <div className="order-1 md:order-2 hidden md:flex md:w-1/2 items-center justify-center">
        <img
          src={signupImage}
          alt="Signup Illustration"
          className="w-4/5 lg:w-3/5 xl:w-1/2 max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Signup;
