"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 text-white w-full font-serif text-[18px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Gallery
            </Link>
            <Link
              href="/services"
              className="hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0   z-40"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-5 z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
            
            <nav className="space-y-4">
              <Link
                href="/"
                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
