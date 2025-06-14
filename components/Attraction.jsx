"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const attractions = [
  {
    title: "City Park",
    description:
      "A beautiful urban park with lush greenery, walking trails, and a serene lake perfect for relaxation.",
    image:
      "https://images.unsplash.com/photo-1692829564432-19418ab44d1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Scenic walking and biking trails",
      "Picnic areas with BBQ facilities",
      "Boating and fishing on the lake",
    ],
  },
  {
    title: "Historic Museum",
    description:
      "Explore the rich history of our city with artifacts and exhibits dating back centuries.",
    image:
      "https://images.unsplash.com/photo-1541264161754-445bbdd7de52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Interactive historical exhibits",
      "Guided tours available daily",
      "Special events and workshops",
    ],
  },
  {
    title: "Skyline Viewpoint",
    description:
      "Enjoy breathtaking panoramic views of the city skyline, especially stunning at sunset.",
    image:
      "https://images.unsplash.com/photo-1663436294249-7ad04dbc18d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Observation deck with telescopes",
      "Evening light shows",
      "Nearby cafes and restaurants",
    ],
  },
  {
    title: "Botanical Gardens",
    description:
      "A vibrant garden showcasing diverse plant species, colorful flower displays, and peaceful walking paths.",
    image:
      "https://images.unsplash.com/photo-1624523994701-83798154f78a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Rare and exotic plant collections",
      "Seasonal flower festivals",
      "Guided botanical tours",
    ],
  },
  {
    title: "Riverfront Walkway",
    description:
      "A scenic promenade along the river, perfect for evening strolls, dining, and local events.",
    image:
      "https://images.unsplash.com/photo-1690082791947-b5e881fb0e18?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Riverside dining and cafes",
      "Weekly farmer's market",
      "Live music and street performances",
    ],
  },
  {
    title: "Art Gallery District",
    description:
      "A cultural hub featuring contemporary and classic art from local and international artists.",
    image:
      "https://images.unsplash.com/photo-1616113780522-e26b6b37cc3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Rotating art exhibitions",
      "Artist meet-and-greet events",
      "Art workshops for all ages",
    ],
  },
];

export default function LocalAttraction() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

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

  useEffect(() => {
    setAnimateSlide(true);
    const timer = setTimeout(() => setAnimateSlide(false), 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

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
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 pt-12 text-[#0e1732]">
        Top Local Attractions
        <span className="text-black"> to Explore</span>
      </h1>
      <div
        ref={componentRef}
        className="h-[100vh] flex items-center justify-center p-4 font-sans relative overflow-hidden"
        style={{
          backgroundImage: `url(${attractions[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-purple-900/30 transition-opacity duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>

        <button
          onClick={prevSlide}
          className="absolute left-8 md:left-28 top-1/2 transform -translate-y-1/2 bg-white/90 text-[#72383D] p-4 rounded-full hover:bg-[#72383D] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 z-20 shadow-lg"
        >
          ←
        </button>

        <div className="relative max-w-6xl w-full bg-white/95 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div
            className={`md:w-1/2 relative h-96 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
              className="rounded-l-xl transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
            />
          </div>
          <div
            className={`md:w-1/2 p-10 flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isVisible
                ? animateSlide
                  ? "animate-slide-in-right"
                  : "translate-x-0 opacity-100"
                : "translate-x-[100%] opacity-0"
            }`}
          >
            <div>
              <h2
                className={`text-4xl font-bold font-playfair text-[#0e1732] mb-4 tracking-tight ${
                  animateSlide ? "animate-text-in" : ""
                }`}
              >
                {attractions[currentSlide].title}
              </h2>
              <p
                className={`text-gray-700 mb-6 text-lg font-inter leading-relaxed ${
                  animateSlide ? "animate-text-in delay-100" : ""
                }`}
              >
                {attractions[currentSlide].description}
              </p>
              <h3
                className={`text-xl font-semibold font-playfair text-gray-900 mb-3 ${
                  animateSlide ? "animate-text-in delay-200" : ""
                }`}
              >
                Highlights
              </h3>
              <ul
                className={`list-disc list-inside text-gray-600 text-base font-inter ${
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

        <button
          onClick={nextSlide}
          className="absolute right-8 md:right-28 top-1/2 transform -translate-y-1/2 bg-white/90 text-[#0e1732] p-4 rounded-full hover:bg-[#0e1732] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 z-20 shadow-lg"
        >
          →
        </button>

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

        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500&display=swap");

          .font-playfair {
            font-family: "Playfair Display", serif;
          }
          .font-inter {
            font-family: "Inter", sans-serif;
          }
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
          @keyframes dot-pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.25);
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-slide-in-left {
            animation: slide-in-left 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .animate-slide-in-right {
            animation: slide-in-right 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .animate-text-in {
            animation: text-in 0.8s cubic-bezier(0.4, 0, 0.2, 1);
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
          @media (prefers-reduced-motion: reduce) {
            .animate-slide-in-left,
            .animate-slide-in-right,
            .animate-text-in {
              animation: none;
              transform: translateX(0) translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
