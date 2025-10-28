import React from "react";

export default function About() {
  return (
    <section className="relative bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="w-full">
            <img
              src="/images/about.jpg"
              alt="About - workspace"
              className="w-full rounded-md shadow-lg object-cover"
            />
          </div>

          {/* Right: heading, desc, checklist */}
          <div className="w-full">
            <div className="mb-4 text-sm tracking-widest text-gray-400">ABOUT US</div>

            <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-6">
              I am Expert In Web Development
            </h2>

            <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
             I’m a passionate MERN stack developer skilled in React, Node.js, Tailwind CSS, and MongoDB. I’ve built several projects, including a real-time chat application, an interactive dashboard, and an eCommerce web app. My focus is on creating responsive, user-friendly, and efficient web solutions that provide a smooth user experience.

            </p>

            <ul className="space-y-4">
              {[
                "Design",
                "Development",
                "eCommerce",
                "Responsive Mobile Apps",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-gray-700">
                  <span className="flex-none">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
