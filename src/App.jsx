import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/user/dashboard";
import Profile from "./pages/user/profile";
import MyResumes from "./pages/user/myResume";
import About from "./pages/about";
import Contact from "./pages/contact";
import Settings from "./pages/user/setting";
import Navbar from "./component/navbar";
import Admin from "./pages/AdminDashboard";
import ProtectedRoute from "./component/protected=route";
import ResumeForm from "./component/resume/resumeForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
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
          <Route path="create" element={<ResumeForm/>} /> 
          <Route path="settings" element={<Settings />} />
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
