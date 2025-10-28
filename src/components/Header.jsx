import React from "react";

export default function Header({ onOpenSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Irsa Aslam<span className="text-blue-500">.</span>
        </div>

        {/* Menu Button */}
        <button
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-all"
          onClick={onOpenSidebar}
        >
          <svg
            className="w-6 h-6 text-gray-800 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
