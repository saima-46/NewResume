import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/user/dashboard";
import Profile from "./pages/user/profile";
import MyResumes from "./pages/user/myResume";
import About from "./pages/about";
import Contact from "./pages/contact";

import Navbar from "./component/navbar";
import Admin from "./pages/AdminDashboard";
import ProtectedRoute from "./component/protected=route";
import ResumeForm from "./component/resume/resumeForm";
import Template1 from "./component/template/template1";
import Template2 from "./component/template/template2";
import ResumeTemplate from "./pages/user/resumeTemplate";
import LoginModal from "./component/loginModel";

function App() {
const location=useLocation()
const hideNavbar=location.pathname.startsWith("/dashboard")

  return (
    <>
      {!hideNavbar&&<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />


        {/* User Dashboard Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="resumes" element={<MyResumes />} />
          <Route index element={<ResumeForm/>} /> 
          <Route path="resumeTemplate" element={<ResumeTemplate/>} /> 
          <Route path="template1" element={<Template1/>} /> 
           <Route path="template2" element={<Template2/>} /> 
          
        </Route>

        {/* Admin Dashboard Protected Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
