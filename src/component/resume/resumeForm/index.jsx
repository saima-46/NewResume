import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const ResumeForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: initialData,
  });

  const [preview, setPreview] = useState(initialData.image || null);

  // Dynamic Education & Experience sections
  const { fields: educationFields, append: addEducation, remove: removeEducation } =
    useFieldArray({ control, name: "education" });
  const { fields: experienceFields, append: addExperience, remove: removeExperience } =
    useFieldArray({ control, name: "experience" });

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (data) => {
    // Convert image file to base64 or send as FormData if uploading
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6 p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Create Your Resume</h2>

      {/* Personal Info + Image */}
      <section className="space-y-4">
        <h3 className="font-semibold text-lg text-gray-700">Personal Information</h3>
        <div className="flex flex-col md:flex-row md:space-x-6 items-center">
          <div className="flex-1 space-y-4 w-full">
           
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full Name is required" })}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              {...register("phone")}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Location"
              {...register("location")}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
             <div className="mt-4 md:mt-0">
            <label className="block text-gray-700 font-medium mb-2">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-32 h-32 object-cover  border "
              />
            )}
          </div> 
          </div>
          {/* <div className="mt-4 md:mt-0">
            <label className="block text-gray-700 font-medium mb-2">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-32 h-32 object-cover  border"
              />
            )}
          </div> */}
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-700">Professional Summary</h3>
        <textarea
          placeholder="Write a short summary about yourself"
          {...register("summary")}
          rows={4}
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
        />
      </section>

      {/* Skills */}
      <section className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-700">Skills</h3>
        <input
          type="text"
          placeholder="Separate skills by comma"
          {...register("skills")}
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
        />
      </section>

      {/* Education */}
      <section className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-700">Education</h3>
        {educationFields.map((item, index) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <input
              type="text"
              placeholder="Degree"
              {...register(`education.${index}.degree`)}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Institution"
              {...register(`education.${index}.institution`)}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Year"
              {...register(`education.${index}.year`)}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-500 font-medium mt-2 md:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addEducation({ degree: "", institution: "", year: "" })}
          className="mt-2 text-indigo-600 font-medium hover:underline"
        >
          + Add Education
        </button>
      </section>

      {/* Experience */}
      <section className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-700">Experience</h3>
        {experienceFields.map((item, index) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <input
              type="text"
              placeholder="Job Title"
              {...register(`experience.${index}.title`)}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Company"
              {...register(`experience.${index}.company`)}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Years"
              {...register(`experience.${index}.years`)}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
            />
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="text-red-500 font-medium mt-2 md:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addExperience({ title: "", company: "", years: "" })}
          className="mt-2 text-indigo-600 font-medium hover:underline"
        >
          + Add Experience
        </button>
      </section>

      {/* Projects */}
      <section className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-700">Projects</h3>
        <textarea
          placeholder="List your projects with description"
          {...register("projects")}
          rows={3}
          className="border px-3 py-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none w-full"
        />
      </section>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Save 
        </button>
      </div>
    </form>
  );
};

export default ResumeForm;
