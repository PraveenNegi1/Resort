"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Optional: you can use any icon or SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["home", "about", "gallery", "contact"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="relative z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex px-14 xl:px-20 bg-[#0e1732] py-5 justify-between items-center rounded-2xl absolute z-40 w-[90vw] h-24 top-5 text-white left-1/2 -translate-x-1/2">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo2.png"
            alt="HillNest"
            width={100}
            height={100}
            className="w-fit lg:h-[100px] md:h-[70px]"
          />
        </Link>

        <div className="relative flex justify-evenly items-center lg:w-[700px] md:w-[500px] h-[56px] border border-gray-300 bg-opacity-20 rounded-[45px] font-semibold">
          {navLinks.map((menu) => (
            <Link
              key={menu}
              href={`/${menu === "home" ? "" : menu}`}
              className="capitalize px-4 py-4 hover:-translate-y-1 transition-transform duration-300"
            >
              {menu}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 px-4 bg-[#0e1732] flex items-center justify-between text-white z-50">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo2.png"
            alt="HillNest"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40  bg-opacity-40"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 left-0 h-full w-64 bg-[#0e1732] text-white p-6 z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleMenu} aria-label="Close menu">
                
              </button>
            </div>
            <nav className="space-y-4">
              {navLinks.map((menu) => (
                <Link
                  key={menu}
                  href={`/${menu === "home" ? "" : menu}`}
                  className="block px-3 py-2 rounded-md hover:bg-white hover:text-[#0e1732] transition"
                  onClick={toggleMenu}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
