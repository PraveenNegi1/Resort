"use client";

import Image from "next/image";
import { rooms } from "@/lib/roomData";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Popup from "@/components/PopUp";
import TestimonialsCarousel from "@/components/Testimonials";

const RoomDetails = () => {
  const slug = usePathname().split("/").pop();
  const room = rooms.find((room) => room.id === slug);

  const [selectedImage, setSelectedImage] = useState(room?.image || "");
  const currentImageIndex = useRef(0);

  useEffect(() => {
    if (!room?.images?.length) return;

    const interval = setInterval(() => {
      currentImageIndex.current =
        (currentImageIndex.current + 1) % room.images.length;
      setSelectedImage(room.images[currentImageIndex.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, [room]);

  if (!room) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <p className="text-2xl font-bold text-slate-700 mb-2">
            Room not found
          </p>
          <p className="text-slate-500">
            The room you're looking for doesn't exist.
          </p>
        </div>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const roomSpecs = [
    { icon: "👥", label: "Max Guests", value: room.capacity },
    { icon: "⭐", label: "Rating", value: "4.8" },
  ];

  return (
    <div>
      <div className="min-h-screen font-serif bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-36 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-auto py-4 md:mt-28 mt-10"
        >
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
          >
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src={selectedImage}
                  alt={room.name}
                  width={1000}
                  height={600}
                  className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0e1732] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Available Now
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 md:mt-6">
                {room.images?.slice(0, 4).map((imgUrl, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${room.name} image ${index + 1}`}
                      width={300}
                      height={200}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`rounded-2xl object-cover w-full h-20 sm:h-24 md:h-32 transition-all duration-300 ${
                        selectedImage === imgUrl
                          ? "ring-4 ring-[#0e1732] shadow-lg"
                          : "hover:shadow-lg"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-[#0e1732] rounded-3xl shadow-xl p-6 sm:p-8 border border-white backdrop-blur-sm mt-6 lg:mt-0"
            >
              <div className="mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {room.name}
                </h1>
                <div className="flex items-center text-white text-sm sm:text-base">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-1 font-medium">4.8 (24 reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {roomSpecs.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 p-3 sm:p-4 rounded-2xl border border-slate-200/50 text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">
                      {item.icon}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#0e1732] uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="font-semibold text-[#0e1732] text-sm sm:text-base">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-4xl font-bold bg-white bg-clip-text text-transparent mb-1 sm:mb-2">
                  ₹{room.price} /day
                </div>
              </div>

              <motion.button
                onClick={() => setIsPopupOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-white py-3 sm:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.section>

          <Popup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            roomName={room.name}
            roomPrice={room.price}
          />

          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <motion.div
                variants={itemVariants}
                className="bg-[#0e1732] p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/50"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <span className="text-2xl sm:text-3xl mr-2 sm:mr-3"></span>
                  Description
                </h2>
                <p className="text-white text-sm sm:text-lg leading-relaxed">
                  {room.detailedDescription || room.description}
                </p>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </div>

      <motion.section
        variants={itemVariants}
        className="mt-16 sm:mt-24 font-serif px-4 sm:px-10 md:px-20 py-16 sm:py-20 shadow-2xl bg-[#0e1732]"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          Similar Rooms You Might Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {rooms
            .filter((r) => r.id !== room.id)
            .sort(() => 1 - Math.random())
            .slice(0, 3)
            .map((similarRoom) => (
              <motion.div
                key={similarRoom.id}
                variants={itemVariants}
                className="rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <a href={`/rooms/${similarRoom.id}`} className="block">
                  <div className="relative">
                    <Image
                      src={similarRoom.image}
                      alt={similarRoom.name}
                      width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#0e1732] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-lg font-semibold">
                      ₹{similarRoom.price} /day
                    </span>
                  </div>

                  <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0e1732] group-hover:underline">
                      {similarRoom.name}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-lg line-clamp-3">
                      {similarRoom.description}
                    </p>

                    <div className="flex justify-between items-center pt-2 sm:pt-4">
                      <div className="text-xs sm:text-sm text-slate-500">
                        👥 {similarRoom.capacity} Guests • ⭐ 4.8
                      </div>
                      <button className="text-[#0e1732] text-xs sm:text-sm font-medium hover:underline">
                        View Details →
                      </button>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
        </div>
      </motion.section>
      <TestimonialsCarousel />
    </div>
  );
};

export default RoomDetails;
