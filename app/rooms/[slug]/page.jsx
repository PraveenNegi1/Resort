"use client";

import Image from "next/image";
import { rooms } from "@/lib/roomData";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
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
    <div className="min-h-screen pb-20 font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden"
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover brightness-75 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-white font-serif text-3xl sm:text-5xl lg:text-6xl text-center px-4 drop-shadow-2xl">
            {room.name}
          </h1>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 -mt-24 sm:-mt-32 relative z-10"
        >
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 font-sans"
          >
            {room.detailedDescription || room.description}
          </motion.p>

          {/* Price */}
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-blue-700 mb-10 bg-blue-50 px-5 py-3 rounded-xl inline-block shadow-inner"
          >
            ₹{room.price} <span className="text-lg font-medium">/ night</span>
          </motion.p>

          {/* Amenities */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-5">
              Amenities
            </h3>
            <ul className="flex flex-wrap gap-3 mb-10">
              {room.amenities.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-200 transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          {room.features && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-5">
                Features
              </h3>
              <ul className="space-y-4 text-base text-gray-700">
                {room.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Gallery */}
          {room.images?.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 mt-12">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {room.images.map((imgUrl, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="overflow-hidden rounded-xl shadow-lg "
                  >
                    <Image
                      src={imgUrl}
                      alt={`${room.name} image ${index + 1}`}
                      width={500}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-all duration-300 text-lg"
            >
              Book This Room
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RoomDetails;
