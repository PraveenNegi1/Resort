"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const attractions = [
  {
    title: "Tehri Lake and Dam",
    description:
      "A popular destination for water sports, boating, and enjoying scenic views.",
    image: "/tehri-dam.webp",
    features: [
      "Jet skiing, kayaking, and banana boat rides",
      "Floating huts and houseboats for stay",
      "Panoramic views of the dam and mountains",
    ],
  },
  {
    title: "Devprayag",
    description:
      "The confluence of the Alaknanda and Bhagirathi rivers, a sacred site for Hindus.",
    image: "/devprayag.jpeg",
    features: [
      "Sacred sangam (confluence) of rivers",
      "Raghunathji Temple visit",
      "Spiritual bath and rituals at river banks",
    ],
  },
  {
    title: "Dhanaulti",
    description:
      "A hill station known for its peaceful atmosphere and scenic beauty.",
    image: "/Dhanaulti.jpg",
    features: [
      "Eco Park with pine and deodar trees",
      "Camping and adventure sports",
      "Views of snow-capped Himalayan peaks",
    ],
  },
  {
    title: "Ghansali Town",
    description:
      "Explore the local culture and way of life in this Tehri Garhwal town.",
    image: "/Ghansali.webp",
    features: [
      "Local Garhwali markets and food stalls",
      "Cultural festivals and folk music",
      "Base point for nearby villages and temples",
    ],
  },
  {
    title: "Budha Kedar",
    description:
      "Situated within reachable 27 km distance from Ghansali, Buda Kedar is a sacred pilgrimage site known for its ancient temple dedicated to Lord Shiva.",
    image: "/budha-kedar-gangi.jpg",
    features: [
      "Ancient Shiva temple with historical significance",
      "Peaceful riverbank setting",
      "Spiritual treks and pilgrimage routes",
    ],
  },
  {
    title: "Gangi",
    description:
      "Explore the quaint village of Gangi, located at a distance of 27 km in the vicinity of Ghansali. Known for its serene surroundings, lush greenery, and traditional Garhwali culture.",
    image: "/Gangi-2.png",
    features: [
      "Traditional wooden Garhwali homes",
      "Terraced farming and village walks",
      "Gateway to Khatling Glacier treks",
    ],
  },
];

export default function LocalAttraction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (componentRef.current) observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  // Slide animation
  useEffect(() => {
    setAnimateSlide(true);
    const timer = setTimeout(() => setAnimateSlide(false), 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // ❌ Removed auto-slide for user control only

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % attractions.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + attractions.length) % attractions.length
    );
  };
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="bg-white font-serif">
      <h1 className="text-3xl md:text-5xl font-serif text-center mb-10 pt-12 text-[#0e1732]">
        Top Local Attractions <span className="text-[#0e1732]">to Explore</span>
      </h1>

      <div
        ref={componentRef}
        className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-8 overflow-hidden"
        style={{
          backgroundImage: `url(${attractions[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 rounded-full hover:bg-white/40 transition-all duration-500 shadow-lg z-20"
        >
          ←
        </button>

        {/* Content Card */}
        <div className="relative max-w-6xl w-full bg-white/95 border border-gray-200 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-700 ease-in-out hover:shadow-3xl">
          {/* Image */}
          <div
            className={`md:w-1/2 relative h-64 md:h-auto ${
              isVisible
                ? animateSlide
                  ? "animate-slide-in-left"
                  : "opacity-100"
                : "opacity-0"
            }`}
          >
            <Image
              src={attractions[currentSlide].image}
              alt={attractions[currentSlide].title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1732] mb-3">
                {attractions[currentSlide].title}
              </h2>
              <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
                {attractions[currentSlide].description}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Highlights
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
                {attractions[currentSlide].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 sm:p-4 rounded-full hover:bg-white/40 transition-all duration-500 shadow-lg z-20"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 flex space-x-2 z-20">
          {attractions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#0e1732] scale-125 shadow-md"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            ></button>
          ))}
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes slide-in-left {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
}
