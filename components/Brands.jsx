import React from "react";

export default function Heropage() {
  return (
    <div className="min-h-screen  ">

<h1 className="text-center text-5xl sm:text-6xl font-medium text-[#3e2d3b] leading-tight">
  Typeform helps you<br className="hidden sm:block" /> understand customers
</h1>

      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-10 lg:px-28 py-10 gap-10">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-16">
          <h1 className="text-4xl font-bold text-[#111827] leading-tight mb-6">
            Get to know your customers with forms worth filling out
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#6b7280] mb-8 leading-relaxed">
            Collect all the data you need to{" "}
            <span className="font-semibold text-[#6b7280]">
              understand customers
            </span>{" "}
            with forms designed to be refreshingly different.
          </p>
          <button className="bg-[#f97316] hover:bg-[#fb923c] text-white font-medium px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Sign up
          </button>
        </div>

        {/* Right side - Video Section */}
        <div className="w-full lg:w-1/2 relative aspect-video  flex items-center justify-center overflow-hidden border border-gray-200 rounded-xl shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-10 lg:px-28 py-10 gap-10">
        {/* Left side - Video Section */}
        <div className="w-full lg:w-1/2 relative aspect-video  flex items-center justify-center overflow-hidden border border-gray-200 rounded-xl shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-16">
          <h1 className="text-4xl font-bold text-[#111827] leading-tight mb-6">
            Get to know your customers with forms worth filling out
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-[#6b7280] mb-8 leading-relaxed">
            Collect all the data you need to{" "}
            <span className="font-semibold text-[#6b7280]">
              understand customers
            </span>{" "}
            with forms designed to be refreshingly different.
          </p>

          <button className="bg-[#f97316] hover:bg-[#fb923c] text-white font-medium px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
