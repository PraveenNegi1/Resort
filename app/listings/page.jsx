"use client";

import { useState } from "react";
import Link from "next/link";
import { rooms } from "@/lib/roomData.js";
import Image from "next/image";

const Rooms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6;

  const totalPages = Math.ceil(rooms.length / roomsPerPage);
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = rooms.slice(startIndex, startIndex + roomsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rooms Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight">
            Our Exquisite Rooms
          </h1>
        </div>
      </div>

      {/* Room Cards */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentRooms.map((room, index) => (
            <Link href={`/rooms/${room.id}`} key={index}>
              <div className="rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200">
                <div className="relative">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {room.name}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {room.description}
                  </p>
                  <p className="text-lg font-bold text-blue-700 mb-4">
                    ₹{room.price} / night
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {room.amenities.map((item, i) => (
                      <li
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
          >
            Previous
          </button>
          <span className="text-gray-800 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;