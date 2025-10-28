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
        "Focused on mathematics, economics, and computer science. Developed analytical and problem-solving skills.",
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
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <h2 className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-1 sm:mb-2 text-center sm:text-left">
          Education
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-900 text-center sm:text-left">
          My Education
        </h3>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-200 ml-3 sm:ml-6">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 sm:mb-12 ml-4 sm:ml-6 relative">
              {/* Circle Icon */}
              <span
                className={`absolute -left-6 sm:-left-7 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 ${edu.color} rounded-full ring-4 ring-gray-50`}
              >
                <FaGraduationCap className="text-white text-sm sm:text-base" />
              </span>

              {/* Card */}
              <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {edu.degree}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
                  {edu.institute}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  {edu.year}
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
