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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-[100vw]">
        {/* Background image */}
        <div
          key={slide.id}
          className="absolute inset-0 w-full h-full bg-cover bg-center duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-20 w-full text-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 md:py-36 overflow-x-hidden">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
            {slide.title}
          </h1>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-lg mx-auto">
            {slide.text}
          </p>

          <div className="mt-5 sm:mt-8">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-5 sm:bottom-auto sm:top-1/2 right-4 sm:right-8 md:right-16 transform sm:-translate-y-1/2 z-30 flex sm:flex-col gap-3 sm:gap-4 justify-center overflow-hidden">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition"
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
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition"
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

      {/* --- Other Sections --- */}
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        <About />
        <Education />
        <Projects />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
