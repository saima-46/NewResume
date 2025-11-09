import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-10">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4 text-center">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to our platform! We are dedicated to helping users create, manage, and showcase their resumes easily. Our goal is to provide a seamless experience for job seekers and professionals looking to present themselves in the best possible way.
        </p>
        <p className="text-gray-700 text-lg">
          Whether you are a student, freelancer, or professional, our tools make it easier to highlight your skills, experience, and achievements.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          Our mission is to empower every professional to present themselves in the most effective way possible. We aim to simplify the process of building a strong, attractive resume that stands out to employers.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Platform Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>User-friendly dashboard for managing your resumes and profile.</li>
          <li>Easy-to-use resume creation tool with pre-designed templates.</li>
          <li>Ability to track and update your resumes anytime.</li>
          <li>Profile management and personal branding options.</li>
          <li>Secure and private data storage.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Meet the Team</h2>
        <p className="text-gray-700 text-lg mb-2">
          Our team consists of passionate developers, designers, and career experts committed to helping users succeed. Collaboration, innovation, and reliability are the core values that drive our platform forward.
        </p>
      </section>

      
    </div>
  );
};

export default About;
