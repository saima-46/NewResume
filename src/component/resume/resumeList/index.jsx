import React from "react";
import ResumeCard from "./ResumeCard";
import { Link } from "react-router-dom";

const ResumeList = () => {
  // Dummy resumes array for now
  const resumes = [
    { id: 1, title: "Software Engineer Resume", date: "2025-11-08" },
    { id: 2, title: "Frontend Developer Resume", date: "2025-11-07" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Resumes</h1>
        <Link
          to="/dashboard/create"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Create New Resume
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
