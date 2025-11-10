"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1687180497323-0750d6fe0124?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-serif text-gray-800 bg-[#faf9f6] overflow-hidden">
      {/* 🌄 HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center brightness-90"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80 z-10" />

        {/* Hero Text */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
          >
            Welcome to{" "}
            <span className="text-[#d4af37] drop-shadow-md">
              HillNest Stays
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl font-light text-gray-200 mb-10 leading-relaxed"
          >
            Experience serene mountain luxury — where{" "}
            <span className="text-[#d4af37]">nature</span> meets{" "}
            <span className="text-[#d4af37]">sophistication</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <Link
              href="/listings"
              className="px-10 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-[#d4af37] to-[#b99329] text-[#0e1732] hover:from-[#b99329] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/30"
            >
              Explore Rooms
            </Link>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3 z-30">
          {backgroundImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === currentImageIndex
                  ? "bg-[#d4af37] scale-110 shadow-lg shadow-[#d4af37]/50"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 🏔️ WHY CHOOSE SECTION */}
      <section className="bg-[#0e1732] text-white py-24 px-6 md:px-16 text-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612277795421-5b7fdd9e9d02?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-10 text-[#d4af37] tracking-wide">
            Why Choose HillNest Stays?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-white/90">
            <p>
              Immerse yourself in the perfect harmony of{" "}
              <span className="text-[#d4af37]">luxury</span> and{" "}
              <span className="text-[#d4af37]">nature</span>. Wake up to the
              melody of birds, enjoy organic Himalayan meals, and unwind with
              views that touch the clouds.
            </p>
            <p>
              Whether it&apos;s a tranquil escape or an adventure-filled weekend,
              HillNest offers an eco-conscious retreat that inspires and
              rejuvenates.
            </p>
            <p>
              Each suite is crafted from natural stone and wood — an architectural
              poem blending warmth, light, and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* 🛏️ ROOMS SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#f7f5f0] text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#0e1732] mb-14">
          Our Rooms
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Deluxe Room",
              image:
                "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop",
              desc: "Modern comfort with balcony & mountain views.",
            },
            {
              title: "Luxury Suite",
              image:
                "https://images.unsplash.com/photo-1590490359854-dfba19688d70?q=80&w=1974&auto=format&fit=crop",
              desc: "Spacious interiors, jacuzzi bath & premium elegance.",
            },
            {
              title: "Family Room",
              image:
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop",
              desc: "Perfect for families — warm, inviting, and cozy.",
            },
          ].map((room, index) => (
            <Link
              href="/listings"
              key={index}
              className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="overflow-hidden relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-[#0e1732] group-hover:text-[#d4af37] transition-colors duration-300">
                  {room.title}
                </h3>
                <p className="text-gray-600">{room.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
