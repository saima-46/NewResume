import React from "react";

const ResumeShowcase = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">
      {/* Title and Subtitle */}
      <div className="text-center max-w-3xl mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
          Easy to use{" "}
          <span className="text-blue-600">Professional Resume</span> templates
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Impress your employer with an ATS-based, format-rich resume. Show your
          best asset and stand out from the crowd with our modern resume
          templates.
        </p>
      </div>

      {/* Full-width image section */}
      <div className="w-full overflow-hidden px-5">
        <img
          src="/img/big.png"
          alt="Professional Resume Templates"
          className="w-full h-auto object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ResumeShowcase;
