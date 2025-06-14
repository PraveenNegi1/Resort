"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WineSelection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [120, -100]);
const yRight = useTransform(scrollYProgress, [0, 1], [-100, 120]);


  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center items-center py-24 bg-[#faf8f8] overflow-hidden min-h-screen"
    >
      {/* Left Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Wine Pouring"
        className="w-[280px] lg:w-[420px] h-[500px] absolute z-50 left-25 top-1/2 -translate-y-1/2 rounded-md shadow-lg object-cover"
        style={{ y: yLeft }}
      />

      <div className="text-center bg-[#eae3e3] w-[40vw] px-6 font-serif h-[800px] bg-opacity-90 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <div className="h-10 w-px bg-gray-300 mx-auto mb-4" />
        <h2 className="text-3xl md:text-3xl font-light uppercase text-black leading-snug mb-4">
          Your comfort is <br />
          our priority
        </h2>
        <p className="text-sm text-gray-700 mb-6 w-[70%] mx-auto">
          Discover elegant rooms designed for comfort and tranquility. Whether
          you're seeking a romantic retreat, a family stay, or a luxurious
          escape, our accommodations blend timeless aesthetics with modern
          amenities.
        </p>

        <div className="space-y-6 text-sm text-gray-800 w-[70%] mx-auto">
          <div>
            <h3 className="font-semibold text-lg">Deluxe Room</h3>
            <div className="h-4 w-px bg-gray-400 mx-auto my-1" />
            <p>
              Spacious comfort with premium furnishings and city or garden
              views.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Executive Suite</h3>
            <div className="h-4 w-px bg-gray-400 mx-auto my-1" />
            <p>
              Refined elegance featuring a private lounge, king bed, and
              workspace.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Luxury Villa</h3>
            <div className="h-4 w-px bg-gray-400 mx-auto my-1" />
            <p>
              Experience unmatched privacy with personal terrace, soaking tub,
              and curated décor.
            </p>
          </div>
        </div>
      </div>

      <motion.img
        src="https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Wine Glass"
        className="w-[280px] lg:w-[420px] h-[500px] absolute z-50 right-25 top-1/2 -translate-y-1/2 rounded-md shadow-lg object-cover"
        style={{ y: yRight }}
      />
    </section>
  );
}
