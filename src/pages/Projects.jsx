import React, { useEffect, useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Developed a modern e-commerce website using React, Node.js, Express, and MongoDB. Integrated Stripe for payments, product management dashboard, and real-time order tracking.",
    role: "Full Stack Developer",
    quote:
      "A complete and responsive shopping experience built with performance and scalability in mind.",
    author: "IRSA",
    image: "/images/project1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website with smooth animations, responsive design, and optimized SEO. Built using React, Tailwind CSS, and Framer Motion.",
    role: "Frontend Developer",
    quote:
      "A minimal yet elegant design to showcase creativity and technical skills.",
    author: "IRSA",
    image: "/images/project2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Built a real-time chat app with authentication and private chat rooms using MERN stack and Socket.io. Supports online user status and message notifications.",
    role: "Full Stack Developer",
    quote:
      "Fast, real-time, and secure — connecting people instantly through a simple interface.",
    author: "IRSA",
    image: "/images/project3.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-white relative">
      {/* --- Section Heading --- */}
      <div className="py-16 border-b border-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          My Projects
        </h2>
      </div>

      {/* --- Projects List --- */}
      <div className="space-y-40">
        {projects.map((project, index) => (
          <ParallaxProject
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

const ParallaxProject = ({ project, reverse }) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.2;
      const end = windowHeight * 1.5;
      const progress = Math.min(Math.max((start - rect.top) / end, 0), 1);
      setOffset(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } min-h-[180vh] border-b border-gray-200`}
    >
      {/* --- Image Section (Parallax Scroll) --- */}
      <div className="md:w-1/2 ml-20 w-full sticky top-[140px] h-[calc(100vh-140px)] overflow-hidden mt-10">
        {/* 👆 Added margin-top here */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-300 ease-out rounded-lg shadow-lg"
          style={{
            transform: `translateY(${offset * -50}%)`,
          }}
        />
      </div>

      {/* --- Text Section (aligned to top) --- */}
      <div className="md:w-1/2 w-full flex items-start justify-center sticky top-[140px] h-[calc(100vh-140px)] bg-white z-10">
        <div className="max-w-lg p-10 mt-0">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          <p className="text-gray-800 mb-6">
            <span className="font-semibold">Role:</span> {project.role}
          </p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4 text-gray-700 mb-6">
            “{project.quote}”
            <br />
            <span className="block mt-2 font-medium text-gray-900">
              — {project.author}
            </span>
          </blockquote>
          <a
            href={project.link}
            className="uppercase tracking-widest text-blue-600 hover:text-blue-800 font-semibold text-sm"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
