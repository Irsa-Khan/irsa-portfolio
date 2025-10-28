import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h5 className="uppercase text-gray-400 text-xs sm:text-sm tracking-widest">
            Get In Touch
          </h5>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Contact
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 sm:space-y-10">
            {/* Email */}
            <div className="flex items-start sm:items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-shrink-0">
                <Mail size={26} className="text-blue-600" />
              </div>
              <a
                href="mailto:irsa0400@gmail.com"
                className="text-blue-600 break-words text-sm sm:text-base hover:underline"
              >
                irsa0400@gmail.com
              </a>
            </div>

            {/* Upwork */}
            <div className="flex items-start sm:items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M18.14 8.77a3.73 3.73 0 0 0-3.47 2.34h-.07c-.21-.86-.52-1.75-.9-2.58l-.22-.48h-2.1l.46 1.02a16.54 16.54 0 0 1 .83 3.29l.07.57c-.49.65-1.18 1.06-1.91 1.06-1.25 0-2.26-1.12-2.26-2.5V8.05H5.95v3.44c0 2.8 2.09 5.08 4.65 5.08 1.07 0 2.05-.44 2.86-1.24.39.76.65 1.27.72 1.4l.18.33h2.24l-.5-.9a23.06 23.06 0 0 1-.7-1.56c.55.2 1.12.31 1.74.31 2.4 0 4.36-1.92 4.36-4.29a4.3 4.3 0 0 0-4.36-4.15zm0 6.39a2.48 2.48 0 0 1-2.48-2.48 2.48 2.48 0 0 1 2.48-2.48 2.48 2.48 0 0 1 2.48 2.48 2.48 2.48 0 0 1-2.48 2.48z" />
                </svg>
              </div>
              <a
                href="https://www.upwork.com/freelancers/~0127c5acb8c675488a?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 break-words text-sm sm:text-base hover:underline"
              >
                https://www.upwork.com/freelancers/~0127c5acb8c675488a
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-start sm:items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-shrink-0">
                <Phone size={26} className="text-blue-600" />
              </div>
              <a
                href="tel:+923288548358"
                className="text-blue-600 text-sm sm:text-base hover:underline"
              >
                +92 3288548358
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start sm:items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-shrink-0">
                <Linkedin size={26} className="text-blue-600" />
              </div>
              <a
                href="https://www.linkedin.com/in/hafiza-irsa-977731253/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 break-words text-sm sm:text-base hover:underline"
              >
                https://www.linkedin.com/in/hafiza-irsa-977731253/
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-start sm:items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-shrink-0">
                <Github size={26} className="text-blue-600" />
              </div>
              <a
                href="https://github.com/Irsa-Khan/LinkUs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 break-words text-sm sm:text-base hover:underline"
              >
                https://github.com/Irsa-Khan/LinkUs
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="space-y-5 sm:space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-200 rounded-md p-3 sm:p-4 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-md p-3 sm:p-4 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-md p-3 sm:p-4 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-200 rounded-md p-3 sm:p-4 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-md font-medium text-sm sm:text-base hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
