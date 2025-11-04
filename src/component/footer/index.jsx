import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Resume Art</h2>
            <p className="text-gray-200 text-sm max-w-xs">
              Build your professional resume with AI and land your dream job.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap  justify-center md:justify-start gap-8">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-gray-200 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-1 text-gray-200 text-sm">
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Products</h3>
              <ul className="space-y-1 text-gray-200 text-sm">
                <li><a href="#" className="hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white">AI Templates</a></li>
                <li><a href="#" className="hover:text-white">Job Finder</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="hover:text-gray-200"><Facebook /></a>
            <a href="#" className="hover:text-gray-200"><Twitter /></a>
            <a href="#" className="hover:text-gray-200"><Linkedin /></a>
            <a href="#" className="hover:text-gray-200"><Instagram /></a>
            
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 opacity-40 my-6"></div>

        {/* Bottom Text */}
        <div className="text-center text-gray-200 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Resume Art</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
