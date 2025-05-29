"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1703565426315-4209c2e88eea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705743244501-a88b02c524fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723532173069-6c44fe260198?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718330008053-6344baf4fe7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718330008146-7c5782c643cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <section className="relative h-screen bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1200"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            opacity: isFading ? 0 : 1,
          }}
        />

        <div className="absolute inset-0  flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-4xl  font-serif mb-4 drop-shadow-lg">
            Welcome to HillNest Stays
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 max-w-xl font-serif">
            Indulge in luxury, gourmet delights, and ultimate comfort in our
            elegant sitting area.
          </p>
        </div>
      </section>

      {/* Header Section */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl  font-light text-gray-800 text-center mb-12 leading-tight">
            Dining at HillNest Stays
          </h1>

          <div className="max-w-5xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-8">
              HillNest Stays offers an exceptional dining experience nestled in
              the heart of pristine hills, where culinary excellence meets
              breathtaking natural beauty. Our multi-cuisine restaurant and cozy
              café provide the perfect setting to unwind and create memorable
              moments with family and friends. The restaurant specializes in
              authentic local cuisine, continental favorites, and fusion dishes
              including Mountain Trout, Himalayan Herb Chicken, and Cottage
              Cheese Steaks. Our dining spaces feature rustic wooden interiors
              with panoramic windows, stone fireplaces, and warm ambient
              lighting that creates an intimate mountain lodge atmosphere. The
              restaurant terrace offers stunning views of rolling hills, dense
              forests, and misty valleys, providing a serene backdrop for your
              meals. We can arrange special mountain picnics, bonfire dinners,
              and outdoor barbecue nights upon request. Our beverage selection
              includes local teas, organic coffee, craft beverages, and
              signature mountain cocktails.
            </p>

            <div className="text-center ">
              <Link
                href="/contact"
                className="mt-4 inline-block px-6 py-3 border border-teal-600 font-serif bg-white text-teal-700 font-semibold rounded-full hover:bg-teal-700 hover:text-white transition duration-300"
              >
                Contact Us for Reservations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* First Image - Restaurant Exterior */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1643913591623-4335627a1677?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mountain restaurant exterior with wooden architecture"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image - Restaurant Interior */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400&h=320&auto=format&fit=crop"
                alt="Cozy restaurant interior dining area"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Image - Terrace Dining */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1664138218128-2dcf791a9d27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Terrace dining with mountain views"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1550367363-ea12860cc124?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Terrace dining with mountain views"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Terrace dining with mountain views"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1651981075280-9a9e01acbff0?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Terrace dining with mountain views"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Signature Dishes Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Signature Indian Dishes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Butter Chicken
                </h3>
                <p className="text-gray-600 text-sm">
                  Creamy tomato-based curry with tender marinated chicken, a
                  North Indian classic.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Rogan Josh
                </h3>
                <p className="text-gray-600 text-sm">
                  A rich and aromatic lamb curry from Kashmir, cooked with
                  yogurt and traditional spices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Momos
                </h3>
                <p className="text-gray-600 text-sm">
                  Steamed dumplings filled with spiced vegetables or meat,
                  served with spicy chutney.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Spring Rolls
                </h3>
                <p className="text-gray-600 text-sm">
                  Crispy fried rolls stuffed with mixed vegetables and noodles,
                  served with tangy dip.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Noodles
                </h3>
                <p className="text-gray-600 text-sm">
                  Stir-fried noodles tossed with vegetables and Indo-Chinese
                  sauces — a street food favorite.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Indian-style Burger
                </h3>
                <p className="text-gray-600 text-sm">
                  Crispy spiced potato patty burger with chutney, onions, and
                  fresh veggies in a soft bun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
