import React from "react";
import { Monitor, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: <Monitor size={36} className="text-blue-600" />,
    title: "Web App Development",
    description:
      "We build high-performance and scalable web applications tailored to your business needs.",
  },
  {
    icon: <Smartphone size={36} className="text-blue-600" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with intuitive design and seamless functionality.",
  },
  {
    icon: <Layers size={36} className="text-blue-600" />,
    title: "Landing Page Design",
    description:
      "Attractive and responsive landing pages designed to convert visitors into customers.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-14 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h4 className="uppercase text-gray-400 text-xs sm:text-sm tracking-widest mb-2">
          What We Do
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-10 sm:mb-12">
          Our Professional Services
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-blue-600 rounded-xl shadow-sm
                         p-6 sm:p-8 text-left transition-transform duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-lg hover:border-blue-700
                         w-11/12 sm:w-10/12 md:w-full max-w-xs sm:max-w-sm"
            >
              {/* Icon */}
              <div className="mb-5 sm:mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="text-blue-600 font-medium text-xs sm:text-sm hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
