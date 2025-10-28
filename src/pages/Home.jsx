import React, { useState, useEffect } from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "../components/Footer";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Hi! I'm Irsa",
      text: "I’m a passionate MERN stack developer skilled in React, Node.js, Tailwind CSS, and MongoDB. Creating responsive, user-friendly web solutions.",
      image: "/images/hero1.jpg",
    },
    {
      id: 2,
      title: "MERN STACK Developer",
      text: "Turning ideas into beautiful, functional, and interactive websites using the power of the MERN stack.",
      image: "/images/hero2.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background image */}
        <div
          key={slide.id}
          className="absolute inset-0 w-full h-full bg-cover bg-center duration-500 ease-in-out"
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative z-20 w-full px-6 sm:px-10 md:px-24 lg:px-32 py-24 md:py-36 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-lg leading-tight">
            {slide.title}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 max-w-xl">
            {slide.text}
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* navigation buttons */}
        <div className="absolute right-5 sm:right-10 md:right-20 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3 sm:gap-4">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-500/95 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-500/95 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* --- About Section --- */}
      <About />

      {/* --- Education Section --- */}
      <Education />

      {/* --- Projects Section --- */}
      <Projects />

      {/* --- Skills Section --- */}
      <Skills />

      {/* --- Services Section --- */}
      <Services />

      {/* --- Contact Section --- */}
      <Contact />

      {/* --- Footer Section --- */}
      <Footer />
    </>
  );
}
