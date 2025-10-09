"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const data = [
  {
    imageLarge: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageMobile: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "₹840",
    rooms: 1,

    bed: "King bed, 2 single beds",
    capacity: "1-3 Persons",
    view: "City view",
    recommend: "Great for business or family trip",
    roomType: "PRIME SUITE",
  },
  {
    imageLarge:
      "https://images.unsplash.com/photo-1740446568845-eb3258a78734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageMobile:
      "https://images.unsplash.com/photo-1740446568845-eb3258a78734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1500",
    rooms: 2,

    bed: "2 Queen beds",
    capacity: "1-4 Persons",
    view: "Garden view",
    recommend: "Ideal for couples or small families",
    roomType: "STANDERD ROOMS",
  },
  {
    imageLarge:
      "https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageMobile:
      "https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹2540",
    rooms: 2,

    bed: "2 Queen beds",
    capacity: "3-5 Persons",
    view: "Garden view",
    recommend: "Ideal for couples or small families",
    roomType: "DELUXE ROOM",
  },
];

export default function RoomShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = data[index];

  return (
    <div className="bg-[#0e1732] text-white min-h-screen flex flex-col md:flex-row items-center md:px-40 px-4 gap-10 md:gap-36 py-12 relative overflow-hidden Merriweather ">
      <div className="absolute bottom-20 left-4 md:left-10 lg:w-[200px] lg:h-[250px] bg-white rounded-lg shadow-xl z-10 overflow-hidden border border-gray-300 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full overflow-y-auto p-3 space-y-3"
          >
            <div>
              <div className="relative w-full h-[120px] rounded-t-lg overflow-hidden">
                <Image
                  src={current.imageMobile}
                  alt="Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-black p-3 text-xs">
                <p className="font-semibold">{current.roomType}</p>
                <p className="text-[11px] text-gray-600">{current.bed}</p>
                <p className="text-[11px] text-gray-500 mb-1">
                  View: {current.view}
                </p>
                <Link
                  href="/contact"
                  className="bg-[#0e1732] text-white text-[10px] px-3 py-1 mt-1 rounded"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative w-full md:w-[50%] border-[3px] border-white p-1 rounded-xl overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 bg-white"
          >
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src={current.imageLarge}
                alt="Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#0e1732] p-6 text-sm md:text-base">
              <h3 className="text-right text-[1.5rem] md:text-[2rem] font-light tracking-wider mb-4">
                {current.roomType}
              </h3>
              <p className="mb-1">
                From <span className="font-semibold">{current.price}</span>
              </p>
              <p className="mb-1">Rooms: {current.rooms}</p>
              <p className="mb-1">Size: {current.size}</p>
              <p className="mt-3 mb-1">Bed: {current.bed}</p>
              <p className="mb-1">Capacity: {current.capacity}</p>
              <p className="mb-1">View: {current.view}</p>
              <p className="mb-3">Recommended: {current.recommend}</p>
              <Link
                href="/contact"
                className="border border-white px-4 py-2 hover:bg-white hover:text-[#0e1732] transition-all"
              >
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 md:mt-0 md:ml-10 w-full md:w-[30%] z-0">
        <h1 className="text-white text-2xl md:text-4xl font-normal mb-4">
          VERSATILE ROOM LISTS
        </h1>
        <p className="text-white text-sm md:text-base mb-6 font-light">
          Explore a variety of beautifully designed room layouts to present your
          accommodations. From standard and simple lists to sliders and gallery
          views, each template is crafted to highlight your rooms&apos; comfort,
          style, and amenities while making it easy for guests to browse and
          choose the perfect stay.
        </p>

        <div className="text-white text-xs md:text-sm grid grid-cols-2 gap-3 font-light">
          <span>STANDARD ROOM LIST</span>
          <span>ROOM SLIDER</span>
          <span>CENTERED ROOM LIST</span>
          <span>SIMPLE ROOM LIST</span>
          <span>BOXED ROOM LIST</span>
          <span>WIDE ROOM LIST</span>
          <span>EXTENDED GALLERY LIST</span>
        </div>
      </div>
    </div>
  );
}
