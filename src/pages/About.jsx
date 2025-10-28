import React from "react";

export default function About() {
  return (
    <section className="relative bg-white min-h-screen py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: image */}
          <div className="w-full">
            <img
              src="/images/about.jpg"
              alt="About - workspace"
              className="w-full h-64 sm:h-80 md:h-[450px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: heading, desc, checklist */}
          <div className="w-full text-center lg:text-left">
            <div className="mb-2 text-xs sm:text-sm tracking-widest text-gray-400 uppercase">
              About Me
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
              I am an Expert in Web Development
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              I’m a passionate MERN stack developer skilled in React, Node.js,
              Tailwind CSS, and MongoDB. I’ve built projects like a real-time
              chat application, an interactive dashboard, and an eCommerce web
              app. My focus is on building responsive, user-friendly, and
              efficient web solutions that provide a smooth user experience.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Design",
                "Development",
                "eCommerce",
                "Responsive Mobile Apps",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-gray-700"
                >
                  <span className="flex-none">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
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
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
