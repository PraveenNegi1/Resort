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

  // IntersectionObserver to trigger animation on viewport entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of component is visible
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

  // Trigger slide animation on slide change
  useEffect(() => {
    setAnimateSlide(true);
    const timer = setTimeout(() => setAnimateSlide(false), 700); // Match animation duration
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

  return (
    <div
      ref={componentRef}
      className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-serif"
    >
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Local Attractions
      </h1>
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div
          className={`md:w-1/2 p-8 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? animateSlide
                ? "animate-slide-in-left"
                : "translate-x-0"
              : "translate-x-[-100%] opacity-0"
          }`}
        >
          <h2 className="text-2xl font-semibold text-teal-700 mb-2">
            {attractions[currentSlide].title}
          </h2>
          <p className="text-gray-700 mb-4 md:text-[18px]">
            {attractions[currentSlide].description}
          </p>
          <p className="text-gray-700 mb-4 md:text-[18px]">
            Discover the best spots in our city! From serene parks to historical
            landmarks, there's something for everyone. Visit these attractions
            to experience the vibrant culture, stunning landscapes, and unique
            history of our local area. Whether you're a local or a visitor,
            these destinations offer unforgettable experiences for all ages.
          </p>
          <h3 className="text-xl font-semibold text-teal-700 mb-2">
            Highlights
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-4 text-[16px]">
            {attractions[currentSlide].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4 md:text-[18px]">
            Plan your visit today and immerse yourself in the charm of our city.
            Check out seasonal events or guided tours for an enhanced
            experience!
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Plan Your Visit
          </a>
        </div>
        <div
          className={`md:w-1/2 relative transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isVisible
              ? animateSlide
                ? "animate-slide-in-right"
                : "translate-x-0"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <div className="relative h-80 md:h-full">
            <Image
              src={attractions[currentSlide].image}
              alt={attractions[currentSlide].title}
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-700 transition"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-700 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
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
        .animate-slide-in-left {
          animation: slide-in-left 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
