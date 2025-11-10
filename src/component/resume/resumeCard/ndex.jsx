import React from "react";
import { useNavigate } from "react-router-dom";

// Sample resume array
const resumeArray = [
  {
    id: 1,
    name: "Template 1",
    thumbnail: "/img/card1.JPG",
    templatePath: "/dashboard/template1",
  },
  {
    id: 2,
    name: "Template 2",
    thumbnail: "/img/card2.jpeg",
    templatePath: "/dashboard/template2",
  },
    {
    id: 3,
    name: "Template 3",
    thumbnail: "/img/card3.jpeg",
    templatePath: "/dashboard/template2",
  },
  {
    id: 4,
    name: "Template 4",
    thumbnail: "/img/card3.jpeg",
    templatePath: "/dashboard/template2",
  },
];

const ResumeCards = () => {
  const navigate = useNavigate();

  const handleOpenTemplate = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {resumeArray.map((resume) => (
          <div
            key={resume.id}
            onClick={() => handleOpenTemplate(resume.templatePath)}
            className="cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-lg transition border border-gray-200 "
          >
            {/* Image Container with fixed height */}
            <div className="w-full h-100 bg-gray-100 flex items-center justify-center">
              <img
                src={resume.thumbnail}
                alt={resume.name}
                className="w-full h-full object-fit"
              />
            </div>

            {/* Title */}
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {resume.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeCards;
