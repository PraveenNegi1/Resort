"use client";

import Image from "next/image";
import { rooms } from "@/lib/roomData";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const RoomDetails = () => {
  const slug = usePathname().split("/").pop();
  const room = rooms.find((room) => room.id === slug);

  if (!room) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center text-red-500 mt-10 text-lg font-semibold"
      >
        Room not found
      </motion.p>
    );
  }

  return (
    <div className=" min-h-screen pb-20">
      {/* Hero Section */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative w-full h-screen overflow-hidden"
>
  <Image
    src={room.image}
    alt={room.name}
    fill
    className="object-cover brightness-75 transition-transform duration-700 hover:scale-105"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-t to-transparent" />

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-xl text-center px-4 tracking-tight">
      {room.name}
    </h1>
  </motion.div>
</motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6  z-50"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transform transition-all duration-300 hover:shadow-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg leading-relaxed mb-8 font-light"
          >
            {room.detailedDescription || room.description}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-2xl font-bold text-indigo-600 mb-8 bg-indigo-50 px-4 py-2 rounded-lg inline-block"
          >
            ₹{room.price} / night
          </motion.p>

          {/* Amenities */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Amenities
            </h3>
            <ul className="flex flex-wrap gap-3 mb-8">
              {room.amenities.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          {room.features && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Features
              </h3>
              <ul className="list-none text-gray-600 mb-8 space-y-3">
                {room.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Gallery */}
          {room.images && room.images.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {room.images.map((imgUrl, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${room.name} image ${index + 1}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RoomDetails;
