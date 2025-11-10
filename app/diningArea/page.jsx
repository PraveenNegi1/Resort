"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
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
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 z-10 scale-110"
                : "opacity-0 z-0 scale-100"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              animation:
                index === currentImageIndex
                  ? "zoomIn 4000ms ease-out backward"
                  : "none",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-white px-4 text-center z-20">
          <h1 className="text-3xl md:text-5xl font-serif mb-4 drop-shadow-lg">
            Welcome to HillNest Stays
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 max-w-xl font-serif">
            Indulge in luxury, gourmet delights, and ultimate comfort in our
            elegant sitting area.
          </p>
        </div>

        <style jsx>{`
          @keyframes zoomIn {
            0% {
              transform: scale(3);
            }
            100% {
              transform: scale(1.1);
            }
          }
        `}</style>
      </section>

      {/* Dining Intro */}
      <div className="bg-[#0e1732] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-12 leading-tight">
            Dining at HillNest Stays
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-base md:text-lg text-white leading-relaxed text-center mb-8">
              HillNest Stays offers an exceptional dining experience nestled in
              the heart of pristine hills, where culinary excellence meets
              breathtaking natural beauty. Our multi-cuisine restaurant and cozy
              café provide the perfect setting to unwind and create memorable
              moments with family and friends. Enjoy local delicacies, fusion
              dishes, and international cuisines prepared with fresh mountain
              ingredients.
            </p>

            <div className="text-center">
              <Link
                href="/contact"
                className="mt-4 inline-block px-6 py-3 border border-white font-serif bg-white text-[#0e1732] font-semibold rounded-full hover:bg-[#0e1732] hover:text-white transition duration-300"
              >
                Contact Us for Reservations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
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
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt="Dining view"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Dishes */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-[#0e1732] mb-8">
              Signature Indian & Mountain Dishes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Butter Chicken",
                  desc: "Creamy tomato-based curry with tender marinated chicken, a North Indian classic.",
                },
                {
                  name: "Rogan Josh",
                  desc: "A rich and aromatic lamb curry from Kashmir, cooked with yogurt and traditional spices.",
                },
                {
                  name: "Momos",
                  desc: "Steamed dumplings filled with spiced vegetables or meat, served with spicy chutney.",
                },
                {
                  name: "Spring Rolls",
                  desc: "Crispy fried rolls stuffed with mixed vegetables and noodles, served with tangy dip.",
                },
                {
                  name: "Noodles",
                  desc: "Stir-fried noodles tossed with vegetables and Indo-Chinese sauces — a street food favorite.",
                },
                {
                  name: "Indian-style Burger",
                  desc: "Crispy spiced potato patty burger with chutney, onions, and fresh veggies in a soft bun.",
                },
                {
                  name: "Himalayan Trout",
                  desc: "Locally sourced river trout grilled with herbs and lemon — a mountain delicacy.",
                },
                {
                  name: "Paneer Tikka",
                  desc: "Chunks of cottage cheese marinated in spiced yogurt and roasted to smoky perfection.",
                },
                {
                  name: "Pahadi Chicken Curry",
                  desc: "Traditional Uttarakhand-style chicken curry with local herbs and mustard oil.",
                },
                {
                  name: "Thukpa",
                  desc: "A hearty noodle soup with vegetables or chicken, influenced by Tibetan flavors.",
                },
                {
                  name: "Rajma Chawal",
                  desc: "Comforting red kidney bean curry served with rice — simple, homely, and delicious.",
                },
                {
                  name: "Garhwali Aloo Ke Gutke",
                  desc: "Spiced boiled potatoes sautéed with mountain spices — a local Uttarakhand favorite.",
                },
              ].map((dish, i) => (
                <div key={i} className="bg-[#F1EDE6] p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{dish.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
