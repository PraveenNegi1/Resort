"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { rooms } from "@/lib/roomData.js";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoBedOutline } from "react-icons/io5";
import { Users } from "lucide-react";
import { TbRulerMeasure } from "react-icons/tb";

const Rooms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const roomsPerPage = 6;

  const filteredRooms = rooms.filter((room) =>
    [room.name, room.description, ...room.amenities].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRooms.length / roomsPerPage)
  );
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = filteredRooms.slice(
    startIndex,
    startIndex + roomsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [filteredRooms, totalPages, currentPage]);

  // ✅ Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.02 },
  };

  const searchVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen">
      {/* Page Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center pt-36 bg-white font-serif"
      >
        <div className="flex items-center justify-center w-full max-w-4xl px-4">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <h1 className="text-3xl sm:text-4xl text-gray-800 tracking-widest font-light px-6 text-center">
            PLAN YOUR STAY
          </h1>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        variants={searchVariants}
        initial="hidden"
        animate="visible"
        className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto"
      >
        <div className="relative w-full max-w-md mx-auto border border-[#0e1732] rounded-lg shadow-sm overflow-hidden">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0e1732]" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search rooms by name, description, or amenities..."
            className="w-full pl-10 pr-4 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-500 transition-all duration-300"
          />
        </div>
      </motion.div>

      {/* Rooms List */}
      <motion.div
        className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif"
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
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                <Link
                  href={`/rooms/${room.id}`}
                  className="flex flex-col md:flex-row"
                >
                  {/* Image Section */}
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details Section */}
                  <div className="flex flex-col md:w-3/5 p-6 justify-between">
                    <div>
                   
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                        {room.name}
                      </h2>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {room.description}
                      </p>

                      <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 text-sm">
                        {room.amenities.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                        <li>Inclusive of breakfast and airport transfer</li>
                      </ul>

                      <div className="flex items-center gap-4 text-gray-700 text-sm">
                        <span className="flex items-center gap-1">
                          <TbRulerMeasure /> {room.size || "55 sq m"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users /> Up to {room.capacity || 2} guests
                        </span>
                        <span className="flex items-center gap-1">
                          <IoBedOutline /> King Bed
                        </span>
                      </div>
                    </div>

                    {/* Price + Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 border-t pt-4">
                      <div>
                        <p className="text-sm text-gray-500">EXCLUSIVE RATE</p>
                        <p className="text-2xl font-bold text-[#0e1732]">
                          ₹{room.price}
                        </p>
                      </div>
                      <button className="mt-3 sm:mt-0 px-6 py-2 border border-[#0e1732] text-[#0e1732] font-medium rounded-md hover:bg-[#0e1732] hover:text-white transition-colors">
                        SELECT
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 text-center text-lg"
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
          className="flex justify-center mt-12 items-center gap-3"
        >
          <motion.button
            onClick={handlePrev}
            disabled={currentPage === 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#0e1732] text-white rounded-lg hover:bg-[#F1EDE6] hover:text-[#0e1732] disabled:opacity-50"
          >
            Previous
          </motion.button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              onClick={() => setCurrentPage(page)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className={`px-3 py-1 rounded-lg text-sm ${
                currentPage === page
                  ? "bg-[#0e1732] text-white"
                  : "bg-white text-[#0e1732] border hover:bg-gray-200"
              }`}
            >
              {page}
            </motion.button>
          ))}

          <motion.button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#0e1732] text-white rounded-lg hover:bg-[#F1EDE6] hover:text-[#0e1732] disabled:opacity-50"
          >
            Next
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Rooms;
