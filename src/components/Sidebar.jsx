import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* background overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-black`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 h-full z-50 w-80 bg-white shadow-lg transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex items-center justify-between">
          <div className="text-lg font-semibold">Menu</div>
          <button onClick={() => setOpen(false)} aria-label="Close" className="p-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-5 text-gray-700">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block ${
                    pathname === link.path ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
