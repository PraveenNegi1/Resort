"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1687180497323-0750d6fe0124?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
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
    <div className="font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70 flex flex-col justify-center items-center text-center text-white px-6 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:text-5xl text-2xl  font-serif font-bold mb-6  drop-shadow-lg"
          >
            Welcome to HillNest Stays
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-2xl max-w-2xl font-light Merriweather text-gray-200 mb-8 leading-relaxed"
          >
            Experience luxury and comfort in the heart of the Himalayas — where
            nature meets sophistication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <Link
              href="/listings"
              className="mt-4 inline-block px-8 py-3 text-lg font-semibold rounded-full bg-white/90 text-[#0e1732] hover:bg-[#0e1732] hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Rooms
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
          {backgroundImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === currentImageIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0e1732] text-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-10 text-[#d4af37]">
          Why Choose HillNest Stays?
        </h2>
        <div className="max-w-4xl mx-auto font-serif space-y-6 text-lg leading-relaxed text-white/90">
          <p>
            At HillNest Stays, we blend{" "}
            <span className="text-[#d4af37]">luxury</span> with{" "}
            <span className="text-[#d4af37]">nature</span>. Wake up to the
            melody of birds, relish fresh organic meals, and unwind amid
            breathtaking mountain views — every detail crafted for your comfort.
          </p>
          <p>
            Explore nearby trails, rejuvenate at our spa, or relax under starlit
            skies. Our eco-conscious philosophy ensures a luxurious yet
            sustainable escape.
          </p>
          <p>
            Every room is an architectural poem — blending wood, stone, and
            modern elegance with expansive views and premium amenities.
          </p>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section className="py-20 px-6 md:px-16 bg-[#F7F5F0]">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 text-[#0e1732]">
          Our Rooms
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Deluxe Room",
              image:
                "https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
              desc: "Modern comfort with balcony & mountain views.",
            },
            {
              title: "Luxury Suite",
              image:
                "https://images.unsplash.com/photo-1590490359854-dfba19688d70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
              desc: "Spacious living area, jacuzzi bath & premium amenities.",
            },
            {
              title: "Family Room",
              image:
                "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
              desc: "Designed for families — warm, inviting, and spacious.",
            },
          ].map((room, index) => (
            <Link
              href="/listings"
              key={index}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#0e1732] group-hover:text-gold transition">
                  {room.title}
                </h3>
                <p className="text-gray-700 text-[18px]">{room.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
