import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container px-6 py-4 flex justify-between items-center max-w-screen-xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-600 tracking-wider">
          WanderVista
        </h3>

        <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
          <Link
            to="/"
            className="px-4 py-2 transition-all duration-300 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-4 py-2 transition-all duration-300 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 transition-all duration-300 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 transition-all duration-300 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-6 px-4 space-y-6 text-center shadow-lg">
          <Link
            to="/"
            className="block px-6 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block px-6 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
