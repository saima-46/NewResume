import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Contact Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl w-full text-center mb-2">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-2">Contact Us</h1>
        
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-16 w-full max-w-6xl">

        {/* Contact Info */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 space-y-6 ">
          <h2 className="text-2xl font-semibold text-indigo-600">Get in Touch</h2>
          <p className="text-gray-700">
            Feel free to contact us using the form or reach out directly:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-medium">Email:</span> support@ourplatform.com
            </li>
            <li>
              <span className="font-medium">Phone:</span> +123 456 7890
            </li>
            <li>
              <span className="font-medium">Address:</span> 123 Career St, Jobtown, USA
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 bg-white p-8 rounded-xl shadow-xl"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-600 text-center mt-2 font-medium">
                Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
