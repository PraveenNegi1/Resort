"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1703565426315-4209c2e88eea?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1705743244501-a88b02c524fb?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1723532173069-6c44fe260198?q=80&w=1939&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1718330008053-6344baf4fe7e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1718330008146-7c5782c643cc?q=80&w=1974&auto=format&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-serif text-[#0e1732]">
      <section className="relative h-screen overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-110 z-10"
                : "opacity-0 scale-100 z-0"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center text-white z-20 px-6">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide drop-shadow-lg">
            Welcome to <span className="font-semibold">HillNest Stays</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl leading-relaxed">
            Indulge in luxury, gourmet delights, and serene mountain comfort —
            where every meal tells a story.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-[#0e1732] font-medium rounded-full shadow hover:bg-[#0e1732] hover:text-white transition"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>

      <section className="bg-[#0e1732] text-white py-20 px-6 text-center relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Dining at HillNest Stays
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-10">
            HillNest Stays offers an exceptional dining experience nestled in
            the heart of the Himalayas, where culinary artistry meets
            breathtaking beauty. Enjoy regional delicacies, Indian favorites,
            and international cuisines prepared with the finest local
            ingredients.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border border-white rounded-full bg-white/10 hover:bg-white hover:text-[#0e1732] font-medium transition"
          >
            Contact Us for Reservations
          </Link>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1643913591623-4335627a1677?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400&h=320&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1664138218128-2dcf791a9d27?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1550367363-ea12860cc124?q=80&w=1935&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=1958&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1651981075280-9a9e01acbff0?q=80&w=2026&auto=format&fit=crop",
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <Image src={src} alt="Dining view" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#F1EDE6] to-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Signature Indian & Mountain Dishes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Butter Chicken", desc: "Creamy tomato-based curry with tender marinated chicken, a North Indian classic." },
              { name: "Rogan Josh", desc: "A rich and aromatic lamb curry from Kashmir, cooked with yogurt and traditional spices." },
              { name: "Momos", desc: "Steamed dumplings filled with spiced vegetables or meat, served with spicy chutney." },
              { name: "Himalayan Trout", desc: "Locally sourced river trout grilled with herbs and lemon — a mountain delicacy." },
              { name: "Kafuli", desc: "A nutritious spinach and fenugreek leaf curry cooked with local spices — Uttarakhand’s signature dish." },
              { name: "Chainsoo", desc: "A traditional Garhwali dish made from roasted black gram cooked into a thick, earthy curry." },
              { name: "Pahadi Chicken Curry", desc: "Traditional Uttarakhand-style chicken curry with local herbs and mustard oil." },
              { name: "Jhangora Ki Kheer", desc: "Sweet barnyard millet pudding with milk and dry fruits — a festive dessert from the hills." },
              { name: "Mandua Ki Roti", desc: "Flatbread made from finger millet flour, rich in fiber and minerals, served with ghee or chutney." },
            ].map((dish, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition duration-300 border border-[#F1EDE6]"
              >
                <h3 className="text-xl font-medium text-[#0e1732] mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Page;
