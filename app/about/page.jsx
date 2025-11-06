"use client";
import {
  FaBed,
  FaConciergeBell,
  FaWifi,
  FaDumbbell,
  FaUtensils,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-amber-50 font-serif text-gray-700 overflow-hidden">
      <section className="relative h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600"
          alt="HillNest background"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 " />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
            About <span className="text-amber-400">HillNest Stays</span>
          </h1>
          <p className="text-gray-200 mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Where luxury meets nature, and every stay feels like a homecoming.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-20 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0e1732]">
            Luxury Meets Comfort
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At{" "}
            <span className="font-semibold text-[#0e1732]">HillNest Stays</span>
            , we don&apos;t just provide rooms — we curate experiences. Each property
            embodies elegance, warmth, and local charm, designed to make your
            stay unforgettable.
          </p>
        </motion.section>

        <div className="w-2/3 mx-auto h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#0e1732]">
            Our Hotels
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            From peaceful hilltop escapes surrounded by pine forests to chic
            urban stays with modern luxury — every HillNest property blends
            nature, design, and comfort in perfect harmony.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#0e1732]">
            Rooms & Suites
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Choose from cozy retreats with mountain views to spacious suites
            with modern elegance. Every room includes plush bedding, Wi-Fi, and
            fine amenities, wrapped in HillNest&apos;s signature warmth.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-[#0e1732] text-center">
            Facilities & Services
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaDumbbell />,
                label: "Modern Fitness Centers",
              },
              {
                icon: <FaUtensils />,
                label: "Fine Dining Restaurants",
              },
              {
                icon: <FaConciergeBell />,
                label: "24/7 Concierge Service",
              },
              {
                icon: <FaWifi />,
                label: "Complimentary Wi-Fi",
              },
              {
                icon: <FaBed />,
                label: "Luxury Bedding & Amenities",
              },
              {
                icon: <FaConciergeBell />,
                label: "Personalized Hospitality",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-amber-50 transition-all duration-300"
              >
                <div className="text-3xl text-[#0e1732] mb-3">{item.icon}</div>
                <span className="font-medium text-gray-700 text-lg">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#0e1732]">
            Why Choose HillNest Stays
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Our philosophy is simple — to blend heartfelt hospitality with
            refined comfort. From curated experiences to sustainable luxury,
            every HillNest Stay promises tranquility, warmth, and lasting
            memories.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl bg-gradient-to-r from-[#0e1732] via-[#162650] to-[#1b2a57] p-12 shadow-2xl"
        >
          <h4 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            Ready to Book Your Escape?
          </h4>
          <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
            Discover a place where every moment feels magical. Book your stay
            and let HillNest welcome you to a world of calm sophistication.
          </p>
          <a
            href="/listings"
            className="inline-block px-10 py-4 bg-amber-600 text-[#0e1732] font-semibold rounded-md shadow-md hover:scale-105 hover:bg-amber-300 transition-all duration-300"
          >
            Explore Our Rooms
          </a>
        </motion.div>
      </div>
    </div>
  );
}
