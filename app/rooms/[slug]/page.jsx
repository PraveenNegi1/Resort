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
        className="text-center text-rose-500 mt-10 text-lg font-semibold font-sans"
      >
        Room not found
      </motion.p>
    );
  }

  return (
    <div className="min-h-screen pb-20 font-sans bg-gradient-to-b from-cream-100 to-cream-200 text-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden"
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover brightness-90 transition-transform duration-1000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-white font-serif text-4xl sm:text-6xl lg:text-7xl drop-shadow-2xl tracking-tight">
            {room.name}
          </h1>
          <p className="text-white text-lg sm:text-xl mt-4  max-w-2xl font-serif">
            Experience luxury and comfort in every detail
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 -mt-24 sm:-mt-32 relative z-10 border border-cream-200"
        >
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg sm:text-xl  leading-relaxed mb-8 font-serif tracking-wide"
          >
            {room.detailedDescription || room.description}
          </motion.p>

          {/* Price */}
          <motion.p
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-teal-600 mb-10 bg-teal-50/50 px-6 py-3 rounded-xl inline-block shadow-md"
          >
            ₹{room.price}{" "}
            <span className="text-lg font-medium text-teal-700">/ night</span>
          </motion.p>

          {/* Amenities */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-5 font-serif">
              Amenities
            </h3>
            <ul className="flex flex-wrap gap-3 mb-10">
              {room.amenities.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1, backgroundColor: "#e6fffa" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-teal-200 transition-all duration-300"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          {room.features && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-5 font-serif">
                Features
              </h3>
              <ul className="space-y-4 text-base text-gray-700">
                {room.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full" />
                    <span className="leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Gallery */}
          {room.images?.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-12 font-serif">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {room.images.map((imgUrl, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="overflow-hidden rounded-xl shadow-md"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${room.name} image ${index + 1}`}
                      width={500}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-500"
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
              className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-lg tracking-wide font-serif"
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
