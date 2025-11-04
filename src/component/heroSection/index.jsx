import React, { useState, useEffect } from "react";
import { Sparkles, FileText, Brain, ArrowRight } from "lucide-react";
import heroImg from "../../assets/img/hero.png";

const HeroSection = () => {
  const texts = ["in Seconds", "with AI", "for Free"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-900">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-blue-300/30 rounded-full blur-3xl"></div>

      {/* ↓ Reduced space & compact layout ↓ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-indigo-700 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>AI-Powered Resume Builder</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight">
            Build a Job-Winning Resume <br />
            <span
              className={`bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent inline-block transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {texts[index]}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Create professional, ATS-friendly resumes with AI assistance — tailored for your dream job.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition text-sm sm:text-base">
              <FileText className="w-4 h-4" />
              Build My Resume
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 border border-indigo-600 text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition text-sm sm:text-base">
              <Brain className="w-4 h-4" />
              Try AI Mode
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (smaller now) */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative group w-[70%] max-w-sm">
            <img
              src={heroImg}
              alt="AI Resume Builder"
              className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-700"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-300/20 to-blue-300/20 rounded-2xl blur-2xl opacity-70"></div> */}
          </div>

          {/* Floating Badge
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-lg shadow-lg px-5 py-2 flex items-center gap-2">
            <ArrowRight className="text-indigo-600 w-4 h-4" />
            <p className="font-semibold text-indigo-700 text-xs sm:text-sm">
              Start creating your first resume now
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
