import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 left-0 z-50 border-b border-indigo-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
            >
              Resume Art
            </Link>
          </div>

          {/* Center Menu (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/resume-templates" className="hover:text-indigo-600 transition-colors">Templates</Link>
            <Link to="/jobs" className="hover:text-indigo-600 transition-colors">Jobs</Link>
            <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold hover:shadow-md hover:scale-105 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700 hover:text-indigo-600 transition"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md border-t border-indigo-100 shadow-md transition-all">
          <div className="flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/resume-templates" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Templates</Link>
            <Link to="/jobs" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Jobs</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Contact</Link>
            
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold hover:shadow-md transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-700 font-semibold hover:bg-indigo-50 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
