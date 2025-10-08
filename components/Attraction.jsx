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

  // ✅ Intersection Observer (unchanged)
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

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // ✅ Animation trigger
  useEffect(() => {
    setAnimateSlide(true);
    const timer = setTimeout(() => setAnimateSlide(false), 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // ✅ Auto-slide every 6s
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % attractions.length);
    }, 6000); // 6s per slide
    return () => clearInterval(autoSlide);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % attractions.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + attractions.length) % attractions.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-3xl md:text-4xl font-serif text-center mb-12 pt-12 text-[#0e1732]">
        Top Local Attractions
        <span className="text-black"> to Explore</span>
      </h1>
      <div
        ref={componentRef}
        className="h-[100vh] flex items-center justify-center p-4 Merriweather  relative overflow-hidden"
        style={{
          backgroundImage: `url(${attractions[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-purple-900/30 transition-opacity duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>

        <button
          onClick={prevSlide}
          className="absolute left-8 md:left-28 top-1/2 transform -translate-y-1/2 bg-white/90 text-[#0e1732] border border-[#0e1732] p-4 rounded-full hover:bg-[#0e1732] hover:text-white transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 z-20 shadow-lg"
        >
          ←
        </button>

        <div className="relative max-w-6xl w-full bg-white/95 border border-[#0e1732] backdrop-blur-sm shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-1">
          {/* Left image */}
          <div
            className={`md:w-1/2 relative h-96 transition-all duration-1000 ease-in-out ${
              isVisible
                ? animateSlide
                  ? "animate-slide-in-left"
                  : "translate-x-0 opacity-100"
                : "translate-x-[-100%] opacity-0"
            }`}
          >
            <Image
              src={attractions[currentSlide].image}
              alt={attractions[currentSlide].title}
              layout="fill"
              objectFit="cover"
              className="rounded-l-xl transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>

          {/* Right content */}
          <div
            className={`md:w-1/2 p-10 flex flex-col justify-between transition-all duration-1000 ease-in-out ${
              isVisible
                ? animateSlide
                  ? "animate-slide-in-right"
                  : "translate-x-0 opacity-100"
                : "translate-x-[100%] opacity-0"
            }`}
          >
            <div>
              <h2
                className={`text-2xl pt-6 font-bold Merriweather text-[#0e1732] mb-4 tracking-tight ${
                  animateSlide ? "animate-text-in" : ""
                }`}
              >
                {attractions[currentSlide].title}
              </h2>
              <p
                className={`text-gray-700 mb-6 text-lg leading-relaxed ${
                  animateSlide ? "animate-text-in delay-100" : ""
                }`}
              >
                {attractions[currentSlide].description}
              </p>
              <h3
                className={`text-xl font-semibold text-gray-900 mb-3 ${
                  animateSlide ? "animate-text-in delay-200" : ""
                }`}
              >
                Highlights
              </h3>
              <ul
                className={`list-disc list-inside text-gray-600 text-base ${
                  animateSlide ? "animate-text-in delay-300" : ""
                }`}
              >
                {attractions[currentSlide].features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute right-8 md:right-28 top-1/2 transform -translate-y-1/2 bg-white/90 text-[#0e1732] p-4 rounded-full hover:bg-[#0e1732] hover:text-white border border-[#0e1732] transition-all duration-500 ease-in-out hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 z-20 shadow-lg"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 flex space-x-2 z-20">
          {attractions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#0e1732] scale-125"
                  : "bg-white hover:bg-white/80"
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
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes text-in {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-in-left {
            animation: slide-in-left 1s ease-in-out;
          }
          .animate-slide-in-right {
            animation: slide-in-right 1s ease-in-out;
          }
          .animate-text-in {
            animation: text-in 0.8s ease-in-out;
          }
          .delay-100 {
            animation-delay: 0.1s;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
        `}</style>
      </div>
    </div>
  );
}
