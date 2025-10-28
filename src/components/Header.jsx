import React from "react";

export default function Header({ onOpenSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="text-4xl px-20 font-bold">
          Irsa Aslam<span className="text-blue-500">.</span>
        </div>

        <button
          aria-label="Open menu"
          className="p-2 px-20 rounded-md hover:bg-gray-100"
          onClick={onOpenSidebar}
        >
          <svg
            className="w-6 h-6 "
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
