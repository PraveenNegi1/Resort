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
      className="relative w-full flex flex-col lg:flex-row justify-center items-center py-16 sm:py-20 lg:py-24 bg-[#faf8f8] overflow-hidden min-h-screen"
    >
      {/* Left floating image */}
      <motion.img
        src="https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        alt="Wine Pouring"
        className="hidden md:block w-[160px]  lg:w-[300px] xl:w-[390px] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[460px] xl:h-[500px] absolute left-2 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 rounded-md shadow-lg shadow-[#0e1732] object-cover z-50"
        style={{ y: yLeft }}
      />

      {/* Text box */}
      <div className="text-center bg-[#eae3e3] w-[95%] sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%] px-4 sm:px-6 font-serif h-auto lg:h-[700px] xl:h-[800px] bg-opacity-90 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg z-10 mt-8 sm:mt-10 lg:mt-0">
        <div className="h-8 sm:h-10 w-px bg-gray-300 mx-auto mb-3 sm:mb-4" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light uppercase text-black leading-snug mb-3 sm:mb-4">
          Your comfort is <br />
          our priority
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 w-[95%] sm:w-[90%] mx-auto">
          Discover elegant rooms designed for comfort and tranquility. Whether
          you're seeking a romantic retreat, a family stay, or a luxurious
          escape, our accommodations blend timeless aesthetics with modern
          amenities.
        </p>

        <div className="space-y-6 text-xs sm:text-sm md:text-base text-gray-800 w-[95%] sm:w-[90%] mx-auto">
          <div>
            <h3 className="font-semibold text-base sm:text-lg">Deluxe Room</h3>
            <div className="h-3 sm:h-4 w-px bg-gray-400 mx-auto my-1" />
            <p>
              Spacious comfort with premium furnishings and city or garden
              views.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg">
              Executive Suite
            </h3>
            <div className="h-3 sm:h-4 w-px bg-gray-400 mx-auto my-1" />
            <p>
              Refined elegance featuring a private lounge, king bed, and
              workspace.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg">Luxury Villa</h3>
            <div className="h-3 sm:h-4 w-px bg-gray-400 mx-auto my-1" />
            <p>
              Experience unmatched privacy with personal terrace, soaking tub,
              and curated décor.
            </p>
          </div>
        </div>
      </div>

      <motion.img
        src="https://images.unsplash.com/photo-1631889993877-71e193bf79b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Wine Glass"
        className="hidden md:block w-[160px] lg:w-[300px] xl:w-[390px] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[460px] xl:h-[500px] absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 rounded-md shadow-lg shadow-[#0e1732] object-cover z-50"
        style={{ y: yRight }}
      />
    </section>
  );
}
