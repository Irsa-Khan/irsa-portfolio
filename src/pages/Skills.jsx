import React from "react";

const skills = [
  { name: "HTML5", level: 90, color: "bg-orange-500", text: "text-orange-500" },
  { name: "CSS3", level: 85, color: "bg-blue-500", text: "text-blue-500" },
  { name: "Bootstrap", level: 80, color: "bg-purple-500", text: "text-purple-500" },
  { name: "Tailwind CSS", level: 90, color: "bg-cyan-500", text: "text-cyan-500" },
  { name: "React", level: 85, color: "bg-sky-600", text: "text-sky-600" },
  { name: "Node.js", level: 80, color: "bg-green-600", text: "text-green-600" },
  { name: "Express.js", level: 75, color: "bg-gray-700", text: "text-gray-700" },
  { name: "MongoDB", level: 80, color: "bg-emerald-600", text: "text-emerald-600" },
  { name: "Git & GitHub", level: 75, color: "bg-rose-500", text: "text-rose-500" },
  { name: "API Integration", level: 70, color: "bg-indigo-500", text: "text-indigo-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* --- Section Header --- */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-2">
            My Specialty
          </p>
          <h2 className="text-4xl font-bold tracking-wide">My Skills</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-relaxed">
            Technologies and tools I use to design, build, and optimize full-stack web applications.
          </p>
        </div>

        {/* --- Skills Grid --- */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="relative">
              {/* Skill Title */}
              <p className="font-semibold mb-2">{skill.name}</p>

              {/* Progress Bar Container */}
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-visible">
                {/* Progress Fill */}
                <div
                  className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} transition-all duration-700`}
                  style={{ width: `${skill.level}%` }}
                ></div>

                {/* Circle at End */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white ${skill.color} transition-all duration-700`}
                  style={{ left: `calc(${skill.level}% - 8px)` }}
                ></div>

                {/* Percentage Above Circle */}
                <span
                  className={`absolute -top-6 font-semibold text-sm ${skill.text} transition-all duration-700`}
                  style={{ left: `calc(${skill.level}% - 10px)` }}
                >
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
