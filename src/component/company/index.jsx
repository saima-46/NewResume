import React from "react";

const Company = () => {
  // Step 1: Store all logos in an array
  const companyLogos = [
    { src: "/src/assets/img/company1.png", alt: "Khasologix" },
    { src: "/src/assets/img/company2.png", alt: "Appinators" },
    { src: "/src/assets/img/company3.png", alt: "F.H.A" },
    { src: "/src/assets/img/company4.png", alt: "Lads Technologies" },
  ];

  return (
    <div className="bg-gray-50 py-10 text-center px-3">
      {/* Text Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Resume Art helps users to land their dream jobs in top companies.
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Create an ATS-friendly resume that showcases you at your best.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-center items-center gap-1 lg:gap-40">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 sm:h-12 grayscale hover:grayscale-0 transition mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Company;
