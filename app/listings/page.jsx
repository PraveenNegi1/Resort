"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { rooms } from "@/lib/roomData.js";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Rooms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const roomsPerPage = 6;

  
  const filteredRooms = rooms.filter((room) =>
    [room.name, room.description, ...room.amenities].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.max(1, Math.ceil(filteredRooms.length / roomsPerPage));
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = filteredRooms.slice(
    startIndex,
    startIndex + roomsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      console.log("Previous clicked, newPage:", newPage);
      return newPage;
    });
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages);
      console.log("Next clicked, newPage:", newPage); 
      return newPage;
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      console.log("Adjusting currentPage to", totalPages); 
      setCurrentPage(totalPages);
    }
  }, [filteredRooms, totalPages, currentPage]);

  // Animation variants
  const cardVariants = {
      hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
  };

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[300px] xs:h-[400px] sm:h-[500px] overflow-hidden font-serif"
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rooms Banner"
            fill
            className="Programs object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif text-white drop-shadow-2xl tracking-tight text-center px-4"
          >
            Our Exquisite Rooms
          </motion.h1>
        </div>
      </motion.div>

      {/* Search Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <motion.div
          variants={searchVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="relative w-full max-w-md mx-auto border border-teal-500 rounded-lg shadow-sm overflow-hidden">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search rooms by name, description, or amenities..."
              className="w-full pl-10 pr-4 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-500 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Room Cards */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-serif"
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {currentRooms.length > 0 ? (
              currentRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 50 }}
                  whileHover="hover"
                  custom={index}
                >
                  <Link href={`/rooms/${room.id}`}>
                    <div className="rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 flex flex-col h-[480px] xs:h-[500px] sm:h-[520px]">
                      <div className="relative h-56 sm:h-64 flex-shrink-0">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4 sm:p-6 flex flex-col flex-grow overflow-hidden">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 truncate">
                          {room.name}
                        </h2>
                        <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3 overflow-hidden">
                          {room.description}
                        </p>
                        <p className="text-lg font-bold text-teal-700 mb-4">
                          ₹{room.price} / night
                        </p>
                        <ul className="flex flex-wrap gap-2 overflow-hidden max-h-16">
                          {room.amenities.map((item, i) => (
                            <li
                              key={i}
                              className="bg-blue-100 text-teal-700 px-2 py-1 rounded-md text-xs sm:text-sm transition-colors duration-300 hover:bg-blue-200 truncate"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600 col-span-full text-center text-base sm:text-lg"
              >
                No rooms match your search.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {filteredRooms.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12 items-center gap-2 sm:gap-4"
          >
            <motion.button
              onClick={handlePrev}
              disabled={currentPage === 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600 transition-colors text-sm sm:text-base"
            >
              Previous
            </motion.button>
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
                    currentPage === page
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors`}
                >
                  {page}
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
              Next
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Rooms;