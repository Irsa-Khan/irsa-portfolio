import React from "react";
import { Monitor, Smartphone, Layers } from "lucide-react";

const services = [
  {
    icon: <Monitor size={40} className="text-blue-600" />,
    title: "Web App Development",
    description:
      "We build high-performance and scalable web applications tailored to your business needs.",
  },
  {
    icon: <Smartphone size={40} className="text-blue-600" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with intuitive design and seamless functionality.",
  },
  {
    icon: <Layers size={40} className="text-blue-600" />,
    title: "Landing Page Design",
    description:
      "Attractive and responsive landing pages designed to convert visitors into customers.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="uppercase text-gray-400 text-sm tracking-widest mb-2">
          What We Do
        </h4>
        <h2 className="text-4xl font-bold text-blue-600 mb-12">
          Our Professional Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-blue-600 rounded-xl shadow-sm 
                         p-8 text-left transition-all duration-300 ease-in-out 
                         hover:-translate-y-2 hover:shadow-xl hover:border-blue-700"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium text-sm hover:underline"
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
