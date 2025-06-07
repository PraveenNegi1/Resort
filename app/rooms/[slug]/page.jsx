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
        className="text-center text-red-500 mt-20 text-xl font-semibold"
      >
        Room not found
      </motion.p>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-cream-100 to-cream-200 text-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden"
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover brightness-90 transition-transform duration-1000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight drop-shadow-2xl">
            {room.name}
          </h1>
          <p className="text-white text-lg sm:text-xl mt-3 max-w-2xl font-light font-serif">
            Experience luxury and comfort in every detail
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-10 md:p-12"
        >
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-800 text-lg sm:text-xl leading-relaxed mb-8 font-serif"
          >
            {room.detailedDescription || room.description}
          </motion.p>

          {/* Price */}
          <motion.p
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-[#72383D] mb-10 bg-[#F1EDE6] px-6 py-3 rounded-xl inline-block shadow-md"
          >
            ₹{room.price}{" "}
            <span className="text-lg font-medium text-[#72383D]">/ night</span>
          </motion.p>

          {/* Amenities */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">
              Amenities
            </h3>
            <ul className="flex flex-wrap gap-3 mb-10">
              {room.amenities.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F1EDE6] text-[#72383D] px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-300"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          {room.features && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">
                Features
              </h3>
              <ul className="space-y-4 text-gray-700 text-base">
                {room.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 mt-2 bg-[#72383D] rounded-full" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Gallery */}
          {room.images?.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-6 font-serif">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {room.images.map((imgUrl, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-xl shadow-md"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${room.name} image ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 sm:h-72 md:h-80 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#72383D] hover:bg-[#72383dc1] text-white text-lg rounded-full shadow-lg transition-all duration-300 font-serif tracking-wide"
            >
              Book This Room
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RoomDetails;
