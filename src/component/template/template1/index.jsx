import React from "react";

const Template1 = () => {
  //  Sample resume data (array of objects)
  const resumeData = {
    personalInfo: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
      location: "New York, USA",
      image:
        "https://i.pravatar.cc/150?img=32", 
      summary:
        "Results-driven software engineer with 3+ years of experience building scalable web apps using React and Node.js.",
    },
    skills: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux",
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science",
        institution: "MIT",
        year: "2021",
      },
      {
        degree: "High School Diploma",
        institution: "New York Central High",
        year: "2017",
      },
    ],
    experience: [
      {
        title: "Frontend Developer",
        company: "Techify Inc.",
        years: "2022 - Present",
        description:
          "Developed reusable UI components, optimized performance, and collaborated with backend engineers to improve data flow.",
      },
      {
        title: "Intern - Web Developer",
        company: "SoftLabs",
        years: "2021 - 2022",
        description:
          "Assisted in developing internal tools using React and integrated REST APIs for data visualization.",
      },
    ],
    projects: [
      {
        title: "Portfolio Website",
        link: "https://myportfolio.com",
        description: "A personal portfolio showcasing projects and blogs.",
      },
      {
        title: "Todo App",
        link: "https://todoapp.vercel.app",
        description: "A full-stack task manager app with authentication.",
      },
    ],
  };

  const { personalInfo, skills, education, experience, projects } = resumeData;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-3">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl border border-gray-200 p-8">
        {/* Header with Image */}
        <div className="flex flex-col md:flex-row items-center border-b pb-6 mb-6">
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              {personalInfo.name}
            </h1>
            <p className="text-gray-600">{personalInfo.email}</p>
            <p className="text-gray-600">{personalInfo.phone}</p>
            <p className="text-gray-600">{personalInfo.location}</p>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-1 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-1 mb-2">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium text-gray-800">{edu.degree}</p>
              <p className="text-gray-600">
                {edu.institution} ({edu.year})
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-1 mb-2">
            Experience
          </h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium text-gray-800">
                {exp.title} — {exp.company}
              </p>
              <p className="text-gray-600 text-sm">{exp.years}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-1 mb-2">
            Projects
          </h2>
          {projects.map((project, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium text-gray-800">{project.title}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm"
              >
                {project.link}
              </a>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
        <div className="flex justify-center mt-6">
  <button
    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
  >
    Download Resume (PDF)
  </button>
</div>

      </div>
    </div>
  );
};

export default Template1;
