import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-white font-bold text-2xl mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            I’m a passionate MERN stack developer skilled in React, Node.js,
            Tailwind CSS, and MongoDB. I’ve built several projects, including a
            real-time chat application, an interactive dashboard, and an
            eCommerce web app. My focus is on creating responsive, user-friendly,
            and efficient web solutions that provide a smooth user experience.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:ml-20">
          <h3 className="text-white font-bold text-2xl mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div>
          <h3 className="text-white font-bold text-2xl mb-4">
            Subscribe Newsletter
          </h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter email"
              className="italic bg-gray-800 text-gray-300 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r w-40 from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-sm py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-8 mt-12">
        {/* Upwork */}
        <a
          href="https://www.upwork.com/freelancers/~0127c5acb8c675488a?viewMode=1" 
          className="hover:text-green-500 transition transform hover:scale-110"
          aria-label="Upwork"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M18.14 8.77a3.73 3.73 0 0 0-3.47 2.34h-.07c-.21-.86-.52-1.75-.9-2.58l-.22-.48h-2.1l.46 1.02a16.54 16.54 0 0 1 .83 3.29l.07.57c-.49.65-1.18 1.06-1.91 1.06-1.25 0-2.26-1.12-2.26-2.5V8.05H5.95v3.44c0 2.8 2.09 5.08 4.65 5.08 1.07 0 2.05-.44 2.86-1.24.39.76.65 1.27.72 1.4l.18.33h2.24l-.5-.9a23.06 23.06 0 0 1-.7-1.56c.55.2 1.12.31 1.74.31 2.4 0 4.36-1.92 4.36-4.29a4.3 4.3 0 0 0-4.36-4.15zm0 6.39a2.48 2.48 0 0 1-2.48-2.48 2.48 2.48 0 0 1 2.48-2.48 2.48 2.48 0 0 1 2.48 2.48 2.48 2.48 0 0 1-2.48 2.48z" />
          </svg>
        </a>

        {/* Freelancer */}
        <a
          href="https://www.freelancer.com/u/irsa0400" 
          className="hover:text-sky-400 transition transform hover:scale-110"
          aria-label="Freelancer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M1.5 3l4.5 6.5L1 20l9.5-7L1.5 3zm10.7 0L7.8 7.2l2.4 3.3 1.9-1.2L19.5 3h-7.3zm1.5 8l9.8 9.5L14 11h-.3z" />
          </svg>
         
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Irsa-Khan/LinkUs"
          className="hover:text-gray-300 transition transform hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hafiza-irsa-977731253/"
          className="hover:text-blue-600 transition transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Irsa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
