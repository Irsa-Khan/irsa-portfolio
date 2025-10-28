import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      institute: "University of Punjab",
      year: "2021 - 2025",
      description:
        "Studied software development, database systems, and web technologies. Completed several projects using React, Node.js, and MongoDB.",
      color: "bg-blue-500",
    },
    {
      degree: "Intermediate in ICS",
      institute: "Lahore College for Women University",
      year: "2016 - 2018",
      description:
        "Focused on mathematics, Economics, and computer science. Developed analytical and problem-solving skills.",
      color: "bg-red-500",
    },
    {
      degree: "Matriculation in Science",
      institute: "GOVT. Girls High School",
      year: "2014 - 2016",
      description:
        "Studied general science subjects and built a foundation for higher studies in technology.",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          Education
        </h2>
        <h3 className="text-3xl font-bold mb-10 text-gray-900">My Education</h3>

        <div className="relative border-l-2 border-gray-200">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Circle Icon */}
              <span
                className={`absolute flex items-center justify-center w-10 h-10 ${edu.color} rounded-full -left-5 ring-4 ring-white`}
              >
                <FaGraduationCap className="text-white" />
              </span>

              {/* Card */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900">
                  {edu.degree}
                </h4>
                <p className="text-gray-500 text-sm mb-2">{edu.institute}</p>
                <p className="text-sm text-gray-400 mb-4">{edu.year}</p>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
