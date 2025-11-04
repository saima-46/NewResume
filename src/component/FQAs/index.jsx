import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // for icons (npm install lucide-react)

const FAQSection = () => {
  //   Array of FAQs
  const faqs = [
    {
      question: "What is Resume Art?",
      answer:
        "Resume Art is an AI-powered resume builder that helps you create professional and ATS-friendly resumes effortlessly.",
    },
    {
      question: "Is Resume Art free to use?",
      answer:
        "You can start creating your resume for free. Premium features like advanced templates and job recommendations are available with a subscription.",
    },
    {
      question: "Can I download my resume as a PDF?",
      answer:
        "Yes, you can download your completed resume in PDF format with a single click.",
    },
    {
      question: "Does Resume Art store my personal data?",
      answer:
        "Your data is securely stored and never shared with third parties. You can delete your account or data anytime from your dashboard.",
    },
  ];

  //   State to track open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  //   Toggle logic
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-12 text-center">
          Here are some common questions about Resume Art and how it works.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-indigo-600" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
