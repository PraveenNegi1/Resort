"use client";
import Image from "next/image";
import React from "react";

export default function TestimonialSection() {
  return (
    <div className="px-28">
      <section className="bg-pink-50 relative overflow-hidden p-28 rounded-[60px] flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Top Coral Shape */}
        <div className="absolute top-0 right-24  w-[400px] h-auto z-0">
          <Image
            src="/topink.png" 
            alt="Top Coral Shape"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Bottom Coral Shape */}
        <div className="absolute bottom-0 right-32  w-[400px] h-auto z-0 rotate-180">
          <Image
            src="/topink.png"
            alt="Bottom Coral Shape"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 relative z-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              “We need to know that we're building the right things for real
              problems.”
            </h2>
            <p className="text-lg text-gray-600">
              Chase Clark, Senior UX Researcher at Calm, explains why they
              switched to Typeform.
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition">
              Read on
            </button>
          </div>

          {/* Right Logos */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <div className="w-40 h-40 bg-white rounded-[40px] shadow-md flex items-center justify-center">
                <Image
                  src="/clam.png"
                  alt="Calm Logo"
                  width={60}
                  height={60}
                />
              </div>
              <div className="w-40 h-40 bg-white rounded-[40px] shadow-md flex items-center justify-center">
                <Image
                  src="/clam.png"
                  alt="Typeform Logo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
