import React from "react";

// Sample resume data
const resumeData = {
  personalInfo: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    location: "New York, USA",
    summary:
      "Results-driven software engineer with 3+ years of experience building scalable web apps using React and Node.js.",
  },
  skills: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Redux"],
  education: [
    { degree: "B.Sc. in Computer Science", institution: "MIT", year: "2021" },
    { degree: "High School Diploma", institution: "New York Central High", year: "2017" },
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

const Template2 = () => {
  const { personalInfo, skills, education, experience, projects } = resumeData;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-700 text-white text-center py-8 px-6">
          <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-sm">{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
        </div>

        <div className="p-6">
          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-1 mb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-1 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-1 mb-2">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold text-gray-800">{edu.degree}</p>
                <p className="text-gray-600">{edu.institution} ({edu.year})</p>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-1 mb-2">Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold text-gray-800">{exp.title} — {exp.company}</p>
                <p className="text-gray-500 text-sm mb-1">{exp.years}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-indigo-700 border-b pb-1 mb-2">Projects</h2>
            {projects.map((project, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold text-gray-800">{project.title}</p>
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

          {/* Download Button */}
          <div className="flex justify-center mt-6">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
              Download Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
