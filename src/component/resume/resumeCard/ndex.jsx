import React from "react";

const ResumeCard = ({ resume }) => {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{resume.title}</h2>
      <p className="text-sm text-gray-500">Created: {resume.date}</p>
      <div className="mt-3 flex space-x-2">
        <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Edit
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
