"use client";

import Image from "next/image";
import { rooms } from "@/lib/roomData";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Popup from "@/components/PopUp";

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
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
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

  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-slate-50 via-white to-slate-100 flex justify-between md:px-36 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" py-8 mt-28 "
      >
        <motion.section
          variants={itemVariants}
          className="grid lg:grid-cols-3 gap-8 mb-12"
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
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#0e1732] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Available Now
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
                    className={`rounded-2xl object-cover w-full h-24 md:h-32 transition-all duration-300 ${
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
            className="bg-[#0e1732] rounded-3xl shadow-xl p-8 border border-white backdrop-blur-sm"
          >
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">
                {room.name}
              </h1>
              <div className="flex items-center text-white">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 font-medium">4.8 (24 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🛏️", label: "Beds", value: room.beds },
                { icon: "🛁", label: "Baths", value: room.baths },
                { icon: "🚗", label: "Garage", value: room.garage || 1 },
                { icon: "📐", label: "Area", value: room.area || "1500 sqft" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-200/50 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs text-[#0e1732] uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="font-semibold text-[#0e1732]">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-2">
                ₹{room.price} /day
              </div>
            </div>

            <motion.button
              onClick={() => setIsPopupOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full bg-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.section>
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

        <motion.section
          variants={itemVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              variants={itemVariants}
              className="bg-[#0e1732] p-8 rounded-3xl shadow-xl border border-slate-200/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3"></span>
                Description
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {room.detailedDescription || room.description}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default RoomDetails;
